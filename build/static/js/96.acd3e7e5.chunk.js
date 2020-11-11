(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{2135:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(992),o=t(124),r=t(12),m=t(29);a.default=function(){return c.a.createElement(r.s,{header:c.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},c.a.createElement("div",{className:"flex flex-col"},c.a.createElement("div",{className:"flex items-center mb-16"},c.a.createElement(l.a,{className:"text-18",color:"action"},"home"),c.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),c.a.createElement(o.a,{color:"textSecondary"},"Documentation"),c.a.createElement(l.a,{className:"text-16",color:"action"},"chevron_right"),c.a.createElement(o.a,{color:"textSecondary"},"Authentication")),c.a.createElement(o.a,{variant:"h6"},"Auth0 Authentication"))),content:c.a.createElement("div",{className:"p-24 max-w-2xl"},c.a.createElement(o.a,{className:"mb-16",component:"p"},"With Auth0 Authentication in Fuse React."),c.a.createElement("ul",null,c.a.createElement("li",{className:"mb-12"},"You can ",c.a.createElement(m.a,{to:"/register"},"register"),"."),c.a.createElement("li",{className:"mb-12"},"You can ",c.a.createElement(m.a,{to:"/login"},"login"),"."),c.a.createElement("li",{className:"mb-12"},"Also saves user data (user shortcuts, layout and theme settings) as user_metadata to Auth0 Database.")),c.a.createElement(o.a,{className:"mt-32 mb-16",component:"p"},"Related Service folder is located at ",c.a.createElement("code",null,"/src/auth0Service")),c.a.createElement(o.a,{className:"my-24 italic",component:"p",color:"textSecondary"},"Note: Make sure ","<Router>"," component wrapped with ","<Auth>"," component in ",c.a.createElement("code",null,"src/app/App.js"),"."),c.a.createElement(o.a,{className:"mt-32 mb-8",variant:"h5"},"Configuration"),c.a.createElement(o.a,{className:"mb-16",component:"p"},"You need to paste the configuration of your Auth0 Project into ",c.a.createElement("code",null,"src/app/services/auth0Service/auth0ServiceConfig.js")),c.a.createElement(r.k,{component:"pre",className:"language-jsx my-16"},'\n                               export const AUTH_CONFIG = {\n                                    domain     : "YOUR_DOMAIN",\n                                    clientId   : "YOUR_CLIENT_ID",\n                                    callbackUrl: "YOUR_DOMAIN/callback"\n                               };\n                            '))})}}}]);