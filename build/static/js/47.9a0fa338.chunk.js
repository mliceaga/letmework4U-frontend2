(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1031:function(e,a,n){"use strict";var t=n(328);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var n=l.default.memo(l.default.forwardRef(function(a,n){return l.default.createElement(r.default,(0,o.default)({},a,{ref:n}),e)}));0;return n.muiName=r.default.muiName,n};var o=t(n(2)),l=t(n(0)),r=t(n(967))},1033:function(e,a,n){"use strict";var t=n(2),o=n.n(t),l=n(1030),r=n(183);a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(l.a)(e,o()({defaultTheme:r.a},a))}},1059:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};a.default=t},1778:function(e,a,n){"use strict";n.r(a);var t=n(15),o=n(0),l=n.n(o),r=n(1033),c=n(1015),m=n(998),i=n(516),s=n(999),d=n(509),u=n(519),b=Object(r.a)(function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}});a.default=function(){var e=b(),a=l.a.useState("female"),n=Object(t.a)(a,2),o=n[0],r=n[1];function p(e){r(e.target.value)}return l.a.createElement("div",{className:e.root},l.a.createElement(d.a,{component:"fieldset",className:e.formControl},l.a.createElement(u.a,{component:"legend"},"Gender"),l.a.createElement(m.a,{"aria-label":"Gender",name:"gender1",className:e.group,value:o,onChange:p},l.a.createElement(s.a,{value:"female",control:l.a.createElement(c.a,null),label:"Female"}),l.a.createElement(s.a,{value:"male",control:l.a.createElement(c.a,null),label:"Male"}),l.a.createElement(s.a,{value:"other",control:l.a.createElement(c.a,null),label:"Other"}),l.a.createElement(s.a,{value:"disabled",disabled:!0,control:l.a.createElement(c.a,null),label:"(Disabled option)"}))),l.a.createElement(d.a,{component:"fieldset",className:e.formControl},l.a.createElement(u.a,{component:"legend"},"Gender"),l.a.createElement(m.a,{"aria-label":"gender",name:"gender2",className:e.group,value:o,onChange:p},l.a.createElement(s.a,{value:"female",control:l.a.createElement(c.a,{color:"primary"}),label:"Female",labelPlacement:"start"}),l.a.createElement(s.a,{value:"male",control:l.a.createElement(c.a,{color:"primary"}),label:"Male",labelPlacement:"start"}),l.a.createElement(s.a,{value:"other",control:l.a.createElement(c.a,{color:"primary"}),label:"Other",labelPlacement:"start"}),l.a.createElement(s.a,{value:"disabled",disabled:!0,control:l.a.createElement(c.a,null),label:"(Disabled option)",labelPlacement:"start"})),l.a.createElement(i.a,null,"labelPlacement start")))}},1779:function(e,a){e.exports='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport FormHelperText from \'@material-ui/core/FormHelperText\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: \'flex\',\n  },\n  formControl: {\n    margin: theme.spacing(3),\n  },\n  group: {\n    margin: theme.spacing(1, 0),\n  },\n}));\n\nfunction RadioButtonsGroup() {\n  const classes = useStyles();\n  const [value, setValue] = React.useState(\'female\');\n\n  function handleChange(event) {\n    setValue(event.target.value);\n  }\n\n  return (\n    <div className={classes.root}>\n      <FormControl component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Gender</FormLabel>\n        <RadioGroup\n          aria-label="Gender"\n          name="gender1"\n          className={classes.group}\n          value={value}\n          onChange={handleChange}\n        >\n          <FormControlLabel value="female" control={<Radio />} label="Female" />\n          <FormControlLabel value="male" control={<Radio />} label="Male" />\n          <FormControlLabel value="other" control={<Radio />} label="Other" />\n          <FormControlLabel\n            value="disabled"\n            disabled\n            control={<Radio />}\n            label="(Disabled option)"\n          />\n        </RadioGroup>\n      </FormControl>\n      <FormControl component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Gender</FormLabel>\n        <RadioGroup\n          aria-label="gender"\n          name="gender2"\n          className={classes.group}\n          value={value}\n          onChange={handleChange}\n        >\n          <FormControlLabel\n            value="female"\n            control={<Radio color="primary" />}\n            label="Female"\n            labelPlacement="start"\n          />\n          <FormControlLabel\n            value="male"\n            control={<Radio color="primary" />}\n            label="Male"\n            labelPlacement="start"\n          />\n          <FormControlLabel\n            value="other"\n            control={<Radio color="primary" />}\n            label="Other"\n            labelPlacement="start"\n          />\n          <FormControlLabel\n            value="disabled"\n            disabled\n            control={<Radio />}\n            label="(Disabled option)"\n            labelPlacement="start"\n          />\n        </RadioGroup>\n        <FormHelperText>labelPlacement start</FormHelperText>\n      </FormControl>\n    </div>\n  );\n}\n\nexport default RadioButtonsGroup;\n'},1780:function(e,a,n){"use strict";n.r(a);var t=n(15),o=n(0),l=n.n(o),r=n(7),c=n(1059),m=n.n(c),i=n(1015),s=n(1781),d=n.n(s),u=n(1782),b=n.n(u),p=Object(r.a)({root:{color:m.a[400],"&$checked":{color:m.a[600]}},checked:{}})(function(e){return l.a.createElement(i.a,Object.assign({color:"default"},e))});a.default=function(){var e=l.a.useState("a"),a=Object(t.a)(e,2),n=a[0],o=a[1];function r(e){o(e.target.value)}return l.a.createElement("div",null,l.a.createElement(i.a,{checked:"a"===n,onChange:r,value:"a",name:"radio-button-demo","aria-label":"A"}),l.a.createElement(i.a,{checked:"b"===n,onChange:r,value:"b",name:"radio-button-demo","aria-label":"B"}),l.a.createElement(p,{checked:"c"===n,onChange:r,value:"c",name:"radio-button-demo","aria-label":"C"}),l.a.createElement(i.a,{checked:"d"===n,onChange:r,value:"d",color:"default",name:"radio-button-demo","aria-label":"D"}),l.a.createElement(i.a,{checked:"e"===n,onChange:r,value:"e",color:"default",name:"radio-button-demo","aria-label":"E",icon:l.a.createElement(d.a,{fontSize:"small"}),checkedIcon:l.a.createElement(b.a,{fontSize:"small"})}))}},1781:function(e,a,n){"use strict";var t=n(328);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),l=(0,t(n(1031)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"RadioButtonUnchecked");a.default=l},1782:function(e,a,n){"use strict";var t=n(328);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=t(n(0)),l=(0,t(n(1031)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"RadioButtonChecked");a.default=l},1783:function(e,a){e.exports='import React from \'react\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport green from \'@material-ui/core/colors/green\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioButtonUncheckedIcon from \'@material-ui/icons/RadioButtonUnchecked\';\nimport RadioButtonCheckedIcon from \'@material-ui/icons/RadioButtonChecked\';\n\nconst GreenRadio = withStyles({\n  root: {\n    color: green[400],\n    \'&$checked\': {\n      color: green[600],\n    },\n  },\n  checked: {},\n})(props => <Radio color="default" {...props} />);\n\nfunction RadioButtons() {\n  const [selectedValue, setSelectedValue] = React.useState(\'a\');\n\n  function handleChange(event) {\n    setSelectedValue(event.target.value);\n  }\n\n  return (\n    <div>\n      <Radio\n        checked={selectedValue === \'a\'}\n        onChange={handleChange}\n        value="a"\n        name="radio-button-demo"\n        aria-label="A"\n      />\n      <Radio\n        checked={selectedValue === \'b\'}\n        onChange={handleChange}\n        value="b"\n        name="radio-button-demo"\n        aria-label="B"\n      />\n      <GreenRadio\n        checked={selectedValue === \'c\'}\n        onChange={handleChange}\n        value="c"\n        name="radio-button-demo"\n        aria-label="C"\n      />\n      <Radio\n        checked={selectedValue === \'d\'}\n        onChange={handleChange}\n        value="d"\n        color="default"\n        name="radio-button-demo"\n        aria-label="D"\n      />\n      <Radio\n        checked={selectedValue === \'e\'}\n        onChange={handleChange}\n        value="e"\n        color="default"\n        name="radio-button-demo"\n        aria-label="E"\n        icon={<RadioButtonUncheckedIcon fontSize="small" />}\n        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}\n      />\n    </div>\n  );\n}\n\nexport default RadioButtons;\n'},1784:function(e,a,n){"use strict";n.r(a);var t=n(15),o=n(0),l=n.n(o),r=n(1015),c=n(998),m=n(999),i=n(509),s=n(519);a.default=function(){var e=l.a.useState("female"),a=Object(t.a)(e,2),n=a[0],o=a[1];return l.a.createElement(i.a,{component:"fieldset"},l.a.createElement(s.a,{component:"legend"},"labelPlacement"),l.a.createElement(c.a,{"aria-label":"position",name:"position",value:n,onChange:function(e){o(e.target.value)},row:!0},l.a.createElement(m.a,{value:"top",control:l.a.createElement(r.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),l.a.createElement(m.a,{value:"start",control:l.a.createElement(r.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),l.a.createElement(m.a,{value:"bottom",control:l.a.createElement(r.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),l.a.createElement(m.a,{value:"end",control:l.a.createElement(r.a,{color:"primary"}),label:"End",labelPlacement:"end"})))}},1785:function(e,a){e.exports='import React from \'react\';\nimport Radio from \'@material-ui/core/Radio\';\nimport RadioGroup from \'@material-ui/core/RadioGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nfunction FormControlLabelPosition() {\n  const [value, setValue] = React.useState(\'female\');\n\n  function handleChange(event) {\n    setValue(event.target.value);\n  }\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">labelPlacement</FormLabel>\n      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>\n        <FormControlLabel\n          value="top"\n          control={<Radio color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Radio color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Radio color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Radio color="primary" />}\n          label="End"\n          labelPlacement="end"\n        />\n      </RadioGroup>\n    </FormControl>\n  );\n}\n\nexport default FormControlLabelPosition;\n'},2181:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),l=n(12),r=n(992),c=n(124),m=n(1010),i=n(1030),s=Object(i.a)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}});a.default=function(e){var a=s();return o.a.createElement(l.s,{classes:{root:a.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(r.a,{className:"text-18",color:"action"},"home"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Documentation"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(c.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(c.a,{variant:"h6"},"Radio buttons")),o.a.createElement(m.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/radio-buttons",target:"_blank"},o.a.createElement(r.a,{className:"mr-4"},"link"),"Reference")),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(c.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Radio buttons"),o.a.createElement(c.a,{className:"description"},"Radio buttons allow the user to select one option from a set."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Use ",o.a.createElement("a",{href:"https://material.io/design/components/selection-controls.html#radio-buttons"},"radio buttons")," when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"Radio buttons should have the most commonly used option selected by default."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"RadioGroup")," is a helpful wrapper used to group ",o.a.createElement("code",null,"Radio")," components that provides an easier API, and proper keyboard accessibility to the group."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1778).default,raw:n(1779)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Standalone Radio Buttons"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"Radio")," can also be used standalone, without the wrapper."),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1780).default,raw:n(1783)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Label placement"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"You can change the placement of the label:"),o.a.createElement(c.a,{className:"mb-16",component:"div"},o.a.createElement(l.j,{className:"my-24",iframe:!1,component:n(1784).default,raw:n(1785)})),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(c.a,{className:"mb-16",component:"div"},"All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",o.a.createElement("code",null,"&lt;label&gt;")," element (",o.a.createElement("a",{href:"/api/form-control-label/"},"FormControlLabel"),")."),o.a.createElement(c.a,{className:"mb-16",component:"div"},"When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",o.a.createElement("code",null,"aria-label"),", ",o.a.createElement("code",null,"aria-labelledby"),", ",o.a.createElement("code",null,"title"),") via the ",o.a.createElement("code",null,"inputProps")," property."),o.a.createElement(l.k,{component:"pre",className:"language-jsx"}," \n<RadioButton\n  value=\"radioA\"\n  inputProps={{ 'aria-label': 'Radio A' } }\n/>\n"),o.a.createElement(c.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Guidance"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/"},"Checkboxes vs. Radio Buttons"))))})}},967:function(e,a,n){"use strict";n.r(a);var t=n(329);n.d(a,"default",function(){return t.a})}}]);