(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1115:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(4),l=a.n(c),o=a(0),s=a.n(o),i=(a(1),a(3)),u=a(7),m=s.a.forwardRef(function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,c=e.classes,o=e.className,u=l()(e,["disableSpacing","classes","className"]);return s.a.createElement("div",r()({className:Object(i.a)(c.root,!n&&c.spacing,o),ref:t},u))});t.a=Object(u.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > * + *":{marginLeft:8}}},{name:"MuiCardActions"})(m)},1159:function(e,t,a){"use strict";var n=a(35),r=a.n(n),c="[ACADEMY APP] GET COURSES",l="[ACADEMY APP] GET CATEGORIES";function o(){var e=r.a.get("/api/academy-app/courses");return function(t){return e.then(function(e){return t({type:c,payload:e.data})})}}function s(){var e=r.a.get("/api/academy-app/categories");return function(t){return e.then(function(e){return t({type:l,payload:e.data})})}}var i=a(8),u=a(34),m="[ACADEMY APP] GET COURSE",d="[ACADEMY APP] SAVE COURSE",f="[ACADEMY APP] UPDATE COURSE";function p(e){var t=r.a.get("/api/academy-app/course",{params:e});return function(e){return t.then(function(t){return e({type:m,payload:t.data})})}}function E(e){return function(t,a){var n=a().academyApp.course.id;r.a.post("/api/academy-app/course/update",Object(i.a)({id:n},e)).then(function(e){return t(Object(u.H)({message:"Course Updated"})),t({type:f,payload:e.data})})}}a.d(t,"c",function(){return c}),a.d(t,"a",function(){return l}),a.d(t,"h",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"b",function(){return m}),a.d(t,"d",function(){return d}),a.d(t,"e",function(){return f}),a.d(t,"g",function(){return p}),a.d(t,"i",function(){return E})},1281:function(e,t,a){"use strict";var n=a(46),r=a(8),c=a(1159),l={data:null,categories:[]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return Object(r.a)({},e,{data:t.payload});case c.a:return Object(r.a)({},e,{categories:t.payload});default:return e}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:case c.d:return Object(r.a)({},t.payload);case c.e:return Object(r.a)({},e,t.payload);default:return e}},i=Object(n.d)({courses:o,course:s});t.a=i},2085:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(0),c=a.n(r),l=a(124),o=a(992),s=a(1006),i=a(509),u=a(523),m=a(525),d=a(526),f=a(993),p=a(1001),E=a(1013),y=a(997),h=a(1115),x=a(1010),b=a(1008),g=a(1030),v=a(488),w=a(12),O=a(5),j=a(184),N=a(3),A=a(6),C=a(29),S=a(1159),P=a(1281),k=Object(g.a)(function(e){return{header:{background:"linear-gradient(to right, "+e.palette.primary.dark+" 0%, "+e.palette.primary.main+" 100%)",color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"}}});t.default=Object(j.a)("academyApp",P.a)(function(e){var t=Object(O.b)(),a=Object(O.c)(function(e){return e.academyApp.courses.data}),g=Object(O.c)(function(e){return e.academyApp.courses.categories}),j=k(e),P=Object(v.a)(),T=Object(r.useState)(null),M=Object(n.a)(T,2),U=M[0],D=M[1],I=Object(r.useState)(""),R=Object(n.a)(I,2),L=R[0],Y=R[1],G=Object(r.useState)("all"),J=Object(n.a)(G,2),W=J[0],z=J[1];return Object(r.useEffect)(function(){t(S.f()),t(S.h())},[t]),Object(r.useEffect)(function(){a&&D(0===L.length&&"all"===W?a:A.a.filter(a,function(e){return("all"===W||e.category===W)&&e.title.toLowerCase().includes(L.toLowerCase())}))},[a,L,W]),c.a.createElement("div",{className:"flex flex-col flex-1 w-full"},c.a.createElement("div",{className:Object(N.a)(j.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},c.a.createElement(w.d,{animation:"transition.slideUpIn",duration:400,delay:100},c.a.createElement(l.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"WELCOME TO ACADEMY")),c.a.createElement(w.d,{duration:400,delay:600},c.a.createElement(l.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},c.a.createElement("span",{className:"opacity-75"},"Our courses will step you through the process of building a small application, or adding a new feature to an existing application."))),c.a.createElement(o.a,{className:j.headerIcon},"school")),c.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},c.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24"},c.a.createElement(s.a,{label:"Search for a course",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:L,inputProps:{"aria-label":"Search"},onChange:function(e){Y(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),c.a.createElement(i.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},c.a.createElement(u.a,{htmlFor:"category-label-placeholder"},"Category"),c.a.createElement(m.a,{value:W,onChange:function(e){z(e.target.value)},input:c.a.createElement(d.a,{labelWidth:9*"category".length,name:"category",id:"category-label-placeholder"})},c.a.createElement(f.a,{value:"all"},c.a.createElement("em",null,"All")),g.map(function(e){return c.a.createElement(f.a,{value:e.value,key:e.id},e.label)})))),Object(r.useMemo)(function(){return U&&(U.length>0?c.a.createElement(w.e,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-24"},U.map(function(e){var t=g.find(function(t){return t.value===e.category});return c.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e.id},c.a.createElement(p.a,{elevation:1,className:"flex flex-col h-256"},c.a.createElement("div",{className:"flex flex-shrink-0 items-center justify-between px-24 h-64",style:{background:t.color,color:P.palette.getContrastText(t.color)}},c.a.createElement(l.a,{className:"font-medium truncate",color:"inherit"},t.label),c.a.createElement("div",{className:"flex items-center justify-center opacity-75"},c.a.createElement(o.a,{className:"text-20 mr-8",color:"inherit"},"access_time"),c.a.createElement("div",{className:"text-16 whitespace-no-wrap"},e.length," min"))),c.a.createElement(E.a,{className:"flex flex-col flex-auto items-center justify-center"},c.a.createElement(l.a,{className:"text-center text-16 font-400"},e.title),c.a.createElement(l.a,{className:"text-center text-13 font-600 mt-4",color:"textSecondary"},e.updated)),c.a.createElement(y.a,null),c.a.createElement(h.a,{className:"justify-center"},c.a.createElement(x.a,{to:"/apps/academy/courses/".concat(e.id,"/").concat(e.slug),component:C.a,className:"justify-start px-32",color:"secondary"},function(e){switch(e.activeStep){case e.totalSteps:return"COMPLETED";case 0:return"START";default:return"CONTINUE"}}(e))),c.a.createElement(b.a,{className:"w-full",variant:"determinate",value:100*e.activeStep/e.totalSteps,color:"secondary"})))})):c.a.createElement("div",{className:"flex flex-1 items-center justify-center"},c.a.createElement(l.a,{color:"textSecondary",className:"text-24 my-24"},"No courses found!")))},[g,U,P.palette])))})}}]);