(this["webpackJsonpnetwork-app-ts"]=this["webpackJsonpnetwork-app-ts"]||[]).push([[4],{243:function(A,e,s){"use strict";s.d(e,"b",(function(){return t})),s.d(e,"a",(function(){return a}));var t=function(A){return A&&A.trim()?void 0:"error"},a=function(A){return function(e){if(e.length>A)return"max length is ".concat(A," symbols")}}},244:function(A,e,s){"use strict";s.d(e,"b",(function(){return C})),s.d(e,"a",(function(){return d})),s.d(e,"c",(function(){return D}));var t=s(7),a=s(242),n=s(4),g=s(124),r=s(0),i=s.n(r),c=s(245),o=s.n(c),B=i.a.memo((function(A){var e=A.meta.touched&&A.meta.error;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"".concat(o.a.textArea," ").concat(e&&o.a.error),children:A.children})})})),C=i.a.memo((function(A){var e=A.input,s=(A.meta,A.children,Object(a.a)(A,["input","meta","children"]));return Object(n.jsx)(B,Object(t.a)(Object(t.a)({},A),{},{children:Object(n.jsx)("textarea",Object(t.a)(Object(t.a)({},e),s))}))})),d=i.a.memo((function(A){var e=A.input,s=(A.meta,A.children,Object(a.a)(A,["input","meta","children"]));return Object(n.jsx)(B,Object(t.a)(Object(t.a)({},A),{},{children:Object(n.jsx)("input",Object(t.a)(Object(t.a)({},e),s))}))}));function D(A,e,s,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g.a,Object(t.a)({placeholder:A,name:e,validate:s,component:a},r)),Object(n.jsx)("span",{className:o.a.span,children:i})]})}},245:function(A,e,s){A.exports={textArea:"FormControls_textArea__27tXa",error:"FormControls_error__3padn",blinker:"FormControls_blinker__3azrf",span:"FormControls_span__28AF2"}},246:function(A,e,s){"use strict";var t=s(7),a=s(242),n=s(4),g=(s(0),s(249)),r=s.n(g),i=s(28);e.a=function(A){var e=A.text,s=A.small,g=A.children,c=void 0!==g&&g,o=Object(a.a)(A,["text","small","children"]);return Object(n.jsx)("div",{className:"".concat(r.a.mainButton," ").concat(s&&r.a.small),children:Object(n.jsx)("button",Object(t.a)(Object(t.a)({},o),{},{children:e||c||Object(n.jsx)(i.a,{_id:"button.empty"})}))})}},247:function(A,e,s){"use strict";s.d(e,"a",(function(){return a}));var t=s(75);function a(A,e){return function(A){if(Array.isArray(A))return A}(A)||function(A,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(A)){var s=[],t=!0,a=!1,n=void 0;try{for(var g,r=A[Symbol.iterator]();!(t=(g=r.next()).done)&&(s.push(g.value),!e||s.length!==e);t=!0);}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}return s}}(A,e)||Object(t.a)(A,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},249:function(A,e,s){A.exports={mainButton:"Button_mainButton__12rK6",small:"Button_small__3hwoO"}},250:function(A,e,s){"use strict";e.a=s.p+"static/media/emptyUser.80e4c874.png"},251:function(A,e,s){"use strict";s.d(e,"a",(function(){return c}));var t=s(7),a=s(242),n=s(4),g=(s(0),s(23)),r=s(11),i=function(A){return{isAuth:A.auth.isAuth}};function c(A){return Object(g.b)(i)((function(e){var s=e.isAuth,g=Object(a.a)(e,["isAuth"]);return s?Object(n.jsx)(A,Object(t.a)({},g)):Object(n.jsx)(r.a,{to:"/login"})}))}},252:function(A,e,s){A.exports={pages:"Paginator_pages__38HhQ",activeNumber:"Paginator_activeNumber__2lXob",normalNumber:"Paginator_normalNumber__3KHzh",green:"Paginator_green__byT13",purple:"Paginator_purple__vCwie"}},253:function(A,e,s){"use strict";var t=s(58),a=s(4),n=s(0),g=s.n(n),r=s(252),i=s.n(r),c="green",o="purple",B="transparent",C=g.a.memo((function(A){var e=A.totalCount,s=A.portionSize,g=void 0===s?5:s,r=A.currentPage,C=A.onPageChanged,d=A.portionNumber,D=A.changePortionNumber,m=A.color,l=void 0===m?B:m,u=Math.ceil(e/(g+1)),w=(d-1)*g+1,Q=d*g,M=Object(n.useCallback)((function(){for(var A=[],e=1;e<u+1;e++)A=[].concat(Object(t.a)(A),[e]);return A}),[u])(),j=l==o?i.a.purple:l==c?i.a.green:"",f=M.filter((function(A){return A>=w&&A<=Q})).map((function(A,e){return r===A?Object(a.jsx)("span",{className:i.a.activeNumber,children:A},e):Object(a.jsx)("span",{onClick:function(){C(A)},className:i.a.normalNumber,children:A},e)})),E=d>1&&Object(a.jsx)("span",{onClick:function(){return D(d-1)},className:i.a.normalNumber,children:"<"}),I=u/g>d&&Object(a.jsx)("span",{onClick:function(){return D(d+1)},className:i.a.normalNumber,children:">"}),b=d+20<=u/g&&Object(a.jsx)("span",{onClick:function(){return D(d+20)},className:i.a.normalNumber,children:">>"}),O=d-20>0&&Object(a.jsx)("span",{onClick:function(){return D(d-20)},className:i.a.normalNumber,children:"<<"}),J=d+g<u/g&&Object(a.jsx)("span",{onClick:function(){return D(u/g)},className:i.a.normalNumber,children:"end"}),k=d-g>0&&Object(a.jsx)("span",{onClick:function(){return D(1)},className:i.a.normalNumber,children:"start"});return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"".concat(i.a.pages," ").concat(j),children:[k,O,E,f,I,b,J]})})}));e.a=C},319:function(A,e,s){A.exports={currentDialogWrapper:"CurrentDialog_currentDialogWrapper__2zXM5",paginator:"CurrentDialog_paginator__HK61i"}},320:function(A,e,s){A.exports={textArea:"SendMessageAreaFromCurrentDialog_textArea__z0sQa",sendMessageAreaFromCurrentDialog:"SendMessageAreaFromCurrentDialog_sendMessageAreaFromCurrentDialog__3xuAr"}},321:function(A,e,s){A.exports={currentDialog:"MessageFromCurrentDialog_currentDialog__3IaGf",myMessage:"MessageFromCurrentDialog_myMessage__1Boxr",myAvatar:"MessageFromCurrentDialog_myAvatar__1Bvnm",notMyMessage:"MessageFromCurrentDialog_notMyMessage__1VdJD",notMyAvatar:"MessageFromCurrentDialog_notMyAvatar__2pxPF",end:"MessageFromCurrentDialog_end__18Vc7"}},322:function(A,e,s){A.exports={message:"Message_message__ajlCr",avatar:"Message_avatar__20aOa",messageFrame:"Message_messageFrame__19YfX",cornet:"Message_cornet__2ZtlO",textMessage:"Message_textMessage__2KU2s",textFrame:"Message_textFrame__SDBiJ",name:"Message_name__4IBib",time:"Message_time__2wrYJ",bin:"Message_bin__1J-yI",activeBin:"Message_activeBin__19qJ9",viewed:"Message_viewed__1wl51",messageFriend:"Message_messageFriend__3gxal",avatarFriend:"Message_avatarFriend__5QMqH",messageFrameFriend:"Message_messageFrameFriend__2V9aC",cornetFriend:"Message_cornetFriend__1L8hh",textFrameFriend:"Message_textFrameFriend__1B9LI",textMessageFriend:"Message_textMessageFriend__2bSh4",nameFriend:"Message_nameFriend__1PokK",timeFriend:"Message_timeFriend__3912B",imgFriend:"Message_imgFriend__2d67v",subMenuFriend:"Message_subMenuFriend__eUF8J",activeSubMenuFriend:"Message_activeSubMenuFriend__37AyV"}},323:function(A,e,s){A.exports={noDataWrapper:"NoData_noDataWrapper__3qQBG"}},324:function(A,e,s){A.exports={friendListFromDialogs:"FriendListFromDialogs_friendListFromDialogs__3kIOM",item:"FriendListFromDialogs_item__1Ebj8",active:"FriendListFromDialogs_active__3DXah"}},325:function(A,e,s){A.exports={dialogsWrapper:"DialogsContainer_dialogsWrapper__1Iram"}},337:function(A,e,s){"use strict";s.r(e);var t=s(242),a=s(4),n=s(0),g=s.n(n),r=s(319),i=s.n(r),c=s(320),o=s.n(c),B=s(125),C=s(244),d=s(243),D=s(246),m=g.a.memo((function(A){return Object(a.jsxs)("form",{onSubmit:A.handleSubmit,children:[Object(C.c)("enter new message here","newMessageBody",[d.b],C.b,{type:"text"}),Object(a.jsx)(D.a,{text:"send message"})]})})),l=Object(B.a)({form:"profile add message form"})(m),u=g.a.memo((function(A){return Object(a.jsx)("div",{className:o.a.sendMessageAreaFromCurrentDialog,children:Object(a.jsx)(l,{onSubmit:function(e){var s=e.newMessageBody;s&&s.trim()&&A.sendMessage(s.trim())}})})})),w=s(321),Q=s.n(w),M=s(247),j=s(322),f=s.n(j),E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d1rzG/ZXRfw75lzmUvncuZaBAGhVghWiEIhtEKhtQWkyi1KYiTGywul0Rdq0Cjxjb4haDQBVHiFmmCiCGkFBFvl3lIC2gIVKW25NbSdyzlzv5055/hiTzPz4Jw5/7322nut9d+fT/IkmLCHn/s8z97f/Vu3BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY5FTrAmAwdz7/Q38uPv8DHEAAgGs7leRLk3xtkjck+eNJzjetiOt5OMkHkvxUkh9N8p6m1QAwlJuTvC3JB5Nc9TP0zweTfGuSmwIAL+Mbkvxu2r+4/NT9+e0kXxcA+ANuTvK9af+i8rPuz79P8ooAQJK7krw77V9Ofrb5+cUk9wZ2ziRA9u6uJD+TaYIf+/FrSb48Vg2wYze0LgAaOpvkHfHy36PXJHl7pt8B2KXTrQuAhr4zyTe3LoJmPjPT6oB3ti4EWjAEwF69NskvRBds764keV2S97YuBLYmALBX703yxa2LoAvvTvL61kXA1nz9sEdvjpc/L3hdkje1LgK2JgCwR9/augC687daFwBbMwTA3pxP8okk51oXQleeSfLKJI+0LgS2cqZ1AbCxr8iyl/8zmTaS+XiVaqjlUzIN69xYeP2NmQ58eke1igDoynemfAe5H8z0lUifXpnkh1L+7/sd25cMwFZ+JGUvh3fFvhkjOJ3kf6bs3/jtDeoFYCPvS9nL4UtbFEuR16fs3/h/tSgWgG18OPNfDJdixcxITmf6N5v77/yhFsVCKx5q7E3J3u9PZdoxjjFczvRvNpeVIeyKAAAAOyQAAMAOCQAAsEMCAADskAAAADskAADADgkAALBDAgAA7JAAAAA7JAAAwA4JAACwQwIAAOyQAAAAOyQAAMAOCQAAsEMCAADskAAAADskAADADgkAALBDAgAA7JAAAAA7JAAAwA4JAACwQwIAAOyQAAAAOyQAAMAOCQAAsEOnWhdQyacm+fNJvjLJ5yS5Pcn5phXRqztSFnyv1i6EVZU8264keaR2IRyFhzP9bvxGkp9M8o4kH2taUQWjB4CvSfLtSb404///BYAxXEnyniT/NMlPNK6l2Kgvzc9L8l1J3ti6EAB27V1J/k6SX29dyFwjBoCvSfIfM7VyAaC1x5J8S5K3ty5kjtOtC5jpbUn+Q5KbWxcCAM+7MclfTPJAkl9qXMvBRuoAfFWSH814oQWAfbiS5OuS/EjrQg4xSgD4nCS/mGl2PwD06pEkr03ym60LuZ5R9gH4l/HyB6B/dyT5F62LOMQIHYA3JPmp1kUAwAxvzLRnQLdG6AD849YFAMBM39a6gOvpvQNwPsn9Sc62LgQAZriU5L5Muwh2qfcOwFvj5Q/AeM4m+erWRbyc3gPAn25dAAAU+rLWBbycM60LuI5XF153NR23XejGqSTnMiX10+l/SIw6ria5nKlF+2wc9MT1nU/Z86H0HUaSX870xzn3p+vUBcBQ3pCyd9EwuwL26NdSdtN9yQFQy6mUvYt+rUWxh+p9DgAAsAIBAAB2SAAAgB0SAABghwQAANghAQAAdkgAAIAdEgAAYIcEAADYIQEAAHZIAACAHRIAAGCHBAAA2CEBAAB2SAAAgB0SAABghwQAANghAQAAdkgAAIAdEgAAYIcEAADYIQEAAHZIAACAHRIAAGCHBAAA2CEBAAB2SAAAgB0SAABghwQAANghAQAAdkgAAIAdEgAAYIcEAADYIQEAAHao9wDwTOF1X1S1CgD27LWF1z1dtYrKzrQu4DoeLrzu55N8NMnVirV80rkktye5KcnpJKdW+L8BwPVdTXI504v2sZR/NL6cU0n+cOG1F2sWUlvvAeBDSd5YcN3ZJJ9VuRYA+nM6L3yY9eZDrQt4Ob0PAfxc6wIAoNDPti7g5fTevj6f5P5MX/QAMIpLSV6ZjocBeu8APJzkZ1oXAQAz/XQ6fvkn/QeAJPlnrQsAgJm+o3UB1zNCAPipJD/RuggAONCPJXlX6yKup/c5AJ/0eUnem+TW1oUAwMt4LMmXJPn11oVczwgdgCT5P0m+JcmV1oUAwDVcyfSu6v7ln0zrJ0fxf5M8nuQtGadzAcA+XE3y95N8f+M6DjZSAEiS9yT5QJKvzbTxAwC09nSSv5rk+1oXMsdoASCZhgN+LMkXJPn0xrUAsG/vTvINSd7ZupC5RpkD8Ae9L8nrknzT8/8zAGzpfyf5xiSvT/L+xrUUOZax9M9O8vVJviLJq5Pcm7rh5vaUdUtMWgRYpuRZfiXJIxVruJzkgSS/mWlp+tuTfKTif5+O/VimCR5zf17ToliAI/GalD17u96DvxejDgFs7YHC6+6tWgXAvpQ+Q0uf2bsiABzm/sLr7qtaBcC+lD5DS5/ZuyIAHEYHAGB7OgArEgAOIwAAbE8AWJEAcJjSdpIAAFCu9BlqCOAAAsBhStOkOQAA5UqfoToABxAADmMIAGB7hgBWJAAcxioAgO1ZBUAXnsj8zSgebFIpwHF4MPOfu1eSnG1R7Gh0AA5X0lK6K8mZ2oUA7MDpJHcWXHcxyaXKtRwlAeBwJS2lU0nuqV0IwA6Unumi/X8gAeBwJgICbMcEwJUJAIczERBgO/YAWJkAcDgdAIDt2ANgZQLA4QQAgO0YAliZAHA4AQBgOwLAygSAw5kDALAdmwCtTAA4nA4AwHZ0AFYmABxOBwBgOzoAKxMADqcDALAdHQC68njm70t9oUmlAGO7kLJzAGy/fiAdgHlKkuX5OJgCYI4zmZ6dc11I8lzlWo6WADCP8wAA1ndvpmfnXMb/ZxAA5jEPAGB9xv83IADMYyUAwPqsANiAADCPDgDA+nQANiAAzFP6y6UDAHA4HYANCADzlP5y6QAAHE4HYAMCwDyGAADWJwBsQACYxyRAgPUZAtiAADCPDgDA+nQANiAAzGMSIMD6BAC69Fjm7099sUmlAGO6mPnP2ctJTrcodlQ6APOVjDHdkeRc7UIAjtDZTM/MuR7KFAI4kAAwX0mLyXkAAIcpPQdA+38mAWA+KwEA1mMFwEYEgPmsBABYjwmAGxEA5tMBAFiPDsBGBID5dAAA1qMDsBEBYD4BAGA9AsBGBID5bAYEsB4BYCMCwHxOBARYjzkAGxEA5jMEALAeHYCNCADzWQUAsB4dALr2SObvU/1wk0oBxvJw5j9fn4tzAGbTAShT0mq6I8mNtQsBOCLnktxecJ1zAAoIAGXMAwCo7744B2AzAkAZKwEA6it9Rhr/LyAAlLEXAEB9VgBsSAAoowMAUJ8VABsSAMqYAwBQnw7AhgSAMgIAQH0CwIYEgDI2AwKozxDAhgSAMjoAAPXpAGxIACijAwBQnw7AhgSAMg9k2n5yLh0AgGvTAWAIJftVP9qkUoAxPJqycwB8zBZw08qVJM7bktxcuxCAI3BjpmfkXA8muVK5ll0QAMqVjjndU7UKgONg/H9jAkA5KwEA6jH+vzEBoJyVAAD16ABsTAAopwMAUI8OwMYEgHJOBASop/TZKAAUEgDKOREQoJ7SZ6MhgEICQDlDAAD1GALYmABQzhAAQD0CwMYEgHKGANZ3Z5JXtC4CFjjTuoCBWAWwMQGgXOl5ADoAL+8NSf5LkotJLiR5LMmvJ/knmQIBy5xP8g+TvCfJx5//eXeSf5DkjoZ1HYs7Mt3f92XaovZSpnv8A0m+pGFdI9ABYCgXM3/f6seaVNq/00m+J9OWnte6dx9N8vpWBR6Br8q0beq17u/9Sd7crLrxfXGS38m17+/lJP88Pryu5bHMf55eSnKqRbHwG5n/C3s1yS0tiu3cv87hByp9QaMaR/aWTA/LQx6of6ZRjSN7TQ4/IOxfNaqxZzen7Fn6+y2KhST5uZT90n5Gi2I79ubMu3+/FKl/jtuSfCKH39+PJ7m1SaVjOpXkvTn8/l5J8hUtCu3YZ6TsWfr+FsUeC62oZWwHXMffnfm//4WZ5gpwmL+Reb9zr0zy11eq5Rh9eab2/6FOJfl7K9UyKhMAGxAAlrEXwHJnU/Y19JbKdRyzt250zV59dcE1b4oVAi9mAmADAsAy9gJY7lOS3FRw3efWLuSIfXbBNa+qXsXx+pyCa27O9LvPRABoQABYRgdgucuF13l4Hq5kLwVzAA73ysLrrlStYmzOAWhAAFjGZkDLPZRpMs9cuij0ojSMXqhaxdicA9CAALCMIYDlnsm0tG+u0q8uqK3k7/nhJE/XLmRghgAaEACW0QGo4xMF19wa+ynQ3i0pGy7x5XqSVQANCADLmANQh+WUjKq0E1USeo+ZDkADAsAyzgOoozQAGAagNV+udbiPDQgAyzyXaSxvLgHgpNKvIfeR1kpDqBfXSSUdgEtJHqldyJ4IAMuV/CHfEuPXL6YDwKh8uS53S8qWqpZ2YHmeALCclQDLmQPAqEp/B80BeIHx/0YEgOWsBFhOAGBUOgDLuYeNCADL6QAsZw4AozIHYDkdgEYEgOV0AJYzB4BRGQJYTgegEQFgOXsBLGcIgFHpACynA9CIALCcALDcw5m2BJ5LB4DWSkLoM7F87cUEgEYEgOV8vS53NWV/zHfHmeq0czrJXQXX3R/L117MEEAjAsByOgB1lPwx35ApBEAL92QKAXN5cZ2kA9CIALCcVQB1WAnAaJwDUEfp37AAsJAAsNwDSa4UXKcDcJKVAIxG67qO0meh+7iQALDc5SQXC67z5XqSuRSMxgqAOkoCwLNJHq1dyN4IAHWUtKJuTtk54sdKB4DR6AAs94qUnYviHIAKBIA6bAa0nA4Ao7EJ0HJCVEMCQB0mAi5nEiCj8fJazgqAhgSAOnQAltMBYDRWASwnRDUkANRhL4DlSh+K5gDQipfXcjoADQkAdRgCWK50dzT3kFZKwufVJA/WLmRg9gBoSACoQwdguedStpxSB4BWSv5+LyS5VLuQgekANCQA1GEOQB0l9/GmJLfXLgSu4/ZMS3nnMv5/kk2AGhIA6jAEUIeVAIzC+H8dOgANCQB16ADUYSUAo7ACoA5BqiEBoI6HMm0JPJcX10l2A2QUXlx16AA0JADUUXoegA7ASToAjMI5AHWUPAOfiXMAqhAA6ilJpDclua12IQOzFwCj0AFY7raUTaT09V+JAFCPeQDL6QAwCucALGcFQGMCQD1WAiwnADAKHYDlbALUmABQjw7AcpYBMgqrAJbTAWhMAKhHB2A5qwAYhQ7AclYANCYA1GM74OUeTfJUwXVCFFsrCZ1PJnm8diEDMwTQmABQjyGAOkru451JztUuBK7hbJLzBdf5+j/JEEBjAkA9hgDqKPnjPhVBiu3cl+l3bi7j/ycZAmhMAKhHB6AOKwHonfH/OtzHxgSAenQA6rAZEL2zAqAOHYDGBIB6LqTsPAAdgJN0AOidL9c6TAJsTACo53KmEDDXvSkbTzxWAgC9cw5AHfcUXPN0ksdqF7JXAkBdJX/gN8Z5AC8mANA7HYDlbs90Fspc7mFFAkBd5gEsZw4AvXMOwHLG/zsgANRlJcByOgD0TgdgOfewAwJAXToAy9kOmN5ZBbCcDkAHBIC6bAe83ANJrhRcJ0SxlZLftdJJwsdKB6ADAkBd2tfLXU7yUMF1pbuzwRylu04+mLJlwsdKB6ADAkBdOgB1lASp0v3ZYY7Scyd8uZ4kAHRAAKhLAKjDPAB6ZQVAHTYB6oAAUJdVAHWUPiwNpbA2mwDV4STADggAdVkFUIcOAL3SAahDB6ADAkBdF5I8V3CdDsBJJlPSK7PX69AB6IAAUNeVlM1gdx7ASQIAvRIA6ig5B+DJJE/ULmTPBID6SlpU55LcUbuQgZkDQK/MAVjujkxnoMyl/V+ZAFCflQDLmQNAr8wBWM74fycEgPq0r5dzD+mVDsByxv87IQDUpwOwnBMB6ZU5AMvpAHRCAKhPAFjuiZRN9tEBYG0lv2OPJnmqdiED0wHohABQn/Z1HSX38fYkN9cuBJ53U6bfsbm8uE7SAeiEAFCfDkAdpcMA7iNrcQxwHc4B6IQAUJ/tgOuwEoDeGP+vwxBAJwSA+mwHXIehFHpjBUAdOgCdEADq0wGow0oAemMPgDp0UjohANR3MWXnAfhyPUkHgN54cdWhA9AJAaC+q0keLLjunjgP4MUEAHojACx3KuXnADxZuZbdEwDWUZJUzyY5X7uQgQkA9MYcgOXOZzr7ZC73cAUCwDrMA1jOHAB6Yw7AclYAdEQAWIeVAMvpANAbHYDljP93RABYhw7Acg+lbDKlDgBrKQmXlzJNDGZiHkVHBIB16AAsdyVTCJjrniSnK9cCNyS5u+C6+zNNDGaiA9ARAWAdtgOuo2Ts9HSSu2oXwu7dneRMwXW+XE9yDkBHBIB1GAKow3bA9MI5AHWYBNgRAWAdhgDqKH14uo/UZuy6DkMAHREA1mEIoA4rAeiFFQB1GALoiACwDi+uOgwB0AsdgDoMAXREAFjHw5mW/8ylA3CSIEUvbAJUR+l9LNlenesQANax5DwA/yYvEADohQ7AcqdStpTy8TgHYBVeNusp+cM/E+cBvJhJgPTCKoDl7sx05slcQtRKBID1WAmwnDkA9EIHYDkrADojAKzHXgDL6QDQi5JQeTVeXi8mRHVGAFiPDsByTyd5tOA6HQBqK/m7fDjJs7ULGZgOQGcEgPXYC6COkvR/S5JbaxfCbt2a6XdqLuP/J9kDoDMCwHp0AOqwEoDWbAJUhw5AZwSA9ZgDUEfpV5RhAGqxB0AdNgHqjACwHkMAdegA0JrJa3UYAuiMALAeHYA6BABaMwRQhw5AZwSA9ZgDUIe9AGhNB6AOcwA6IwCsp3QJkA7ASfYCoDVzAOowBNAZAWBdzgNYzhAArekALFd6DsBjmfYDYQVeNOsqeQCcTnJX7UIGZgiA1pwDsNxdmc46mUuIWpEAsC4rAZYzBEBrOgDLaf93SABYl/b1cheTXCq4zj2klpIOQOk21sfKCoAOCQDr0gFYrvRAlbtTdvQovNiZTMfYzuXFdZIOQIcEgHUJAHWUDAOcyjShEpa4N2XPSeP/J+kAdEgAWJchgDrcR1qxCVAd9gDokACwLh2AOqwEoBV7ANQhAHRIAFiX7YDrsBKAVqwAqMN97JAAsC7bAdfhPtKKIYA6dAA6JACsyxBAHToAtOLLtQ6rADokAKzrkSTPFFznxXWSOQC0Yg5AHToAHRIA1lfyC3xXpi2BmegA0IohgOVuSNk5AKUfUBxIAFhfSQBwHsBJOgC0ogOw3N0p+6Dx9b8yAWB91rAvd3+mHQHncg9ZquR36EqSh2oXMjCbAHVKAFifiYDLPZupHTjXfZl2BIRSJX+HDyV5rnYhAzP+3ykBYH32AqijpKV6Y5LbaxfCbpxPclPBdb5cT7KSolMCwPqsYa/DPAC2Zvy/Dh2ATgkA6zMEUIe5FGzNCoA67AHQKQFgfQJAHaVfVToAlNIBqEMHoFMCwPp8udbhPrI1Y9d1WAXQKQFgfToAdZgDwNYMAdRhCKBTAsD6fLnWYTUFW9MBqEMHoFMCwPoeS/JUwXVeXCeZA8DWzAGoo+Q+Xk3yYO1COEkA2EbJL/JdSc7ULmRgOilszRDAcqeT3Flw3SOZNgBjRQLANkrGsm6I8wBezBwAtmYIYDnnAHRMANiGr9flHk7ydMF17iGlSn53Hk/yRO1CBmb8v2MCwDasBKij5D6WbufKvt2Y5I6C67y4TrICoGMCwDZ0AOqwEoCtlB4kZQLgSToAHRMAtqEDUEfpw1WQYi7j/3XoAHRMANiGAFCHTgpbsQKgDtsAd0wA2IYXVx1WArAVewDUYQigYwLANnQA6hCk2IoOQB2GADomAGzDi6sOcwDYii/XOtzHjgkA29ABqEOQYis6AHWYA9AxAWAbjyd5suA6AeAkcwDYijkAdTgHoGMCwHacB7CcIQC2ogOwXOk5AA8nuVS5Fl6CALCdkgfDqST31C5kYA8kuVJwnQ4Ac5WExueSXKhdyMDuSdk7RojaiACwHfMAlnsuycWC6+6N33UOVxq8SwPqsbICoHMeitsxga2Okvt4JmWtSPbp7iRnC67z5XqSFQCdEwC2owNQR+k8AMMAHMoEwDp0ADonAGyn9JdaB+AknRTW5hyAOnQAOicAbMdJdnVYCcDarACowx4AnRMAtmMIoI7S+2gIgEPpANQhAHROANiOAFCHDgBrMwegDnMAOicAbMfYdR3uI2vTAajDHIDOCQDbMQegDtsBs7bS3xUdgJN0ADonAGznyZSdB+DL9SRDAKxNB6COko8X5wBsSADYVskD4nzKNiU5VoYAWFtpB8CX6wtKN9+6kGnHTzYgAGyr5AHhPICTHktZJ8UQAIcqCYuPJHm6diEDuyfTs2suIWpDAsC2bAZUR0kX4NYkt9QuhKNzS6bflbmM/59k/H8AAsC2TASswzAAa7EJUB1WAAxAANiWvQDqsBKAtdgDoA4dgAEIANsyBFCHlQCsxQqAOnQABiAAbMsQQB06AKzFEEAdtgEegACwLUMAdZgDwFp0AOowBDAAAWBbXlx1uI+sxRyAOgwBDEAA2JYOQB3mALAWQwB16AAMQADYli/XOswBYC06AHXoAAxAANjWU0meKLhOB+AkQYq1mANQR8kz60qmrYDZiACwvdLzAM7VLmRgDya5XHCdAMD1lHSJns20FTCTs5meWXM5B2BjAsD2Sse4nAfwgstJHiq47p5Mh5TASzmd5K6C6+7PdIodk3vjHIAhCADb076uo+Q+3pDk7tqFcDTuyRQC5jL+f5Lx/0EIANuzEqAOKwGozQqAOqwAGIQAsD0dgDqsBKA2KwDq0AEYhACwPR2AOgQparMCoA4dgEEIANsTAOrQAaA2QwB1OAdgEALA9ny51uFgJWrTAajDEMAgBIDt6QDUUTruqgPAtZgDUIcOwCAEgO2V/pLrAJykk0JthgDqMAdgEALA9rSu69ABoDYdgDoMAQxCANje00keK7hOADhJB4DaSn43rmbampoXlNzHy3EOwOYEgDZKWl13JLmxdiEDezLJ4wXX6QBwLSUvrgtJLtUuZGDnktxecN2FlJ3vwQICQBuGAeoouY83pewBxXG7PcnNBddpW59Ueg6A+9iAANCGlQB12A6YWoz/12EC4EAEgDaMX9fhPlKLFQB1mAA4EAGgDR2AOuwGSC06AHXYA2AgAkAb9gKowxAAtegA1GEIYCACQBs6AHXoAFCLbYDr0AEYiADQhlUAdZgDQC0CQB3mAAxEAGhDB6AOAYBazAGowxDAQASANry46jAHgFrMAahDB2AgAkAbOgB1mANALToAdegADEQAaOOZJI8WXOfL9aSHkjxXcJ37yB9UEgqfStl21Mes5CPFOQCNCADtlCTe21K2XemxKj2I5c5Me5ZDkpxNcr7gOl//J92Ysm22H0pypXItHEAAaKe0fX1P1SrGV/IQPhXDKbzgvpTtXy8AnGT8fzACQDs2A6rDhEqWsgSwDuP/gxEA2rEXQB1WArCUFQB16AAMRgBox0qAOqwEYCkrAOrQARiMANCOIYA6DAGwlA5AHbYBHowA0I4hgDpK7+NtVavo29WNrhnVrYXXeXGdZAhgMAJAO4YA6vho4XVPVq2ibxcLrilZXjmqZwuvK/3dO1aGAAYjALSjdV3Hr6Tsa/V9tQvp2K8UXPOr1avo1/sLrnkuZff1mOkAwIE+LdOLa+7PL7QotnPvzLx7+PvZ10ZA35j5v2df36TSNm7K9BKac3/e0aTSvv1Cyp5pn9uiWGjpXKbdr+b+sXykRbGde22mL7JD7+Ffa1NmM6eSvDuH35+fTdnGOCN7Ww6/P88m+RNtyuzah1MWAO5uUSy09nDm/7E81qTS/v3NHBao/k2rAhv7tCS/lcMC5qc2qrGlU0m+P9e/P5eT/JU2JXbv0cx/nj0XQ9Hs1AdTlphvaVHsAP5ckt/JS9+zR5P87ezvy/bF7kvyQ3np+3MlyQ9m35NMb0jybUmeyEvfow8neUuz6vp2U8qeZR9rUSyTPT8Me/DzSV5XcN0fyfSi4/93LsmfTfJlSf5Qpi7LezO9+HRPJq9J8tYkf+z5//cHk/zXJB9oVlFf7kryFzINLd2Sac7ITyf58SSXGtbVs89I2TPpV5N8fuVaYAg/nLLU/EUtigW4hi9M2bPsXS2KZWLspS17AQDHwB4AAxIA2rIXAHAM7AEwIAGgLR0A4BjoAAxIAGhLAACOgYOABiQAtOVEQOAYCAADEgDaciIgcAzMARiQANCWDgBwDMwBGJAA0NYDmdbCzqUDAPREBwAKXMj8zTOeaFIpwEt7PPOfY5diN9qmdADaK2mB3RLnAQB9uCXJKwquK+2AUokA0J55AMDIrAAYlADQnpUAwMhKP0aM/zcmALSnAwCMTAdgUAJAezoAwMisABiUANCeDgAwMnsADEoAaM95AMDIDAEMSgBozxAAMDJDAIMSANozBACMzBDAoASA9nQAgJHpAAxKAGjvwTgPABiXDgAs8FDm76P9ZJNKAU56IvOfX8/GOQDN6QD0oSQJ35zk1tqFAMzwipSdS+IcgA4IAH0wDwAYkfH/gQkAfbASABiR8f+BCQB90AEARqQDMDABoA86AMCIdAAGJgD0wXbAwIhsAzwwAaAPhgCAERkCGJgA0AcdAGBEhgAGJgD0wRwAYESGAAYmAPTBEAAwIkMAAxMA+vBgkisF1+kAAC0ZAoAKPnko0Jyfp5pUCjApOQfgmTgHoAs6AP0oaYndlOS22oUAHODWlJ0DcH+cA9AFAaAfJgICI9H+H5wA0A9LAYGRWAEwOAGgH1YCACMp7QBYAdAJAaAfhgCAkegADE4A6IchAGAkAsDgBIB+GAIARmIToMEJAP0wBACMxCqAwQkA/dABAEaiAzA4AaAfOgDASHQABicA9OOhJJcLrtMBAFrQAYCKHoh9tYExPJX5z6unm1TKS9IB6EtJMj4X5wEA27o901kkc/n674gA0BfzI8BpqQAABIRJREFUAIAR2APgCAgAfbESABiB8f8jIAD0RQcAGIEVAEdAAOiL7YCBEegAHAEBoC+lfxw6AMCWdACOgADQFx0AYAQmAR4BAaAvJgECIzAEcAQEgL6YBAiMwBDAERAA+mIIABiBIYAjIAD0xXkAwAhKOwCGAOBlfCLz99d+Ns4DALbzdOY/p55sUinXpAPQn5IW2dkkd9QuBOAl3JHkxoLrtP87IwD0x0oAoGdWABwJAaA/VgIAPbMC4EgIAP3RAQB6pgNwJASA/ugAAD3TATgSAkB/7AUA9MweAEdCAOiPAAD0TAA4EgJAf8wBAHpmE6AjIQD0xxwAoGc6AEdCAOiPDgDQM6sAjoQA0J8LSZ4ruE4HANiCVQCwoo9n/j7bl+I8AGBdp5I8k/nPpydaFMvL0wHoU0lSPpPkfO1CAF7kjiTnCq7z9d8hAaBPpWNlhgGANVkBcEQEgD7ZCwDokRUAR0QA6JOVAECPdACOiADQJ3sBAD3SATgiAkCfDAEAPRIAjogA0CdDAECPbAJ0RASAPhkCAHpkE6AjIgD0SQcA6JEOwBERAPqkAwD0SAfgiAgAfbqYaWvfuXQAgDWZBAgb+FjKzgMQ6oA1nErybOY/lx5vUSzX52XRr5IxszNJ7qxdCECmZ8vZguuM/3dKAOiXvQCAnmj/HxkBoF9WAgA9sQLgyAgA/bISAOiJFQBHRgDolyEAoCc6AEdGAOhX6R+NDgCwBh2AIyMA9EsHAOiJSYBHRgDoV+kfzSurVgEwKe0APFi1CqoRAPpVOgTweVWrAJi8pvA6cwBgppuSXMn8XbeuJHlVg3qB4/VZSS5n/vPoapJ7GtQLw/toyv7gvqdFscDR+u6UPYsutigWjsEPp+yP7rkkb2pQL3B83pTpmVLyLPrvDerlQOYA9O1nC687neSHkry5Yi3A/rw507PkdOH1pc8w2L1XpSx1v7gT8L1JXr114cDQXp3k+1I+7v/Jn8/funAOd6p1AVzXLyZ5bYX/zoeTfCjJoxX+W8Bxuj3Th8cfrfDf+kDKVw6wgTOtC+C6vjvJv6vw33lVrA4AtvNdrQvg5ekA9O9ckg8m+czWhQAc6GOZughPti6EazMJsH/PJvlHrYsAmOHb4+XfPR2AMZxK8s5Y2gf07+eSvCHTpmR0TAAYx6cneV+Su1oXAnANjyb5k0k+0roQrs8QwDh+L8k3ZBoSAOjNlSR/OV7+wyjd3IE2fifJ7yb5uujeAP24muRtSX6gdSEcTgAYz/uT/HaSt8a/H9De5Uwv/3/buhDm8RU5rq9M8p/ipC2gnYeT/KUk/611IcxnDsC4fjLTNps/3roQYJf+R6ZnkJf/oASAsX0sydck+aYkv9m4FmAfPpLkmzMdFPR7jWthAUMAx+N0km/MNBb3ZRHugHquJnl3ku9J8p8zHTTG4ASA4/RpSb42yZcn+VOZzgA417QiYCTPJvmtJL+c6UjfH42v/aMjAOzD6SR3ZjrpC+DlPJbkYnzlAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8vP8Hn92KIoribZoAAAAASUVORK5CYII=",I=s.p+"static/media/viewWhite.249ff138.png",b=s.p+"static/media/visibilityWhite.3fd77da0.png",O=s(250),J=g.a.memo((function(A){var e=A.message,s=A.deleteMessage,t=A.isSelf,g=A.toSpamMessage,r=A.toViewedMessage,i=A.photos,c=Object(n.useState)(!1),o=Object(M.a)(c,2),B=o[0],C=o[1],d=Object(n.useState)(!1),D=Object(M.a)(d,2),m=D[0],l=D[1],u=e.viewed?I:b,w=function(A){return[A.slice(0,10).replace("-","."),A.slice(11,16)]}(e.addedAt).map((function(A){return Object(a.jsx)("span",{children:A})})),Q=t?i.master:i.user,j=(null===Q||void 0===Q?void 0:Q.small)?Q.small:(null===Q||void 0===Q?void 0:Q.large)?null===Q||void 0===Q?void 0:Q.large:O.a;return t?Object(a.jsxs)("div",{className:f.a.message,children:[Object(a.jsx)("div",{className:"".concat(f.a.bin," ").concat(B&&f.a.activeBin),onClick:function(){return s(e.id)},children:Object(a.jsx)("img",{src:E,alt:"delete"})}),Object(a.jsx)("div",{className:f.a.avatar,children:Object(a.jsx)("img",{className:f.a.avatarChild,src:j})}),Object(a.jsxs)("div",{className:f.a.messageFrame,onClick:function(){return C(!B)},children:[Object(a.jsxs)("div",{className:f.a.textFrame,children:[Object(a.jsx)("div",{className:f.a.name,children:e.senderName}),Object(a.jsx)("div",{className:f.a.textMessage,children:e.body}),Object(a.jsx)("div",{className:f.a.time,children:w}),Object(a.jsx)("div",{className:f.a.viewed,children:Object(a.jsx)("img",{src:u,alt:"eye"})})]}),Object(a.jsx)("div",{className:f.a.cornet})]})]}):Object(a.jsxs)("div",{className:f.a.messageFriend,onLoad:function(){e.viewed||r(e.id)},children:[Object(a.jsxs)("div",{className:"".concat(f.a.subMenuFriend," ").concat(m&&f.a.activeSubMenuFriend),children:[Object(a.jsx)("div",{className:f.a.imgFriend,onClick:function(){return s(e.id)},children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"spam"})}),Object(a.jsx)("div",{className:f.a.imgFriend,onClick:function(){return g(e.id)},children:Object(a.jsx)("img",{src:E,alt:"spam"})})]}),Object(a.jsx)("div",{className:f.a.avatar,children:Object(a.jsx)("img",{className:f.a.avatarChildFriend,src:j})}),Object(a.jsxs)("div",{className:f.a.messageFrameFriend,onClick:function(){return l(!m)},children:[Object(a.jsx)("div",{className:f.a.cornetFriend}),Object(a.jsxs)("div",{className:f.a.textFrameFriend,children:[Object(a.jsx)("div",{className:f.a.nameFriend,children:e.senderName}),Object(a.jsx)("div",{className:f.a.textMessageFriend,children:e.body}),Object(a.jsx)("div",{className:f.a.timeFriend,children:w})]})]})]})})),k=s(28),v=s.p+"static/media/box.0feca887.png",x=s.p+"static/media/empty-box.e1d159aa.png",S=s(323),h=s.n(S),p=function(A){var e=A.children,s=A.emptyBox,t=void 0===s?1:s;return Object(a.jsxs)("div",{className:h.a.noDataWrapper,children:[Object(a.jsx)("img",{src:1===t?v:x,alt:"no data"}),e&&Object(a.jsx)("div",{children:e})]})},H=g.a.memo((function(A){var e=A.messages,s=A.masterId,t=A.deleteMessage,g=A.toViewedMessage,r=A.toSpamMessage,i=A.photos,c=Object(n.useRef)(null);Object(n.useEffect)((function(){!function(){var A;null===(A=c.current)||void 0===A||A.scrollIntoView({behavior:"smooth"})}()}),[e]);var o=e.map((function(A){var e=A.senderId===s;return Object(a.jsx)(J,{photos:i,toSpamMessage:r,toViewedMessage:g,isSelf:e,deleteMessage:t,message:A})}));return Object(a.jsxs)("div",{className:Q.a.currentDialog,children:[o.length?o:Object(a.jsx)(p,{emptyBox:2,children:Object(a.jsx)(k.a,{_id:"messages.empty"})}),Object(a.jsx)("div",{className:Q.a.end,ref:c})]})})),P=s(253),N=s(49),Y=g.a.memo((function(A){var e=A.messages,s=A.masterId,t=A.sendMessage,n=A.deleteMessage,g=A.toSpamMessage,r=A.toViewedMessage,c=A.setPage,o=A.page,B=A.portionNumber,C=A.setPortionNumber,d=A.totalCount,D=A.friendId,m=A.isFetching,l=A.photos;return D?Object(a.jsxs)("div",{className:i.a.currentDialogWrapper,children:[Object(a.jsx)("div",{className:i.a.paginator,children:d>7&&Object(a.jsx)(P.a,{changePortionNumber:C,portionNumber:B,totalCount:d,currentPage:o,onPageChanged:c})}),m?Object(a.jsx)(N.a,{}):Object(a.jsx)(H,{toSpamMessage:g,toViewedMessage:r,deleteMessage:n,masterId:s,messages:e,photos:l}),Object(a.jsx)(u,{sendMessage:t})]}):Object(a.jsx)(p,{children:Object(a.jsx)(k.a,{_id:"messages.dialogs.select"})})})),F=s(26),y=s(324),L=s.n(y),z=s(74),T=g.a.memo((function(A){var e=A.dialogs,s=L.a.item+" "+L.a.active,t=e.map((function(A){return Object(a.jsx)(F.b,{to:"".concat(z.a.DIALOGS).concat(A.id),className:s,children:Object(a.jsx)("span",{children:A.userName})})}));return Object(a.jsx)("div",{className:L.a.friendListFromDialogs,children:t})})),X=s(325),U=s.n(X),R=s(20),G=s(23),K=s(12),Z=s(251),V=s(50),W=s(11),q=g.a.memo((function(A){var e,s=A.getDialogs,g=(A.changeDialogsInput,A.addDialogsMessage,A.getMessages),r=A.postMessage,i=A.deleteMessage,c=A.toViewedMessage,o=(A.toSpamMessage,A.setPage),B=A.setPortionNumber,C=Object(t.a)(A,["getDialogs","changeDialogsInput","addDialogsMessage","getMessages","postMessage","deleteMessage","toViewedMessage","toSpamMessage","setPage","setPortionNumber"]).match.params.userId,d=Object(G.d)(V.a.dialogsSelectors.commonDialogsSelector),D=d.page,m=d.portionNumber,l=(d.pageSize,d.isFetching),u=d.totalCount,w=d.dialogs,Q=d.messages,M=Object(G.d)(V.a.authSelectors.getMyLoginId),j=Object(G.d)(V.a.profileSelectors.getPhotosProfile),f=Object(n.useCallback)((function(){C&&g(C)}),[C]);Object(n.useEffect)((function(){s()}),[C]),Object(n.useEffect)((function(){f()}),[C,D]);var E=Object(n.useCallback)((function(A){return function(e){r(+A,e)}}),[]),I=Object(n.useCallback)((function(A){return function(e){c(+A,e)}}),[]),b=Object(n.useCallback)((function(A){return function(e){c(+A,e)}}),[]),O=Object(n.useCallback)((function(A){return function(e){i(+A,e)}}),[]),J={master:j,user:null===(e=w.find((function(A){return A.id===C})))||void 0===e?void 0:e.photos};return Object(a.jsxs)("div",{className:U.a.dialogsWrapper,children:[Object(a.jsx)(T,{dialogs:w}),Q?Object(a.jsx)(Y,{deleteMessage:O(C),sendMessage:E(C),toSpamMessage:b(C),toViewedMessage:I(C),photos:J,friendId:C,portionNumber:m,totalCount:u,page:D,setPage:function(A){o(A)},setPortionNumber:function(A){B(A)},masterId:M,messages:Q,isFetching:l}):Object(a.jsx)(p,{})]})}));e.default=Object(R.d)(Object(G.b)(null,{addDialogsMessage:K.a.addDialogsMessage,getDialogs:K.a.getDialogs,getMessages:K.a.getMessages,postMessage:K.a.postMessage,deleteMessage:K.a.deleteMessage,toSpamMessage:K.a.toSpamMessage,toViewedMessage:K.a.toViewedMessage,setPage:K.a.setPage,setPortionNumber:K.a.setPortionNumber}),W.g,Z.a)(q)}}]);
//# sourceMappingURL=4.248c9761.chunk.js.map