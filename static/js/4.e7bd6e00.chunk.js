(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{298:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__36_Mq",dialogsItems:"Dialogs_dialogsItems__1oJ6b",active:"Dialogs_active__vMvwe",messages:"Dialogs_messages__3A2fd",message:"Dialogs_message__2hqgx"}},303:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(119),o=t(298),r=t.n(o),c=t(296),l=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:r.a.dialog+" "+r.a.active},s.a.createElement(c.a,{to:a},e.name))},m=function(e){return s.a.createElement("div",{className:r.a.dialog},e.message)},u=t(294),d=t(85),g=t(120),f=t(28),b=t(82),v=Object(b.a)(50),p=Object(g.a)({form:"dialog-add-message-form"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:f.b,validate:[b.b,v],placeholder:"Enter your message",name:"newMessageBody"})))}),E=function(e){var a=e.dialogsPage,t=a.dialogs.map(function(e){return s.a.createElement(l,{name:e.name,key:e.id,id:e.id})}),n=a.messages.map(function(e){return s.a.createElement(m,{message:e.message,key:e.id})});a.newMessageBody;return e.isAuth?s.a.createElement("div",{className:r.a.dialogs},s.a.createElement("div",{className:r.a.dialogsItems},t),s.a.createElement("div",{className:r.a.messages},s.a.createElement("div",null,n)),s.a.createElement(p,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):s.a.createElement(u.a,{to:"/login"})},_=t(12),h=t(30),j=t(31),w=t(34),O=t(33),y=function(e){return{isAuth:e.auth.isAuth}},M=t(7);a.default=Object(M.d)(Object(_.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}}),function(e){var a=function(a){Object(w.a)(n,a);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(u.a,{to:"/login"})}}]),n}(s.a.Component);return Object(_.b)(y)(a)})(E)}}]);
//# sourceMappingURL=4.e7bd6e00.chunk.js.map