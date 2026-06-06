"use strict";(self.webpackChunkit_knowledge_base=self.webpackChunkit_knowledge_base||[]).push([["77950"],{688943(e,t,n){n.r(t),n.d(t,{default:()=>v});var i=n(474848),l=n(296540),r=n(509526),a=n(634164),s=n(749459),o=n(419481),d=n(69217),c=n(894488);let m="winBtn_iIOZ",u="presetBtn_wtnq",p="actionBtn_OCqG",b="mobileTab_I5JE",h="mobileTabActive_mYCJ",f="panel_Nitt",g="panelHidden_DiFk",x="panelHead_nswi",y="panelMeta_Ws6y";function w(){let[e,t]=(0,l.useState)(c.Ey),[n,r]=(0,l.useState)("default"),[o,w]=(0,l.useState)("idle"),[v,j]=(0,l.useState)(null),[_,k]=(0,l.useState)(!1),[E,N]=(0,l.useState)("editor"),[C,T]=(0,l.useState)(!1),[A,L]=(0,l.useState)(.5),[S,B]=(0,l.useState)(!1),D=(0,l.useRef)(null),O=(0,l.useRef)(null),M=(0,l.useRef)(null),U=(0,l.useRef)(null),z=(0,l.useRef)(null),{copy:F,isCopied:I}=(0,d.A)(),P=(0,c.lt)(e),R=(0,l.useCallback)(()=>{let t=D.current;if(t)try{let n=t.contentDocument||t.contentWindow?.document;if(!n)return;n.open(),n.write((0,c.Uz)(e)),n.close(),j(null),w("live")}catch(e){j(e?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"),w("idle")}},[e]);(0,l.useEffect)(()=>{let e=()=>k(window.innerWidth<=768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,l.useEffect)(()=>(w("pending"),window.clearTimeout(z.current),z.current=window.setTimeout(R,450),()=>window.clearTimeout(z.current)),[e,R]),(0,l.useEffect)(()=>{let e=e=>{e.data?.type===c.JI&&j(e.data.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0441\u043A\u0440\u0438\u043F\u0442\u0435")};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),(0,l.useEffect)(()=>{if(!S)return;let e=e=>{let t=O.current;if(!t)return;let n=t.getBoundingClientRect();L(Math.min(.75,Math.max(.25,(e.clientX-n.left)/n.width)))},t=()=>B(!1);return window.addEventListener("pointermove",e),window.addEventListener("pointerup",t),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",t)}},[S]),(0,l.useEffect)(()=>{if(!C)return;let e=e=>{"Escape"===e.key&&T(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[C]);let H=e=>{r(e.id),t(e.code),j(null),_&&N("preview")},Y=!_||"editor"===E,q=!_||"preview"===E,J=_?void 0:{flex:`0 0 ${100*A}%`},G=_?void 0:{flex:"1 1 0"};return(0,i.jsx)(s.Ay,{fullscreenable:!1,children:(0,i.jsxs)("div",{className:(0,a.A)("shell_uRwQ",C&&"shellFullscreen_eoit"),role:"region","aria-label":"HTML/CSS/JS \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430",children:[(0,i.jsxs)("div",{className:"header_C1IC",children:[(0,i.jsxs)("div",{className:"buttons_zNgz",children:[(0,i.jsx)("button",{type:"button",className:(0,a.A)(m,"winBtnRed_LZwB"),title:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434","aria-label":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434",onClick:()=>H(c.fG["0"])}),(0,i.jsx)("button",{type:"button",className:(0,a.A)(m,"winBtnYellow_PoXy"),title:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (Ctrl+Enter)","aria-label":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",onClick:R}),(0,i.jsx)("button",{type:"button",className:(0,a.A)(m,"winBtnGreen_OT4w"),title:"\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440","aria-label":"\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440",onClick:()=>M.current?.focus()})]}),(0,i.jsx)("div",{className:"title_qjvM",children:"index.html \u2014 HTML \xb7 CSS \xb7 JavaScript"}),(0,i.jsxs)("div",{className:"status_ZBkO",children:[(0,i.jsx)("span",{className:(0,a.A)("statusDot_xALY","live"===o&&"statusDotLive_exjA","pending"===o&&"statusDotPending_H2do"),"aria-hidden":!0}),(0,i.jsx)("span",{children:"pending"===o?"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u2026":"live"===o?"live":"\u0433\u043E\u0442\u043E\u0432"})]})]}),(0,i.jsxs)("div",{className:"toolbar_TLlC",children:[(0,i.jsxs)("div",{className:"presets_hmMp",children:[c.fG.map(e=>(0,i.jsxs)("button",{type:"button",className:(0,a.A)(u,n===e.id&&"presetBtnActive_u6oQ"),onClick:()=>H(e),children:[e.icon," ",e.label]},e.id)),"custom"===n&&(0,i.jsx)("span",{className:u,style:{cursor:"default",opacity:.85},children:"\u270F\uFE0F \u0421\u0432\u043E\u0439 \u043A\u043E\u0434"})]}),(0,i.jsxs)("div",{className:"actions__z8E",children:[(0,i.jsx)("button",{type:"button",className:(0,a.A)(p,"actionBtnPrimary_w979"),onClick:R,children:"\u25B6 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"}),(0,i.jsx)("button",{type:"button",className:p,onClick:()=>F(e,"code"),children:I("code")?"\u2713 \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}),(0,i.jsx)("button",{type:"button",className:p,onClick:()=>(0,c.ZU)(e),children:"\u2197 \u0412\u043A\u043B\u0430\u0434\u043A\u0430"}),(0,i.jsx)("button",{type:"button",className:p,onClick:()=>T(e=>!e),children:C?"\u22A1 \u041E\u043A\u043D\u043E":"\u26F6 \u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"})]})]}),_&&(0,i.jsxs)("div",{className:"mobileTabs_cqOz",role:"tablist",children:[(0,i.jsx)("button",{type:"button",role:"tab","aria-selected":"editor"===E,className:(0,a.A)(b,"editor"===E&&h),onClick:()=>N("editor"),children:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440"}),(0,i.jsx)("button",{type:"button",role:"tab","aria-selected":"preview"===E,className:(0,a.A)(b,"preview"===E&&h),onClick:()=>N("preview"),children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"})]}),(0,i.jsxs)("div",{ref:O,className:(0,a.A)("workspace_sMBf",_&&"workspaceMobile_eO5b"),children:[(0,i.jsxs)("div",{className:(0,a.A)(f,"panelEditor_lr7X",!Y&&g),style:J,children:[(0,i.jsxs)("div",{className:(0,a.A)(x,"panelHeadEditor_mm_s"),children:[(0,i.jsx)("span",{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440"}),(0,i.jsxs)("span",{className:y,children:[P," \u0441\u0442\u0440\u043E\u043A"]})]}),(0,i.jsxs)("div",{className:"editorWrap_qCZ9",children:[(0,i.jsx)("div",{ref:U,className:"lineNumbers_n8UO","aria-hidden":!0,children:Array.from({length:P},(e,t)=>(0,i.jsx)("span",{className:"lineNum_wack",children:t+1},t))}),(0,i.jsx)("textarea",{ref:M,className:"textarea_sMxR",value:e,onChange:e=>{t(e.target.value),"custom"!==n&&r("custom")},onScroll:e=>{U.current&&(U.current.scrollTop=e.target.scrollTop)},onKeyDown:i=>{if("Tab"===i.key){i.preventDefault();let l=i.target,a=l.selectionStart,s=l.selectionEnd;t(`${e.slice(0,a)}  ${e.slice(s)}`),"custom"!==n&&r("custom"),requestAnimationFrame(()=>{l.selectionStart=l.selectionEnd=a+2});return}(i.ctrlKey||i.metaKey)&&"Enter"===i.key&&(i.preventDefault(),window.clearTimeout(z.current),R())},spellCheck:!1,"aria-label":"HTML, CSS \u0438 JavaScript",placeholder:"<!DOCTYPE html>\u2026"})]})]}),!_&&(0,i.jsx)("div",{className:(0,a.A)("resizer_AKoA",S&&"resizerActive_Y1Qf"),role:"separator","aria-orientation":"vertical","aria-label":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",onPointerDown:e=>{e.preventDefault(),B(!0)}}),(0,i.jsxs)("div",{className:(0,a.A)(f,"panelPreview_Ux70",!q&&g),style:G,children:[(0,i.jsxs)("div",{className:(0,a.A)(x,"panelHeadPreview_yQjk"),children:[(0,i.jsx)("span",{children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"}),(0,i.jsx)("span",{className:y,children:"sandbox"})]}),(0,i.jsx)("iframe",{ref:D,title:"HTML preview",className:"previewFrame_mEfm",sandbox:"allow-scripts allow-same-origin allow-modals allow-popups"})]})]}),v&&(0,i.jsxs)("div",{className:"errorBar_GbJl",role:"alert",children:[(0,i.jsxs)("span",{children:["\u26A0 ",v]}),(0,i.jsx)("button",{type:"button",className:"errorDismiss_GzYB","aria-label":"\u0421\u043A\u0440\u044B\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443",onClick:()=>j(null),children:"\xd7"})]}),(0,i.jsx)("p",{className:"hint_duS9",children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \xb7 Tab \u2014 \u043E\u0442\u0441\u0442\u0443\u043F \xb7 Ctrl+Enter \u2014 \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \xb7 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043C\u0435\u0436\u0434\u0443 \u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438"})]})})}function v(){return(0,i.jsx)(r.A,{fallback:(0,o.q)("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 HTML-\u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u044B\u2026"),children:()=>(0,i.jsx)(w,{})})}},749459(e,t,n){n.d(t,{OU:()=>d,Ay:()=>o});var i=n(474848),l=n(296540),r=n(634164);function a(){let[e,t]=(0,l.useState)(!1);(0,l.useEffect)(()=>{if(!e)return;let n=document.body.style.overflow;document.body.style.overflow="hidden";let i=e=>{"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",i),()=>{document.body.style.overflow=n,window.removeEventListener("keydown",i)}},[e]);let n=(0,l.useCallback)(()=>{t(e=>!e)},[]);return{isFullscreen:e,setIsFullscreen:t,toggleFullscreen:n,fullscreenClass:e?"it-demo--fullscreen":void 0}}function s({isFullscreen:e,onToggle:t,className:n}){return(0,i.jsx)("button",{type:"button",className:(0,r.A)("it-demo__fullscreen-btn",n),onClick:t,title:e?"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 (Esc)":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043E \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D","aria-pressed":e,children:e?"\u22A1 \u041E\u043A\u043D\u043E":"\u26F6"})}function o({children:e,className:t,as:n="div",fullscreenable:l=!0}){let{isFullscreen:d,toggleFullscreen:c,fullscreenClass:m}=a();return(0,i.jsxs)(n,{className:(0,r.A)("it-demo",m,t),children:[l&&(0,i.jsx)(s,{isFullscreen:d,onToggle:c,className:"it-demo__fullscreen-btn--shell"}),e]})}function d({children:e,className:t,title:n,subtitle:l,fullscreenable:o=!1}){let{isFullscreen:c,toggleFullscreen:m,fullscreenClass:u}=a(),p=n||l||o;return(0,i.jsxs)("div",{className:(0,r.A)("it-demo__card",u,t),children:[p&&(0,i.jsxs)("div",{className:"it-demo__header",children:[(0,i.jsxs)("div",{className:"it-demo__header-text",children:[n&&(0,i.jsx)("h4",{className:"it-demo__title",children:n}),l&&(0,i.jsx)("p",{className:"it-demo__subtitle",children:l})]}),o&&(0,i.jsx)(s,{isFullscreen:c,onToggle:m})]}),(0,i.jsx)("div",{className:"it-demo__body",children:e})]})}},419481(e,t,n){n.d(t,{j:()=>r,q:()=>l});var i=n(474848);function l(e="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0434\u0435\u043C\u043E\u2026"){return(0,i.jsx)("div",{className:"it-demo it-demo--loading",children:e})}function r(){return(0,i.jsx)("div",{className:"it-demo",children:(0,i.jsx)("div",{className:"it-demo__skeleton","aria-hidden":"true"})})}n(296540)},894488(e,t,n){n.d(t,{Ey:()=>r,JI:()=>i,Uz:()=>s,ZU:()=>d,fG:()=>a,lt:()=>o});let i="it-html-playground-error",l=`<script>
(function () {
  function send(msg) {
    try {
      parent.postMessage({ type: '${i}', message: String(msg) }, '*');
    } catch (e) {}
  }
  window.addEventListener('error', function (e) {
    send((e.filename || 'script') + ': ' + (e.message || '\u{43E}\u{448}\u{438}\u{431}\u{43A}\u{430}'));
  });
  window.addEventListener('unhandledrejection', function (e) {
    send('Promise: ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
  });
})();
</script>`,r=`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>\u{41C}\u{43E}\u{439} \u{43F}\u{440}\u{438}\u{43C}\u{435}\u{440}</title>
  <style>
    :root {
      --accent: #7b68ee;
      --bg: #f4f4f9;
    }
    body {
      font-family: system-ui, sans-serif;
      padding: 1.25rem;
      background: var(--bg);
      margin: 0;
    }
    h1 { color: #1e1e2e; margin-top: 0; }
    .box {
      background: #fff;
      padding: 1rem 1.25rem;
      border-radius: 10px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.08);
      max-width: 28rem;
    }
    button {
      margin-top: 0.75rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      background: var(--accent);
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    button:hover { filter: brightness(1.08); }
  </style>
</head>
<body>
  <h1>\u{41F}\u{440}\u{438}\u{432}\u{435}\u{442}, \u{43C}\u{438}\u{440}!</h1>
  <div class="box">
    <p>\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{443}\u{439}\u{442}\u{435} \u{43A}\u{43E}\u{434} \u{441}\u{43B}\u{435}\u{432}\u{430} \u{2014} \u{43F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{43E}\u{431}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{430}\u{442}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}.</p>
    <button id="btn" type="button">\u{41D}\u{430}\u{436}\u{43C}\u{438} \u{43C}\u{435}\u{43D}\u{44F}</button>
  </div>
  <script>
    document.getElementById('btn').addEventListener('click', function () {
      this.textContent = '\u{423}\u{440}\u{430}! \u{1F389}';
      this.style.background = '#28c840';
    });
  </script>
</body>
</html>`,a=[{id:"default",label:"\u0421\u0442\u0430\u0440\u0442",icon:"\u{1F3E0}",code:r},{id:"form",label:"\u0424\u043E\u0440\u043C\u0430",icon:"\u{1F4DD}",code:`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>\u{424}\u{43E}\u{440}\u{43C}\u{430}</title>
  <style>
    body { font-family: system-ui; padding: 1.5rem; background: #f0f4ff; }
    form { max-width: 22rem; background: #fff; padding: 1.25rem; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
    label { display: block; margin-bottom: 0.35rem; font-size: 0.9rem; color: #444; }
    input { width: 100%; padding: 0.5rem; margin-bottom: 0.75rem; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }
    input:invalid { border-color: #e74c3c; }
    button { width: 100%; padding: 0.6rem; border: none; border-radius: 8px; background: #4361ee; color: #fff; font-weight: 600; cursor: pointer; }
    #msg { margin-top: 0.75rem; font-size: 0.85rem; color: #2d6a4f; }
  </style>
</head>
<body>
  <form id="f" novalidate>
    <label>Email <input type="email" required placeholder="you@mail.ru"></label>
    <label>\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C} <input type="password" minlength="4" required></label>
    <button type="submit">\u{412}\u{43E}\u{439}\u{442}\u{438}</button>
    <p id="msg"></p>
  </form>
  <script>
    document.getElementById('f').addEventListener('submit', function (e) {
      e.preventDefault();
      if (this.checkValidity()) {
        document.getElementById('msg').textContent = '\u{424}\u{43E}\u{440}\u{43C}\u{430} \u{432}\u{430}\u{43B}\u{438}\u{434}\u{43D}\u{430} \u{2713}';
      } else {
        document.getElementById('msg').textContent = '\u{417}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{438}\u{442}\u{435} \u{43F}\u{43E}\u{43B}\u{44F} \u{43A}\u{43E}\u{440}\u{440}\u{435}\u{43A}\u{442}\u{43D}\u{43E}';
      }
    });
  </script>
</body>
</html>`},{id:"flex",label:"Flexbox",icon:"\u{1F4D0}",code:`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Flex</title>
  <style>
    body { margin: 0; font-family: system-ui; background: #1e1e2e; color: #cdd6f4; min-height: 100vh; display: flex; flex-direction: column; }
    header { padding: 1rem; background: #313244; }
    .row { flex: 1; display: flex; gap: 0.5rem; padding: 0.5rem; }
    .col { flex: 1; background: #45475a; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 600; transition: flex 0.3s; }
    .col:hover { flex: 2; background: #7b68ee; }
    footer { padding: 0.75rem; text-align: center; font-size: 0.85rem; opacity: 0.7; }
  </style>
</head>
<body>
  <header><strong>Flex-\u{440}\u{430}\u{441}\u{43A}\u{43B}\u{430}\u{434}\u{43A}\u{430}</strong> \u{2014} \u{43D}\u{430}\u{432}\u{435}\u{434}\u{438}\u{442}\u{435} \u{43D}\u{430} \u{43A}\u{43E}\u{43B}\u{43E}\u{43D}\u{43A}\u{438}</header>
  <div class="row">
    <div class="col">A</div>
    <div class="col">B</div>
    <div class="col">C</div>
  </div>
  <footer>justify-content \xb7 align-items \xb7 flex-grow</footer>
</body>
</html>`},{id:"animation",label:"CSS",icon:"\u2728",code:`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>\u{410}\u{43D}\u{438}\u{43C}\u{430}\u{446}\u{438}\u{44F}</title>
  <style>
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: linear-gradient(135deg, #667eea, #764ba2); font-family: system-ui; }
  .card {
    width: 10rem; height: 10rem; border-radius: 1rem;
    background: #fff; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.12) rotate(6deg); }
  }
  p { color: #fff; margin-top: 1.5rem; text-align: center; }
  </style>
</head>
<body>
  <div>
    <div class="card"></div>
    <p>@keyframes + animation</p>
  </div>
</body>
</html>`},{id:"tailwind",label:"Tailwind",icon:"\u{1F3A8}",code:`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tailwind</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-dvh flex items-center justify-center bg-indigo-50 p-4">
  <article class="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
    <h1 class="text-xl font-semibold text-slate-900">Tailwind CSS</h1>
    <p class="mt-2 text-slate-600">\u{420}\u{435}\u{434}\u{430}\u{43A}\u{442}\u{438}\u{440}\u{443}\u{439}\u{442}\u{435} \u{43A}\u{43B}\u{430}\u{441}\u{441}\u{44B} \u{2014} \u{43F}\u{440}\u{435}\u{434}\u{43F}\u{440}\u{43E}\u{441}\u{43C}\u{43E}\u{442}\u{440} \u{43E}\u{431}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{441}\u{44F} \u{430}\u{432}\u{442}\u{43E}\u{43C}\u{430}\u{442}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{438}.</p>
    <button
      type="button"
      class="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white hover:bg-indigo-700 transition-colors"
    >
      \u{41D}\u{430}\u{447}\u{430}\u{442}\u{44C}
    </button>
  </article>
</body>
</html>`},{id:"dom",label:"DOM",icon:"\u{1F527}",code:`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>DOM</title>
  <style>
    body { font-family: system-ui; padding: 1.25rem; }
    ul { list-style: none; padding: 0; }
    li { padding: 0.5rem 0.75rem; margin: 0.35rem 0; background: #eee; border-radius: 6px; display: flex; justify-content: space-between; }
    li.done { text-decoration: line-through; opacity: 0.55; }
    input, button { padding: 0.45rem 0.65rem; border-radius: 6px; border: 1px solid #ccc; }
    button { background: #2d6a4f; color: #fff; border: none; cursor: pointer; margin-left: 0.35rem; }
  </style>
</head>
<body>
  <h2>\u{421}\u{43F}\u{438}\u{441}\u{43E}\u{43A} \u{437}\u{430}\u{434}\u{430}\u{447}</h2>
  <div>
    <input id="new" placeholder="\u{41D}\u{43E}\u{432}\u{430}\u{44F} \u{437}\u{430}\u{434}\u{430}\u{447}\u{430}\u{2026}">
    <button type="button" id="add">\u{414}\u{43E}\u{431}\u{430}\u{432}\u{438}\u{442}\u{44C}</button>
  </div>
  <ul id="list"></ul>
  <script>
    const list = document.getElementById('list');
    const add = () => {
      const text = document.getElementById('new').value.trim();
      if (!text) return;
      const li = document.createElement('li');
      li.innerHTML = '<span>' + text + '</span><button type="button">\u{2713}</button>';
      li.querySelector('button').onclick = () => li.classList.toggle('done');
      list.appendChild(li);
      document.getElementById('new').value = '';
    };
    document.getElementById('add').onclick = add;
    document.getElementById('new').addEventListener('keydown', e => { if (e.key === 'Enter') add(); });
    add();
    document.getElementById('new').value = '\u{418}\u{437}\u{443}\u{447}\u{438}\u{442}\u{44C} HTML';
    add();
  </script>
</body>
</html>`}];function s(e){return/<\/body>/i.test(e)?e.replace(/<\/body>/i,`${l}</body>`):/<\/html>/i.test(e)?e.replace(/<\/html>/i,`${l}</html>`):e+l}function o(e){return e?e.split("\n").length:1}function d(e){let t=new Blob([e],{type:"text/html"}),n=URL.createObjectURL(t),i=window.open(n,"_blank","noopener,noreferrer");return i&&window.setTimeout(()=>URL.revokeObjectURL(n),6e4),!!i}},69217(e,t,n){n.d(t,{A:()=>l});var i=n(296540);function l(e=2e3){let[t,n]=(0,i.useState)(null);return{copy:(0,i.useCallback)(async(t,i="default")=>{if(!t)return!1;try{return await navigator.clipboard.writeText(t),n(i),window.setTimeout(()=>n(e=>e===i?null:e),e),!0}catch{return!1}},[e]),copiedKey:t,isCopied:(e="default")=>t===e}}}}]);