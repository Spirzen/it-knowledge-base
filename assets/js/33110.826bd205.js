"use strict";(self.webpackChunkit_knowledge_base=self.webpackChunkit_knowledge_base||[]).push([["33110"],{680727(e,t,i){i.d(t,{A:()=>h});var s=i(474848),n=i(296540),a=i(509526),r=i(634164),l=i(749459),o=i(419481);class d{constructor({root:e,autoplayDelay:t=5e3,onSlideChange:i}={}){if(!e)throw Error("PromoCarousel: root element is required");if(this.root=e,this.track=e.querySelector("[data-carousel-track]"),this.slides=[...e.querySelectorAll("[data-carousel-slide]")],this.prevBtn=e.querySelector("[data-carousel-prev]"),this.nextBtn=e.querySelector("[data-carousel-next]"),this.indicatorsHost=e.querySelector("[data-carousel-indicators]"),this.currentIndex=0,this.slideCount=this.slides.length,this.autoplayDelay=t,this.autoplayInterval=null,this.onSlideChange=i,this.indicators=[],this._hoverPauseBound=!1,0===this.slideCount)return;this.init()}init(){this.createIndicators(),this.showSlide(this.currentIndex),this.startAutoplay(),this.bindControls(),this.bindHoverPause()}createIndicators(){if(this.indicatorsHost){this.indicatorsHost.innerHTML="",this.indicators=[];for(let e=0;e<this.slideCount;e++){let t=document.createElement("button");t.type="button",t.setAttribute("data-carousel-dot",""),t.setAttribute("aria-label",`\u{421}\u{43B}\u{430}\u{439}\u{434} ${e+1}`),0===e&&(t.dataset.active="true",t.setAttribute("aria-current","true")),t.addEventListener("click",()=>{this.goToSlide(e),this.resetAutoplay()}),this.indicatorsHost.appendChild(t),this.indicators.push(t)}}}bindControls(){this.prevBtn?.addEventListener("click",()=>{this.prev(),this.resetAutoplay()}),this.nextBtn?.addEventListener("click",()=>{this.next(),this.resetAutoplay()})}bindHoverPause(){this._hoverPauseBound||(this.root.addEventListener("mouseenter",()=>this.stopAutoplay()),this.root.addEventListener("mouseleave",()=>this.startAutoplay()),this.root.addEventListener("focusin",()=>this.stopAutoplay()),this.root.addEventListener("focusout",e=>{this.root.contains(e.relatedTarget)||this.startAutoplay()}),this._hoverPauseBound=!0)}showSlide(e){this.slides.forEach((t,i)=>{let s=i===e;t.dataset.active=s?"true":"false",t.setAttribute("aria-hidden",s?"false":"true")}),this.indicators.forEach((t,i)=>{let s=i===e;t.dataset.active=s?"true":"false",s?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")}),this.onSlideChange?.(e)}next(){this.currentIndex=(this.currentIndex+1)%this.slideCount,this.showSlide(this.currentIndex)}prev(){this.currentIndex=(this.currentIndex-1+this.slideCount)%this.slideCount,this.showSlide(this.currentIndex)}goToSlide(e){this.currentIndex=e,this.showSlide(this.currentIndex)}startAutoplay(){this.slideCount<=1||window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches||(this.stopAutoplay(),this.autoplayInterval=window.setInterval(()=>this.next(),this.autoplayDelay))}stopAutoplay(){this.autoplayInterval&&(window.clearInterval(this.autoplayInterval),this.autoplayInterval=null)}resetAutoplay(){this.stopAutoplay(),this.startAutoplay()}destroy(){this.stopAutoplay(),this.prevBtn?.replaceWith(this.prevBtn.cloneNode(!0)),this.nextBtn?.replaceWith(this.nextBtn.cloneNode(!0)),this.indicatorsHost&&(this.indicatorsHost.innerHTML=""),this.indicators=[]}}let c="navBtn_HKJv",u=[{title:"\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u043B\u0430\u0439\u0434",text:"\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u2014 \u0442\u0438\u043F\u0438\u0447\u043D\u0430\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u043C\u043E-\u0431\u043B\u043E\u043A\u0430.",gradient:"linear-gradient(135deg, #5b6ee1 0%, #7b4bb7 100%)",shapes:[{w:80,h:80,top:"12%",left:"68%",color:"#fff"},{w:48,h:48,top:"55%",left:"78%",color:"#ffe082"}]},{title:"\u0412\u0442\u043E\u0440\u043E\u0439 \u0441\u043B\u0430\u0439\u0434",text:"\u0422\u043E\u0442 \u0436\u0435 \u043A\u0430\u0440\u043A\u0430\u0441, \u0434\u0440\u0443\u0433\u043E\u0439 \u0444\u043E\u043D \u0438 \u0442\u0435\u043A\u0441\u0442. \u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u2014 \u0447\u0435\u0440\u0435\u0437 \u043A\u043B\u0430\u0441\u0441 is-active.",gradient:"linear-gradient(135deg, #0d9488 0%, #0369a1 100%)",shapes:[{w:64,h:64,top:"20%",left:"72%",color:"#a7f3d0"},{w:56,h:56,top:"48%",left:"62%",color:"#fff"}]},{title:"\u0422\u0440\u0435\u0442\u0438\u0439 \u0441\u043B\u0430\u0439\u0434",text:"\u0410\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u043E\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 \u0438 \u043F\u0440\u0438 prefers-reduced-motion.",gradient:"linear-gradient(135deg, #ea580c 0%, #be123c 100%)",shapes:[{w:72,h:72,top:"15%",left:"70%",color:"#fecdd3"},{w:40,h:40,top:"60%",left:"80%",color:"#fff"}]}];function m(){let e=(0,n.useRef)(null),t=(0,n.useRef)(null),[i,a]=(0,n.useState)(560),[o,m]=(0,n.useState)(0),[h,p]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>p(e.matches);return t(),e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),(0,n.useEffect)(()=>{let i,s=e.current;if(!s)return;i=u.map((e,t)=>`
  <article class="promoCarouselSlide_qAiE" data-carousel-slide data-active="${0===t?"true":"false"}" aria-hidden="${0===t?"false":"true"}">
    <div class="slideBg_mEWf" style="background:${e.gradient}"></div>
    ${e.shapes.map(e=>`<span class="floatShape_WUX5" style="width:${e.w}px;height:${e.h}px;top:${e.top};left:${e.left};background:${e.color}"></span>`).join("")}
    <div class="slideContent_k991">
      <h3 class="slideTitle_itL0">${e.title}</h3>
      <p class="slideText_BqoL">${e.text}</p>
      <button type="button" class="slideCta_ZvGJ">\u{41F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</button>
    </div>
  </article>`).join(""),s.innerHTML=`
<section class="promoCarousel_nMIN" data-promo-carousel role="region" aria-roledescription="carousel" aria-label="\u{41F}\u{440}\u{43E}\u{43C}\u{43E}-\u{431}\u{430}\u{43D}\u{43D}\u{435}\u{440}">
  <div class="promoCarouselTrack_TFz2" data-carousel-track>
    ${i}
  </div>
  <button type="button" class="${(0,r.A)(c,"navPrev_zXpS")}" data-carousel-prev aria-label="\u{41F}\u{440}\u{435}\u{434}\u{44B}\u{434}\u{443}\u{449}\u{438}\u{439} \u{441}\u{43B}\u{430}\u{439}\u{434}">\u{2039}</button>
  <button type="button" class="${(0,r.A)(c,"navNext_kMzf")}" data-carousel-next aria-label="\u{421}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{438}\u{439} \u{441}\u{43B}\u{430}\u{439}\u{434}">\u{203A}</button>
  <div class="dots__z4O" data-carousel-indicators></div>
</section>`;let n=s.querySelector("[data-promo-carousel]");if(n)return t.current=new d({root:n,autoplayDelay:5e3,onSlideChange:m}),()=>{t.current?.destroy(),t.current=null,s.innerHTML=""}},[i]),(0,s.jsx)(l.Ay,{className:"root_ch7S",children:(0,s.jsxs)(l.OU,{title:"\u041F\u0440\u043E\u043C\u043E-\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C",subtitle:"\u0421\u043C\u0435\u043D\u0430 \u0441\u043B\u0430\u0439\u0434\u043E\u0432, \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u2014 \u0440\u0430\u0437\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043D\u0430 \u0436\u0438\u0432\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435",children:[(0,s.jsxs)("div",{className:"controls_b2So",children:[(0,s.jsxs)("label",{className:"controlRow_Czww",children:[(0,s.jsxs)("span",{className:"it-demo__label",children:["\u0428\u0438\u0440\u0438\u043D\u0430 \u0431\u0430\u043D\u043D\u0435\u0440\u0430: ",i,"px"]}),(0,s.jsx)("input",{type:"range",min:280,max:680,step:20,value:i,onChange:e=>a(Number(e.target.value))})]}),(0,s.jsxs)("ul",{className:"hintList_GFEw",children:[(0,s.jsx)("li",{children:"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0441 max-width \u0438 margin: 0 auto \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u0438\u043D\u0443 \u0431\u0430\u043D\u043D\u0435\u0440\u0430 \u0438 \u0446\u0435\u043D\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u0435\u0433\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435."}),(0,s.jsx)("li",{children:"\u0421\u043B\u0430\u0439\u0434\u044B \u043B\u0435\u0436\u0430\u0442 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 (position: absolute). \u0412\u0438\u0434\u0435\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u0430\u0439\u0434 \u0441 \u043A\u043B\u0430\u0441\u0441\u043E\u043C is-active \u2014 \u0443 \u043D\u0435\u0433\u043E opacity: 1."}),(0,s.jsx)("li",{children:"\u0414\u0435\u043A\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u0444\u0438\u0433\u0443\u0440\u044B \u0430\u043D\u0438\u043C\u0438\u0440\u0443\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 @keyframes \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043E\u0442 \u0441\u043C\u0435\u043D\u044B \u0441\u043B\u0430\u0439\u0434\u043E\u0432 \u2014 \u0442\u0430\u043A \u043F\u0440\u043E\u0449\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043A\u043E\u0434."}),(0,s.jsx)("li",{children:'setInterval \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 next() \u043A\u0430\u0436\u0434\u044B\u0435 N \u043C\u0441. \u041F\u043E\u0441\u043B\u0435 \u043A\u043B\u0438\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0442\u0430\u0439\u043C\u0435\u0440 \u0441\u0431\u0440\u0430\u0441\u044B\u0432\u0430\u044E\u0442, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u0431\u044B\u043B\u043E "\u0434\u0432\u043E\u0439\u043D\u043E\u0433\u043E" \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F.'})]})]}),(0,s.jsx)("div",{className:"stage_zs6m",style:{maxWidth:`${i}px`},children:(0,s.jsx)("div",{ref:e})}),(0,s.jsxs)("p",{className:"status_DZTP",children:["\u0421\u043B\u0430\u0439\u0434 ",o+1," \u0438\u0437 ",u.length,h?" \xb7 \u0430\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430 (prefers-reduced-motion)":" \xb7 \u0430\u0432\u0442\u043E\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0430 \u043A\u0430\u0436\u0434\u044B\u0435 5 \u0441"]}),(0,s.jsx)("pre",{className:"code_CXJ7",children:`.banner-container {
  max-width: ${i}px;
  margin: 0 auto;
}`})]})})}function h(){return(0,s.jsx)(a.A,{fallback:(0,o.q)("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0440\u0443\u0441\u0435\u043B\u0438\u2026"),children:()=>(0,s.jsx)(m,{})})}},688943(e,t,i){i.r(t),i.d(t,{default:()=>w});var s=i(474848),n=i(296540),a=i(509526),r=i(634164),l=i(749459),o=i(419481),d=i(69217),c=i(894488);let u="winBtn_iIOZ",m="presetBtn_wtnq",h="actionBtn_OCqG",p="mobileTab_I5JE",b="mobileTabActive_mYCJ",f="panel_Nitt",x="panelHidden_DiFk",v="panelHead_nswi",y="panelMeta_Ws6y";function g(){let[e,t]=(0,n.useState)(c.Ey),[i,a]=(0,n.useState)("default"),[o,g]=(0,n.useState)("idle"),[w,_]=(0,n.useState)(null),[j,k]=(0,n.useState)(!1),[E,C]=(0,n.useState)("editor"),[N,A]=(0,n.useState)(!1),[S,T]=(0,n.useState)(.5),[L,B]=(0,n.useState)(!1),I=(0,n.useRef)(null),M=(0,n.useRef)(null),D=(0,n.useRef)(null),H=(0,n.useRef)(null),$=(0,n.useRef)(null),{copy:P,isCopied:q}=(0,d.A)(),z=(0,c.lt)(e),O=(0,n.useCallback)(()=>{let t=I.current;if(t)try{let i=t.contentDocument||t.contentWindow?.document;if(!i)return;i.open(),i.write((0,c.Uz)(e)),i.close(),_(null),g("live")}catch(e){_(e?.message||"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"),g("idle")}},[e]);(0,n.useEffect)(()=>{let e=()=>k(window.innerWidth<=768);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>(g("pending"),window.clearTimeout($.current),$.current=window.setTimeout(O,450),()=>window.clearTimeout($.current)),[e,O]),(0,n.useEffect)(()=>{let e=e=>{e.data?.type===c.JI&&_(e.data.message||"\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u0441\u043A\u0440\u0438\u043F\u0442\u0435")};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),(0,n.useEffect)(()=>{if(!L)return;let e=e=>{let t=M.current;if(!t)return;let i=t.getBoundingClientRect();T(Math.min(.75,Math.max(.25,(e.clientX-i.left)/i.width)))},t=()=>B(!1);return window.addEventListener("pointermove",e),window.addEventListener("pointerup",t),()=>{window.removeEventListener("pointermove",e),window.removeEventListener("pointerup",t)}},[L]),(0,n.useEffect)(()=>{if(!N)return;let e=e=>{"Escape"===e.key&&A(!1)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[N]);let U=e=>{a(e.id),t(e.code),_(null),j&&C("preview")},F=!j||"editor"===E,R=!j||"preview"===E,Y=j?void 0:{flex:`0 0 ${100*S}%`},J=j?void 0:{flex:"1 1 0"};return(0,s.jsx)(l.Ay,{fullscreenable:!1,children:(0,s.jsxs)("div",{className:(0,r.A)("shell_uRwQ",N&&"shellFullscreen_eoit"),role:"region","aria-label":"HTML/CSS/JS \u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u0430",children:[(0,s.jsxs)("div",{className:"header_C1IC",children:[(0,s.jsxs)("div",{className:"buttons_zNgz",children:[(0,s.jsx)("button",{type:"button",className:(0,r.A)(u,"winBtnRed_LZwB"),title:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434","aria-label":"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043A\u043E\u0434",onClick:()=>U(c.fG["0"])}),(0,s.jsx)("button",{type:"button",className:(0,r.A)(u,"winBtnYellow_PoXy"),title:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 (Ctrl+Enter)","aria-label":"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",onClick:O}),(0,s.jsx)("button",{type:"button",className:(0,r.A)(u,"winBtnGreen_OT4w"),title:"\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440","aria-label":"\u0424\u043E\u043A\u0443\u0441 \u043D\u0430 \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440",onClick:()=>D.current?.focus()})]}),(0,s.jsx)("div",{className:"title_qjvM",children:"index.html \u2014 HTML \xb7 CSS \xb7 JavaScript"}),(0,s.jsxs)("div",{className:"status_ZBkO",children:[(0,s.jsx)("span",{className:(0,r.A)("statusDot_xALY","live"===o&&"statusDotLive_exjA","pending"===o&&"statusDotPending_H2do"),"aria-hidden":!0}),(0,s.jsx)("span",{children:"pending"===o?"\u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u2026":"live"===o?"live":"\u0433\u043E\u0442\u043E\u0432"})]})]}),(0,s.jsxs)("div",{className:"toolbar_TLlC",children:[(0,s.jsxs)("div",{className:"presets_hmMp",children:[c.fG.map(e=>(0,s.jsxs)("button",{type:"button",className:(0,r.A)(m,i===e.id&&"presetBtnActive_u6oQ"),onClick:()=>U(e),children:[e.icon," ",e.label]},e.id)),"custom"===i&&(0,s.jsx)("span",{className:m,style:{cursor:"default",opacity:.85},children:"\u270F\uFE0F \u0421\u0432\u043E\u0439 \u043A\u043E\u0434"})]}),(0,s.jsxs)("div",{className:"actions__z8E",children:[(0,s.jsx)("button",{type:"button",className:(0,r.A)(h,"actionBtnPrimary_w979"),onClick:O,children:"\u25B6 \u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C"}),(0,s.jsx)("button",{type:"button",className:h,onClick:()=>P(e,"code"),children:q("code")?"\u2713 \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E":"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}),(0,s.jsx)("button",{type:"button",className:h,onClick:()=>(0,c.ZU)(e),children:"\u2197 \u0412\u043A\u043B\u0430\u0434\u043A\u0430"}),(0,s.jsx)("button",{type:"button",className:h,onClick:()=>A(e=>!e),children:N?"\u22A1 \u041E\u043A\u043D\u043E":"\u26F6 \u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D"})]})]}),j&&(0,s.jsxs)("div",{className:"mobileTabs_cqOz",role:"tablist",children:[(0,s.jsx)("button",{type:"button",role:"tab","aria-selected":"editor"===E,className:(0,r.A)(p,"editor"===E&&b),onClick:()=>C("editor"),children:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440"}),(0,s.jsx)("button",{type:"button",role:"tab","aria-selected":"preview"===E,className:(0,r.A)(p,"preview"===E&&b),onClick:()=>C("preview"),children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"})]}),(0,s.jsxs)("div",{ref:M,className:(0,r.A)("workspace_sMBf",j&&"workspaceMobile_eO5b"),children:[(0,s.jsxs)("div",{className:(0,r.A)(f,"panelEditor_lr7X",!F&&x),style:Y,children:[(0,s.jsxs)("div",{className:(0,r.A)(v,"panelHeadEditor_mm_s"),children:[(0,s.jsx)("span",{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440"}),(0,s.jsxs)("span",{className:y,children:[z," \u0441\u0442\u0440\u043E\u043A"]})]}),(0,s.jsxs)("div",{className:"editorWrap_qCZ9",children:[(0,s.jsx)("div",{ref:H,className:"lineNumbers_n8UO","aria-hidden":!0,children:Array.from({length:z},(e,t)=>(0,s.jsx)("span",{className:"lineNum_wack",children:t+1},t))}),(0,s.jsx)("textarea",{ref:D,className:"textarea_sMxR",value:e,onChange:e=>{t(e.target.value),"custom"!==i&&a("custom")},onScroll:e=>{H.current&&(H.current.scrollTop=e.target.scrollTop)},onKeyDown:s=>{if("Tab"===s.key){s.preventDefault();let n=s.target,r=n.selectionStart,l=n.selectionEnd;t(`${e.slice(0,r)}  ${e.slice(l)}`),"custom"!==i&&a("custom"),requestAnimationFrame(()=>{n.selectionStart=n.selectionEnd=r+2});return}(s.ctrlKey||s.metaKey)&&"Enter"===s.key&&(s.preventDefault(),window.clearTimeout($.current),O())},spellCheck:!1,"aria-label":"HTML, CSS \u0438 JavaScript",placeholder:"<!DOCTYPE html>\u2026"})]})]}),!j&&(0,s.jsx)("div",{className:(0,r.A)("resizer_AKoA",L&&"resizerActive_Y1Qf"),role:"separator","aria-orientation":"vertical","aria-label":"\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443 \u043F\u0430\u043D\u0435\u043B\u0435\u0439",onPointerDown:e=>{e.preventDefault(),B(!0)}}),(0,s.jsxs)("div",{className:(0,r.A)(f,"panelPreview_Ux70",!R&&x),style:J,children:[(0,s.jsxs)("div",{className:(0,r.A)(v,"panelHeadPreview_yQjk"),children:[(0,s.jsx)("span",{children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"}),(0,s.jsx)("span",{className:y,children:"sandbox"})]}),(0,s.jsx)("iframe",{ref:I,title:"HTML preview",className:"previewFrame_mEfm",sandbox:"allow-scripts allow-same-origin allow-modals allow-popups"})]})]}),w&&(0,s.jsxs)("div",{className:"errorBar_GbJl",role:"alert",children:[(0,s.jsxs)("span",{children:["\u26A0 ",w]}),(0,s.jsx)("button",{type:"button",className:"errorDismiss_GzYB","aria-label":"\u0421\u043A\u0440\u044B\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443",onClick:()=>_(null),children:"\xd7"})]}),(0,s.jsx)("p",{className:"hint_duS9",children:"\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \xb7 Tab \u2014 \u043E\u0442\u0441\u0442\u0443\u043F \xb7 Ctrl+Enter \u2014 \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043F\u0443\u0441\u043A \xb7 \u043F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043C\u0435\u0436\u0434\u0443 \u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438"})]})})}function w(){return(0,s.jsx)(a.A,{fallback:(0,o.q)("\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 HTML-\u043F\u0435\u0441\u043E\u0447\u043D\u0438\u0446\u044B\u2026"),children:()=>(0,s.jsx)(g,{})})}},749459(e,t,i){i.d(t,{OU:()=>d,Ay:()=>o});var s=i(474848),n=i(296540),a=i(634164);function r(){let[e,t]=(0,n.useState)(!1);(0,n.useEffect)(()=>{if(!e)return;let i=document.body.style.overflow;document.body.style.overflow="hidden";let s=e=>{"Escape"===e.key&&t(!1)};return window.addEventListener("keydown",s),()=>{document.body.style.overflow=i,window.removeEventListener("keydown",s)}},[e]);let i=(0,n.useCallback)(()=>{t(e=>!e)},[]);return{isFullscreen:e,setIsFullscreen:t,toggleFullscreen:i,fullscreenClass:e?"it-demo--fullscreen":void 0}}function l({isFullscreen:e,onToggle:t,className:i}){return(0,s.jsx)("button",{type:"button",className:(0,a.A)("it-demo__fullscreen-btn",i),onClick:t,title:e?"\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430 (Esc)":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u043E \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D","aria-pressed":e,children:e?"\u22A1 \u041E\u043A\u043D\u043E":"\u26F6"})}function o({children:e,className:t,as:i="div",fullscreenable:n=!0}){let{isFullscreen:d,toggleFullscreen:c,fullscreenClass:u}=r();return(0,s.jsxs)(i,{className:(0,a.A)("it-demo",u,t),children:[n&&(0,s.jsx)(l,{isFullscreen:d,onToggle:c,className:"it-demo__fullscreen-btn--shell"}),e]})}function d({children:e,className:t,title:i,subtitle:n,fullscreenable:o=!1}){let{isFullscreen:c,toggleFullscreen:u,fullscreenClass:m}=r(),h=i||n||o;return(0,s.jsxs)("div",{className:(0,a.A)("it-demo__card",m,t),children:[h&&(0,s.jsxs)("div",{className:"it-demo__header",children:[(0,s.jsxs)("div",{className:"it-demo__header-text",children:[i&&(0,s.jsx)("h4",{className:"it-demo__title",children:i}),n&&(0,s.jsx)("p",{className:"it-demo__subtitle",children:n})]}),o&&(0,s.jsx)(l,{isFullscreen:c,onToggle:u})]}),(0,s.jsx)("div",{className:"it-demo__body",children:e})]})}},419481(e,t,i){i.d(t,{j:()=>a,q:()=>n});var s=i(474848);function n(e="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0434\u0435\u043C\u043E\u2026"){return(0,s.jsx)("div",{className:"it-demo it-demo--loading",children:e})}function a(){return(0,s.jsx)("div",{className:"it-demo",children:(0,s.jsx)("div",{className:"it-demo__skeleton","aria-hidden":"true"})})}i(296540)},894488(e,t,i){i.d(t,{Ey:()=>a,JI:()=>s,Uz:()=>l,ZU:()=>d,fG:()=>r,lt:()=>o});let s="it-html-playground-error",n=`<script>
(function () {
  function send(msg) {
    try {
      parent.postMessage({ type: '${s}', message: String(msg) }, '*');
    } catch (e) {}
  }
  window.addEventListener('error', function (e) {
    send((e.filename || 'script') + ': ' + (e.message || '\u{43E}\u{448}\u{438}\u{431}\u{43A}\u{430}'));
  });
  window.addEventListener('unhandledrejection', function (e) {
    send('Promise: ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
  });
})();
</script>`,a=`<!DOCTYPE html>
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
</html>`,r=[{id:"default",label:"\u0421\u0442\u0430\u0440\u0442",icon:"\u{1F3E0}",code:a},{id:"form",label:"\u0424\u043E\u0440\u043C\u0430",icon:"\u{1F4DD}",code:`<!DOCTYPE html>
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
</html>`}];function l(e){return/<\/body>/i.test(e)?e.replace(/<\/body>/i,`${n}</body>`):/<\/html>/i.test(e)?e.replace(/<\/html>/i,`${n}</html>`):e+n}function o(e){return e?e.split("\n").length:1}function d(e){let t=new Blob([e],{type:"text/html"}),i=URL.createObjectURL(t),s=window.open(i,"_blank","noopener,noreferrer");return s&&window.setTimeout(()=>URL.revokeObjectURL(i),6e4),!!s}},69217(e,t,i){i.d(t,{A:()=>n});var s=i(296540);function n(e=2e3){let[t,i]=(0,s.useState)(null);return{copy:(0,s.useCallback)(async(t,s="default")=>{if(!t)return!1;try{return await navigator.clipboard.writeText(t),i(s),window.setTimeout(()=>i(e=>e===s?null:e),e),!0}catch{return!1}},[e]),copiedKey:t,isCopied:(e="default")=>t===e}}}}]);