exports.ids = [1];
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

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("427f84c1", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(9).default
module.exports.__inject__ = function (context) {
  add("fbe8e81a", content, true, context)
};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleMeta_vue_vue_type_style_index_0_id_dbc976c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleMeta_vue_vue_type_style_index_0_id_dbc976c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleMeta_vue_vue_type_style_index_0_id_dbc976c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleMeta_vue_vue_type_style_index_0_id_dbc976c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleMeta_vue_vue_type_style_index_0_id_dbc976c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".left[data-v-dbc976c4]{float:left}.clearfix[data-v-dbc976c4]:after{display:block;content:\"\";clear:both}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComment_vue_vue_type_style_index_0_id_611aee32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComment_vue_vue_type_style_index_0_id_611aee32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComment_vue_vue_type_style_index_0_id_611aee32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComment_vue_vue_type_style_index_0_id_611aee32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_webpack_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_webpack_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_articleComment_vue_vue_type_style_index_0_id_611aee32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".noData[data-v-611aee32]{text-align:center;font-size:12px;color:#999;margin-top:30px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=5708ed3a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\" data-v-5708ed3a>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-5708ed3a>","</div>",[_vm._ssrNode("<h1 data-v-5708ed3a>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article},on:{"click":_vm.articleClick}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\" data-v-5708ed3a>","</div>",[_vm._ssrNode("<div class=\"row article-content\" data-v-5708ed3a><div class=\"col-md-12\" data-v-5708ed3a>"+(_vm._s(_vm.article.body))+"</div> <ul class=\"tag-list\" data-v-5708ed3a>"+(_vm._ssrList((_vm.article.tagList),function(i,index){return ("<li class=\"tag-default tag-pill tag-outline\" data-v-5708ed3a>"+_vm._ssrEscape(_vm._s(i))+"</li>")}))+"</ul></div> <hr data-v-5708ed3a> "),_vm._ssrNode("<div class=\"article-actions\" data-v-5708ed3a>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-5708ed3a>","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article},on:{"click":_vm.articleClick}})],1)]),_vm._ssrNode(" "),(!_vm.user)?_vm._ssrNode("<div class=\"article-actions\" data-v-5708ed3a>","</div>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")]),_vm._ssrNode(" or "),_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Sign up")]),_vm._ssrNode(" to add comments on this article.\n    ")],2):_vm._e(),_vm._ssrNode(" "),(_vm.user)?_vm._ssrNode("<div class=\"row\" data-v-5708ed3a>","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\" data-v-5708ed3a>","</div>",[_c('ArticleComment',{attrs:{"article":_vm.article,"user":_vm.user}})],1)]):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=5708ed3a&scoped=true&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./api/profile.js
var profile = __webpack_require__(30);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=template&id=dbc976c4&scoped=true&
var articleMetavue_type_template_id_dbc976c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta clearfix"},[_c('nuxt-link',{staticClass:"left",attrs:{"to":{name: 'Profile', query: {username: _vm.article.author.username}}}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info left\" data-v-dbc976c4>","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{name: 'Profile', query: {username: _vm.article.author.username}}}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\" data-v-dbc976c4>"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "+((_vm.article.author.username !== _vm.user.username)?("<div class=\"left\" data-v-dbc976c4><button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{'active': _vm.article.author.following}))+" data-v-dbc976c4><i class=\"ion-plus-round\" data-v-dbc976c4></i>"+_vm._ssrEscape("  Follow "+_vm._s(_vm.article.author.username)+" ")+"<span class=\"counter\" data-v-dbc976c4></span></button>\n            \n          <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{'active': _vm.article.favorited}))+" data-v-dbc976c4><i class=\"ion-heart\" data-v-dbc976c4></i>  Favorite Post <span class=\"counter\" data-v-dbc976c4>"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button></div>"):"<!---->")+" "),(_vm.article.author.username === _vm.user.username)?_vm._ssrNode("<div class=\"left\" data-v-dbc976c4>","</div>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{name: 'Editor', params: {slug: _vm.article.slug}}}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n          ")]),_vm._ssrNode(" <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" data-v-dbc976c4><i class=\"ion-trash-a\" data-v-dbc976c4></i> Delete Article\n          </button>")],2):_vm._e()],2)}
var articleMetavue_type_template_id_dbc976c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=template&id=dbc976c4&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
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

