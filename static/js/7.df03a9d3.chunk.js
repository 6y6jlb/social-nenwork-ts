(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[7],{241:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return a}))},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(7),r=n(241),s=n(3),o=(n(0),n(22)),c=n(11),i=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(o.b)(i)((function(t){var n=t.isAuth,o=Object(r.a)(t,["isAuth"]);return n?Object(s.jsx)(e,Object(a.a)({},o)):Object(s.jsx)(c.a,{to:"/login"})}))}},255:function(e,t,n){"use strict";t.a=n.p+"static/media/emptyUser.80e4c874.png"},256:function(e,t,n){"use strict";var a=n(58),r=n(3),s=n(0),o=n.n(s),c=n(257),i=n.n(c),l=o.a.memo((function(e){for(var t=e.totalCount,n=e.portionSize,s=void 0===n?10:n,o=e.currentPage,c=e.onPageChanged,l=e.portionNumber,u=e.changePortionNumber,d=Math.ceil(t/s),p=(l-1)*s+1,g=l*s,b=[],m=1;m<d+1;m++)b=[].concat(Object(a.a)(b),[m]);var h=b.filter((function(e){return e>=p&&e<=g})).map((function(e,t){return o===e?Object(r.jsx)("span",{className:i.a.activeNumber,children:e},t):Object(r.jsx)("span",{onClick:function(){c(e)},className:i.a.normalNumber,children:e},t)})),j=l>1&&Object(r.jsx)("span",{onClick:function(){return u(l-1)},className:i.a.normalNumber,children:"<<<"}),f=d>l&&Object(r.jsx)("span",{onClick:function(){return u(l+1)},className:i.a.normalNumber,children:">>>"});return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:i.a.pages,children:[j,h,f]})})}));t.a=l},257:function(e,t,n){e.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh"}},324:function(e,t,n){e.exports={usersFrame:"UserPage_usersFrame__1ny86"}},325:function(e,t,n){e.exports={user:"User_user__1J7Ho",description:"User_description__1Rnc4",info:"User_info__2slCe",name:"User_name__2HfxK",userStatus:"User_userStatus__fIoiG",location:"User_location__gvlFw",country:"User_country__31Z5J",city:"User_city__3Pe1w",photoZone:"User_photoZone__1NDY4",followed:"User_followed__23RH-",activeNumber:"User_activeNumber__25Xxb",normalNumber:"User_normalNumber__2g2Lh",addUsersButton:"User_addUsersButton__2FzJQ"}},337:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n(32),s=n(34),o=n(33),c=n(3),i=n(0),l=n.n(i),u=n(22),d=n(12),p=n(324),g=n.n(p),b=n(325),m=n.n(b),h=n(25),j=n(73),f=n(29),_=l.a.memo((function(e){var t=e.user,n=e.emptyPhoto,a=e.isRequestSendUsersId,r=e.followCallBack,s=e.unFollowCallBack,o=e.toDialog;return Object(c.jsxs)("div",{className:m.a.user,children:[Object(c.jsxs)("div",{className:m.a.photoZone,children:[Object(c.jsx)(h.b,{to:"".concat(j.a.PROFILE+t.id),children:Object(c.jsx)("img",{src:t.photos.small||n,alt:"".concat(t.name,", ").concat(t.id)})}),t.followed?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{disabled:a.some((function(e){return e===t.id})),className:m.a.followed,onClick:function(){s(t.id)},children:Object(c.jsx)(f.a,{_id:"users.dialogs.unfollow"})}),Object(c.jsx)("button",{disabled:a.some((function(e){return e===t.id})),className:m.a.followed,onClick:function(){o(t.id)},children:Object(c.jsx)(f.a,{_id:"users.dialogs.dialog"})})]}):Object(c.jsx)("button",{disabled:a.some((function(e){return e===t.id})),className:m.a.followed,onClick:function(){r(t.id)},children:Object(c.jsx)(f.a,{_id:"users.dialogs.follow"})})]}),Object(c.jsxs)("div",{className:m.a.description,children:[Object(c.jsxs)("div",{className:m.a.info,children:[Object(c.jsx)("div",{className:m.a.userStatus,children:Object(c.jsx)(f.a,{_id:t.status})}),Object(c.jsx)("div",{className:m.a.name,children:t.name})]}),Object(c.jsxs)("div",{className:m.a.location,children:[Object(c.jsx)("span",{className:m.a.country,children:'"user.location.country"'}),Object(c.jsx)("span",{className:m.a.city,children:'"user.location.city"'})]})]})]},t.id)})),O=n(256),N=l.a.memo((function(e){var t=e.users,n=e.totalCount,a=(e.pageSize,e.followCallBack),r=e.unFollowCallBack,s=e.onPageChanged,o=e.emptyPhoto,i=e.isRequestSendUsersId,l=e.currentPage,u=e.portionNumber,d=e.changePortionNumber,p=e.toDialog,b=t.map((function(e){return Object(c.jsx)(_,{user:e,emptyPhoto:o,isRequestSendUsersId:i,followCallBack:a,unFollowCallBack:r,toDialog:p})}));return Object(c.jsxs)("div",{className:g.a.usersFrame,children:[Object(c.jsx)(O.a,{changePortionNumber:d,portionNumber:u,totalCount:n,currentPage:l,onPageChanged:s}),b]})})),x=n(255),C=n(47),P=n(19),S=n(249),v=n(48),w=n(27),U=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.changeCurrentPage(t),e.props.getUsersSaga(e.props.pageSize,t)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersSaga(this.props.pageSize,this.props.currentPage)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.props.isFetching?Object(c.jsx)(C.a,{}):Object(c.jsx)(N,{emptyPhoto:x.a,users:this.props.users,totalCount:this.props.totalCount,followCallBack:this.props.followCallBack,unFollowCallBack:this.props.unFollowCallBack,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,pageSize:this.props.pageSize,isRequestSendUsersId:this.props.isRequestSendUsersId,changePortionNumber:this.props.changePortionNumber,portionNumber:this.props.portionNumber,toDialog:this.props.toDialog})})}}]),n}(l.a.Component);t.default=Object(P.d)(Object(u.b)((function(e){return{users:v.a.usersSelectors.getUsersDifficult(e),totalCount:v.a.usersSelectors.getTotalCount(e),pageSize:v.a.usersSelectors.getPageSize(e),portionNumber:v.a.usersSelectors.getPortionNumber(e),currentPage:v.a.usersSelectors.getCurrentPage(e),isFetching:v.a.usersSelectors.getIsFetching(e),isRequestSendUsersId:v.a.usersSelectors.getIsRequestSendUserId(e)}}),{followCallBack:d.a.followSaga,unFollowCallBack:d.a.unfollowSaga,changeCurrentPage:d.a.changeCurrentPageActionCreator,changePortionNumber:d.a.setPortionNumber,getUsersSaga:d.a.getUsersSaga,toDialog:w.a.toDialogSaga}),S.a)(U)}}]);
//# sourceMappingURL=7.df03a9d3.chunk.js.map