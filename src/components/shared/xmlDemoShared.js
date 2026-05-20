/** Утилиты для демо XSD / XSLT (упрощённая проверка и преобразование в браузере). */

export const CATALOG_XSD = `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="catalog">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="book" maxOccurs="unbounded">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="title" type="xs:string"/>
              <xs:element name="author" type="xs:string"/>
            </xs:sequence>
            <xs:attribute name="id" type="xs:string" use="required"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>`;

export const CATALOG_XML_VALID = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="101">
    <title>Основы XML</title>
    <author>Иван Петров</author>
  </book>
  <book id="102">
    <title>Современные форматы данных</title>
    <author>Анна Смирнова</author>
  </book>
</catalog>`;

export const CATALOG_XML_NO_ID = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book>
    <title>Основы XML</title>
    <author>Иван Петров</author>
  </book>
</catalog>`;

export const CATALOG_XML_WRONG_ROOT = `<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="1">
    <title>Война и мир</title>
    <author>Лев Толстой</author>
  </book>
</library>`;

export const CATALOG_XML_MALFORMED = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="101">
    <title>Основы XML</title>
    <author>Иван Петров
  </book>
</catalog>`;

export const LIBRARY_XML = `<?xml version="1.0" encoding="UTF-8"?>
<library>
  <book id="1">
    <title>Война и мир</title>
    <author>Лев Толстой</author>
  </book>
  <book id="2">
    <title>Мастер и Маргарита</title>
    <author>Михаил Булгаков</author>
  </book>
</library>`;

export const LIBRARY_XSLT = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h1>Список книг</h1>
        <ul>
          <xsl:for-each select="library/book">
            <li>
              <xsl:value-of select="title"/> (<xsl:value-of select="author"/>)
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

export function parseXml(xmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlString, 'application/xml');
  const parseError = doc.querySelector('parsererror');
  if (parseError) {
    const text = parseError.textContent?.trim() || 'Некорректный XML';
    return {doc: null, error: text.replace(/\s+/g, ' ')};
  }
  return {doc, error: null};
}

/**
 * Упрощённая валидация по схеме catalog (как в статье).
 * В реальных системах используется XSD-процессор (libxml, Saxon и т.д.).
 */
export function validateCatalogXsd(doc) {
  const issues = [];
  const root = doc.documentElement;

  if (!root) {
    issues.push({rule: 'well-formed', ok: false, message: 'Документ пуст или не содержит корневого элемента.'});
    return {valid: false, issues};
  }

  const rootOk = root.localName === 'catalog';
  issues.push({
    rule: 'xs:element name="catalog"',
    ok: rootOk,
    message: rootOk
      ? 'Корневой элемент — catalog.'
      : `Ожидался <catalog>, получен <${root.localName}>.`,
  });

  const books = [...root.children].filter((n) => n.nodeType === Node.ELEMENT_NODE);
  const nonBook = books.find((el) => el.localName !== 'book');
  if (nonBook) {
    issues.push({
      rule: 'xs:element name="book"',
      ok: false,
      message: `Недопустимый дочерний элемент <${nonBook.localName}> внутри catalog.`,
    });
  } else if (books.length === 0) {
    issues.push({
      rule: 'xs:element name="book"',
      ok: false,
      message: 'В catalog должен быть хотя бы один элемент book.',
    });
  } else {
    issues.push({
      rule: 'xs:element name="book"',
      ok: true,
      message: `Найдено записей book: ${books.length}.`,
    });
  }

  books.forEach((book, index) => {
    const label = `book[${index + 1}]`;
    const id = book.getAttribute('id');
    const idOk = id != null && id.trim() !== '';
    issues.push({
      rule: 'xs:attribute name="id" use="required"',
      ok: idOk,
      message: idOk ? `${label}: атрибут id="${id}".` : `${label}: отсутствует обязательный атрибут id.`,
    });

    const children = [...book.children].filter((n) => n.nodeType === Node.ELEMENT_NODE);
    const title = children.find((el) => el.localName === 'title');
    const author = children.find((el) => el.localName === 'author');
    const extra = children.find((el) => el.localName !== 'title' && el.localName !== 'author');

    issues.push({
      rule: 'xs:element name="title"',
      ok: Boolean(title),
      message: title
        ? `${label}: элемент <title> присутствует.`
        : `${label}: отсутствует обязательный элемент <title>.`,
    });
    issues.push({
      rule: 'xs:element name="author"',
      ok: Boolean(author),
      message: author
        ? `${label}: элемент <author> присутствует.`
        : `${label}: отсутствует обязательный элемент <author>.`,
    });
    if (extra) {
      issues.push({
        rule: 'xs:sequence',
        ok: false,
        message: `${label}: недопустимый элемент <${extra.localName}> — схема допускает только title и author.`,
      });
    }
  });

  const valid = issues.every((i) => i.ok);
  return {valid, issues};
}

/** Преобразование library → HTML по шаблону из статьи (аналог XSLT 1.0). */
export function transformLibraryToHtml(doc) {
  const root = doc.documentElement;
  if (!root || root.localName !== 'library') {
    throw new Error('Ожидается корневой элемент <library>.');
  }

  const books = [...root.querySelectorAll(':scope > book')];
  const items = books
    .map((book) => {
      const title = book.querySelector(':scope > title')?.textContent?.trim() ?? '';
      const author = book.querySelector(':scope > author')?.textContent?.trim() ?? '';
      return `<li>${escapeHtml(title)} (${escapeHtml(author)})</li>`;
    })
    .join('\n      ');

  return `<html>
  <body>
    <h1>Список книг</h1>
    <ul>
      ${items}
    </ul>
  </body>
</html>`;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
