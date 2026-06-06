"use strict";(self.webpackChunkit_knowledge_base=self.webpackChunkit_knowledge_base||[]).push([["12278"],{56149(e,t,r){r.d(t,{A:()=>_});var s=r(474848),i=r(296540),l=r(509526),n=r(634164),o=r(749459),a=r(419481);let c=[{id:0,label:"\u0414\u043E \u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433\u0430",short:"\u0425\u0430\u043E\u0441",technique:"\u0417\u0430\u043F\u0430\u0445\u0438 \u043A\u043E\u0434\u0430",insight:'\u0412\u0441\u0451 \u0432 \u043E\u0434\u043D\u043E\u043C \u0444\u0430\u0439\u043B\u0435: \u0434\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435, \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0447\u0438\u0441\u043B\u0430, "\u0431\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439" \u043C\u0435\u0442\u043E\u0434 \u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434. \u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043D\u043E \u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0442\u0440\u0430\u0448\u043D\u043E.',smells:["\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434","\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0447\u0438\u0441\u043B\u0430","\u041C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434","\u041D\u0435\u044F\u0441\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430"],metrics:{files:2,lines:186,complexity:28,duplication:4,smells:7},defaultFile:"everything.js",tree:[{path:"src/",type:"dir",children:[{path:"src/everything.js",type:"file"},{path:"src/old_stuff.js",type:"file"}]}]},{id:1,label:"\u0418\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u0430",short:"\u041C\u0435\u0442\u043E\u0434\u044B",technique:"Extract Method",insight:"\u0424\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u0438\u0442\u043E\u0433\u0430 \u0432\u044B\u043D\u0435\u0441\u0435\u043D\u044B \u0432 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438. \u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u043F\u043E\u0442\u043E\u043A \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0441\u0446\u0435\u043D\u0430\u0440\u0438\u0439, \u0430 \u043D\u0435 \u043A\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u044B\u043D\u044F.",smells:["\u0414\u043B\u0438\u043D\u043D\u044B\u0439 \u043C\u0435\u0442\u043E\u0434","\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0447\u0438\u0441\u043B\u0430","\u041C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434"],metrics:{files:2,lines:178,complexity:22,duplication:3,smells:5},defaultFile:"src/everything.js",tree:[{path:"src/",type:"dir",children:[{path:"src/everything.js",type:"file"},{path:"src/old_stuff.js",type:"file"}]}]},{id:2,label:"\u041F\u0435\u0440\u0435\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435",short:"\u0418\u043C\u0435\u043D\u0430",technique:"Rename",insight:'\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043E\u0442\u0440\u0430\u0436\u0430\u044E\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0443\u044E \u043E\u0431\u043B\u0430\u0441\u0442\u044C: `calc` \u2192 `calculateOrderTotal`, `x` \u2192 `lineItems`. \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 "\u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u043A\u043E\u0434" \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u043B\u0438\u0448\u043D\u0438\u043C\u0438.',smells:["\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0447\u0438\u0441\u043B\u0430","\u041C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434","\u041D\u0435\u044F\u0441\u043D\u044B\u0435 \u0438\u043C\u0435\u043D\u0430"],metrics:{files:2,lines:172,complexity:20,duplication:3,smells:4},defaultFile:"src/everything.js",tree:[{path:"src/",type:"dir",children:[{path:"src/everything.js",type:"file"},{path:"src/old_stuff.js",type:"file"}]}]},{id:3,label:"\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u044B \u0438 \u043C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434",short:"\u0427\u0438\u0441\u0442\u043A\u0430",technique:"Replace Magic Number \xb7 Remove Dead Code",insight:"\u0427\u0438\u0441\u043B\u0430 `0.1` \u0438 `3600` \u0437\u0430\u043C\u0435\u043D\u0435\u043D\u044B \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0430\u043C\u0438. \u041D\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432\u0435\u0442\u043A\u0438 \u0438 \u0444\u0430\u0439\u043B `old_stuff.js` \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u2014 \u043C\u0435\u043D\u044C\u0448\u0435 \u0448\u0443\u043C\u0430 \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0435.",smells:["\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435","\u041C\u0451\u0440\u0442\u0432\u044B\u0439 \u043A\u043E\u0434"],metrics:{files:1,lines:148,complexity:18,duplication:2,smells:2},defaultFile:"src/everything.js",tree:[{path:"src/",type:"dir",children:[{path:"src/everything.js",type:"file"}]}]},{id:4,label:"\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0430\u0441\u0441\u0430",short:"\u041A\u043B\u0430\u0441\u0441",technique:"Extract Class",insight:'\u041B\u043E\u0433\u0438\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u0432 \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u0435\u043D\u044B \u0432 `Order` \u0438 `PricingService`. \u0424\u0430\u0439\u043B \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0451\u0442 \u0431\u044B\u0442\u044C "\u0431\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C" \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C.',smells:["\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"],metrics:{files:3,lines:132,complexity:12,duplication:1,smells:1},defaultFile:"src/domain/Order.js",tree:[{path:"src/",type:"dir",children:[{path:"src/domain/",type:"dir",children:[{path:"src/domain/Order.js",type:"file"},{path:"src/domain/PricingService.js",type:"file"}]},{path:"src/app.js",type:"file"}]}]},{id:5,label:"\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",short:"\u041F\u0430\u043F\u043A\u0438",technique:"Move \xb7 Split Module",insight:"\u041A\u043E\u0434 \u0440\u0430\u0437\u043B\u043E\u0436\u0435\u043D \u043F\u043E \u0441\u043B\u043E\u044F\u043C: domain, application, infrastructure. \u0413\u0440\u0430\u043D\u0438\u0446\u044B \u043C\u043E\u0434\u0443\u043B\u0435\u0439 \u0432\u0438\u0434\u043D\u044B \u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 \u2014 \u043F\u0440\u043E\u0435\u043A\u0442 \u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0440\u0442\u0430.",smells:[],metrics:{files:6,lines:128,complexity:9,duplication:0,smells:0},defaultFile:"src/application/ProcessOrder.js",tree:[{path:"src/",type:"dir",children:[{path:"src/domain/",type:"dir",children:[{path:"src/domain/Order.js",type:"file"},{path:"src/domain/PricingService.js",type:"file"}]},{path:"src/application/",type:"dir",children:[{path:"src/application/ProcessOrder.js",type:"file"}]},{path:"src/infrastructure/",type:"dir",children:[{path:"src/infrastructure/OrderRepository.js",type:"file"}]},{path:"src/app.js",type:"file"},{path:"tests/order.test.js",type:"file"}]}]}],d={0:{"src/everything.js":`// TODO: \u{43A}\u{43E}\u{433}\u{434}\u{430}-\u{43D}\u{438}\u{431}\u{443}\u{434}\u{44C} \u{440}\u{430}\u{437}\u{43E}\u{431}\u{440}\u{430}\u{442}\u{44C} \u{44D}\u{442}\u{43E}\u{442} \u{444}\u{430}\u{439}\u{43B}
var d = 0.1; // \u{441}\u{43A}\u{438}\u{434}\u{43A}\u{430} VIP??

function doAll(o, u) {
  var x = o.items;
  var s = 0;
  for (var i = 0; i < x.length; i++) {
    s = s + x[i].p * x[i].q;
  }
  // \u{434}\u{443}\u{431}\u{43B}\u{44C} \u{440}\u{430}\u{441}\u{447}\u{451}\u{442}\u{430} \u{2014} \u{43A}\u{43E}\u{43F}\u{438}\u{43F}\u{430}\u{441}\u{442}\u{430} \u{438}\u{437} exportReport
  var t = 0;
  for (var j = 0; j < x.length; j++) {
    t = t + x[j].p * x[j].q;
  }
  if (u === 'vip') s = s - s * d;
  if (u === 'vip') t = t - t * d; // \u{441}\u{43D}\u{43E}\u{432}\u{430} \u{442}\u{43E} \u{436}\u{435}
  o.total = s;
  o.reportTotal = t;
  if (o.status === 'DRAFT') o.status = 'OK';
  save(o);
  return s;
}

function exportReport(o, u) {
  var x = o.items;
  var t = 0;
  for (var j = 0; j < x.length; j++) {
    t = t + x[j].p * x[j].q;
  }
  if (u === 'vip') t = t - t * d;
  return { total: t, ts: Date.now() / 3600 };
}

function save(o) { /* db */ }

// \u{43C}\u{451}\u{440}\u{442}\u{432}\u{44B}\u{439} \u{43A}\u{43E}\u{434} \u{2014} \u{43D}\u{438}\u{43A}\u{442}\u{43E} \u{43D}\u{435} \u{432}\u{44B}\u{437}\u{44B}\u{432}\u{430}\u{435}\u{442}
function legacyDiscount() { return 0.05; }`,"src/old_stuff.js":`// \u{43D}\u{435} \u{442}\u{440}\u{43E}\u{433}\u{430}\u{442}\u{44C}!!! \u{441}\u{442}\u{430}\u{440}\u{44B}\u{439} \u{43F}\u{440}\u{43E}\u{442}\u{43E}\u{442}\u{438}\u{43F} 2019
function unused() { return 42; }`},1:{"src/everything.js":`var VIP_DISCOUNT = 0.1; // \u{43F}\u{43E}\u{43A}\u{430} \u{43C}\u{430}\u{433}\u{438}\u{447}\u{435}\u{441}\u{43A}\u{43E}\u{435}

function sumLineItems(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].p * items[i].q;
  }
  return total;
}

function applyVipDiscount(total, userType) {
  if (userType === 'vip') return total - total * VIP_DISCOUNT;
  return total;
}

function doAll(o, u) {
  var subtotal = sumLineItems(o.items);
  o.total = applyVipDiscount(subtotal, u);
  o.reportTotal = applyVipDiscount(sumLineItems(o.items), u);
  if (o.status === 'DRAFT') o.status = 'OK';
  save(o);
  return o.total;
}

function exportReport(o, u) {
  var subtotal = sumLineItems(o.items);
  return { total: applyVipDiscount(subtotal, u), ts: Date.now() / 3600 };
}

function save(o) { /* db */ }
function legacyDiscount() { return 0.05; }`,"src/old_stuff.js":"function unused() { return 42; }"},2:{"src/everything.js":`const VIP_DISCOUNT_RATE = 0.1;

function sumLineItems(lineItems) {
  return lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyVipDiscount(orderTotal, customerTier) {
  if (customerTier === 'vip') {
    return orderTotal - orderTotal * VIP_DISCOUNT_RATE;
  }
  return orderTotal;
}

function processOrder(order, customerTier) {
  const subtotal = sumLineItems(order.lineItems);
  order.total = applyVipDiscount(subtotal, customerTier);
  order.reportTotal = applyVipDiscount(sumLineItems(order.lineItems), customerTier);
  if (order.status === 'DRAFT') order.status = 'CONFIRMED';
  persistOrder(order);
  return order.total;
}

function buildExportReport(order, customerTier) {
  const subtotal = sumLineItems(order.lineItems);
  return {
    total: applyVipDiscount(subtotal, customerTier),
    exportedAtHours: Date.now() / 3600,
  };
}

function persistOrder(order) { /* db */ }
function legacyDiscount() { return 0.05; }`,"src/old_stuff.js":"function unused() { return 42; }"},3:{"src/everything.js":`const VIP_DISCOUNT_RATE = 0.1;
const MS_PER_HOUR = 3600;

function sumLineItems(lineItems) {
  return lineItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function applyVipDiscount(orderTotal, customerTier) {
  if (customerTier === 'vip') {
    return orderTotal - orderTotal * VIP_DISCOUNT_RATE;
  }
  return orderTotal;
}

function calculateOrderTotal(lineItems, customerTier) {
  return applyVipDiscount(sumLineItems(lineItems), customerTier);
}

function processOrder(order, customerTier) {
  order.total = calculateOrderTotal(order.lineItems, customerTier);
  order.reportTotal = order.total;
  if (order.status === 'DRAFT') order.status = 'CONFIRMED';
  persistOrder(order);
  return order.total;
}

function buildExportReport(order, customerTier) {
  return {
    total: calculateOrderTotal(order.lineItems, customerTier),
    exportedAtHours: Date.now() / MS_PER_HOUR,
  };
}

function persistOrder(order) { /* db */ }`},4:{"src/domain/Order.js":`export class Order {
  constructor({ id, lineItems, status = 'DRAFT' }) {
    this.id = id;
    this.lineItems = lineItems;
    this.status = status;
    this.total = 0;
  }

  confirm() {
    if (this.status === 'DRAFT') this.status = 'CONFIRMED';
  }
}`,"src/domain/PricingService.js":`const VIP_DISCOUNT_RATE = 0.1;

export class PricingService {
  sumLineItems(lineItems) {
    return lineItems.reduce((s, i) => s + i.price * i.quantity, 0);
  }

  applyVipDiscount(total, customerTier) {
    if (customerTier === 'vip') {
      return total - total * VIP_DISCOUNT_RATE;
    }
    return total;
  }

  calculateTotal(lineItems, customerTier) {
    return this.applyVipDiscount(this.sumLineItems(lineItems), customerTier);
  }
}`,"src/app.js":`import { Order } from './domain/Order.js';
import { PricingService } from './domain/PricingService.js';

const pricing = new PricingService();

export function processOrder(order, customerTier) {
  order.total = pricing.calculateTotal(order.lineItems, customerTier);
  order.confirm();
  return order.total;
}`},5:{"src/domain/Order.js":`export class Order {
  constructor({ id, lineItems, status = 'DRAFT' }) {
    this.id = id;
    this.lineItems = lineItems;
    this.status = status;
    this.total = 0;
  }

  confirm() {
    if (this.status === 'DRAFT') this.status = 'CONFIRMED';
  }
}`,"src/domain/PricingService.js":`const VIP_DISCOUNT_RATE = 0.1;

export class PricingService {
  calculateTotal(lineItems, customerTier) {
    const subtotal = lineItems.reduce((s, i) => s + i.price * i.quantity, 0);
    if (customerTier === 'vip') {
      return subtotal - subtotal * VIP_DISCOUNT_RATE;
    }
    return subtotal;
  }
}`,"src/application/ProcessOrder.js":`import { PricingService } from '../domain/PricingService.js';

export class ProcessOrder {
  constructor(orderRepository, pricing = new PricingService()) {
    this.orders = orderRepository;
    this.pricing = pricing;
  }

  execute(order, customerTier) {
    order.total = this.pricing.calculateTotal(order.lineItems, customerTier);
    order.confirm();
    this.orders.save(order);
    return order.total;
  }
}`,"src/infrastructure/OrderRepository.js":`export class OrderRepository {
  save(order) {
    // persistence adapter
    return order.id;
  }
}`,"src/app.js":`import { Order } from './domain/Order.js';
import { ProcessOrder } from './application/ProcessOrder.js';
import { OrderRepository } from './infrastructure/OrderRepository.js';

const useCase = new ProcessOrder(new OrderRepository());

export function bootstrap(orderDto, tier) {
  const order = new Order(orderDto);
  return useCase.execute(order, tier);
}`,"tests/order.test.js":`import { PricingService } from '../src/domain/PricingService.js';

test('VIP gets 10% discount', () => {
  const pricing = new PricingService();
  const total = pricing.calculateTotal(
    [{ price: 100, quantity: 1 }],
    'vip',
  );
  expect(total).toBe(90);
});`}},u="metricCard_CraN",p="metricValue_GoBj",m="metricLabel_nZis",h="treeList_Pvdy",f="treeItem_vSVX",j="smellTag_Ywo1";function y({node:e,depth:t,selectedFile:r,onSelect:i}){if("dir"===e.type){let l=e.path.split("/").filter(Boolean).pop()||e.path;return(0,s.jsxs)("li",{className:f,children:[(0,s.jsxs)("div",{className:"treeDir_rRFK",style:{paddingLeft:`${.65+.55*t}rem`},children:["\u{1F4C1} ",l]}),(0,s.jsx)("ul",{className:h,children:e.children?.map(e=>(0,s.jsx)(y,{node:e,depth:t+1,selectedFile:r,onSelect:i},e.path))})]})}let l=e.path.split("/").pop();return(0,s.jsx)("li",{className:f,children:(0,s.jsxs)("button",{type:"button",className:(0,n.A)("treeBtn_XGEB",r===e.path&&"treeBtnActive_pbCd"),style:{paddingLeft:`${.65+.55*t}rem`},onClick:()=>i(e.path),children:[(0,s.jsx)("span",{"aria-hidden":!0,children:"\u{1F4C4}"}),l]})})}function x(){let e,[t,r]=(0,i.useState)(0),[l,a]=(0,i.useState)(c["0"].defaultFile),[f,x]=(0,i.useState)(!1),_=(e=Math.max(0,Math.min(t,c.length-1)),c[e]),v=(0,i.useMemo)(()=>(function e(t,r=""){let s=[];for(let r of t)"file"===r.type?s.push(r.path):r.children&&s.push(...e(r.children));return s})(_.tree),[_]),T=(d[t]??d[0])[l]??"// \u0444\u0430\u0439\u043B \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0448\u0430\u0433\u0435",I=_.metrics;(0,i.useEffect)(()=>{v.includes(l)||a(_.defaultFile)},[t,v,l,_.defaultFile]),(0,i.useEffect)(()=>{if(!f)return;let e=window.setInterval(()=>{r(e=>e>=c.length-1?(x(!1),e):e+1)},3500);return()=>window.clearInterval(e)},[f]);let g=(0,i.useCallback)(e=>{x(!1),r(Math.max(0,Math.min(e,c.length-1)))},[]),N=(e,t,r=!1)=>(r?e<t:e>t)?"metricValueBad_ykyo":"metricValueOk_t9BS";return(0,s.jsxs)(o.Ay,{className:"root_qw1j",children:[(0,s.jsxs)("div",{className:"headerBand_pzk2",children:[(0,s.jsx)("h4",{className:"title_iL0V",children:"\u041F\u043E\u0448\u0430\u0433\u043E\u0432\u044B\u0439 \u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433 \u043C\u0438\u043D\u0438-\u043F\u0440\u043E\u0435\u043A\u0442\u0430"}),(0,s.jsx)("p",{className:"subtitle_vvmx",children:'\u041E\u0442 "\u0432\u0441\u0451 \u0432 \u043E\u0434\u043D\u043E\u043C \u0444\u0430\u0439\u043B\u0435" \u043A \u0441\u043B\u043E\u044F\u043C domain / application / infrastructure \u2014 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043D\u0435 \u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F'})]}),(0,s.jsxs)("div",{className:"body_F4O7",children:[(0,s.jsx)("div",{className:"stepBar_XuSa",role:"tablist","aria-label":"\u0428\u0430\u0433\u0438 \u0440\u0435\u0444\u0430\u043A\u0442\u043E\u0440\u0438\u043D\u0433\u0430",children:c.map((e,r)=>(0,s.jsxs)("button",{type:"button",role:"tab","aria-selected":t===r,className:(0,n.A)("stepBtn_sMEJ",t===r&&"stepBtnActive_ZWYI",r<t&&"stepBtnDone_aYdJ"),onClick:()=>g(r),title:e.technique,children:[r,". ",e.short]},e.id))}),(0,s.jsxs)("div",{className:"navRow_Jh0q",children:[(0,s.jsx)("span",{className:"techniqueBadge_VVjG",children:_.technique}),(0,s.jsxs)("div",{className:"playRow_w6yo",children:[(0,s.jsx)("button",{type:"button",className:"it-demo__btn it-demo__btn--secondary it-demo__btn--sm",disabled:0===t,onClick:()=>g(t-1),children:"\u2190 \u041D\u0430\u0437\u0430\u0434"}),(0,s.jsx)("button",{type:"button",className:"it-demo__btn it-demo__btn--primary it-demo__btn--sm",disabled:t===c.length-1,onClick:()=>g(t+1),children:"\u0414\u0430\u043B\u0435\u0435 \u2192"}),(0,s.jsx)("button",{type:"button",className:(0,n.A)("it-demo__btn it-demo__btn--sm",f&&"it-demo__btn--primary"),onClick:()=>x(e=>!e),children:f?"\u23F8 \u041F\u0430\u0443\u0437\u0430":"\u25B6 \u0410\u0432\u0442\u043E-\u0442\u0443\u0440"})]})]}),(0,s.jsxs)("div",{className:"metrics_XE3B",children:[(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:p,children:I.files}),(0,s.jsx)("span",{className:m,children:"\u0444\u0430\u0439\u043B\u043E\u0432"})]}),(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:(0,n.A)(p,N(I.lines,160)),children:I.lines}),(0,s.jsx)("span",{className:m,children:"\u0441\u0442\u0440\u043E\u043A"})]}),(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:(0,n.A)(p,N(I.complexity,15)),children:I.complexity}),(0,s.jsx)("span",{className:m,children:"\u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C"})]}),(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:(0,n.A)(p,N(I.duplication,0)),children:I.duplication}),(0,s.jsx)("span",{className:m,children:"\u0434\u0443\u0431\u043B\u0435\u0439"})]}),(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("span",{className:(0,n.A)(p,N(I.smells,2)),children:I.smells}),(0,s.jsx)("span",{className:m,children:"\u0437\u0430\u043F\u0430\u0445\u043E\u0432"})]})]}),(0,s.jsxs)("div",{className:"layout__Pto",children:[(0,s.jsxs)("aside",{className:"treePanel_y0Od",children:[(0,s.jsx)("p",{className:"treeTitle_y9KN",children:"\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"}),(0,s.jsx)("ul",{className:h,children:_.tree.map(e=>(0,s.jsx)(y,{node:e,depth:0,selectedFile:l,onSelect:a},e.path))})]}),(0,s.jsxs)("section",{className:"codePanel_zqvf","aria-label":"\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0444\u0430\u0439\u043B\u0430",children:[(0,s.jsxs)("div",{className:"codeHeader_h9dC",children:[(0,s.jsx)("span",{children:l}),(0,s.jsxs)("span",{children:["\u0448\u0430\u0433 ",t+1,"/",c.length]})]}),(0,s.jsx)("pre",{className:"codePre_Npeo",children:T})]})]}),(0,s.jsxs)("p",{className:"insight_Dokh",children:[(0,s.jsxs)("strong",{children:[_.label,"."]})," ",_.insight]}),(0,s.jsx)("div",{className:"smellRow_sW_e",children:0===_.smells.length?(0,s.jsx)("span",{className:(0,n.A)(j,"smellTagClear_liQ_"),children:"\u041A\u0440\u0438\u0442\u0438\u0447\u043D\u044B\u0435 \u0437\u0430\u043F\u0430\u0445\u0438 \u0443\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u044B"}):_.smells.map(e=>(0,s.jsx)("span",{className:j,children:e},e))})]})]})}function _(){return(0,s.jsx)(l.A,{fallback:(0,a.q)(),children:()=>(0,s.jsx)(x,{})})}}}]);