(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[5],{312:function(e,t,n){e.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh",green:"Paginator_green__byT13",purple:"Paginator_purple__vCwie"}},313:function(e,t,n){"use strict";var a=n(31),r=n(1),c=n(0),s=n.n(c),o=n(312),i=n.n(o),l="green",u="purple",b="transparent",m=s.a.memo((function(e){var t=e.totalCount,n=e.portionSize,s=void 0===n?5:n,o=e.currentPage,m=e.onPageChanged,j=e.portionNumber,h=e.changePortionNumber,d=e.color,N=void 0===d?b:d,g=Math.ceil(t/(s+1)),p=(j-1)*s+1,O=j*s,f=Object(c.useCallback)((function(){for(var e=[],t=1;t<g+1;t++)e=[].concat(Object(a.a)(e),[t]);return e}),[g])(),_=N==u?i.a.purple:N==l?i.a.green:"",x=f.filter((function(e){return e>=p&&e<=O})).map((function(e,t){return o===e?Object(r.jsx)("span",{className:i.a.activeNumber,children:e},t):Object(r.jsx)("span",{onClick:function(){m(e)},className:i.a.normalNumber,children:e},t)})),w=j>1&&Object(r.jsx)("span",{onClick:function(){return h(j-1)},className:i.a.normalNumber,children:"<"}),v=g/s>j&&Object(r.jsx)("span",{onClick:function(){return h(j+1)},className:i.a.normalNumber,children:">"}),P=j+20<=g/s&&Object(r.jsx)("span",{onClick:function(){return h(j+20)},className:i.a.normalNumber,children:">>"}),S=j-20>0&&Object(r.jsx)("span",{onClick:function(){return h(j-20)},className:i.a.normalNumber,children:"<<"}),C=j+s<g/s&&Object(r.jsx)("span",{onClick:function(){return h(g/s)},className:i.a.normalNumber,children:"end"}),A=j-s>0&&Object(r.jsx)("span",{onClick:function(){return h(1)},className:i.a.normalNumber,children:"start"});return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"".concat(i.a.pages," ").concat(_),children:[A,S,w,x,v,P,C]})})}));t.a=m},330:function(e,t,n){e.exports={article:"Article_article__pURLY",img:"Article_img__2v75f",title:"Article_title__14h6J",text:"Article_text__3gAlV"}},331:function(e,t,n){e.exports={newsFeed:"NewsFeed_newsFeed__1PuZ2",articles:"NewsFeed_articles__o2wr4"}},332:function(e,t,n){e.exports={searchingArea:"SearchNews_searchingArea__tg5U-",search:"SearchNews_search__2ww_-"}},340:function(e,t,n){"use strict";n.r(t);var a=n(89),r=n(1),c=n(0),s=n.n(c),o=n(17),i=n(48),l=n(69),u=n(330),b=n.n(u),m=function(e){var t=e.article;return Object(r.jsxs)("div",{className:b.a.article,children:[Object(r.jsx)("div",{className:b.a.img,style:{backgroundImage:"url(".concat(t.urlToImage,")")}}),Object(r.jsx)("h1",{className:b.a.title,children:t.title}),Object(r.jsx)("a",{className:b.a.href,href:t.url,children:Object(r.jsx)("p",{className:b.a.text,children:t.content})})]})},j=n(331),h=n.n(j),d=n(332),N=n.n(d),g=n(88),p=n(113),O=n(114),f=n(146),_=Object(f.a)({form:"profile add message form"})((function(e){return Object(r.jsx)("div",{className:N.a.search,children:Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.c)("search news here","searchNews",[p.b],g.a,{type:"text"}),Object(r.jsx)(O.a,{text:"search"})]})})})),x=s.a.memo((function(e){var t=e.onSearchArea;return Object(r.jsx)("div",{className:N.a.searchingArea,children:Object(r.jsx)(_,{onSubmit:function(e){var n=e.searchNews;t(n)}})})})),w=n(313),v=s.a.memo((function(e){var t=e.onSearchArea,n=e.onPortionNumberChange,a=e.portionNumber,c=e.currentPage,s=e.onPageChange,o=e.totalCount,i=e.articles.map((function(e){return Object(r.jsx)(m,{article:e},e.publishedAt)}));return Object(r.jsxs)("div",{className:h.a.newsFeed,children:[Object(r.jsx)(w.a,{totalCount:o,currentPage:c,portionNumber:a,onPageChanged:s,changePortionNumber:n}),Object(r.jsx)(x,{onSearchArea:t}),o?Object(r.jsx)("div",{className:h.a.articles,children:i}):Object(r.jsx)(l.a,{})]})})),P=n(70),S=s.a.memo((function(){var e=Object(o.c)(),t=Object(o.d)(P.a.newsSelectors.newsArticlesSelector),n=Object(o.d)(P.a.newsSelectors.newsTotalCountSelector),s=Object(o.d)(P.a.newsSelectors.newsIsFetchingSelector),u=Object(o.d)(P.a.newsSelectors.newsPageSelector),b=Object(o.d)(P.a.newsSelectors.newsPortionNumberSelector),m=Object(c.useState)(""),j=Object(a.a)(m,2),h=j[0],d=j[1];Object(c.useEffect)((function(){e(i.a.getNewsSaga(h))}),[h,u]);return s?Object(r.jsx)(l.a,{}):Object(r.jsx)(v,{onSearchArea:function(e){d(e)},articles:t,portionNumber:b,totalCount:n,currentPage:u,onPageChange:function(t){e(i.a.setPage(t))},onPortionNumberChange:function(t){e(i.a.setPortionNumber(t))}})}));t.default=S}}]);
//# sourceMappingURL=5.d6b92b0d.chunk.js.map