/* harmony default export */ var articleMetavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  methods: {
    articleClick(type) {
      let val = {
        type: type,
        data: ''
      };

      if (type === 1) {
        // 关注作者
        val.data = this.article.author.username;
      } else if (type === 2 || type === 3) {
        // 2 文章点赞 3 删除文章
        val.data = this.article.slug;
      }

      this.$emit('click', val);
    }

  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleMetavue_type_script_lang_js_ = (articleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/articleMeta.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_articleMetavue_type_script_lang_js_,
  articleMetavue_type_template_id_dbc976c4_scoped_true_render,
  articleMetavue_type_template_id_dbc976c4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "dbc976c4",
  "f62ceb5e"
  
)

/* harmony default export */ var articleMeta = (component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComment.vue?vue&type=template&id=611aee32&scoped=true&
var articleCommentvue_type_template_id_611aee32_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.user)?("<form class=\"card comment-form\" data-v-611aee32><div class=\"card-block\" data-v-611aee32><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\" data-v-611aee32>"+_vm._ssrEscape(_vm._s(_vm.commentBody))+"</textarea></div> <div class=\"card-footer\" data-v-611aee32><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\" data-v-611aee32> <button type=\"button\" class=\"btn btn-sm btn-primary\" data-v-611aee32>Post Comment</button></div></form>"):"<!---->")+" "),_vm._l((_vm.comments),function(i){return _vm._ssrNode("<div class=\"card\" data-v-611aee32>","</div>",[_vm._ssrNode("<div class=\"card-block\" data-v-611aee32><p class=\"card-text\" data-v-611aee32>"+_vm._ssrEscape(_vm._s(i.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\" data-v-611aee32>","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'Profile', query: { username: i.author.username } }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":i.author.image}})]),_vm._ssrNode("\n       \n      "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{ name: 'Profile', query: { username: i.author.username } }}},[_vm._v(_vm._s(i.author.username))]),_vm._ssrNode(" <span class=\"date-posted\" data-v-611aee32>"+_vm._ssrEscape(_vm._s(_vm._f("date")(i.createdAt,'MMM DD, YYYY')))+"</span> "+((i.author.username === _vm.user.username)?("<span class=\"mod-options\" data-v-611aee32><i class=\"ion-trash-a\" data-v-611aee32></i></span>"):"<!---->"))],2)],2)}),_vm._ssrNode(" "+((_vm.comments.length === 0)?("<p class=\"noData\" data-v-611aee32>暂无评论，期待留下第一条精彩的评论</p>"):"<!---->"))],2)}
var articleCommentvue_type_template_id_611aee32_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/articleComment.vue?vue&type=template&id=611aee32&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/articleComment.vue?vue&type=script&lang=js&
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

/* harmony default export */ var articleCommentvue_type_script_lang_js_ = ({
  name: 'ArticleComment',
  props: {
    article: {
      type: Object,
      require: true
    },
    user: {
      type: Object,
      require: true
    }
  },

  data() {
    return {
      comments: [],
      commentBody: ''
    };
  },

  async mounted() {
    await this.getCommentsFn();
  },

  methods: {
    async getCommentsFn() {
      const {
        data
      } = await Object(api_article["i" /* getComments */])(this.article.slug);
      this.comments = data.comments;
    },

    async addCommentFn() {
      const params = {
        slug: this.article.slug,
        body: {
          comment: {
            body: this.commentBody
          }
        }
      };
      await Object(api_article["a" /* addComment */])(params);
      this.getCommentsFn();
    },

    async deleteCommentFn(data) {
      const params = {
        slug: this.article.slug,
        id: data.id
      };
      await Object(api_article["d" /* deleteComment */])(params);
      this.getCommentsFn();
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/articleComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_articleCommentvue_type_script_lang_js_ = (articleCommentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/articleComment.vue



function articleComment_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var articleComment_component = Object(componentNormalizer["a" /* default */])(
  components_articleCommentvue_type_script_lang_js_,
  articleCommentvue_type_template_id_611aee32_scoped_true_render,
  articleCommentvue_type_template_id_611aee32_scoped_true_staticRenderFns,
  false,
  articleComment_injectStyles,
  "611aee32",
  "00bf9e7a"
  
)

/* harmony default export */ var articleComment = (articleComment_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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






/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "Article",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["g" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  head() {
    return {
      title: `${this.article.title} - Realworld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `${this.article.description}`
      }]
    };
  },

  components: {
    ArticleMeta: articleMeta,
    ArticleComment: articleComment
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async articleClick(val) {
      console.log(val);

      if (val.type === 1) {
        if (this.article.author.following) {
          await Object(profile["c" /* unFollowUser */])(val.data);
        } else {
          await Object(profile["a" /* followUser */])(val.data);
        }

        this.article.author.following = !this.article.author.following;
      } else if (val.type === 2) {
        if (this.article.favorited) {
          await Object(api_article["e" /* deleteFavorite */])(val.data);
          this.article.favoritesCount--;
        } else {
          await Object(api_article["b" /* addFavorite */])(val.data);
          this.article.favoritesCount++;
        }

        this.article.favorited = !this.article.favorited;
      } else if (val.type === 3) {
        await Object(api_article["c" /* deleteArticle */])(val.data);
        this.$router.push({
          name: 'Home',
          query: {
            tab: 'your_feed'
          }
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  "5708ed3a",
  "c1011ff4"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map