(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1033:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(1030),l=t(183);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,a()({defaultTheme:l.a},n))}},1040:function(e,n){e.exports=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};o.get||o.set?Object.defineProperty(n,t,o):n[t]=e[t]}return n.default=e,n}},1059:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};n.default=o},1156:function(e,n,t){"use strict";(function(e){var o,a=t(246),r=t.n(a);t(500),t(501),t(503),t(505),t(502),t(504),t(1137),t(1138);e.browser&&((o=document.createElement("style")).setAttribute("data-prism","true"),document.head&&document.head.appendChild(o)),n.a=r.a}).call(this,t(51))},1160:function(e,n,t){"use strict";var o=t(186),a=t(8),r=t(0),l=t.n(r),i=t(1030),c=t(3),p=t(1215),s=t.n(p),m=t(1156);s.a.Lexer.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u2424/g,"\n"),this.token(e,!0)};var u=new s.a.Renderer;u.heading=function(e,n){if(n>=4)return"<h".concat(n,">").concat(e,"</h").concat(n,">");var t=e.toLowerCase().replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>/g,"").replace(/[^\w]+/g,"-");return"\n    <h".concat(n,'>\n      <a class="anchor-link" id="').concat(t,'"></a>').concat(e)+'<a class="anchor-link-style" href="#'.concat(t,'">\n        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M46.9 13.9c-.5-.6-1.2-.94-2.07-.94h-6.67l1.86-8.98c.17-.85 0-1.7-.52-2.3-.48-.6-1.2-.94-2.07-.94-1.6 0-3.2 1.27-3.54 2.93l-.5 2.42c0 .07-.07.13-.07.2l-1.37 6.62H20.7l1.88-8.96c.16-.85 0-1.7-.53-2.3-.48-.6-1.2-.94-2.07-.94-1.65 0-3.2 1.27-3.56 2.93l-.52 2.58v.08l-1.37 6.64H7.3c-1.67 0-3.22 1.3-3.58 2.96-.16.86 0 1.7.52 2.3.48.6 1.2.93 2.07.93h6.97l-2 9.65H4c-1.67 0-3.22 1.27-3.56 2.94-.2.8 0 1.67.5 2.27.5.6 1.2.93 2.08.93H10l-1.84 9.05c-.2.84 0 1.67.52 2.3.5.6 1.25.92 2.08.92 1.66 0 3.2-1.3 3.55-2.94l1.94-9.33h11.22l-1.87 9.05c-.15.84.03 1.67.53 2.3.5.6 1.2.92 2.07.92 1.65 0 3.22-1.3 3.56-2.94l1.9-9.33h7c1.6 0 3.2-1.28 3.53-2.93.2-.87 0-1.7-.52-2.3-.48-.62-1.2-.96-2.05-.96h-6.7l2.02-9.65h6.93c1.67 0 3.22-1.27 3.56-2.92.2-.85 0-1.7-.5-2.3l-.04.03zM17.53 28.77l1.95-9.65H30.7l-1.97 9.66H17.5h.03z"/></svg>\n      </a></h').concat(n,">\n  ")},s.a.setOptions({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(e,n){var t;switch(n){case"diff":t=m.a.languages.diff;break;case"css":t=m.a.languages.css;break;case"ts":case"tsx":t=m.a.languages.typescript;break;case"js":case"jsx":default:t=m.a.languages.jsx}return m.a.highlight(e,t)},renderer:u});var h=Object(i.a)(function(e){return{root:{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"& .anchor-link":{marginTop:-96,position:"absolute"},'& pre, & pre[class*="language-"]':{margin:"24px 0",padding:"12px 18px",backgroundColor:e.palette.background.paper,borderRadius:e.shape.borderRadius,overflow:"auto",WebkitOverflowScrolling:"touch"},"& code":{display:"inline-block",lineHeight:1.6,fontFamily:'Consolas, "Liberation Mono", Menlo, Courier, monospace',padding:"3px 6px",color:e.palette.text.primary,backgroundColor:e.palette.background.paper,fontSize:14},"& p code, & ul code, & pre code":{fontSize:14,lineHeight:1.6},"& h1":Object(a.a)({},e.typography.display2,{color:e.palette.text.secondary,margin:"32px 0 16px"}),"& .description":Object(a.a)({},e.typography.headline,{margin:"0 0 40px"}),"& h2":Object(a.a)({},e.typography.display1,{color:e.palette.text.secondary,margin:"32px 0 24px"}),"& h3":Object(a.a)({},e.typography.headline,{color:e.palette.text.secondary,margin:"32px 0 24px"}),"& h4":Object(a.a)({},e.typography.title,{color:e.palette.text.secondary,margin:"24px 0 16px"}),"& p, & ul, & ol":{lineHeight:1.6},"& h1, & h2, & h3, & h4":{"& code":{fontSize:"inherit",lineHeight:"inherit",wordBreak:"break-word"},"& .anchor-link-style":{opacity:0,display:"none"},"&:hover .anchor-link-style":{display:"inline-block",opacity:1,padding:"0 8px",color:e.palette.text.hint,"&:hover":{color:e.palette.text.secondary},"& svg":{width:"0.55em",height:"0.55em",fill:"currentColor"}}},"& table":{width:"100%",display:"block",overflowX:"auto",WebkitOverflowScrolling:"touch",borderCollapse:"collapse",borderSpacing:0,overflow:"hidden","& .prop-name":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace'},"& .required":{color:"light"===e.palette.type?"#006500":"#9BC89B"},"& .prop-type":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',color:"light"===e.palette.type?"#932981":"#DBB0D0"},"& .prop-default":{fontSize:13,fontFamily:'Consolas, "Liberation Mono", Menlo, monospace',borderBottom:"1px dotted ".concat(e.palette.text.hint)}},"& thead":{fontSize:14,fontWeight:e.typography.fontWeightMedium,color:e.palette.text.secondary},"& tbody":{fontSize:14,lineHeight:1.5,color:e.palette.text.primary},"& td":{borderBottom:"1px solid ".concat(e.palette.divider),padding:"8px 16px 8px 8px",textAlign:"left"},"& td:last-child":{paddingRight:24},"& td compact":{paddingRight:24},"& td code":{fontSize:13,lineHeight:1.6},"& th":{whiteSpace:"pre",borderBottom:"1px solid ".concat(e.palette.divider),fontWeight:e.typography.fontWeightMedium,padding:"0 16px 0 8px",textAlign:"left"},"& th:last-child":{paddingRight:24},"& tr":{height:48},"& thead tr":{height:64},"& strong":{fontWeight:e.typography.fontWeightMedium},"& blockquote":{borderLeft:"5px solid ".concat(e.palette.text.hint),backgroundColor:e.palette.background.paper,padding:"4px 24px",margin:"24px 0"},"& a, & a code":{color:e.palette.secondary.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},"& img":{maxWidth:"100%"}}}});var d=function(e){var n=h(),t=e.className,a=e.text,r=Object(o.a)(e,["className","text"]);return l.a.createElement("div",Object.assign({className:Object(c.a)(n.root,"markdown-body",t),dangerouslySetInnerHTML:{__html:s()(a)}},r))};t.d(n,"a",function(){return d})},1196:function(e,n,t){"use strict";var o=t(1040),a=t(328);Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"bindTrigger",{enumerable:!0,get:function(){return f.bindTrigger}}),Object.defineProperty(n,"bindToggle",{enumerable:!0,get:function(){return f.bindToggle}}),Object.defineProperty(n,"bindHover",{enumerable:!0,get:function(){return f.bindHover}}),Object.defineProperty(n,"bindMenu",{enumerable:!0,get:function(){return f.bindMenu}}),Object.defineProperty(n,"bindPopover",{enumerable:!0,get:function(){return f.bindPopover}}),Object.defineProperty(n,"bindPopper",{enumerable:!0,get:function(){return f.bindPopper}}),n.default=void 0;var r=a(t(164)),l=a(t(62)),i=a(t(63)),c=a(t(83)),p=a(t(84)),s=a(t(85)),m=a(t(114)),u=a(t(23)),h=o(t(0)),d=a(t(1)),f=t(1197),g=function(e){function n(){var e,t;(0,l.default)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=(0,c.default)(this,(e=(0,p.default)(n)).call.apply(e,[this].concat(a))),(0,u.default)((0,m.default)((0,m.default)(t)),"state",f.initCoreState),(0,u.default)((0,m.default)((0,m.default)(t)),"_mounted",!0),(0,u.default)((0,m.default)((0,m.default)(t)),"_setStateIfMounted",function(e){t._mounted&&t.setState(e)}),t}return(0,s.default)(n,e),(0,i.default)(n,[{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentDidUpdate",value:function(e,n){var t=this.props.popupId;if((t!==e.popupId||this.state.anchorEl!==n.anchorEl)&&t&&"object"===("undefined"===typeof document?"undefined":(0,r.default)(document))){var o=document.getElementById(t);o&&o.focus()}}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.popupId,o=e.variant,a=e.parentPopupState,r=n((0,f.createPopupState)({state:this.state,setState:this._setStateIfMounted,popupId:t,variant:o,parentPopupState:a}));return null==r?null:r}}]),n}(h.Component);n.default=g,(0,u.default)(g,"propTypes",{children:d.default.func.isRequired,popupId:d.default.string,variant:d.default.oneOf(["popover","popper"]).isRequired,parentPopupState:d.default.object})},1197:function(e,n,t){"use strict";var o=t(1040),a=t(328);Object.defineProperty(n,"__esModule",{value:!0}),n.createPopupState=function(e){var n=e.state,t=n.anchorEl,o=n.hovered,a=n._childPopupState,r=e.setState,c=e.parentPopupState,p=e.popupId,s=e.variant,u=function(e){if(i||e||(i=!0,console.error("eventOrAnchorEl should be defined")),c){if(!c.isOpen)return;c._setChildPopupState(d)}"object"===("undefined"===typeof document?"undefined":(0,l.default)(document))&&document.activeElement&&document.activeElement.blur(),r({anchorEl:e&&e.currentTarget?e.currentTarget:e,hovered:"mouseenter"===e.type})},h=function(){a&&a.close(),c&&c._setChildPopupState(null),r({anchorEl:null,hovered:!1})},d={anchorEl:t,popupId:p,variant:s,isOpen:null!=t,open:u,close:h,toggle:function(e){t?h():u(e)},setOpen:function(e,n){if(e){if(!n)throw new Error("eventOrAnchorEl must be defined when opening");u(n)}else h()},onMouseLeave:function(e){var n=e.relatedTarget;o&&!m(n,d)&&h()},_childPopupState:a,_setChildPopupState:function(e){return r({_childPopupState:e})}};return d},n.bindTrigger=function(e){var n,t=e.isOpen,o=e.open,a=e.popupId,l=e.variant;return n={},(0,r.default)(n,"popover"===l?"aria-owns":"aria-describedby",t?a:null),(0,r.default)(n,"aria-haspopup",!0),(0,r.default)(n,"onClick",o),n},n.bindToggle=function(e){var n,t=e.isOpen,o=e.toggle,a=e.popupId,l=e.variant;return n={},(0,r.default)(n,"popover"===l?"aria-owns":"aria-describedby",t?a:null),(0,r.default)(n,"aria-haspopup",!0),(0,r.default)(n,"onClick",o),n},n.bindHover=function(e){var n,t=e.isOpen,o=e.open,a=e.onMouseLeave,l=e.popupId,i=e.variant;return n={},(0,r.default)(n,"popover"===i?"aria-owns":"aria-describedby",t?l:null),(0,r.default)(n,"aria-haspopup",!0),(0,r.default)(n,"onMouseEnter",o),(0,r.default)(n,"onMouseLeave",a),n},n.bindPopover=c,n.bindPopper=function(e){var n=e.isOpen,t=e.anchorEl;return{id:e.popupId,anchorEl:t,open:n}},n.bindMenu=n.initCoreState=void 0;var r=a(t(23)),l=a(t(164)),i=(o(t(0)),!1);function c(e){var n=e.isOpen,t=e.anchorEl,o=e.close;return{id:e.popupId,anchorEl:t,open:n,onClose:o,onMouseLeave:e.onMouseLeave}}n.initCoreState={anchorEl:null,hovered:!1,_childPopupState:null};var p=c;function s(e){var n=e.popupId;return n&&typeof document!=="undefined"?document.getElementById(n):null}function m(e,n){var t=n.anchorEl,o=n._childPopupState;return u(t,e)||u(s(n),e)||o!=null&&m(e,o)}function u(e,n){if(!e)return!1;for(;n;){if(n===e)return!0;n=n.parentElement}return!1}n.bindMenu=p},1731:function(e,n,t){"use strict";t.r(n);var o=t(15),a=t(0),r=t.n(a),l=t(1033),i=t(511),c=t(124),p=t(1010),s=Object(l.a)(function(e){return{typography:{padding:e.spacing(2)}}});n.default=function(){var e=s(),n=r.a.useState(null),t=Object(o.a)(n,2),a=t[0],l=t[1],m=Boolean(a),u=m?"simple-popover":null;return r.a.createElement("div",null,r.a.createElement(p.a,{"aria-describedby":u,variant:"contained",onClick:function(e){l(e.currentTarget)}},"Open Popover"),r.a.createElement(i.a,{id:u,open:m,anchorEl:a,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(c.a,{className:e.typography},"The content of the Popover.")))}},1732:function(e,n){e.exports="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Popover from '@material-ui/core/Popover';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\n\nconst useStyles = makeStyles(theme => ({\n  typography: {\n    padding: theme.spacing(2),\n  },\n}));\n\nfunction SimplePopover() {\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  }\n\n  function handleClose() {\n    setAnchorEl(null);\n  }\n\n  const open = Boolean(anchorEl);\n  const id = open ? 'simple-popover' : null;\n\n  return (\n    <div>\n      <Button aria-describedby={id} variant=\"contained\" onClick={handleClick}>\n        Open Popover\n      </Button>\n      <Popover\n        id={id}\n        open={open}\n        anchorEl={anchorEl}\n        onClose={handleClose}\n        anchorOrigin={{\n          vertical: 'bottom',\n          horizontal: 'center',\n        }}\n        transformOrigin={{\n          vertical: 'top',\n          horizontal: 'center',\n        }}\n      >\n        <Typography className={classes.typography}>The content of the Popover.</Typography>\n      </Popover>\n    </div>\n  );\n}\n\nexport default SimplePopover;\n"},1733:function(e,n,t){"use strict";t.r(n);var o=t(8),a=t(27),r=t(42),l=t(43),i=t(73),c=t(72),p=t(74),s=t(0),m=t.n(s),u=t(7),h=t(509),d=t(519),f=t(999),g=t(998),v=t(1015),b=t(1160),y=t(1068),E=t(1059),O=t.n(E),C=t(124),P=t(1010),x=t(511),R=t(343),S=t(523),w={anchorVertical:{top:{top:-5},center:{top:"calc(50% - 5px)"},bottom:{bottom:-5}},anchorHorizontal:{left:{left:-5},center:{left:"calc(50% - 5px)"},right:{right:-5}}},k=function(e){function n(){var e,t;Object(r.a)(this,n);for(var o=arguments.length,l=new Array(o),p=0;p<o;p++)l[p]=arguments[p];return(t=Object(i.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(l)))).anchorRef=m.a.createRef(),t.state={open:!1,anchorOriginVertical:"top",anchorOriginHorizontal:"left",transformOriginVertical:"top",transformOriginHorizontal:"left",positionTop:200,positionLeft:400,anchorReference:"anchorEl"},t.handleChange=function(e){return function(n,o){t.setState(Object(a.a)({},e,o))}},t.handleNumberInputChange=function(e){return function(n){t.setState(Object(a.a)({},e,parseInt(n.target.value,10)))}},t.handleClickButton=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state,t=n.open,a=n.anchorOriginVertical,r=n.anchorOriginHorizontal,l=n.transformOriginVertical,i=n.transformOriginHorizontal,c=n.positionTop,p=n.positionLeft,s=n.anchorReference,u="";"anchorPosition"===s&&(u='\n  anchorReference="'.concat(s,'"\n  anchorPosition={{ top: ').concat(c,", left: ").concat(p," }}"));var E="\n```jsx\n<Popover ".concat(u,"\n  anchorOrigin={{\n    vertical: '").concat(a,"',\n    horizontal: '").concat(r,"',\n  }}\n  transformOrigin={{\n    vertical: '").concat(l,"',\n    horizontal: '").concat(i,"',\n  }}\n>\n  The content of the Popover.\n</Popover>\n```\n"),O={root:e.radioAnchor,checked:e.checked};return m.a.createElement("div",null,m.a.createElement(y.a,{container:!0,justify:"center"},m.a.createElement(y.a,{item:!0,className:e.buttonWrapper},m.a.createElement(P.a,{ref:this.anchorRef,variant:"contained",onClick:this.handleClickButton},"Open Popover"),"anchorEl"===s&&m.a.createElement("div",{className:e.anchor,style:Object(o.a)({},w.anchorVertical[a],w.anchorHorizontal[r])}))),m.a.createElement(x.a,{open:t,anchorEl:this.anchorRef.current,anchorReference:s,anchorPosition:{top:c,left:p},onClose:this.handleClose,anchorOrigin:{vertical:a,horizontal:r},transformOrigin:{vertical:l,horizontal:i}},m.a.createElement(C.a,{className:e.typography},"The content of the Popover.")),m.a.createElement(y.a,{container:!0,spacing:2},m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{component:"fieldset"},m.a.createElement(d.a,{component:"legend"},"anchorReference"),m.a.createElement(g.a,{row:!0,"aria-label":"anchorReference",name:"anchorReference",value:s,onChange:this.handleChange("anchorReference")},m.a.createElement(f.a,{value:"anchorEl",control:m.a.createElement(v.a,null),label:"anchorEl"}),m.a.createElement(f.a,{value:"anchorPosition",control:m.a.createElement(v.a,null),label:"anchorPosition"})))),m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{className:e.formControl},m.a.createElement(S.a,{htmlFor:"position-top"},"anchorPosition.top"),m.a.createElement(R.a,{id:"position-top",type:"number",value:c,onChange:this.handleNumberInputChange("positionTop")})),"\xa0",m.a.createElement(h.a,{className:e.formControl},m.a.createElement(S.a,{htmlFor:"position-left"},"anchorPosition.left"),m.a.createElement(R.a,{id:"position-left",type:"number",value:p,onChange:this.handleNumberInputChange("positionLeft")}))),m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{component:"fieldset"},m.a.createElement(d.a,{component:"legend"},"anchorOrigin.vertical"),m.a.createElement(g.a,{"aria-label":"anchorOriginVertical",name:"anchorOriginVertical",value:a,onChange:this.handleChange("anchorOriginVertical")},m.a.createElement(f.a,{value:"top",control:m.a.createElement(v.a,{classes:O}),label:"Top"}),m.a.createElement(f.a,{value:"center",control:m.a.createElement(v.a,{classes:O}),label:"Center"}),m.a.createElement(f.a,{value:"bottom",control:m.a.createElement(v.a,{classes:O}),label:"Bottom"})))),m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{component:"fieldset"},m.a.createElement(d.a,{component:"legend"},"transformOrigin.vertical"),m.a.createElement(g.a,{"aria-label":"transformOriginVertical",name:"transformOriginVertical",value:l,onChange:this.handleChange("transformOriginVertical")},m.a.createElement(f.a,{value:"top",control:m.a.createElement(v.a,{color:"primary"}),label:"Top"}),m.a.createElement(f.a,{value:"center",control:m.a.createElement(v.a,{color:"primary"}),label:"Center"}),m.a.createElement(f.a,{value:"bottom",control:m.a.createElement(v.a,{color:"primary"}),label:"Bottom"})))),m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{component:"fieldset"},m.a.createElement(d.a,{component:"legend"},"anchorOrigin.horizontal"),m.a.createElement(g.a,{row:!0,"aria-label":"anchorOriginHorizontal",name:"anchorOriginHorizontal",value:r,onChange:this.handleChange("anchorOriginHorizontal")},m.a.createElement(f.a,{value:"left",control:m.a.createElement(v.a,{classes:O}),label:"Left"}),m.a.createElement(f.a,{value:"center",control:m.a.createElement(v.a,{classes:O}),label:"Center"}),m.a.createElement(f.a,{value:"right",control:m.a.createElement(v.a,{classes:O}),label:"Right"})))),m.a.createElement(y.a,{item:!0,xs:12,sm:6},m.a.createElement(h.a,{component:"fieldset"},m.a.createElement(d.a,{component:"legend"},"transformOrigin.horizontal"),m.a.createElement(g.a,{row:!0,"aria-label":"transformOriginHorizontal",name:"transformOriginHorizontal",value:i,onChange:this.handleChange("transformOriginHorizontal")},m.a.createElement(f.a,{value:"left",control:m.a.createElement(v.a,{color:"primary"}),label:"Left"}),m.a.createElement(f.a,{value:"center",control:m.a.createElement(v.a,{color:"primary"}),label:"Center"}),m.a.createElement(f.a,{value:"right",control:m.a.createElement(v.a,{color:"primary"}),label:"Right"}))))),m.a.createElement(b.a,{text:E}))}}]),n}(m.a.Component);n.default=Object(u.a)(function(e){return{buttonWrapper:{position:"relative",marginBottom:e.spacing(4)},anchor:{backgroundColor:O.a[500],width:10,height:10,borderRadius:"50%",position:"absolute"},radioAnchor:{color:O.a[600],"&$checked":{color:O.a[500]}},checked:{},typography:{margin:e.spacing(2)}}})(k)},1734:function(e,n){e.exports='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport Radio from \'@material-ui/core/Radio\';\nimport MarkdownElement from \'app/main/documentation/material-ui-components/MarkdownElement\';\nimport Grid from \'@material-ui/core/Grid\';\nimport green from \'@material-ui/core/colors/green\';\nimport Typography from \'@material-ui/core/Typography\';\nimport Button from \'@material-ui/core/Button\';\nimport Popover from \'@material-ui/core/Popover\';\nimport Input from \'@material-ui/core/Input\';\nimport InputLabel from \'@material-ui/core/InputLabel\';\n\nconst styles = theme => ({\n  buttonWrapper: {\n    position: \'relative\',\n    marginBottom: theme.spacing(4),\n  },\n  anchor: {\n    backgroundColor: green[500],\n    width: 10,\n    height: 10,\n    borderRadius: \'50%\',\n    position: \'absolute\',\n  },\n  radioAnchor: {\n    color: green[600],\n    \'&$checked\': {\n      color: green[500],\n    },\n  },\n  checked: {},\n  typography: {\n    margin: theme.spacing(2),\n  },\n});\n\nconst inlineStyles = {\n  anchorVertical: {\n    top: {\n      top: -5,\n    },\n    center: {\n      top: \'calc(50% - 5px)\',\n    },\n    bottom: {\n      bottom: -5,\n    },\n  },\n  anchorHorizontal: {\n    left: {\n      left: -5,\n    },\n    center: {\n      left: \'calc(50% - 5px)\',\n    },\n    right: {\n      right: -5,\n    },\n  },\n};\n\nclass AnchorPlayground extends React.Component {\n  anchorRef = React.createRef();\n\n  state = {\n    open: false,\n    anchorOriginVertical: \'top\',\n    anchorOriginHorizontal: \'left\',\n    transformOriginVertical: \'top\',\n    transformOriginHorizontal: \'left\',\n    positionTop: 200, // Just so the popover can be spotted more easily\n    positionLeft: 400, // Same as above\n    anchorReference: \'anchorEl\',\n  };\n\n  handleChange = key => (event, value) => {\n    this.setState({\n      [key]: value,\n    });\n  };\n\n  handleNumberInputChange = key => event => {\n    this.setState({\n      [key]: parseInt(event.target.value, 10),\n    });\n  };\n\n  handleClickButton = () => {\n    this.setState({\n      open: true,\n    });\n  };\n\n  handleClose = () => {\n    this.setState({\n      open: false,\n    });\n  };\n\n  render() {\n    const { classes } = this.props;\n    const {\n      open,\n      anchorOriginVertical,\n      anchorOriginHorizontal,\n      transformOriginVertical,\n      transformOriginHorizontal,\n      positionTop,\n      positionLeft,\n      anchorReference,\n    } = this.state;\n\n    let mode = \'\';\n\n    if (anchorReference === \'anchorPosition\') {\n      mode = `\n  anchorReference="${anchorReference}"\n  anchorPosition={{ top: ${positionTop}, left: ${positionLeft} }}`;\n    }\n\n    const code = `\n\\`\\`\\`jsx\n<Popover ${mode}\n  anchorOrigin={{\n    vertical: \'${anchorOriginVertical}\',\n    horizontal: \'${anchorOriginHorizontal}\',\n  }}\n  transformOrigin={{\n    vertical: \'${transformOriginVertical}\',\n    horizontal: \'${transformOriginHorizontal}\',\n  }}\n>\n  The content of the Popover.\n</Popover>\n\\`\\`\\`\n`;\n\n    const radioAnchorClasses = { root: classes.radioAnchor, checked: classes.checked };\n\n    return (\n      <div>\n        <Grid container justify="center">\n          <Grid item className={classes.buttonWrapper}>\n            <Button ref={this.anchorRef} variant="contained" onClick={this.handleClickButton}>\n              Open Popover\n            </Button>\n            {anchorReference === \'anchorEl\' && (\n              <div\n                className={classes.anchor}\n                style={{\n                  ...inlineStyles.anchorVertical[anchorOriginVertical],\n                  ...inlineStyles.anchorHorizontal[anchorOriginHorizontal],\n                }}\n              />\n            )}\n          </Grid>\n        </Grid>\n        <Popover\n          open={open}\n          anchorEl={this.anchorRef.current}\n          anchorReference={anchorReference}\n          anchorPosition={{ top: positionTop, left: positionLeft }}\n          onClose={this.handleClose}\n          anchorOrigin={{\n            vertical: anchorOriginVertical,\n            horizontal: anchorOriginHorizontal,\n          }}\n          transformOrigin={{\n            vertical: transformOriginVertical,\n            horizontal: transformOriginHorizontal,\n          }}\n        >\n          <Typography className={classes.typography}>The content of the Popover.</Typography>\n        </Popover>\n        <Grid container spacing={2}>\n          <Grid item xs={12} sm={6}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">anchorReference</FormLabel>\n              <RadioGroup\n                row\n                aria-label="anchorReference"\n                name="anchorReference"\n                value={anchorReference}\n                onChange={this.handleChange(\'anchorReference\')}\n              >\n                <FormControlLabel value="anchorEl" control={<Radio />} label="anchorEl" />\n                <FormControlLabel\n                  value="anchorPosition"\n                  control={<Radio />}\n                  label="anchorPosition"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} sm={6}>\n            <FormControl className={classes.formControl}>\n              <InputLabel htmlFor="position-top">anchorPosition.top</InputLabel>\n              <Input\n                id="position-top"\n                type="number"\n                value={positionTop}\n                onChange={this.handleNumberInputChange(\'positionTop\')}\n              />\n            </FormControl>\n            &nbsp;\n            <FormControl className={classes.formControl}>\n              <InputLabel htmlFor="position-left">anchorPosition.left</InputLabel>\n              <Input\n                id="position-left"\n                type="number"\n                value={positionLeft}\n                onChange={this.handleNumberInputChange(\'positionLeft\')}\n              />\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} sm={6}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">anchorOrigin.vertical</FormLabel>\n              <RadioGroup\n                aria-label="anchorOriginVertical"\n                name="anchorOriginVertical"\n                value={anchorOriginVertical}\n                onChange={this.handleChange(\'anchorOriginVertical\')}\n              >\n                <FormControlLabel\n                  value="top"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Top"\n                />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Center"\n                />\n                <FormControlLabel\n                  value="bottom"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Bottom"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} sm={6}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">transformOrigin.vertical</FormLabel>\n              <RadioGroup\n                aria-label="transformOriginVertical"\n                name="transformOriginVertical"\n                value={transformOriginVertical}\n                onChange={this.handleChange(\'transformOriginVertical\')}\n              >\n                <FormControlLabel value="top" control={<Radio color="primary" />} label="Top" />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio color="primary" />}\n                  label="Center"\n                />\n                <FormControlLabel\n                  value="bottom"\n                  control={<Radio color="primary" />}\n                  label="Bottom"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} sm={6}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>\n              <RadioGroup\n                row\n                aria-label="anchorOriginHorizontal"\n                name="anchorOriginHorizontal"\n                value={anchorOriginHorizontal}\n                onChange={this.handleChange(\'anchorOriginHorizontal\')}\n              >\n                <FormControlLabel\n                  value="left"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Left"\n                />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Center"\n                />\n                <FormControlLabel\n                  value="right"\n                  control={<Radio classes={radioAnchorClasses} />}\n                  label="Right"\n                />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n          <Grid item xs={12} sm={6}>\n            <FormControl component="fieldset">\n              <FormLabel component="legend">transformOrigin.horizontal</FormLabel>\n              <RadioGroup\n                row\n                aria-label="transformOriginHorizontal"\n                name="transformOriginHorizontal"\n                value={transformOriginHorizontal}\n                onChange={this.handleChange(\'transformOriginHorizontal\')}\n              >\n                <FormControlLabel value="left" control={<Radio color="primary" />} label="Left" />\n                <FormControlLabel\n                  value="center"\n                  control={<Radio color="primary" />}\n                  label="Center"\n                />\n                <FormControlLabel value="right" control={<Radio color="primary" />} label="Right" />\n              </RadioGroup>\n            </FormControl>\n          </Grid>\n        </Grid>\n        <MarkdownElement text={code} />\n      </div>\n    );\n  }\n}\n\nAnchorPlayground.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(AnchorPlayground);\n'},1735:function(e,n,t){"use strict";t.r(n);var o=t(42),a=t(43),r=t(73),l=t(72),i=t(74),c=t(0),p=t.n(c),s=t(511),m=t(124),u=t(7),h=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=Object(r.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(i)))).state={anchorEl:null},t.handlePopoverOpen=function(e){t.setState({anchorEl:e.currentTarget})},t.handlePopoverClose=function(){t.setState({anchorEl:null})},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state.anchorEl,t=Boolean(n);return p.a.createElement("div",null,p.a.createElement(m.a,{"aria-owns":t?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:this.handlePopoverOpen,onMouseLeave:this.handlePopoverClose},"Hover with a Popover."),p.a.createElement(s.a,{id:"mouse-over-popover",className:e.popover,classes:{paper:e.paper},open:t,anchorEl:n,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:this.handlePopoverClose,disableRestoreFocus:!0},p.a.createElement(m.a,null,"I use Popover.")))}}]),n}(p.a.Component);n.default=Object(u.a)(function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}})(h)},1736:function(e,n){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Popover from '@material-ui/core/Popover';\nimport Typography from '@material-ui/core/Typography';\nimport { withStyles } from '@material-ui/core/styles';\n\nconst styles = theme => ({\n  popover: {\n    pointerEvents: 'none',\n  },\n  paper: {\n    padding: theme.spacing(1),\n  },\n});\n\nclass MouseOverPopover extends React.Component {\n  state = {\n    anchorEl: null,\n  };\n\n  handlePopoverOpen = event => {\n    this.setState({ anchorEl: event.currentTarget });\n  };\n\n  handlePopoverClose = () => {\n    this.setState({ anchorEl: null });\n  };\n\n  render() {\n    const { classes } = this.props;\n    const { anchorEl } = this.state;\n    const open = Boolean(anchorEl);\n\n    return (\n      <div>\n        <Typography\n          aria-owns={open ? 'mouse-over-popover' : undefined}\n          aria-haspopup=\"true\"\n          onMouseEnter={this.handlePopoverOpen}\n          onMouseLeave={this.handlePopoverClose}\n        >\n          Hover with a Popover.\n        </Typography>\n        <Popover\n          id=\"mouse-over-popover\"\n          className={classes.popover}\n          classes={{\n            paper: classes.paper,\n          }}\n          open={open}\n          anchorEl={anchorEl}\n          anchorOrigin={{\n            vertical: 'bottom',\n            horizontal: 'left',\n          }}\n          transformOrigin={{\n            vertical: 'top',\n            horizontal: 'left',\n          }}\n          onClose={this.handlePopoverClose}\n          disableRestoreFocus\n        >\n          <Typography>I use Popover.</Typography>\n        </Popover>\n      </div>\n    );\n  }\n}\n\nMouseOverPopover.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(MouseOverPopover);\n"},1737:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(7),l=t(124),i=t(1010),c=t(511),p=t(1196),s=t.n(p);n.default=Object(r.a)(function(e){return{typography:{margin:e.spacing(2)}}})(function(e){var n=e.classes;return a.a.createElement(s.a,{variant:"popover",popupId:"demo-popup-popover"},function(e){return a.a.createElement("div",null,a.a.createElement(i.a,Object.assign({variant:"contained"},Object(p.bindTrigger)(e)),"Open Popover"),a.a.createElement(c.a,Object.assign({},Object(p.bindPopover)(e),{anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}}),a.a.createElement(l.a,{className:n.typography},"The content of the Popover.")))})})},1738:function(e,n){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { withStyles } from '@material-ui/core/styles';\nimport Typography from '@material-ui/core/Typography';\nimport Button from '@material-ui/core/Button';\nimport Popover from '@material-ui/core/Popover';\nimport PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';\n\nconst styles = theme => ({\n  typography: {\n    margin: theme.spacing(2),\n  },\n});\n\nfunction PopoverPopupState(props) {\n  const { classes } = props;\n\n  return (\n    <PopupState variant=\"popover\" popupId=\"demo-popup-popover\">\n      {popupState => (\n        <div>\n          <Button variant=\"contained\" {...bindTrigger(popupState)}>\n            Open Popover\n          </Button>\n          <Popover\n            {...bindPopover(popupState)}\n            anchorOrigin={{\n              vertical: 'bottom',\n              horizontal: 'center',\n            }}\n            transformOrigin={{\n              vertical: 'top',\n              horizontal: 'center',\n            }}\n          >\n            <Typography className={classes.typography}>The content of the Popover.</Typography>\n          </Popover>\n        </div>\n      )}\n    </PopupState>\n  );\n}\n\nPopoverPopupState.propTypes = {\n  classes: PropTypes.object.isRequired,\n};\n\nexport default withStyles(styles)(PopoverPopupState);\n"},2177:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(12),l=t(992),i=t(124),c=t(1010),p=t(1030),s=Object(p.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});n.default=function(e){var n=s();return a.a.createElement(r.s,{classes:{root:n.layoutRoot},header:a.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},a.a.createElement("div",{className:"flex flex-col"},a.a.createElement("div",{className:"flex items-center mb-16"},a.a.createElement(l.a,{className:"text-18",color:"action"},"home"),a.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),a.a.createElement(i.a,{color:"textSecondary"},"Documentation"),a.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),a.a.createElement(i.a,{color:"textSecondary"},"Material UI Components")),a.a.createElement(i.a,{variant:"h6"},"Popover")),a.a.createElement(c.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/popover",target:"_blank"},a.a.createElement(l.a,{className:"mr-4"},"link"),"Reference")),content:a.a.createElement("div",{className:"p-24 max-w-2xl"},a.a.createElement(i.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Popover"),a.a.createElement(i.a,{className:"description"},"A Popover can be used to display some content on top of another."),a.a.createElement(i.a,{className:"mb-16",component:"div"},"Things to know when using the ",a.a.createElement("code",null,"Popover")," component:"),a.a.createElement("ul",null,a.a.createElement("li",null,"The component is built on top of the ",a.a.createElement("a",{href:"/components/modal/"},a.a.createElement("code",null,"Modal"))," component."),a.a.createElement("li",null,"The scroll and click away are blocked unlike with the ",a.a.createElement("a",{href:"/components/popper/"},a.a.createElement("code",null,"Popper"))," component.")),a.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple Popover"),a.a.createElement(i.a,{className:"mb-16",component:"div"},a.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1731).default,raw:t(1732)})),a.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Anchor playground"),a.a.createElement(i.a,{className:"mb-16",component:"div"},"Use the radio buttons to adjust the ",a.a.createElement("code",null,"anchorOrigin")," and ",a.a.createElement("code",null,"transformOrigin")," positions. You can also set the ",a.a.createElement("code",null,"anchorReference")," to ",a.a.createElement("code",null,"anchorPosition")," or ",a.a.createElement("code",null,"anchorEl"),". When it is ",a.a.createElement("code",null,"anchorPosition"),", the component will, instead of ",a.a.createElement("code",null,"anchorEl"),", refer to the ",a.a.createElement("code",null,"anchorPosition")," prop which you can adjust to set the position of the popover."),a.a.createElement(i.a,{className:"mb-16",component:"div"},a.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1733).default,raw:t(1734)})),a.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Mouse over interaction"),a.a.createElement(i.a,{className:"mb-16",component:"div"},"We demonstrate how to use the ",a.a.createElement("code",null,"Popover")," component to implement a popover behavior based on the mouse over event."),a.a.createElement(i.a,{className:"mb-16",component:"div"},a.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1735).default,raw:t(1736)})),a.a.createElement(i.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Complementary projects"),a.a.createElement(i.a,{className:"mb-16",component:"div"},"For more advanced use cases you might be able to take advantage of:"),a.a.createElement(i.a,{className:"text-24 mt-32 mb-8",component:"h3"},"PopupState helper"),a.a.createElement(i.a,{className:"mb-16",component:"div"},"There is a 3rd party package ",a.a.createElement("a",{href:"https://github.com/jcoreio/material-ui-popup-state"},a.a.createElement("code",null,"material-ui-popup-state"))," that takes care of popover state for you in most cases."),a.a.createElement(i.a,{className:"mb-16",component:"div"},a.a.createElement(r.j,{className:"my-24",iframe:!1,component:t(1737).default,raw:t(1738)})))})}}}]);