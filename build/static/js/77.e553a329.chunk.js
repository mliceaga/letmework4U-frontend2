(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1045:function(e,t,a){"use strict";var n=a(35),r=a.n(n),c="[E-COMMERCE APP] GET PRODUCTS",o="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function i(){var e=r.a.get("/api/e-commerce-app/products");return function(t){return e.then(function(e){return t({type:c,payload:e.data})})}}function l(e){return{type:o,searchText:e.target.value}}var d=a(12),u=a(34),s="[E-COMMERCE APP] GET PRODUCT",m="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var t=r.a.get("/api/e-commerce-app/product",{params:e});return function(e){return t.then(function(t){return e({type:s,payload:t.data})})}}function f(e){var t=r.a.post("/api/e-commerce-app/product/save",e);return function(e){return t.then(function(t){return e(Object(u.H)({message:"Product Saved"})),e({type:m,payload:t.data})})}}function h(){var e={id:d.B.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:s,payload:e}}var g="[E-COMMERCE APP] GET ORDERS",b="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function E(){var e=r.a.get("/api/e-commerce-app/orders");return function(t){return e.then(function(e){return t({type:g,payload:e.data})})}}function v(e){return{type:b,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",w="[E-COMMERCE APP] SAVE ORDER";function O(e){var t=r.a.get("/api/e-commerce-app/order",{params:e});return function(e){return t.then(function(t){return e({type:x,payload:t.data})})}}a.d(t,"d",function(){return c}),a.d(t,"h",function(){return o}),a.d(t,"l",function(){return i}),a.d(t,"p",function(){return l}),a.d(t,"c",function(){return s}),a.d(t,"f",function(){return m}),a.d(t,"k",function(){return p}),a.d(t,"n",function(){return f}),a.d(t,"m",function(){return h}),a.d(t,"b",function(){return g}),a.d(t,"g",function(){return b}),a.d(t,"j",function(){return E}),a.d(t,"o",function(){return v}),a.d(t,"a",function(){return x}),a.d(t,"e",function(){return w}),a.d(t,"i",function(){return O})},1158:function(e,t,a){"use strict";var n=a(46),r=a(8),c=a(1045),o={data:[],searchText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.d:return Object(r.a)({},e,{data:t.payload});case c.h:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},l={data:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:case c.f:return Object(r.a)({},e,{data:t.payload});default:return e}},u={data:[],searchText:""},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return Object(r.a)({},e,{data:t.payload});case c.g:return Object(r.a)({},e,{searchText:t.searchText});default:return e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:case c.e:return Object(r.a)({},t.payload);default:return e}},p=Object(n.d)({products:i,product:d,orders:s,order:m});t.a=p},1236:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(3),o=a(6),i=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-dark text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-dark text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-light text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-dark text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-darker text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-dark text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-darker text-white"}];t.a=function(e){return r.a.createElement("div",{className:Object(c.a)("inline text-12 p-4 rounded truncate",o.a.find(i,{name:e.name}).color)},e.name)}},2222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a(184),i=a(992),l=a(124),d=a(150),u=a(343),s=a(1029),m=a(1045),p=a(5);var f=function(e){var t=Object(p.b)(),a=Object(p.c)(function(e){return e.eCommerceApp.orders.searchText}),n=Object(p.c)(function(e){return e.fuse.settings.mainTheme});return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(c.d,{animation:"transition.expandIn",delay:300},r.a.createElement(i.a,{className:"text-32 mr-0 sm:mr-12"},"shopping_basket")),r.a.createElement(c.d,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(l.a,{className:"hidden sm:flex",variant:"h6"},"Orders"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center pr-0 pl-12 sm:px-12"},r.a.createElement(s.a,{theme:n},r.a.createElement(c.d,{animation:"transition.slideDownIn",delay:300},r.a.createElement(d.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(i.a,{className:"mr-8",color:"action"},"search"),r.a.createElement(u.a,{placeholder:"Search",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:function(e){return t(m.o(e))}}))))))},h=a(15),g=a(1101),b=a(1105),E=a(1103),v=a(1104),x=a(1016),w=a(1227),O=a(77),y=a(6),P=a(1102),C=a(510),j=a(338),k=a(513),S=a(993),R=a(1004),T=a(994),A=a(1005),N=a(1226),M=a(3),D=a(1030),I=[{id:"id",align:"left",disablePadding:!1,label:"ID",sort:!0},{id:"reference",align:"left",disablePadding:!1,label:"Reference",sort:!0},{id:"customer",align:"left",disablePadding:!1,label:"Customer",sort:!0},{id:"total",align:"right",disablePadding:!1,label:"Total",sort:!0},{id:"payment",align:"left",disablePadding:!1,label:"Payment",sort:!0},{id:"status",align:"left",disablePadding:!1,label:"Status",sort:!0},{id:"date",align:"left",disablePadding:!1,label:"Date",sort:!0}],B=Object(D.a)(function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}});var U=function(e){var t=B(e),a=Object(n.useState)(null),c=Object(h.a)(a,2),o=c[0],l=c[1];function d(){l(null)}return r.a.createElement(P.a,null,r.a.createElement(E.a,{className:"h-64"},r.a.createElement(v.a,{padding:"checkbox",className:"relative pl-4 sm:pl-12"},r.a.createElement(x.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&r.a.createElement("div",{className:Object(M.a)("flex items-center justify-center absolute w-64 top-0 left-0 ml-68 h-64 z-10",t.actionsButtonWrapper)},r.a.createElement(C.a,{"aria-owns":o?"selectedOrdersMenu":null,"aria-haspopup":"true",onClick:function(e){l(e.currentTarget)}},r.a.createElement(i.a,null,"more_horiz")),r.a.createElement(j.a,{id:"selectedOrdersMenu",anchorEl:o,open:Boolean(o),onClose:d},r.a.createElement(k.a,null,r.a.createElement(S.a,{onClick:function(){d()}},r.a.createElement(R.a,{className:"min-w-40"},r.a.createElement(i.a,null,"delete")),r.a.createElement(T.a,{primary:"Remove"})))))),I.map(function(t){return r.a.createElement(v.a,{key:t.id,align:t.align,padding:t.disablePadding?"none":"default",sortDirection:e.order.id===t.id&&e.order.direction},t.sort&&r.a.createElement(A.a,{title:"Sort",placement:"right"===t.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(N.a,{active:e.order.id===t.id,direction:e.order.direction,onClick:(a=t.id,function(t){e.onRequestSort(t,a)})},t.label)));var a},this)))},G=a(1236);var q=Object(O.h)(function(e){var t=Object(p.b)(),a=Object(p.c)(function(e){return e.eCommerceApp.orders.data}),o=Object(p.c)(function(e){return e.eCommerceApp.orders.searchText}),i=Object(n.useState)([]),l=Object(h.a)(i,2),d=l[0],u=l[1],s=Object(n.useState)(a),f=Object(h.a)(s,2),O=f[0],P=f[1],C=Object(n.useState)(0),j=Object(h.a)(C,2),k=j[0],S=j[1],R=Object(n.useState)(10),T=Object(h.a)(R,2),A=T[0],N=T[1],M=Object(n.useState)({direction:"asc",id:null}),D=Object(h.a)(M,2),I=D[0],B=D[1];return Object(n.useEffect)(function(){t(m.j())},[t]),Object(n.useEffect)(function(){P(0===o.length?a:c.B.filterArrayByString(a,o))},[a,o]),r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(c.t,{className:"flex-grow overflow-x-auto"},r.a.createElement(g.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},r.a.createElement(U,{numSelected:d.length,order:I,onSelectAllClick:function(e){e.target.checked?u(O.map(function(e){return e.id})):u([])},onRequestSort:function(e,t){var a=t,n="desc";I.id===t&&"desc"===I.direction&&(n="asc"),B({direction:n,id:a})},rowCount:O.length}),r.a.createElement(b.a,null,y.a.orderBy(O,[function(e){switch(I.id){case"id":return parseInt(e.id,10);case"customer":return e.customer.firstName;case"payment":return e.payment.method;case"status":return e.status[0].name;default:return e[I.id]}}],[I.direction]).slice(k*A,k*A+A).map(function(t){var a=-1!==d.indexOf(t.id);return r.a.createElement(E.a,{className:"h-64 cursor-pointer",hover:!0,role:"checkbox","aria-checked":a,tabIndex:-1,key:t.id,selected:a,onClick:function(a){return n=t,void e.history.push("/apps/e-commerce/orders/"+n.id+"/"+n.handle);var n}},r.a.createElement(v.a,{className:"w-48 pl-4 sm:pl-12",padding:"checkbox"},r.a.createElement(x.a,{checked:a,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,t){var a=d.indexOf(t),n=[];-1===a?n=n.concat(d,t):0===a?n=n.concat(d.slice(1)):a===d.length-1?n=n.concat(d.slice(0,-1)):a>0&&(n=n.concat(d.slice(0,a),d.slice(a+1))),u(n)}(0,t.id)}})),r.a.createElement(v.a,{component:"th",scope:"row"},t.id),r.a.createElement(v.a,{component:"th",scope:"row"},t.reference),r.a.createElement(v.a,{className:"truncate",component:"th",scope:"row"},t.customer.firstName+" "+t.customer.lastName),r.a.createElement(v.a,{component:"th",scope:"row",align:"right"},r.a.createElement("span",null,"$"),t.total),r.a.createElement(v.a,{component:"th",scope:"row"},t.payment.method),r.a.createElement(v.a,{component:"th",scope:"row"},r.a.createElement(G.a,{name:t.status[0].name})),r.a.createElement(v.a,{component:"th",scope:"row"},t.date))})))),r.a.createElement(w.a,{component:"div",count:O.length,rowsPerPage:A,page:k,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){N(e.target.value)}}))}),H=a(1158);t.default=Object(o.a)("eCommerceApp",H.a)(function(){return r.a.createElement(c.r,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(f,null),content:r.a.createElement(q,null),innerScroll:!0})})}}]);