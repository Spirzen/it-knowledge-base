/**
 * Экспорт статьи в PDF через html2canvas + jsPDF.
 * Стили принудительно "печатные" — иначе html2canvas даёт пустые страницы
 * (opacity, тёмная тема, border-image, градиентный текст).
 */

const PDF_ROOT_CLASS = 'article-pdf-export-root';
const PDF_SNAPSHOT_CLASS = 'pdf-export-snapshot';
const PDF_BUSY_CLASS = 'pdf-export-busy';
const PDF_EXPORT_WIDTH_PX = 794;

const REMOVE_SELECTORS = [
  '.article-pdf-toolbar',
  '.theme-edit-this-page',
  '.pagination-nav',
  '.theme-doc-footer',
  '.theme-last-updated',
  '.theme-doc-toc-mobile',
  'button',
  'input',
  'select',
  'textarea',
  '.it-demo',
  '[data-pdf-exclude]',
];

const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'SVG']);

function sanitizeFilename(title) {
  return (
    String(title || 'article')
      .replace(/[<>:"/\\|?*\u0000-\u001F]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .slice(0, 120) || 'article'
  );
}

function findArticleRoot() {
  return (
    document.querySelector('.theme-doc-markdown') ??
    document.querySelector('.docItemContainer .markdown') ??
    document.querySelector('.markdown') ??
    null
  );
}

function prepareClone(source) {
  const clone = source.cloneNode(true);

  REMOVE_SELECTORS.forEach((selector) => {
    clone.querySelectorAll(selector).forEach((el) => {
      if (el.classList?.contains('it-demo')) {
        const note = document.createElement('p');
        note.className = 'pdf-export-demo-placeholder';
        note.textContent =
          '[Интерактивный элемент доступен в онлайн-версии статьи]';
        el.replaceWith(note);
      } else {
        el.remove();
      }
    });
  });

  clone.querySelectorAll('a[href^="#"]').forEach((link) => {
    const text = link.textContent?.trim();
    if (text) {
      const span = document.createElement('span');
      span.textContent = text;
      link.replaceWith(span);
    }
  });

  clone.querySelectorAll('details').forEach((d) => d.setAttribute('open', ''));
  clone.querySelectorAll('[hidden]').forEach((el) => el.removeAttribute('hidden'));

  return clone;
}

/** Сброс декоративных стилей сайта — только для снимка PDF. */
function applyPdfSafeStyles(root) {
  root.classList.add(PDF_SNAPSHOT_CLASS);

  root.style.setProperty('opacity', '1', 'important');
  root.style.setProperty('visibility', 'visible', 'important');
  root.style.setProperty('background', '#ffffff', 'important');
  root.style.setProperty('color', '#1a1a1a', 'important');
  root.style.setProperty('width', `${PDF_EXPORT_WIDTH_PX}px`, 'important');
  root.style.setProperty('max-width', `${PDF_EXPORT_WIDTH_PX}px`, 'important');

  const all = root.querySelectorAll('*');
  all.forEach((el) => {
    if (SKIP_TAGS.has(el.tagName)) {
      return;
    }

    const tag = el.tagName;
    const s = el.style;

    s.setProperty('opacity', '1', 'important');
    s.setProperty('visibility', 'visible', 'important');
    s.setProperty('-webkit-text-fill-color', '#1a1a1a', 'important');
    s.setProperty('color', '#1a1a1a', 'important');
    s.setProperty('border-image', 'none', 'important');
    s.setProperty('box-shadow', 'none', 'important');
    s.setProperty('text-shadow', 'none', 'important');
    s.setProperty('filter', 'none', 'important');
    s.setProperty('mix-blend-mode', 'normal', 'important');

    if (tag === 'H1') {
      s.setProperty('display', 'block', 'important');
      s.setProperty('font-size', '22px', 'important');
      s.setProperty('font-weight', '600', 'important');
      s.setProperty('padding', '14px 18px', 'important');
      s.setProperty('margin', '0 0 8px', 'important');
      s.setProperty('border', '1px solid #c5b8f5', 'important');
      s.setProperty('border-radius', '10px', 'important');
      s.setProperty('background', '#f5f3ff', 'important');
    } else if (tag === 'H2') {
      s.setProperty('display', 'block', 'important');
      s.setProperty('font-size', '16px', 'important');
      s.setProperty('font-weight', '600', 'important');
      s.setProperty('padding', '8px 12px 6px', 'important');
      s.setProperty('margin', '0 0 8px', 'important');
      s.setProperty('border-left', '3px solid #7b68ee', 'important');
      s.setProperty('border-bottom', '1px solid #d8dce3', 'important');
      s.setProperty('background', '#f8f9fc', 'important');
    } else if (tag === 'H3' || tag === 'H4') {
      s.setProperty('display', 'block', 'important');
      s.setProperty('font-size', tag === 'H3' ? '14px' : '13px', 'important');
      s.setProperty('font-weight', '600', 'important');
      s.setProperty('padding', '4px 0 4px 10px', 'important');
      s.setProperty('margin', '10px 0 6px', 'important');
      s.setProperty('border-left', tag === 'H3' ? '2px solid #b19cd9' : 'none', 'important');
      s.setProperty('border-bottom', '1px solid #e8eaf0', 'important');
      s.setProperty('background', 'transparent', 'important');
    } else if (tag === 'DIV' && el.classList?.contains('doc-section')) {
      s.setProperty('border', '1px solid #e2e6ef', 'important');
      s.setProperty('border-radius', '8px', 'important');
      s.setProperty('padding', '0 12px 12px', 'important');
      s.setProperty('margin', '14px 0', 'important');
      s.setProperty('background', '#fafbfc', 'important');
    } else if (tag === 'PRE') {
      s.setProperty('display', 'block', 'important');
      s.setProperty('background', '#1a1b26', 'important');
      s.setProperty('color', '#c8d3f5', 'important');
      s.setProperty('padding', '12px', 'important');
      s.setProperty('border', '1px solid #2f334d', 'important');
      s.setProperty('border-radius', '8px', 'important');
      s.setProperty('white-space', 'pre-wrap', 'important');
      s.setProperty('word-break', 'break-word', 'important');
    } else if (tag === 'CODE') {
      s.setProperty('background', '#f0f0ff', 'important');
      s.setProperty('color', '#4b3a8a', 'important');
    } else if (tag === 'A') {
      s.setProperty('color', '#5b4acb', 'important');
    } else if (tag === 'TABLE') {
      s.setProperty('border-collapse', 'collapse', 'important');
      s.setProperty('width', '100%', 'important');
    } else if (tag === 'TD' || tag === 'TH') {
      s.setProperty('border', '1px solid #ddd', 'important');
      s.setProperty('padding', '6px 8px', 'important');
    } else if (tag === 'IMG') {
      s.setProperty('max-width', '100%', 'important');
      s.setProperty('height', 'auto', 'important');
    } else if (tag === 'P' || tag === 'LI' || tag === 'SPAN') {
      s.setProperty('color', '#1a1a1a', 'important');
    }
  });
}

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(resolve, 200);
      });
    });
  });
}

