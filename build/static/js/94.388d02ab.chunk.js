(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{2216:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(0),c=a.n(r),l=a(1017),o=a(982),s=a(150),i=a(992),u=a(124),m=a(1010),d=a(1002),p=a(1011),f=a(510),b=a(507),h=a(130),g=a(5),v=a(3),E=a(184),x=a(346),O=a(35),y=a.n(O),j="[CHAT APP] GET CONTACTS",N="[CHAT APP] SET SELECTED CONTACT ID",w="[CHAT APP] REMOVE SELECTED CONTACT ID";var C="[CHAT APP] GET USER DATA",k="[CHAT APP] UPDATE USER DATA";function A(e){var t=y.a.post("/api/chat/user/data",e);return function(e){return t.then(function(t){return e({type:k,payload:t.data})})}}var T="[CHAT APP] GET CHAT",P="[CHAT APP] REMOVE CHAT",S="[CHAT APP] SEND MESSAGE";function D(e){return function(t,a){var n=a().chatPanel.user.id;return y.a.get("/api/chat/get-chat",{params:{contactId:e,userId:n}}).then(function(a){return t(function(e){return{type:N,payload:e}}(e)),t(Object(x.h)()),t({type:T,chat:a.data.chat,userChatData:a.data.userChatData})})}}var R=a(15),I=a(1006),L=a(12),B=a(64),M=a.n(B),H=a(1030),z=Object(H.a)(function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}});var W=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),n=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),l=Object(g.c)(function(e){return e.chatApp.chat}),o=Object(g.c)(function(e){return e.chatApp.user}),m=z(e),d=Object(r.useRef)(null),p=Object(r.useState)(""),h=Object(R.a)(p,2),E=h[0],x=h[1];function O(e,t){return 0===t||l.dialog[t-1]&&l.dialog[t-1].who!==e.who}function j(e,t){return t===l.dialog.length-1||l.dialog[t+1]&&l.dialog[t+1].who!==e.who}return Object(r.useEffect)(function(){l&&(d.current.scrollTop=d.current.scrollHeight)},[l]),c.a.createElement("div",{className:Object(v.a)("flex flex-col relative",e.className)},c.a.createElement(L.t,{ref:d,className:"flex flex-1 flex-col overflow-y-auto"},l&&l.dialog.length>0?c.a.createElement("div",{className:"flex flex-col pt-16 pl-56 pr-16 pb-40"},l.dialog.map(function(e,t){var r=e.who===o.id?o:a.find(function(t){return t.id===e.who});return c.a.createElement("div",{key:e.time,className:Object(v.a)(m.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative pr-16 pb-4 pl-16",{me:e.who===o.id},{contact:e.who!==o.id},{"first-of-group":O(e,t)},{"last-of-group":j(e,t)},t+1===l.dialog.length&&"pb-96")},function(e,t){return e.who===n&&(l.dialog[t+1]&&l.dialog[t+1].who!==n||!l.dialog[t+1])}(e,t)&&c.a.createElement(b.a,{className:"avatar absolute left-0 m-0 -ml-32",src:r.avatar}),c.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full"},c.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},e.message),c.a.createElement(u.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 left-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},M()(e.time).format("MMMM Do YYYY, h:mm:ss a"))))})):c.a.createElement("div",{className:"flex flex-col flex-1"},c.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},c.a.createElement(i.a,{className:"text-128",color:"disabled"},"chat")),c.a.createElement(u.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),l&&c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==E&&t(function(e,t,a){var n={who:a,message:e,time:new Date},r=y.a.post("/api/chat/send-message",{chatId:t,message:n});return function(e){return r.then(function(t){return e({type:S,message:t.data.message,userChatData:t.data.userChatData})})}}(E,l.id,o.id)).then(function(){x("")})},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},c.a.createElement(s.a,{className:"flex items-center relative rounded-24",elevation:1},c.a.createElement(I.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 ml-16 mr-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:m.bootstrapFormLabel},onChange:function(e){x(e.target.value)},value:E}),c.a.createElement(f.a,{className:"absolute right-0 top-0",type:"submit"},c.a.createElement(i.a,{className:"text-24",color:"action"},"send")))))},U=a(9),_=a(8),F=a(338),G=a(993),Y=a(1004),J=a(994),V=a(343),q=a(514);var K=function(e){switch(e.status){case"online":return c.a.createElement(i.a,{className:"block text-16 text-green bg-white rounded-full"},"check_circle");case"away":return c.a.createElement(i.a,{className:"block text-16 text-white bg-yellow-dark rounded-full"},"access_time");case"do-not-disturb":return c.a.createElement(i.a,{className:"block text-16 text-red bg-white rounded-full"},"remove_circle_outline");case"offline":return c.a.createElement(i.a,{className:"block text-16 text-grey-dark bg-white rounded-full"},"not_interested");default:return null}},Q=a(515),X=Object(H.a)(function(e){return{contactListItem:{borderBottom:"1px solid "+e.palette.divider,"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}});var Z=function(e){var t=X(e);return c.a.createElement(Q.a,{button:!0,className:Object(v.a)(t.contactListItem,"px-16 py-12 min-h-92",{active:e.selectedContactId===e.contact.id}),onClick:function(){return e.onContactClick(e.contact.id)}},c.a.createElement("div",{className:"relative mr-16"},c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},c.a.createElement(K,{status:e.contact.status})),c.a.createElement(b.a,{src:e.contact.avatar,alt:e.contact.name},e.contact.avatar&&""!==e.contact.avatar?"":e.contact.name[0])),c.a.createElement(J.a,{classes:{root:"min-w-px",secondary:"truncate"},primary:e.contact.name,secondary:e.contact.mood}),e.contact.chatId&&c.a.createElement("div",{className:"flex flex-col justify-center items-end"},e.contact.lastMessageTime&&c.a.createElement(u.a,{className:"whitespace-no-wrap mb-8"},M()(e.contact.lastMessageTime).format("ll")),e.contact.unread&&c.a.createElement("div",{className:Object(v.a)(t.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center")},e.contact.unread)))},$=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var ee=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),n=Object(g.c)(function(e){return e.chatApp.user}),l=Object(r.useState)(""),o=Object(R.a)(l,2),m=o[0],h=o[1],v=Object(r.useState)(null),E=Object(R.a)(v,2),O=E[0],y=E[1],j=Object(r.useState)(null),N=Object(R.a)(j,2),w=N[0],C=N[1];function k(e){C(null)}function T(e){h(e.target.value)}return c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(d.a,{position:"static",color:"default",elevation:1},c.a.createElement(p.a,{className:"flex justify-between items-center px-16 pr-4"},n&&c.a.createElement("div",{className:"relative w-40 h-40 p-0 cursor-pointer",onClick:function(){return t(x.l())}},c.a.createElement(b.a,{src:n.avatar,alt:n.name,className:"w-40 h-40"},n.avatar&&""!==n.avatar?"":n.name[0]),c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10 cursor-pointer","aria-owns":O?"switch-menu":null,"aria-haspopup":"true",onClick:function(e){e.preventDefault(),e.stopPropagation(),y(e.currentTarget)}},c.a.createElement(K,{status:n.status})),c.a.createElement(F.a,{id:"status-switch",anchorEl:O,open:Boolean(O),onClose:function(e){e.preventDefault(),e.stopPropagation(),y(null)}},$.map(function(e){return c.a.createElement(G.a,{onClick:function(a){return function(e,a){e.preventDefault(),e.stopPropagation(),t(A(Object(_.a)({},n,{status:a}))),y(null)}(a,e.value)},key:e.value},c.a.createElement(Y.a,{className:"min-w-40"},c.a.createElement(K,{status:e.value})),c.a.createElement(J.a,{primary:e.title}))}))),c.a.createElement("div",null,c.a.createElement(f.a,{"aria-owns":w?"chats-more-menu":null,"aria-haspopup":"true",onClick:function(e){C(e.currentTarget)}},c.a.createElement(i.a,null,"more_vert")),c.a.createElement(F.a,{id:"chats-more-menu",anchorEl:w,open:Boolean(w),onClose:k},c.a.createElement(G.a,{onClick:k},"Profile"),c.a.createElement(G.a,{onClick:k},"Logout")))),Object(r.useMemo)(function(){return c.a.createElement(p.a,{className:"px-16"},c.a.createElement(s.a,{className:"flex p-4 items-center w-full px-8 py-4 rounded-8",elevation:1},c.a.createElement(i.a,{className:"mr-8",color:"action"},"search"),c.a.createElement(V.a,{placeholder:"Search or start new chat",className:"flex flex-1",disableUnderline:!0,fullWidth:!0,value:m,inputProps:{"aria-label":"Search"},onChange:T})))},[m])),c.a.createElement(L.t,{className:"overflow-y-auto flex-1"},c.a.createElement(q.a,{className:"w-full"},Object(r.useMemo)(function(){function e(e,t){return 0===t.length?e:L.B.filterArrayByString(e,t)}var r=a.length>0&&n&&n.chatList?n.chatList.map(function(e){return Object(_.a)({},e,a.find(function(t){return t.id===e.contactId}))}):[],l=e(Object(U.a)(a),m),o=e(Object(U.a)(r),m);return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.e,{enter:{animation:"transition.expandIn"},className:"flex flex-col flex-shrink-0"},o.length>0&&c.a.createElement(u.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Chats"),o.map(function(e){return c.a.createElement(Z,{key:e.id,contact:e,onContactClick:function(e){return t(D(e))}})}),l.length>0&&c.a.createElement(u.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Contacts"),l.map(function(e){return c.a.createElement(Z,{key:e.id,contact:e,onContactClick:function(e){return t(D(e))}})})))},[a,n,m,t]))))};var te=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.contacts.entities}),n=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),r=a.find(function(e){return e.id===n});return r?c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(d.a,{position:"static",color:"primary",elevation:1},c.a.createElement(p.a,{className:"flex justify-between items-center px-16 pr-4"},c.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Contact Info"),c.a.createElement(f.a,{onClick:function(){return t(x.g())},color:"inherit"},c.a.createElement(i.a,null,"close"))),c.a.createElement(p.a,{className:"flex flex-col justify-center items-center p-24"},c.a.createElement(b.a,{src:r.avatar,alt:r.name,className:"w-96 h-96"},r.avatar&&""!==r.avatar?"":r.name[0]),c.a.createElement(u.a,{color:"inherit",className:"mt-16",variant:"h6"},r.name))),c.a.createElement(L.t,{className:"overflow-y-auto flex-1 p-24"},c.a.createElement(I.a,{label:"Mood",className:"w-full",value:r.mood,margin:"normal",disabled:!0,multiline:!0}))):null},ae=a(509),ne=a(519),re=a(998),ce=a(999),le=a(1015),oe=a(129),se=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var ie=function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.user}),n=Object(oe.b)(!!a&&Object(_.a)({},a)),r=n.form,l=n.handleChange,o=Object(oe.a)(function(e){t(A(e))},500);return Object(oe.d)(function(){o(r)},[r,o]),r?c.a.createElement("div",{className:"flex flex-col flex-auto h-full"},c.a.createElement(d.a,{position:"static",color:"primary",elevation:1},c.a.createElement(p.a,{className:"flex justify-between items-center px-16 pr-4"},c.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"User Info"),c.a.createElement(f.a,{onClick:function(){return t(x.i())},color:"inherit"},c.a.createElement(i.a,null,"close"))),c.a.createElement(p.a,{className:"flex flex-col justify-center items-center p-24"},c.a.createElement(b.a,{src:a.avatar,alt:a.name,className:"w-96 h-96"},a.avatar&&""!==a.avatar?"":a.name[0]),c.a.createElement(u.a,{color:"inherit",className:"mt-16",variant:"h6"},a.name))),c.a.createElement(L.t,{className:"overflow-y-auto flex-1 p-24"},c.a.createElement("form",null,c.a.createElement(ae.a,{component:"fieldset",className:"w-full mb-16"},c.a.createElement(I.a,{label:"Mood",name:"mood",className:"w-full",value:r.mood,margin:"normal",multiline:!0,onChange:l})),c.a.createElement(ae.a,{component:"fieldset",className:"w-full mb-16"},c.a.createElement(ne.a,{component:"legend"},"Status"),c.a.createElement(re.a,{"aria-label":"Status",name:"status",className:"",value:r.status,onChange:l},se.map(function(e){return c.a.createElement(ce.a,{key:e.value,value:e.value,control:c.a.createElement(le.a,null),label:c.a.createElement("div",{className:"flex items-center"},c.a.createElement(K,{status:e.value}),c.a.createElement("span",{className:"ml-8"},e.title))})})))))):null},ue={mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue;switch((arguments.length>1?arguments[1]:void 0).type){case x.e:return Object(_.a)({},e,{mobileChatsSidebarOpen:!0});case x.b:return Object(_.a)({},e,{mobileChatsSidebarOpen:!1});case x.f:return Object(_.a)({},e,{userSidebarOpen:!0});case x.c:return Object(_.a)({},e,{userSidebarOpen:!1});case x.d:return Object(_.a)({},e,{contactSidebarOpen:!0});case x.a:return Object(_.a)({},e,{contactSidebarOpen:!1});default:return e}},de=a(335),pe=a.n(de);function fe(e,t){var a=pe.a.merge({},e),n=a.chatList.find(function(e){return e.contactId===t.userChatData.contactId});return a.chatList=n?a.chatList.map(function(e){return e.contactId===t.userChatData.contactId?t.userChatData:e}):[t.userChatData].concat(Object(U.a)(a.chatList)),a}var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case k:return Object(_.a)({},t.payload);case T:case S:return fe(e,t);default:return e}},he={entities:[],selectedContactId:null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(_.a)({},e,{entities:Object(U.a)(t.payload)});case N:return Object(_.a)({},e,{selectedContactId:t.payload});case w:return Object(_.a)({},e,{selectedContactId:null});default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(_.a)({},t.chat);case P:return null;case S:return Object(_.a)({},e,{dialog:[].concat(Object(U.a)(e.dialog),[t.message])});default:return e}},Ee=a(46),xe=Object(Ee.d)({sidebars:me,user:be,contacts:ge,chat:ve}),Oe=Object(H.a)(function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(n.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(n.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,minHeight:0,overflow:"hidden"},drawerPaper:Object(n.a)({width:400,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(h.fade)(e.palette.background.paper,.8)," 0,").concat(Object(h.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(h.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}});t.default=Object(E.a)("chatApp",xe)(function(e){var t=Object(g.b)(),a=Object(g.c)(function(e){return e.chatApp.chat}),n=Object(g.c)(function(e){return e.chatApp.contacts.entities}),h=Object(g.c)(function(e){return e.chatApp.contacts.selectedContactId}),E=Object(g.c)(function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen}),O=Object(g.c)(function(e){return e.chatApp.sidebars.userSidebarOpen}),N=Object(g.c)(function(e){return e.chatApp.sidebars.contactSidebarOpen}),w=Oe(e),k=n.find(function(e){return e.id===h});return Object(r.useEffect)(function(){t(function(){var e=y.a.get("/api/chat/user");return function(t){return e.then(function(e){return t({type:C,payload:e.data})})}}()),t(function(){var e=y.a.get("/api/chat/contacts");return function(t){return e.then(function(e){return t({type:j,payload:e.data})})}}())},[t]),c.a.createElement("div",{className:Object(v.a)(w.root)},c.a.createElement("div",{className:w.topBg}),c.a.createElement("div",{className:Object(v.a)(w.contentCardWrapper,"container")},c.a.createElement("div",{className:w.contentCard},c.a.createElement(l.a,{mdUp:!0},c.a.createElement(o.a,{className:"h-full absolute z-20",variant:"temporary",anchor:"left",open:E,onClose:function(){return t(x.h())},classes:{paper:Object(v.a)(w.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(ee,null))),c.a.createElement(l.a,{smDown:!0},c.a.createElement(o.a,{className:"h-full z-20",variant:"permanent",open:!0,classes:{paper:w.drawerPaper}},c.a.createElement(ee,null))),c.a.createElement(o.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"left",open:O,onClose:function(){return t(x.i())},classes:{paper:Object(v.a)(w.drawerPaper,"absolute left-0")},style:{position:"absolute"},ModalProps:{keepMounted:!1,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(ie,null)),c.a.createElement("main",{className:Object(v.a)(w.contentWrapper,"z-10")},a?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{className:"w-full",position:"static",elevation:1},c.a.createElement(p.a,{className:"px-16"},c.a.createElement(f.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return t(x.k())},className:"flex md:hidden"},c.a.createElement(i.a,null,"chat")),c.a.createElement("div",{className:"flex items-center cursor-pointer",onClick:function(){return t(x.j())}},c.a.createElement("div",{className:"relative ml-8 mr-12"},c.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},c.a.createElement(K,{status:k.status})),c.a.createElement(b.a,{src:k.avatar,alt:k.name},k.avatar&&""!==k.avatar?"":k.name[0])),c.a.createElement(u.a,{color:"inherit",className:"text-18 font-600"},k.name)))),c.a.createElement("div",{className:w.content},c.a.createElement(W,{className:"flex flex-1 z-10"}))):c.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center p-24"},c.a.createElement(s.a,{className:"rounded-full p-48"},c.a.createElement(i.a,{className:"block text-64",color:"secondary"},"chat")),c.a.createElement(u.a,{variant:"h6",className:"my-24"},"Chat App"),c.a.createElement(u.a,{className:"hidden md:flex px-16 pb-24 mt-24 text-center",color:"textSecondary"},"Select a contact to start a conversation!.."),c.a.createElement(m.a,{variant:"outlined",color:"primary",className:"flex md:hidden normal-case",onClick:function(){return t(x.k())}},"Select a contact to start a conversation!.."))),c.a.createElement(o.a,{className:"h-full absolute z-30",variant:"temporary",anchor:"right",open:N,onClose:function(){return t(x.g())},classes:{paper:Object(v.a)(w.drawerPaper,"absolute right-0")},style:{position:"absolute"},ModalProps:{keepMounted:!0,disablePortal:!0,BackdropProps:{classes:{root:"absolute"}}}},c.a.createElement(te,null)))))})}}]);