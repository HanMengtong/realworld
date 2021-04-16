(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(t,e,r){"use strict";r.d(e,"h",(function(){return c})),r.d(e,"j",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return m})),r.d(e,"k",(function(){return d})),r.d(e,"g",(function(){return f})),r.d(e,"f",(function(){return v})),r.d(e,"c",(function(){return h})),r.d(e,"i",(function(){return O})),r.d(e,"a",(function(){return _})),r.d(e,"d",(function(){return C}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t.slug),data:t.data})},h=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},O=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},_=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t.slug,"/comments"),data:t.body})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t.slug,"/comments/").concat(t.id)})}},211:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return o})),r.d(e,"c",(function(){return l}));var n=r(62),c=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})},o=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow")})},l=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})}},226:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("427f84c1",content,!0,{sourceMap:!1})},227:function(t,e,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("fbe8e81a",content,!0,{sourceMap:!1})},288:function(t,e,r){"use strict";r(226)},289:function(t,e,r){var n=r(63)(!1);n.push([t.i,'.left[data-v-dbc976c4]{float:left}.clearfix[data-v-dbc976c4]:after{display:block;content:"";clear:both}',""]),t.exports=n},290:function(t,e,r){"use strict";r(227)},291:function(t,e,r){var n=r(63)(!1);n.push([t.i,".noData[data-v-611aee32]{text-align:center;font-size:12px;color:#999;margin-top:30px}",""]),t.exports=n},292:function(t,e,r){"use strict";r.r(e);r(37),r(23),r(24),r(49),r(50);var n=r(19),c=r(4),o=(r(36),r(205)),l=r(211),m=r(232),d=r.n(m),f=r(40);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={name:"ArticleMeta",props:{article:{type:Object,require:!0}},methods:{articleClick:function(t){var e={type:t,data:""};1===t?e.data=this.article.author.username:2!==t&&3!==t||(e.data=this.article.slug),this.$emit("click",e)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"]))},O=(r(288),r(30)),_=Object(O.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta clearfix"},[r("nuxt-link",{staticClass:"left",attrs:{to:{name:"Profile",query:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info left"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"Profile",query:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),t.article.author.username!==t.user.username?r("div",{staticClass:"left"},[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},on:{click:function(e){return t.articleClick(1)}}},[r("i",{staticClass:"ion-plus-round"}),t._v("  Follow "+t._s(t.article.author.username)+" "),r("span",{staticClass:"counter"})]),t._v("\n            \n          "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:function(e){return t.articleClick(2)}}},[r("i",{staticClass:"ion-heart"}),t._v("  Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])]):t._e(),t._v(" "),t.article.author.username===t.user.username?r("div",{staticClass:"left"},[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:{name:"Editor",params:{slug:t.article.slug}}}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.articleClick(3)}}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n          ")])],1):t._e()],1)}),[],!1,null,"dbc976c4",null).exports,C={name:"ArticleComment",props:{article:{type:Object,require:!0},user:{type:Object,require:!0}},data:function(){return{comments:[],commentBody:""}},mounted:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCommentsFn();case 2:case"end":return e.stop()}}),e)})))()},methods:{getCommentsFn:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.i)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},addCommentFn:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={slug:t.article.slug,body:{comment:{body:t.commentBody}}},e.next=3,Object(o.a)(r);case 3:t.getCommentsFn();case 4:case"end":return e.stop()}}),e)})))()},deleteCommentFn:function(data){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={slug:t.article.slug,id:data.id},e.next=3,Object(o.d)(r);case 3:t.getCommentsFn();case 4:case"end":return e.stop()}}),e)})))()}}};r(290);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={name:"Article",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(o.g)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,c=new d.a,article.body=c.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - Realworld"),meta:[{hid:"description",name:"description",content:"".concat(this.article.description)}]}},components:{ArticleMeta:_,ArticleComment:Object(O.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.user?r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.commentBody,expression:"commentBody"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.commentBody},on:{input:function(e){e.target.composing||(t.commentBody=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.addCommentFn}},[t._v("Post Comment")])])]):t._e(),t._v(" "),t._l(t.comments,(function(i){return r("div",{key:i.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(i.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"Profile",query:{username:i.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:i.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"Profile",query:{username:i.author.username}}}},[t._v(t._s(i.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(i.createdAt,"MMM DD, YYYY")))]),t._v(" "),i.author.username===t.user.username?r("span",{staticClass:"mod-options"},[r("i",{staticClass:"ion-trash-a",on:{click:function(e){return t.deleteCommentFn(i)}}})]):t._e()],1)])})),t._v(" "),0===t.comments.length?r("p",{staticClass:"noData"},[t._v("暂无评论，期待留下第一条精彩的评论")]):t._e()],2)}),[],!1,null,"611aee32",null).exports},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["user"])),methods:{articleClick:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(t),1!==t.type){r.next=12;break}if(!e.article.author.following){r.next=7;break}return r.next=5,Object(l.c)(t.data);case 5:r.next=9;break;case 7:return r.next=9,Object(l.a)(t.data);case 9:e.article.author.following=!e.article.author.following,r.next=29;break;case 12:if(2!==t.type){r.next=25;break}if(!e.article.favorited){r.next=19;break}return r.next=16,Object(o.e)(t.data);case 16:e.article.favoritesCount--,r.next=22;break;case 19:return r.next=21,Object(o.b)(t.data);case 21:e.article.favoritesCount++;case 22:e.article.favorited=!e.article.favorited,r.next=29;break;case 25:if(3!==t.type){r.next=29;break}return r.next=28,Object(o.c)(t.data);case 28:e.$router.push({name:"Home",query:{tab:"your_feed"}});case 29:case"end":return r.stop()}}),r)})))()}}},x=Object(O.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("ArticleMeta",{attrs:{article:t.article},on:{click:t.articleClick}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}}),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(i,e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline"},[t._v(t._s(i))])})),0)]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("ArticleMeta",{attrs:{article:t.article},on:{click:t.articleClick}})],1)]),t._v(" "),t.user?t._e():r("div",{staticClass:"article-actions"},[r("nuxt-link",{attrs:{to:"/login"}},[t._v("Sign in")]),t._v(" or "),r("nuxt-link",{attrs:{to:"/register"}},[t._v("Sign up")]),t._v(" to add comments on this article.\n    ")],1),t._v(" "),t.user?r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("ArticleComment",{attrs:{article:t.article,user:t.user}})],1)]):t._e()])])}),[],!1,null,"5708ed3a",null);e.default=x.exports}}]);