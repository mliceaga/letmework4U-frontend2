(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{2154:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),c=a(992),r=a(124),m=a(1010),s=a(1030),i=Object(s.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});t.default=function(e){var t=i();return l.a.createElement(o.s,{classes:{root:t.layoutRoot},header:l.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"flex items-center mb-16"},l.a.createElement(c.a,{className:"text-18",color:"action"},"home"),l.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(r.a,{color:"textSecondary"},"Documentation"),l.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),l.a.createElement(r.a,{color:"textSecondary"},"Material UI Components")),l.a.createElement(r.a,{variant:"h6"},"Box")),l.a.createElement(m.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/box",target:"_blank"},l.a.createElement(c.a,{className:"mr-4"},"link"),"Reference")),content:l.a.createElement("div",{className:"p-24 max-w-2xl"},l.a.createElement(r.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Box"),l.a.createElement(r.a,{className:"description"},"The Box component serves as a wrapper component for most of the CSS utility needs."),l.a.createElement(r.a,{className:"mb-16",component:"div"},"The Box component packages ",l.a.createElement("a",{href:"/system/basics/#all-inclusive"},"all the style functions")," that are exposed in ",l.a.createElement("code",null,"@material-ui/system"),". It's created using the ",l.a.createElement("a",{href:"/styles/api/#styled-style-function-component"},l.a.createElement("code",null,"styled()"))," function of ",l.a.createElement("code",null,"@material-ui/styles"),"."),l.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Example"),l.a.createElement(r.a,{className:"mb-16",component:"div"},l.a.createElement("a",{href:"/system/palette/"},"The palette")," style function."),l.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Overriding Material-UI components"),l.a.createElement(r.a,{className:"mb-16",component:"div"},"The Box component wraps your component. It creates a new DOM element, a ",l.a.createElement("code",null,"&lt;div&gt;")," by default that can be changed with the ",l.a.createElement("code",null,"component")," property. Let's say you want to use a ",l.a.createElement("code",null,"&lt;span&gt;")," instead:"),l.a.createElement(o.k,{component:"pre",className:"language-jsx"},' \n<Box component="span" m={1}>\n  <Button />\n</Box>\n'),l.a.createElement(r.a,{className:"mb-16",component:"div"},"This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way."),l.a.createElement(r.a,{className:"mb-16",component:"div"},"However, sometimes you have to target the underlying DOM element. For instance, you want to change the text color of the button. The Button component defines its own color. CSS inheritance doesn't help. To workaround the problem, you have two options:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Use ",l.a.createElement("a",{href:"https://reactjs.org/docs/react-api.html#cloneelement"},l.a.createElement("code",null,"React.cloneElement()")))),l.a.createElement(r.a,{className:"mb-16",component:"div"},"The Box component has a ",l.a.createElement("code",null,"clone")," property to enable the usage of the clone element method of React."),l.a.createElement(o.k,{component:"pre",className:"language-jsx"},' \n<Box color="text.primary" clone>\n  <Button />\n</Box>\n'),l.a.createElement("ol",{start:"2"},l.a.createElement("li",null,"Use render props")),l.a.createElement(r.a,{className:"mb-16",component:"div"},"The Box children accepts a render props function. You can pull out the ",l.a.createElement("code",null,"className"),"."),l.a.createElement(o.k,{component:"pre",className:"language-jsx"},' \n<Box color="text.primary">\n  {props => <Button {...props} />}\n</Box>\n'),l.a.createElement("blockquote",null,l.a.createElement(r.a,{className:"mb-16",component:"div"},"\u26a0\ufe0f The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last.")),l.a.createElement(r.a,{className:"text-32 mt-32 mb-8",component:"h2"},"API"),l.a.createElement(o.k,{component:"pre",className:"language-jsx"}," \nimport Box from '@material-ui/core/Box';\n"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"Name"),l.a.createElement("th",{align:"left"},"Type"),l.a.createElement("th",{align:"left"},"Default"),l.a.createElement("th",{align:"left"},"Description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-name required"},"children\xa0*")),l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-type"},"union:\xa0node\xa0|",l.a.createElement("br",null),"\xa0func",l.a.createElement("br",null))),l.a.createElement("td",{align:"left"}),l.a.createElement("td",{align:"left"},"Box render function or node.")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-name"},"clone")),l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-type"},"bool")),l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-default"},"false")),l.a.createElement("td",{align:"left"},"If ",l.a.createElement("code",null,"true"),", the box will recycle its children DOM element. It's using ",l.a.createElement("code",null,"React.cloneElement")," internally.")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-name"},"component")),l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-type"},"union:\xa0string\xa0|",l.a.createElement("br",null),"\xa0func\xa0|",l.a.createElement("br",null),"\xa0object",l.a.createElement("br",null))),l.a.createElement("td",{align:"left"},l.a.createElement("span",{className:"prop-default"},"'div'")),l.a.createElement("td",{align:"left"},"The component used for the root node. Either a string to use a DOM element or a component.")))),l.a.createElement(r.a,{className:"mb-16",component:"div"},"Any other properties supplied will be used by ",l.a.createElement("a",{href:"/system/basics/#all-inclusive"},"the style functions")," or spread to the root element."))})}}}]);