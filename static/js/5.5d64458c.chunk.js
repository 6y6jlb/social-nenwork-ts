(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[5],{240:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return r}));var s=function(e){return e&&e.trim()?void 0:"error"},r=function(e){return function(a){if(a.length>e)return"max length is ".concat(e," symbols")}}},241:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return j})),t.d(a,"c",(function(){return g}));var s=t(6),r=t(239),n=t(2),i=t(121),c=t(0),o=t.n(c),m=t(242),l=t.n(m),d=o.a.memo((function(e){var a=e.meta.touched&&e.meta.error;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"".concat(l.a.textArea," ").concat(a&&l.a.error),children:e.children})})})),u=o.a.memo((function(e){var a=e.input,t=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return Object(n.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{children:Object(n.jsx)("textarea",Object(s.a)(Object(s.a)({},a),t))}))})),j=o.a.memo((function(e){var a=e.input,t=(e.meta,e.children,Object(r.a)(e,["input","meta","children"]));return Object(n.jsx)(d,Object(s.a)(Object(s.a)({},e),{},{children:Object(n.jsx)("input",Object(s.a)(Object(s.a)({},a),t))}))}));function g(e,a,t,r){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,Object(s.a)({placeholder:e,name:a,validate:t,component:r},c)),Object(n.jsx)("span",{className:l.a.span,children:o})]})}},242:function(e,a,t){e.exports={textArea:"FormControls_textArea__2E7vZ",error:"FormControls_error__2aMmc",blinker:"FormControls_blinker__3zqOB",span:"FormControls_span__2xR_G"}},243:function(e,a,t){"use strict";var s=t(6),r=t(239),n=t(2),i=(t(0),t(245)),c=t.n(i);a.a=function(e){var a=e.text,t=e.small,i=void 0!==t&&t,o=Object(r.a)(e,["text","small"]);return Object(n.jsx)("div",{className:"".concat(c.a.mainButton," ").concat(i&&c.a.small),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({},o),{},{children:a}))})}},245:function(e,a,t){e.exports={mainButton:"Button_mainButton__1-99r",small:"Button_small__3AeEj"}},246:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var s=t(6),r=t(239),n=t(2),i=(t(0),t(23)),c=t(12),o=function(e){return{isAuth:e.auth.isAuth}};function m(e){return Object(i.b)(o)((function(a){var t=a.isAuth,i=Object(r.a)(a,["isAuth"]);return t?Object(n.jsx)(e,Object(s.a)({},i)):Object(n.jsx)(c.a,{to:"/login"})}))}},316:function(e,a,t){e.exports={currentDialogWrapper:"CurrentDialog_currentDialogWrapper__7jmqe"}},317:function(e,a,t){e.exports={textArea:"SendMessageAreaFromCurrentDialog_textArea__3YiTY",sendMessageAreaFromCurrentDialog:"SendMessageAreaFromCurrentDialog_sendMessageAreaFromCurrentDialog__1VSJE"}},318:function(e,a,t){e.exports={currentDialog:"MessageFromCurrentDialog_currentDialog__ocHBh",myMessage:"MessageFromCurrentDialog_myMessage__WoHUJ",myAvatar:"MessageFromCurrentDialog_myAvatar__3V_VQ",notMyMessage:"MessageFromCurrentDialog_notMyMessage__2ZhZd",notMyAvatar:"MessageFromCurrentDialog_notMyAvatar__2rO57"}},319:function(e,a,t){e.exports={message:"MyMessage_message__yjYr3",avatar:"MyMessage_avatar__2sc-P",messageFrame:"MyMessage_messageFrame__2wg_A",cornet:"MyMessage_cornet__3Oapb",textMessage:"MyMessage_textMessage__3ta3E",textFrame:"MyMessage_textFrame__wc00I",name:"MyMessage_name__2ddn2",time:"MyMessage_time__4iLZ3"}},320:function(e,a,t){e.exports={message:"NotMyMessage_message__2zzNu",avatar:"NotMyMessage_avatar__DJ68z",messageFrame:"NotMyMessage_messageFrame__2WzYR",cornet:"NotMyMessage_cornet__SFrBS",textMessage:"NotMyMessage_textMessage__38-1V",textFrame:"NotMyMessage_textFrame__1iqxP",name:"NotMyMessage_name__2_Brb",time:"NotMyMessage_time__3WrmT"}},321:function(e,a,t){e.exports={friendListFromDialogs:"FriendListFromDialogs_friendListFromDialogs__3oEb4",item:"FriendListFromDialogs_item__1b4o6",active:"FriendListFromDialogs_active__2mZZu"}},322:function(e,a,t){e.exports={dialogsWrapper:"DialogsWrapper_dialogsWrapper__7JBh7"}},334:function(e,a,t){"use strict";t.r(a);var s=t(2),r=t(0),n=t.n(r),i=t(316),c=t.n(i),o=t(317),m=t.n(o),l=t(122),d=t(241),u=t(240),j=t(243),g=n.a.memo((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.c)("enter new message here","newMessageBody",[u.b],d.b,{type:"text"}),Object(s.jsx)(j.a,{text:"send message"})]})})),_=Object(l.a)({form:"profile add message form"})(g),b=n.a.memo((function(e){return Object(s.jsx)("div",{className:m.a.sendMessageAreaFromCurrentDialog,children:Object(s.jsx)(_,{onSubmit:function(a){var t=a.newMessageBody;t&&t.trim()&&e.onAddPost(!0,t.trim())}})})})),x=t(318),O=t.n(x),h=t(319),v=t.n(h),M=n.a.memo((function(e){return Object(s.jsxs)("div",{className:v.a.message,children:[Object(s.jsx)("div",{className:v.a.avatar,children:Object(s.jsx)("img",{className:v.a.avatarChild,src:e.avatarURL})}),Object(s.jsxs)("div",{className:v.a.messageFrame,children:[Object(s.jsxs)("div",{className:v.a.textFrame,children:[Object(s.jsx)("div",{className:v.a.name,children:e.name||"unknown"}),Object(s.jsx)("div",{className:v.a.textMessage,children:e.item}),Object(s.jsx)("div",{className:v.a.time,children:"02.21.22"})]}),Object(s.jsx)("div",{className:v.a.cornet})]})]},e.id)})),f=t(320),p=t.n(f),N=n.a.memo((function(e){return Object(s.jsxs)("div",{className:p.a.message,children:[Object(s.jsx)("div",{className:p.a.avatar,children:Object(s.jsx)("img",{className:p.a.avatarChild,src:e.avatarURL})}),Object(s.jsxs)("div",{className:p.a.messageFrame,children:[Object(s.jsx)("div",{className:p.a.cornet}),Object(s.jsxs)("div",{className:p.a.textFrame,children:[Object(s.jsx)("div",{className:p.a.name,children:e.name||"unknown"}),Object(s.jsx)("div",{className:p.a.textMessage,children:e.item}),Object(s.jsx)("div",{className:p.a.time,children:"02.21.22"})]})]})]})})),F=n.a.memo((function(e){var a=e.messages.map((function(a){return a.self?Object(s.jsx)(M,{name:e.name,self:a.self,avatarURL:a.avatarURL,id:a.id,item:a.item},a.id):Object(s.jsx)(N,{name:e.name,self:a.self,avatarURL:a.avatarURL,id:a.id,item:a.item},a.id)}));return Object(s.jsx)("div",{className:O.a.currentDialog,children:a})})),y=n.a.memo((function(e){return Object(s.jsxs)("div",{className:c.a.currentDialogWrapper,children:[Object(s.jsx)(F,{name:e.name,messages:e.messages}),Object(s.jsx)(b,{onAddPost:e.onAddPost,onPostChanger:e.onPostChanger})]})})),D=t(26),A=t(321),C=t.n(A),L=n.a.memo((function(){var e=C.a.item+" "+C.a.active;return Object(s.jsxs)("div",{className:C.a.friendListFromDialogs,children:[Object(s.jsx)(D.b,{to:"/dialog/1",className:e,children:"Dmitriy Vitcli-Putcli"}),Object(s.jsx)(D.b,{to:"/dialog/2",className:C.a.item,children:"Ivan Vitcli-Putcli"}),Object(s.jsx)(D.b,{to:"/dialog/3",className:C.a.item,children:"Fekla Vitcli-Putcli"}),Object(s.jsx)(D.b,{to:"/dialog/4",className:C.a.item,children:"Antoniy Vitcli-Putcli"}),Object(s.jsx)(D.b,{to:"/dialog/5",className:C.a.item,children:"Vasiliy Vitcli"}),Object(s.jsx)(D.b,{to:"/dialog/6",className:C.a.item,children:"etc."})]})})),P=t(322),B=t.n(P),S=n.a.memo((function(e){return Object(s.jsxs)("div",{className:B.a.dialogsWrapper,children:[Object(s.jsx)(L,{}),Object(s.jsx)(y,{name:e.name,onAddPost:e.addDialogsMessage,onPostChanger:e.changeDialogsInput,messages:e.messages})]})})),w=t(77),V=t(23),W=t(246),k=t(19),R=t(46);a.default=Object(k.d)(Object(V.b)((function(e){return{messages:R.a.dialogsSelectors.difficultGetMessagesSelector(e),isAuth:R.a.authSelectors.getIsAuth(e),name:R.a.dialogsSelectors.getFullName(e)}}),{addDialogsMessage:w.a.addDialogsMessage}),W.a)(S)}}]);
//# sourceMappingURL=5.5d64458c.chunk.js.map