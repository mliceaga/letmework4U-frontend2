(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1279:function(e,t){e.exports="import '@fake-db'\nimport React from 'react';\nimport {FuseAuthorization, FuseLayout, FuseTheme} from '@fuse';\nimport Provider from 'react-redux/es/components/Provider';\nimport {Router} from 'react-router-dom';\nimport jssExtend from 'jss-extend';\nimport history from '@history';\nimport {Auth} from './auth';\nimport store from './store';\nimport AppContext from './AppContext';\nimport routes from './fuse-configs/routesConfig';\nimport {create} from 'jss';\nimport {StylesProvider, jssPreset, createGenerateClassName} from '@material-ui/styles';\n\nconst jss = create({\n    ...jssPreset(),\n    plugins       : [...jssPreset().plugins, jssExtend()],\n    insertionPoint: document.getElementById('jss-insertion-point'),\n});\n\nconst generateClassName = createGenerateClassName();\n\nconst App = () => {\n    return (\n        <AppContext.Provider\n            value={{\n                routes\n            }}\n        >\n            <StylesProvider jss={jss} generateClassName={generateClassName}>\n                <Provider store={store}>\n                    <Auth>\n                        <Router history={history}>\n                            <FuseAuthorization>\n                                <FuseTheme>\n                                    <FuseLayout/>\n                                </FuseTheme>\n                            </FuseAuthorization>\n                        </Router>\n                    </Auth>\n                </Provider>\n            </StylesProvider>\n        </AppContext.Provider>\n    );\n};\n\nexport default App;\n"},2197:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(992),s=n(124),m=n(12),c=n(29);t.default=function(){return o.a.createElement(m.s,{header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(r.a,{className:"text-18",color:"action"},"home"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Documentation"),o.a.createElement(r.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(s.a,{color:"textSecondary"},"Fuse Components")),o.a.createElement(s.a,{variant:"h6"},"FuseTheme"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(s.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"FuseTheme")," is theming component of the Fuse React. It allows to change predefined Material UI themes. It should wraps the ",o.a.createElement("code",null,"FuseLayout")," component."),o.a.createElement(s.a,{className:"mb-16",component:"p"},o.a.createElement("code",null,"src/app/App.js")),o.a.createElement(m.k,{component:"pre",className:"language-jsx"},n(1279)),o.a.createElement(s.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),o.a.createElement(s.a,{className:"mb-16",component:"p"},"Please checkout",o.a.createElement(c.a,{className:"font-medium mx-4",to:"/documentation/working-with-fuse-react/theming"},"theming"),"at documentation."))})}}}]);