(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[5],{314:function(e,a,n){"use strict";n.d(a,"a",(function(){return u}));var t=n(6),r=n(41),s=n(1),c=(n(0),n(17)),o=n(15),i=function(e){return{isAuth:e.auth.isAuth}};function u(e){return Object(c.b)(i)((function(a){var n=a.isAuth,c=Object(r.a)(a,["isAuth"]);return n?Object(s.jsx)(e,Object(t.a)({},c)):Object(s.jsx)(o.a,{to:"/login"})}))}},315:function(e,a,n){"use strict";a.a=n.p+"static/media/emptyUser.80e4c874.png"},316:function(e,a,n){e.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh",green:"Paginator_green__byT13",purple:"Paginator_purple__vCwie"}},317:function(e,a,n){"use strict";var t=n(33),r=n(1),s=n(0),c=n.n(s),o=n(316),i=n.n(o),u="green",l="purple",d="transparent",j=c.a.memo((function(e){var a=e.totalCount,n=e.portionSize,c=void 0===n?5:n,o=e.currentPage,j=e.onPageChanged,b=e.portionNumber,m=e.changePortionNumber,h=e.color,_=void 0===h?d:h,f=Math.ceil(a/(c+1)),p=(b-1)*c+1,O=b*c,g=Object(s.useCallback)((function(){for(var e=[],a=1;a<f+1;a++)e=[].concat(Object(t.a)(e),[a]);return e}),[f])(),x=_==l?i.a.purple:_==u?i.a.green:"",N=g.filter((function(e){return e>=p&&e<=O})).map((function(e,a){return o===e?Object(r.jsx)("span",{className:i.a.activeNumber,children:e},a):Object(r.jsx)("span",{onClick:function(){j(e)},className:i.a.normalNumber,children:e},a)})),v=b>1&&Object(r.jsx)("span",{onClick:function(){return m(b-1)},className:i.a.normalNumber,children:"<"}),S=f/c>b&&Object(r.jsx)("span",{onClick:function(){return m(b+1)},className:i.a.normalNumber,children:">"}),P=b+20<=f/c&&Object(r.jsx)("span",{onClick:function(){return m(b+20)},className:i.a.normalNumber,children:">>"}),U=b-20>0&&Object(r.jsx)("span",{onClick:function(){return m(b-20)},className:i.a.normalNumber,children:"<<"}),C=b+c<f/c&&Object(r.jsx)("span",{onClick:function(){return m(f/c)},className:i.a.normalNumber,children:"end"}),w=b-c>0&&Object(r.jsx)("span",{onClick:function(){return m(1)},className:i.a.normalNumber,children:"start"});return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"".concat(i.a.pages," ").concat(x),children:[w,U,v,N,S,P,C]})})}));a.a=j},318:function(e,a,n){"use strict";var t=n(1),r=n(319),s=n.n(r),c=n(0),o=n.n(c),i=n(90),u=n(115),l=n(116),d=n(148),j=Object(d.a)({form:"profile add message form"})((function(e){return Object(t.jsx)("div",{className:s.a.search,children:Object(t.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.c)("search ...","searchArea",[u.b],i.a,{type:"text"}),Object(t.jsx)(l.a,{text:"search"})]})})})),b=o.a.memo((function(e){var a=e.onSearchArea;return Object(t.jsx)("div",{className:s.a.searchingArea,children:Object(t.jsx)(j,{onSubmit:function(e){var n=e.searchArea;a(n)}})})}));a.a=b},319:function(e,a,n){e.exports={searchingArea:"SearchArea_searchingArea__3cxqo",search:"SearchArea_search__3ZrRQ"}},334:function(e,a,n){e.exports={usersFrame:"UserPage_usersFrame__1ny86"}},335:function(e,a,n){e.exports={user:"User_user__1J7Ho",description:"User_description__1Rnc4",info:"User_info__2slCe",name:"User_name__2HfxK",userStatus:"User_userStatus__fIoiG",location:"User_location__gvlFw",country:"User_country__31Z5J",city:"User_city__3Pe1w",photoZone:"User_photoZone__1NDY4",followed:"User_followed__23RH-",activeNumber:"User_activeNumber__25Xxb",normalNumber:"User_normalNumber__2g2Lh",addUsersButton:"User_addUsersButton__2FzJQ"}},345:function(e,a,n){"use strict";n.r(a);var t=n(91),r=n(1),s=n(0),c=n.n(s),o=n(17),i=n(20),u=n(334),l=n.n(u),d=n(335),j=n.n(d),b=n(27),m=n(44),h=n(29),_=n(16),f=c.a.memo((function(e){var a=e.user,n=e.emptyPhoto,t=e.isRequestSendUsersId,s=Object(o.c)();return Object(r.jsxs)("div",{className:j.a.user,children:[Object(r.jsxs)("div",{className:j.a.photoZone,children:[Object(r.jsx)(b.b,{to:"".concat(m.a.PROFILE+a.id),children:Object(r.jsx)("img",{src:a.photos.small||n,alt:"".concat(a.name,", ").concat(a.id)})}),a.followed?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{disabled:t.some((function(e){return e===a.id})),className:j.a.followed,onClick:function(){var e;e=a.id,s(i.a.unfollowSaga(e))},children:Object(r.jsx)(h.a,{_id:"users.dialogs.unfollow"})}),Object(r.jsx)("button",{disabled:t.some((function(e){return e===a.id})),className:j.a.followed,onClick:function(){var e;e=a.id,s(_.a.toDialogSaga(e))},children:Object(r.jsx)(h.a,{_id:"users.dialogs.dialog"})})]}):Object(r.jsx)("button",{disabled:t.some((function(e){return e===a.id})),className:j.a.followed,onClick:function(){var e;e=a.id,s(i.a.followSaga(e))},children:Object(r.jsx)(h.a,{_id:"users.dialogs.follow"})})]}),Object(r.jsxs)("div",{className:j.a.description,children:[Object(r.jsxs)("div",{className:j.a.info,children:[Object(r.jsx)("div",{className:j.a.userStatus,children:Object(r.jsx)(h.a,{_id:a.status})}),Object(r.jsx)("div",{className:j.a.name,children:a.name})]}),Object(r.jsxs)("div",{className:j.a.location,children:[Object(r.jsx)("span",{className:j.a.country,children:'"user.location.country"'}),Object(r.jsx)("span",{className:j.a.city,children:'"user.location.city"'})]})]})]},a.id)})),p=n(317),O=n(318),g=c.a.memo((function(e){var a=e.users,n=e.totalCount,t=(e.pageSize,e.onPageChanged),s=e.emptyPhoto,c=e.isRequestSendUsersId,u=e.currentPage,d=e.portionNumber,j=e.onSearchArea,b=Object(o.c)(),m=a.map((function(e){return Object(r.jsx)(f,{user:e,emptyPhoto:s,isRequestSendUsersId:c})}));return Object(r.jsxs)("div",{className:l.a.usersFrame,children:[Object(r.jsx)(p.a,{changePortionNumber:function(e){b(i.a.setPortionNumber(e))},portionNumber:d,totalCount:n,currentPage:u,onPageChanged:t}),Object(r.jsx)(O.a,{onSearchArea:j}),m]})})),x=n(315),N=n(71),v=n(14),S=n(314),P=n(137);a.default=Object(v.d)(S.a)((function(e){var a=Object(o.c)(),n=Object(s.useState)(""),c=Object(t.a)(n,2),u=c[0],l=c[1],d=Object(o.d)(P.commonUsersSelector),j=d.users,b=d.totalCount,m=d.pageSize,h=d.currentPage,_=d.isRequestSendUsersId,f=d.portionNumber,p=d.isFetching;return Object(s.useEffect)((function(){a(i.a.getUsersSaga(m,h,u))}),[u,h,m,a]),Object(r.jsx)(r.Fragment,{children:p?Object(r.jsx)(N.a,{}):Object(r.jsx)(g,{emptyPhoto:x.a,users:j,totalCount:b,onPageChanged:function(e){a(i.a.changeCurrentPageActionCreator(e)),a(i.a.getUsersSaga(m,e))},currentPage:h,pageSize:m,isRequestSendUsersId:_,portionNumber:f,onSearchArea:function(e){l(e)}})})}))}}]);
//# sourceMappingURL=5.93b4c293.chunk.js.map