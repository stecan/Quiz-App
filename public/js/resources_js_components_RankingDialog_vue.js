"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_RankingDialog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 //axios.defaults.baseURL = '/bingo2021';

var IMAGE_DIR = './images/player/';
var NO_IMAGE = 'NoImage.png';
var EXTENSION = '.JPG';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  props: {
    adminFlg: {
      type: Boolean,
      "default": false
    },
    dialog: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      IMAGE_DIR: IMAGE_DIR,
      NO_IMAGE: NO_IMAGE,
      EXTENSION: EXTENSION,
      rankings: [],
      result: null
    };
  },
  methods: {
    // ランキング表示
    getRanking: function () {
      var _getRanking = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var self, ret;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/axios/getranking', {}).then(function (res) {
                  self.result = res.data;
                })["catch"](function (error) {
                  console.log(error);
                  return;
                });

              case 3:
                ret = self.result;

                if (ret) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                self.rankings = ret;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getRanking() {
        return _getRanking.apply(this, arguments);
      }

      return getRanking;
    }(),
    close: function close() {
      this.$emit('change', false);
    }
  },
  created: function created() {
    /* 初期表示 */
    this.getRanking();
  }
});

/***/ }),

/***/ "./resources/js/components/RankingDialog.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/RankingDialog.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RankingDialog.vue?vue&type=template&id=f22cdc7a& */ "./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a&");
/* harmony import */ var _RankingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RankingDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/RankingDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RankingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RankingDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/RankingDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/RankingDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RankingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RankingDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RankingDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RankingDialog_vue_vue_type_template_id_f22cdc7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RankingDialog.vue?vue&type=template&id=f22cdc7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/RankingDialog.vue?vue&type=template&id=f22cdc7a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-height": "80%", "max-width": "80%" },
      model: {
        value: _vm.dialog,
        callback: function ($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog",
      },
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-btn",
                {
                  attrs: { rounded: "", elevation: "10" },
                  on: { click: _vm.close },
                },
                [_vm._v("閉じる")]
              ),
              _vm._v(" "),
              _c("span", [_vm._v("  ")]),
              _vm._v(" "),
              _c("span", [_vm._v("結果発表")]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { attrs: { "max-height": "100%" } },
            [
              _c(
                "v-container",
                _vm._l(_vm.rankings, function (user, index) {
                  return _c(
                    "v-row",
                    { key: index },
                    [
                      _c("v-col", [_vm._v(_vm._s(user.rank) + " 位")]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c("v-img", {
                            attrs: {
                              height: "80px",
                              "max-width": "80px",
                              src: _vm.IMAGE_DIR + user.user_id + _vm.EXTENSION,
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", [_vm._v(_vm._s(user.user_name))]),
                      _vm._v(" "),
                      _c("v-col", [_vm._v(_vm._s(user.point) + " pt")]),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);