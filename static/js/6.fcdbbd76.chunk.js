(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[6],{242:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e&&e.trim()?void 0:"error"},a=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},243:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return h}));var r=n(7),a=n(241),c=n(3),o=n(123),i=n(0),s=n.n(i),u=n(244),l=n.n(u),b=s.a.memo((function(e){var t=e.meta.touched&&e.meta.error;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"".concat(l.a.textArea," ").concat(t&&l.a.error),children:e.children})})})),m=s.a.memo((function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))})),j=s.a.memo((function(e){var t=e.input,n=(e.meta,e.children,Object(a.a)(e,["input","meta","children"]));return Object(c.jsx)(b,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}));function h(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},i)),Object(c.jsx)("span",{className:l.a.span,children:s})]})}},244:function(e,t,n){e.exports={textArea:"FormControls_textArea__27tXa",error:"FormControls_error__3padn",blinker:"FormControls_blinker__3azrf",span:"FormControls_span__28AF2"}},245:function(e,t,n){"use strict";var r=n(7),a=n(241),c=n(3),o=(n(0),n(248)),i=n.n(o);t.a=function(e){var t=e.text,n=e.small,o=void 0!==n&&n,s=Object(a.a)(e,["text","small"]);return Object(c.jsx)("div",{className:"".concat(i.a.mainButton," ").concat(o&&i.a.small),children:Object(c.jsx)("button",Object(r.a)(Object(r.a)({},s),{},{children:t}))})}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(74);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},248:function(e,t,n){e.exports={mainButton:"Button_mainButton__12rK6",small:"Button_small__3hwoO"}},256:function(e,t,n){"use strict";var r=n(58),a=n(3),c=n(0),o=n.n(c),i=n(257),s=n.n(i),u=o.a.memo((function(e){for(var t=e.totalCount,n=e.portionSize,c=void 0===n?10:n,o=e.currentPage,i=e.onPageChanged,u=e.portionNumber,l=e.changePortionNumber,b=Math.ceil(t/c),m=(u-1)*c+1,j=u*c,h=[],d=1;d<b+1;d++)h=[].concat(Object(r.a)(h),[d]);var f=h.filter((function(e){return e>=m&&e<=j})).map((function(e,t){return o===e?Object(a.jsx)("span",{className:s.a.activeNumber,children:e},t):Object(a.jsx)("span",{onClick:function(){i(e)},className:s.a.normalNumber,children:e},t)})),O=u>1&&Object(a.jsx)("span",{onClick:function(){return l(u-1)},className:s.a.normalNumber,children:"<<<"}),x=b>u&&Object(a.jsx)("span",{onClick:function(){return l(u+1)},className:s.a.normalNumber,children:">>>"});return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:s.a.pages,children:[O,f,x]})})}));t.a=u},257:function(e,t,n){e.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh"}},326:function(e,t,n){e.exports={article:"Article_article__pURLY",img:"Article_img__2v75f",title:"Article_title__14h6J",text:"Article_text__3gAlV"}},327:function(e,t,n){e.exports={newsFeed:"NewsFeed_newsFeed__1PuZ2",articles:"NewsFeed_articles__o2wr4"}},328:function(e,t,n){e.exports={searchingArea:"SearchNews_searchingArea__tg5U-",search:"SearchNews_search__2ww_-"}},336:function(e,t,n){"use strict";n.r(t);var r=n(246),a=n(3),c=n(0),o=n.n(c),i=n(22),s=n(35),u=n(47),l=n(326),b=n.n(l),m=function(e){var t=e.article;return Object(a.jsxs)("div",{className:b.a.article,children:[Object(a.jsx)("div",{className:b.a.img,style:{backgroundImage:"url(".concat(t.urlToImage,")")}}),Object(a.jsx)("h1",{className:b.a.title,children:t.title}),Object(a.jsx)("a",{className:b.a.href,href:t.url,children:Object(a.jsx)("p",{className:b.a.text,children:t.content})})]})},j=n(327),h=n.n(j),d=n(328),f=n.n(d),O=n(243),x=n(242),_=n(245),p=n(124),g=Object(p.a)({form:"profile add message form"})((function(e){return Object(a.jsx)("div",{className:f.a.search,children:Object(a.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.c)("search news here","searchNews",[x.b],O.a,{type:"text"}),Object(a.jsx)(_.a,{text:"search"})]})})})),v=o.a.memo((function(e){var t=e.onSearchArea;return Object(a.jsx)("div",{className:f.a.searchingArea,children:Object(a.jsx)(g,{onSubmit:function(e){var n=e.searchNews;t(n)}})})})),N=n(256),w=o.a.memo((function(e){var t=e.onSearchArea,n=e.onPortionNumberChange,r=e.portionNumber,c=e.currentPage,o=e.onPageChange,i=e.totalCount,s=e.articles.map((function(e){return Object(a.jsx)(m,{article:e},e.publishedAt)}));return Object(a.jsxs)("div",{className:h.a.newsFeed,children:[Object(a.jsx)(N.a,{totalCount:i,currentPage:c,portionNumber:r,onPageChanged:o,changePortionNumber:n}),Object(a.jsx)(v,{onSearchArea:t}),i?Object(a.jsx)("div",{className:h.a.articles,children:s}):Object(a.jsx)(u.a,{})]})})),S=n(48),A=o.a.memo((function(){var e=Object(i.c)(),t=Object(i.d)(S.a.newsSelectors.newsArticlesSelector),n=Object(i.d)(S.a.newsSelectors.newsTotalCountSelector),o=Object(i.d)(S.a.newsSelectors.newsIsFetchingSelector),l=Object(i.d)(S.a.newsSelectors.newsPageSelector),b=Object(i.d)(S.a.newsSelectors.newsPortionNumberSelector),m=Object(c.useState)(""),j=Object(r.a)(m,2),h=j[0],d=j[1];Object(c.useEffect)((function(){e(s.a.getNewsSaga(h))}),[h,l]);return o?Object(a.jsx)(u.a,{}):Object(a.jsx)(w,{onSearchArea:function(e){d(e)},articles:t,portionNumber:b,totalCount:n,currentPage:l,onPageChange:function(t){e(s.a.setPage(t))},onPortionNumberChange:function(t){e(s.a.setPortionNumber(t))}})}));t.default=A}}]);
//# sourceMappingURL=6.fcdbbd76.chunk.js.map