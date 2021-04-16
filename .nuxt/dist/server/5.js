exports.ids = [5];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return publishArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return editArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取关注的文章列表

const getFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    // headers: {
    //     // 数据格式：Token+空格+token数据
    //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTU0NjkwLCJ1c2VybmFtZSI6ImN1MDUyNSIsImV4cCI6MTYyMzMxNjI1Mn0.yEmcicrg5CBtkCOtYGNb2bNnh6SYzDk0_xßa7YkGqecA`
    // },
    params
  });
}; // 添加点赞

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 发表文章

const publishArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 编辑文章

const editArticle = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${params.slug}`,
    data: params.data
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComment = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${params.slug}/comments`,
    data: params.body
  });
}; // 删除文章评论

const deleteComment = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${params.slug}/comments/${params.id}`
  });
};

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/components/List.vue?vue&type=template&id=7dd67296&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.list),function(i){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{ name: 'Profile', query: { username: i.author.username } }}},[_c('img',{attrs:{"src":i.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{ name: 'Profile', query: { username: i.author.username } }}},[_vm._v(_vm._s(i.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(i.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button type=\"button\""+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{'active': i.favorited}))+"><i"+(_vm._ssrAttr("disabled",i.favoriteDisabled))+" class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(i.favoritesCount))+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'Article', params: { slug: i.slug } }}},[_c('h1',[_vm._v(_vm._s(i.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(i.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((i.tagList),function(i,index){return _c('li',{key:index,staticClass:"tag-default tag-pill tag-outline"},[_vm._v(_vm._s(i))])}),0)])],2)}),_vm._ssrNode(" "+((_vm.list.length === 0)?("<div class=\"article-preview\"><p>No articles are here... yet.</p></div>"):"<!---->")+" "),(_vm.total > _vm.limit)?_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.total),function(i){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{'active': i === _vm.page}))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{name: 'Profile', query: {tab: _vm.tab, page: i, tag: _vm.tag}}}},[_vm._v(_vm._s(i))])],1)}),0)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/components/List.vue?vue&type=template&id=7dd67296&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/components/List.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Listvue_type_script_lang_js_ = ({
  name: 'List',
  props: {
    list: {
      type: Array,
      require: true
    },
    total: {
      type: Number,
      require: true
    },
    page: {
      type: Number,
      require: true
    },
    limit: {
      type: Number,
      require: true
    },
    tab: '',
    name: '',
    tag: ''
  }
});
// CONCATENATED MODULE: ./pages/components/List.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Listvue_type_script_lang_js_ = (Listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/components/List.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "46039ede"
  
)

/* harmony default export */ var List = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=f9aa00ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\" data-v-f9aa00ea><div class=\"container\" data-v-f9aa00ea><h1 class=\"logo-font\" data-v-f9aa00ea>conduit</h1> <p data-v-f9aa00ea>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<div class=\"col-md-9\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<div class=\"feed-toggle\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-f9aa00ea>","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\" data-v-f9aa00ea>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': _vm.tab === 'your_feed'},attrs:{"to":{name: 'Home', query: {tab: 'your_feed'}},"exact":""}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-f9aa00ea>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': _vm.tab === 'global_feed'},attrs:{"to":{name: 'Home', query: {tab: 'global_feed'}},"exact":""}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\" data-v-f9aa00ea>","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{'active': _vm.tab === 'tag'},attrs:{"to":{name: 'Home', query: {tab: 'tag', tag: _vm.tag}}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_c('List',{attrs:{"list":_vm.articles,"total":_vm.totalPage,"page":_vm.page,"limit":_vm.limit,"tab":_vm.tab,"name":'Home',"tag":_vm.$route.query.tag}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<div class=\"sidebar\" data-v-f9aa00ea>","</div>",[_vm._ssrNode("<p data-v-f9aa00ea>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\" data-v-f9aa00ea>","</div>",_vm._l((_vm.tags),function(i,idx){return _c('nuxt-link',{key:idx,staticClass:"tag-pill tag-default",attrs:{"to":{name: 'Home', query: {tab: 'tag', tag: i}}}},[_vm._v(_vm._s(i))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=f9aa00ea&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js
 // 获取tag列表

const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'GET',
    url: '/api/tags'
  });
};
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./pages/components/List.vue + 4 modules
var List = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "HomeIndex",

  async asyncData({
    query,
    store
  }) {
    const page = parseInt(query.page || 1);
    const limit = 10;
    const {
      tag
    } = query;
    const tab = query.tab || 'global_feed';
    const loadArticles = store.state.user && tab === 'your_feed' ? api_article["j" /* getFeedArticles */] : api_article["h" /* getArticles */]; // 获取文章列表接口、获取tag接口没有因果关系，应同时调用

    const [articleRes, tagRes] = await Promise.all([loadArticles({
      limit: limit,
      offset: (page - 1) * limit,
      tag
    }), getTags()]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      tags
    } = tagRes.data;
    articles.forEach(article => {
      article.favoriteDisabled = false;
    });
    return {
      articles,
      articlesCount,
      tags,
      limit,
      page,
      tag,
      tab
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  components: {
    List: List["a" /* default */]
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true;

      if (article.favorited) {
        // 取消点赞
        await Object(api_article["e" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 添加点赞
        await Object(api_article["b" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }

      article.favoriteDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f9aa00ea",
  "264f4deb"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map