(this["webpackJsonpbanking-api"]=this["webpackJsonpbanking-api"]||[]).push([[0],{137:function(e,a,t){e.exports=t.p+"static/media/icon-user-plus.502bbf3f.svg"},138:function(e,a,t){e.exports=t.p+"static/media/icon-edit.a097375b.svg"},139:function(e,a,t){e.exports=t.p+"static/media/icon-people.e884b90e.svg"},140:function(e,a,t){e.exports=t.p+"static/media/icon-trash.1565a539.svg"},141:function(e,a,t){e.exports=t.p+"static/media/icon-close.dff9a821.svg"},142:function(e,a,t){e.exports=t.p+"static/media/icon-phone.5f1f1fe0.svg"},143:function(e,a,t){e.exports=t.p+"static/media/icon-home.9db65898.svg"},144:function(e,a,t){e.exports=t.p+"static/media/icon-user.cadc7e98.svg"},145:function(e,a,t){e.exports=t.p+"static/media/icon-face-sad.a89abe84.svg"},157:function(e,a,t){e.exports=t(311)},162:function(e,a,t){},163:function(e,a,t){},166:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){},206:function(e,a,t){},311:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),l=t.n(c),i=(t(162),t(163),t(164),t(165),t(156)),o=(t(166),t(137)),s=t.n(o),m=t(138),d=t.n(m),u=t(139),f=t.n(u),E=t(140),p=t.n(E),v=(t(141),t(142)),b=t.n(v),h=t(143),N=t.n(h),g=t(144),D=t.n(g),O=t(145),y=t.n(O),j=function(e){var a=e.className;return r.a.createElement("img",{src:y.a,className:a,alt:""})},x=function(e){var a=e.className;return r.a.createElement("img",{src:D.a,className:a,alt:""})},w=function(e){var a=e.className;return r.a.createElement("img",{src:b.a,className:a,alt:""})},L=function(e){var a=e.className;return r.a.createElement("img",{src:N.a,className:a,alt:""})},C=function(e){var a=e.className;return r.a.createElement("img",{src:s.a,className:a,alt:""})},F=function(e){var a=e.className;return r.a.createElement("img",{src:f.a,className:a,alt:""})},A=function(e){var a=e.className;return r.a.createElement("img",{src:d.a,className:a,alt:""})},M=function(e){var a=e.className;return r.a.createElement("img",{src:p.a,className:a,alt:""})},S=t(9),k=function(){var e=Object(S.b)();return r.a.createElement("div",{className:"header d-flex align-items-center justify-content-between"},r.a.createElement("div",{className:"header-item"},r.a.createElement(F,null),"Mah Friends"),r.a.createElement("div",{className:"header-item d-flex align-items-center"},r.a.createElement(i.a,{appearance:"primary",onClick:function(){e({type:"OPEN_MODAL",typeModal:"add"})}},r.a.createElement(C,null),"ADD")))},I=t(41),R=(t(204),t(205),function(e){var a=e.id,t=e.name,n=e.address,c=e.phoneNumber,l=Object(S.b)();return r.a.createElement("div",{className:"fiend-card"},r.a.createElement("div",{className:"fiend-card-content"},r.a.createElement("div",{className:"d-flex align-items-center mb-4"},r.a.createElement("div",{className:"avatar"},r.a.createElement(x,null)),r.a.createElement("h2",{className:"name"},t)),r.a.createElement("p",{className:"address"},r.a.createElement(L,null),n),r.a.createElement("p",{className:"phone-number d-flex align-items-center"},r.a.createElement(w,null),c),r.a.createElement("div",{className:"button-group d-flex justify-content-end"},r.a.createElement(i.a,{color:"green",onClick:function(){return l({type:"OPEN_MODAL",typeModal:"edit",friendID:a})}},r.a.createElement(A,null),"Edit"),r.a.createElement(i.a,{color:"red",onClick:function(){return l(function(e){return{type:"DELETE_FRIENDS",id:e}}(a))}},r.a.createElement(M,null),"Delete"))))}),_=function(){var e=Object(S.c)((function(e){return e.DataFriends})),a=Object(n.useState)([]),t=Object(I.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){l(e)}),[e]);return r.a.createElement("div",null,r.a.createElement("input",{className:"filter-friends",onChange:function(a){var t=e.filter((function(e){return e.name.toLowerCase().includes(a.target.value.toLowerCase())||e.address.toLowerCase().includes(a.target.value.toLowerCase())||e.phoneNumber.toLowerCase().includes(a.target.value.toLowerCase())}));l(t)},placeholder:"Filter friends"}),r.a.createElement("div",{className:"list-friends d-flex flex-wrap "},0===c.length&&r.a.createElement("div",{className:"list-null d-flex flex-md-column justify-content-center align-items-center"},r.a.createElement(j,null),r.a.createElement("p",null,"Wahh.. Look like you don't have friend.. Let's add some friend now !")),c.length>0&&c.map((function(e){return r.a.createElement(R,{key:e.id,id:e.id,name:e.name,address:e.address,phoneNumber:e.phoneNumber})}))))},T=(t(206),t(316)),P=t(318),B=t(314),J=t(319),W=t(317),q=t(315),G=function(){var e=Object(S.b)(),a=Object(n.useState)(""),t=Object(I.a)(a,2),c=t[0],l=t[1],o=Object(n.useState)(""),s=Object(I.a)(o,2),m=s[0],d=s[1],u=Object(n.useState)(""),f=Object(I.a)(u,2),E=f[0],p=f[1],v=Object(S.c)((function(e){return e.ModalFriend.typeModal})),b=Object(S.c)((function(e){return e.ModalFriend.friendID})),h=Object(S.c)((function(e){return e.ModalFriend.isActive})),N=Object(S.c)((function(e){return e.DataFriends})),g=function(){e({type:"CLOSE_MODAL"})};Object(n.useEffect)((function(){"edit"===v&&(l(N[b-1].name),d(N[b-1].address),p(N[b-1].phoneNumber)),console.log("run")}),[N,b,h,v]);var D=function(){"add"===v&&(g(),e({type:"ADD_FRIENDS",name:c,address:m,phoneNumber:E}),l(""),d(""),p("")),"edit"===v&&(g(),e(function(e,a,t,n){return{type:"EDIT_FRIENDS",id:e,name:a,address:t,phoneNumber:n}}(b,c,m,E)),l(""),d(""),p(""))};return r.a.createElement("div",{className:"modal-friend"},r.a.createElement(T.a,{backdrop:!0,show:h,onHide:g},r.a.createElement(T.a.Header,null,"add"===v&&r.a.createElement(T.a.Title,null,r.a.createElement(C,null),"Add Friend"),"edit"===v&&r.a.createElement(T.a.Title,null,r.a.createElement(A,null),"Edit Friend")),r.a.createElement(T.a.Body,null,r.a.createElement(P.a,{onKeyPress:function(e){"Enter"===e.key&&D()}},r.a.createElement(B.a,null,r.a.createElement(J.a,null,"Name"),r.a.createElement(W.a,{onChange:function(e){l(e)},value:c,name:"name",type:"text"}),r.a.createElement(q.a,{tooltip:!0},"Required")),r.a.createElement(B.a,null,r.a.createElement(J.a,null,"Address"),r.a.createElement(W.a,{onChange:function(e){d(e)},value:m,name:"name",type:"text"}),r.a.createElement(q.a,{tooltip:!0},"Required")),r.a.createElement(B.a,null,r.a.createElement(J.a,null,"Phone Number"),r.a.createElement(W.a,{onChange:function(e){p(e)},value:E,name:"name",type:"text"}),r.a.createElement(q.a,{tooltip:!0},"Required")))),r.a.createElement(T.a.Footer,null,"add"===v&&r.a.createElement(i.a,{onClick:D,appearance:"primary"},"Add Friend"),"edit"===v&&r.a.createElement(i.a,{onClick:D,appearance:"primary"},"Save"),r.a.createElement(i.a,{onClick:g,appearance:"subtle"},"Cancel"))))},H=t(23),z=t(155),K=t(93),$=[{id:1,name:"Albert B Oliphant",address:"122  Drainer Avenue",phoneNumber:"712-341-8415"},{id:2,name:"Sharon E Garcia",address:"540  Jacobs Street",phoneNumber:"412-240-3536"},{id:3,name:"David H Olmos",address:"329  Emily Renzelli Boulevard",phoneNumber:"831-636-9428"},{id:4,name:"George L Pedroza",address:"287  Robinson Lane",phoneNumber:"740-210-2950"},{id:5,name:"Jose A Goforth",address:"1161  Stoney Lane",phoneNumber:"972-933-9459"}],Q=Object(H.combineReducers)({ModalFriend:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isActive:!1,typeModal:"",friendID:0},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"OPEN_MODAL":return{isActive:!0,typeModal:a.typeModal,friendID:a.friendID};case"CLOSE_MODAL":return{isActive:!1,typeModal:"",friendID:a.friendID};default:return e}},DataFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FRIENDS":return[].concat(Object(K.a)(e),[{id:e.length+1,name:a.name,address:a.address,phoneNumber:a.phoneNumber}]);case"EDIT_FRIENDS":for(var t=Object(K.a)(e),n=0;n<t.length;n++)t[n].id==a.id&&(t[n].name=a.name,t[n].address=a.address,t[n].phoneNumber=a.phoneNumber);return t;case"DELETE_FRIENDS":e=e.filter((function(e){return e.id!=a.id}));for(var r=0;r<e.length;r++)e[r].id=r+1;return e;default:return e}}}),U=Object(H.createStore)(Q,Object(z.composeWithDevTools)()),V=function(){return r.a.createElement(S.a,{store:U},r.a.createElement("div",{className:"app"},r.a.createElement(k,null),r.a.createElement(_,null),r.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.bc2e2a2a.chunk.js.map