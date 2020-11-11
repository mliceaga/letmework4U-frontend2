(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1033:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(1030),i=t(183);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,o()({defaultTheme:i.a},a))}},1148:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(0),i=t.n(r),c=(t(1),t(1033)),m=Object(c.a)(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightMedium},body:o()({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})}}},{name:"MuiCssBaseline"});a.a=function(e){var a=e.children,t=void 0===a?null:a;return m(),i.a.createElement(i.a.Fragment,null,t)}},1193:function(e,a,t){"use strict";var n=t(2),o=t.n(n),r=t(4),i=t.n(r),c=t(23),m=t.n(c),l=t(0),s=t.n(l),d=(t(1),t(3)),p=t(7),u=t(10),f=s.a.forwardRef(function(e,a){var t=e.classes,n=e.className,r=e.component,c=void 0===r?"div":r,m=e.fixed,l=void 0!==m&&m,p=e.maxWidth,f=void 0===p?"lg":p,h=i()(e,["classes","className","component","fixed","maxWidth"]);return s.a.createElement(c,o()({className:Object(d.a)(t.root,l&&t.fixed,!1!==f&&t["maxWidth".concat(Object(u.a)(String(f)))],n),ref:a},h))});a.a=Object(p.a)(function(e){var a;return{root:(a={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},m()(a,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),m()(a,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),a),fixed:Object.keys(e.breakpoints.values).reduce(function(a,t){var n=e.breakpoints.values[t];return 0!==n&&(a[e.breakpoints.up(t)]={maxWidth:n}),a},{}),maxWidthXs:m()({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:m()({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:m()({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:m()({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:m()({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(f)},1566:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(1148),i=t(124),c=t(1193);a.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(c.a,{maxWidth:"sm"},o.a.createElement(i.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}},1567:function(e,a){e.exports="import React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Typography from '@material-ui/core/Typography';\nimport Container from '@material-ui/core/Container';\n\nfunction SimpleContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container maxWidth=\"sm\">\n        <Typography component=\"div\" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n\nexport default SimpleContainer;\n"},1568:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(1148),i=t(124),c=t(1193);a.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,null),o.a.createElement(c.a,{fixed:!0},o.a.createElement(i.a,{component:"div",style:{backgroundColor:"#cfe8fc",height:"100vh"}})))}},1569:function(e,a){e.exports="import React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\nimport Typography from '@material-ui/core/Typography';\nimport Container from '@material-ui/core/Container';\n\nfunction FixedContainer() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      <Container fixed>\n        <Typography component=\"div\" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />\n      </Container>\n    </React.Fragment>\n  );\n}\n\nexport default FixedContainer;\n"},2161:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(12),i=t(992),c=t(124),m=t(1010),l=t(1030),s=Object(l.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=s();return o.a.createElement(r.s,{classes:{root:a.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(i.a,{className:"text-18",color:"action"},"home"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Documentation"),o.a.createElement(i.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(c.a,{variant:"h6"},"Container")),o.a.createElement(m.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/container",target:"_blank"},o.a.createElement(i.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Container"),o.a.createElement(c.a,{className:"description"},"The container centers your content horizontally. It's the most basic layout element."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"While containers can be nested, most layouts do not require a nested container."),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fluid"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"A fluid container width is bounded by that ",o.a.createElement("code",null,"maxWidth")," property value."),o.a.createElement(r.k,{component:"pre",className:"language-jsx"},' \n<Container maxWidth="sm">\n'),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!0,component:t(1566).default,raw:t(1567)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Fixed"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the ",o.a.createElement("code",null,"fixed")," property. The max-width matches the min-width of the current breakpoint."),o.a.createElement(r.k,{component:"pre",className:"language-jsx"}," \n<Container fixed>\n"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(r.j,{className:"my-24",iframe:!0,component:t(1568).default,raw:t(1569)})))})}}}]);