function waitForImages(root) {
  const images = Array.from(root.querySelectorAll('img'));
  return Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          img.addEventListener('load', resolve, {once: true});
          img.addEventListener('error', resolve, {once: true});
        }),
    ),
  );
}

function buildExportContainer({title, permalink, content}) {
  document.querySelector(`.${PDF_ROOT_CLASS}`)?.remove();

  const wrapper = document.createElement('div');
  wrapper.className = PDF_ROOT_CLASS;

  const header = document.createElement('header');
  header.className = 'pdf-export-header';

  const titleEl = document.createElement('h1');
  titleEl.className = 'pdf-export-title';
  titleEl.textContent = title;

  const metaEl = document.createElement('p');
  metaEl.className = 'pdf-export-meta';
  metaEl.textContent = permalink;

  header.append(titleEl, metaEl);

  const body = document.createElement('div');
  body.className = 'pdf-export-body';
  body.appendChild(content);

  wrapper.append(header, body);
  document.body.appendChild(wrapper);

  applyPdfSafeStyles(wrapper);

  return wrapper;
}

function assertHasContent(root) {
  const text = (root.innerText || '').replace(/\s+/g, ' ').trim();
  if (text.length < 20) {
    throw new Error('Контент статьи пуст или не удалось его прочитать.');
  }
}

function isCanvasMostlyBlank(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return true;
  }
  const sample = ctx.getImageData(0, 0, Math.min(80, canvas.width), Math.min(80, canvas.height));
  let white = 0;
  for (let i = 0; i < sample.data.length; i += 4) {
    const r = sample.data[i];
    const g = sample.data[i + 1];
    const b = sample.data[i + 2];
    if (r > 250 && g > 250 && b > 250) {
      white += 1;
    }
  }
  return white / (sample.data.length / 4) > 0.98;
}

/**
 * Разбивка длинного canvas на страницы A4.
 */
async function canvasToPdf(canvas, filename) {
  if (!jspdfConstructor) {
    const {jsPDF} = await import('jspdf');
    jspdfConstructor = jsPDF;
  }

  const pdf = new jspdfConstructor('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 8;
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;

  const imgWidth = contentWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  const imgData = canvas.toDataURL('image/jpeg', 0.92);

  let heightLeft = imgHeight;
  let position = margin;

  pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
  heightLeft -= contentHeight;

  while (heightLeft > 0) {
    pdf.addPage();
    position = margin - (imgHeight - heightLeft);
    pdf.addImage(imgData, 'JPEG', margin, position, imgWidth, imgHeight);
    heightLeft -= contentHeight;
  }

  pdf.save(filename);
}

let jspdfConstructor;

async function captureToCanvas(element) {
  const html2canvas = (await import('html2canvas')).default;

  return html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: '#ffffff',
    scrollX: 0,
    scrollY: 0,
    width: element.scrollWidth,
    height: element.scrollHeight,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
    onclone: (_doc, clonedEl) => {
      applyPdfSafeStyles(clonedEl);
    },
  });
}

/**
 * @param {{ title: string, permalink?: string, filename?: string }} options
 */
export async function exportArticleToPdf({title, permalink, filename}) {
  const source = findArticleRoot();
  if (!source) {
    throw new Error('Не удалось найти содержимое статьи на странице.');
  }

  const content = prepareClone(source);
  const pageUrl = permalink || window.location.href;
  const wrapper = buildExportContainer({title, permalink: pageUrl, content});

  document.body.classList.add(PDF_BUSY_CLASS);

  try {
    await waitForPaint();
    await waitForImages(wrapper);
    assertHasContent(wrapper);

    const canvas = await captureToCanvas(wrapper);

    if (isCanvasMostlyBlank(canvas)) {
      throw new Error('Снимок страницы пустой (стили не применились).');
    }

    const pdfName = `${sanitizeFilename(filename || title)}.pdf`;
    await canvasToPdf(canvas, pdfName);
  } finally {
    document.body.classList.remove(PDF_BUSY_CLASS);
    wrapper.remove();
  }
}

export function printArticleAsPdf() {
  window.print();
}
