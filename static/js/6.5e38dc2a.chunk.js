(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[6],{243:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e&&e.trim()?void 0:"error"},a=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},244:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return d}));var r=n(7),a=n(242),c=n(4),o=n(124),i=n(0),s=n.n(i),l=n(245),u=n.n(l),b=s.a.memo((function(e){var t=e.meta.touched&&e.meta.error;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"".concat(u.a.textArea," ").concat(t&&u.a.error),children:e.children})})})),m=s.a.memo((function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))})),j=s.a.memo((function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}));function d(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i)),Object(c.jsx)("span",{className:u.a.span,children:s})]})}},245:function(e,t,n){e.exports={textArea:"FormControls_textArea__27tXa",error:"FormControls_error__3padn",blinker:"FormControls_blinker__3azrf",span:"FormControls_span__28AF2"}},246:function(e,t,n){"use strict";var r=n(7),a=n(242),c=n(4),o=(n(0),n(249)),i=n.n(o),s=n(28);t.a=function(e){var t=e.text,n=e.small,o=e.children,l=void 0!==o&&o,u=Object(a.a)(e,["text","small","children"]);return Object(c.jsx)("div",{className:"".concat(i.a.mainButton," ").concat(n&&i.a.small),children:Object(c.jsx)("button",Object(r.a)(Object(r.a)({},u),{},{children:t||l||Object(c.jsx)(s.a,{_id:"button.empty"})}))})}},247:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(75);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},249:function(e,t,n){e.exports={mainButton:"Button_mainButton__12rK6",small:"Button_small__3hwoO"}},251:function(e,t,n){e.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh",green:"Paginator_green__byT13",purple:"Paginator_purple__vCwie"}},252:function(e,t,n){"use strict";var r=n(58),a=n(4),c=n(0),o=n.n(c),i=n(251),s=n.n(i),l="green",u="purple",b="transparent",m=o.a.memo((function(e){var t=e.totalCount,n=e.portionSize,o=void 0===n?5:n,i=e.currentPage,m=e.onPageChanged,j=e.portionNumber,d=e.changePortionNumber,h=e.color,f=void 0===h?b:h,O=Math.ceil(t/(o+1)),p=(j-1)*o+1,x=j*o,_=Object(c.useCallback)((function(){for(var e=[],t=1;t<O+1;t++)e=[].concat(Object(r.a)(e),[t]);return e}),[O])(),g=f==u?s.a.purple:f==l?s.a.green:"",N=_.filter((function(e){return e>=p&&e<=x})).map((function(e,t){return i===e?Object(a.jsx)("span",{className:s.a.activeNumber,children:e},t):Object(a.jsx)("span",{onClick:function(){m(e)},className:s.a.normalNumber,children:e},t)})),v=j>1&&Object(a.jsx)("span",{onClick:function(){return d(j-1)},className:s.a.normalNumber,children:"<"}),w=O/o>j&&Object(a.jsx)("span",{onClick:function(){return d(j+1)},className:s.a.normalNumber,children:">"}),S=j+20<=O/o&&Object(a.jsx)("span",{onClick:function(){return d(j+20)},className:s.a.normalNumber,children:">>"}),C=j-20>0&&Object(a.jsx)("span",{onClick:function(){return d(j-20)},className:s.a.normalNumber,children:"<<"}),P=j+o<O/o&&Object(a.jsx)("span",{onClick:function(){return d(O/o)},className:s.a.normalNumber,children:"end"}),A=j-o>0&&Object(a.jsx)("span",{onClick:function(){return d(1)},className:s.a.normalNumber,children:"start"});return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"".concat(s.a.pages," ").concat(g),children:[A,C,v,N,w,S,P]})})}));t.a=m},328:function(e,t,n){e.exports={article:"Article_article__pURLY",img:"Article_img__2v75f",title:"Article_title__14h6J",text:"Article_text__3gAlV"}},329:function(e,t,n){e.exports={newsFeed:"NewsFeed_newsFeed__1PuZ2",articles:"NewsFeed_articles__o2wr4"}},330:function(e,t,n){e.exports={searchingArea:"SearchNews_searchingArea__tg5U-",search:"SearchNews_search__2ww_-"}},338:function(e,t,n){"use strict";n.r(t);var r=n(247),a=n(4),c=n(0),o=n.n(c),i=n(23),s=n(35),l=n(49),u=n(328),b=n.n(u),m=function(e){var t=e.article;return Object(a.jsxs)("div",{className:b.a.article,children:[Object(a.jsx)("div",{className:b.a.img,style:{backgroundImage:"url(".concat(t.urlToImage,")")}}),Object(a.jsx)("h1",{className:b.a.title,children:t.title}),Object(a.jsx)("a",{className:b.a.href,href:t.url,children:Object(a.jsx)("p",{className:b.a.text,children:t.content})})]})},j=n(329),d=n.n(j),h=n(330),f=n.n(h),O=n(244),p=n(243),x=n(246),_=n(125),g=Object(_.a)({form:"profile add message form"})((function(e){return Object(a.jsx)("div",{className:f.a.search,children:Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.c)("search news here","searchNews",[p.b],O.a,{type:"text"}),Object(a.jsx)(x.a,{text:"search"})]})})})),N=o.a.memo((function(e){var t=e.onSearchArea;return Object(a.jsx)("div",{className:f.a.searchingArea,children:Object(a.jsx)(g,{onSubmit:function(e){var n=e.searchNews;t(n)}})})})),v=n(252),w=o.a.memo((function(e){var t=e.onSearchArea,n=e.onPortionNumberChange,r=e.portionNumber,c=e.currentPage,o=e.onPageChange,i=e.totalCount,s=e.articles.map((function(e){return Object(a.jsx)(m,{article:e},e.publishedAt)}));return Object(a.jsxs)("div",{className:d.a.newsFeed,children:[Object(a.jsx)(v.a,{totalCount:i,currentPage:c,portionNumber:r,onPageChanged:o,changePortionNumber:n}),Object(a.jsx)(N,{onSearchArea:t}),i?Object(a.jsx)("div",{className:d.a.articles,children:s}):Object(a.jsx)(l.a,{})]})})),S=n(50),C=o.a.memo((function(){var e=Object(i.c)(),t=Object(i.d)(S.a.newsSelectors.newsArticlesSelector),n=Object(i.d)(S.a.newsSelectors.newsTotalCountSelector),o=Object(i.d)(S.a.newsSelectors.newsIsFetchingSelector),u=Object(i.d)(S.a.newsSelectors.newsPageSelector),b=Object(i.d)(S.a.newsSelectors.newsPortionNumberSelector),m=Object(c.useState)(""),j=Object(r.a)(m,2),d=j[0],h=j[1];Object(c.useEffect)((function(){e(s.a.getNewsSaga(d))}),[d,u]);return o?Object(a.jsx)(l.a,{}):Object(a.jsx)(w,{onSearchArea:function(e){h(e)},articles:t,portionNumber:b,totalCount:n,currentPage:u,onPageChange:function(t){e(s.a.setPage(t))},onPortionNumberChange:function(t){e(s.a.setPortionNumber(t))}})}));t.default=C}}]);
//# sourceMappingURL=6.5e38dc2a.chunk.js.map