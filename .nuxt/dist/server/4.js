exports.ids = [4];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unFollowUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 // 获取个人中心

const getProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
}; // 关注用户

const followUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  });
}; // 取消关注用户

const unFollowUser = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=cdb82826&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-cdb82826>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\" data-v-cdb82826> <h4 data-v-cdb82826>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p data-v-cdb82826>"+_vm._ssrEscape(_vm._s(_vm.profile.bio))+"</p> "+((_vm.profile.username !== _vm.user.username)?("<button type=\"button\""+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{'active': _vm.profile.following}))+" data-v-cdb82826><i class=\"ion-plus-round\" data-v-cdb82826></i>"+_vm._ssrEscape(" Follow "+_vm._s(_vm.profile.username))+"</button>"):"<!---->")+" "),(_vm.profile.username === _vm.user.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":{name: 'Settings', params: {username: _vm.profile.username}}}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Edit Profile Settings\n                    ")]):_vm._e()],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\" data-v-cdb82826>","</div>",[_vm._ssrNode("<div class=\"articles-toggle\" data-v-cdb82826>","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\" data-v-cdb82826>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-cdb82826>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{name: 'Profile', query: {username: _vm.profile.username}},"exact":""}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-cdb82826>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{name: 'Profile', query: {username: _vm.profile.username, tab: 'favorited'}},"exact":""}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_c('List',{attrs:{"list":_vm.articles,"total":_vm.totalPage,"page":_vm.page,"limit":_vm.limit,"tab":_vm.tab,"name":'Profile'}})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=cdb82826&scoped=true&

// EXTERNAL MODULE: ./api/profile.js
var api_profile = __webpack_require__(30);

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(28);

// EXTERNAL MODULE: ./pages/components/List.vue + 4 modules
var List = __webpack_require__(31);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'UserProfile',
  components: {
    List: List["a" /* default */]
  },

  async asyncData({
    query
  }) {
    const page = parseInt(query.page || 1);
    const limit = 10;
    const {
      username,
      tab
    } = query;
    const [articleRes, profileRes] = await Promise.all([Object(article["h" /* getArticles */])({
      limit: limit,
      offset: (page - 1) * limit,
      author: tab ? null : username,
      favorited: tab === 'favorited' ? username : null
    }), Object(api_profile["b" /* getProfile */])(query.username)]);
    const {
      articles,
      articlesCount
    } = articleRes.data;
    const {
      profile
    } = profileRes.data;
    articles.forEach(article => {
      article.favoriteDisabled = false;
    });
    return {
      articles,
      articlesCount,
      limit,
      page,
      tab,
      profile
    };
  },

  watchQuery: ['page', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async followAuthor() {
      const username = this.profile.username;

      if (this.profile.following) {
        await Object(api_profile["c" /* unFollowUser */])(username);
      } else {
        await Object(api_profile["a" /* followUser */])(username);
      }

      this.profile.following = !this.profile.following;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cdb82826",
  "ecb9ae0e"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map