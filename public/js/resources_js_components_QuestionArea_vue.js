"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_QuestionArea_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//

(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = '/bingo2021';

var QuestionImage = function QuestionImage() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_common_QuestionImage_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./common/QuestionImage */ "./resources/js/components/common/QuestionImage.vue"));
};

var PanelistsArea = function PanelistsArea() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_PanelistsArea_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./PanelistsArea */ "./resources/js/components/PanelistsArea.vue"));
};

var ChoicesArea = function ChoicesArea() {
  return __webpack_require__.e(/*! import() */ "resources_js_components_ChoicesArea_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./ChoicesArea */ "./resources/js/components/ChoicesArea.vue"));
};

var IMAGE_DIR = './images/';
var NO_IMAGE = 'NoImage.png';
var QUESTION_SUFFIX = 'quiz/quiz';
var ANSWER_SUFFIX = 'answer/ans_quiz';
var EXTENSION = '.JPG';
var EXTENSION_USER = '.jpg';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /* コンポーネント */
  components: {
    QuestionImage: QuestionImage,
    PanelistsArea: PanelistsArea,
    ChoicesArea: ChoicesArea
  },
  props: {
    /* 親からの(カスタム属性で)引渡し値 */
    adminFlg: {
      type: Boolean,
      "default": false
    },
    qId: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      aDispFlg: false,
      qText: '',
      qImgPath: IMAGE_DIR + NO_IMAGE,
      aImgPath: IMAGE_DIR + NO_IMAGE,
      choices: [],
      panelists: []
    };
  },
  methods: {
    // 問題抽選
    getQuestion: function () {
      var _getQuestion = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/axios/getquestion').then(function (res) {
                  _this.setQuestionData(res.data);
                })["catch"](function (error) {
                  console.log(error);
                  return;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getQuestion() {
        return _getQuestion.apply(this, arguments);
      }

      return getQuestion;
    }(),
    getPanelists: function () {
      var _getPanelists = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/axios/getplayer').then(function (res) {
                  _this2.setPanelists(res.data);
                })["catch"](function (error) {
                  return;
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPanelists() {
        return _getPanelists.apply(this, arguments);
      }

      return getPanelists;
    }(),
    setQuestionData: function setQuestionData(question) {
      this.aDispFlg = question.a_disp_flg;
      this.qText = question.q_text;
      this.choices = new Array(question.option_1, question.option_2, question.option_3);
      this.qImgPath = IMAGE_DIR + QUESTION_SUFFIX + question.q_id + EXTENSION;
      this.aImgPath = IMAGE_DIR + ANSWER_SUFFIX + question.q_id + EXTENSION;
    },
    setPanelists: function setPanelists(panelists) {
      this.panelists = panelists.map(function (panelist) {
        imgDir = IMAGE_DIR + panelist.user_id + EXTENSION_USER;
        return {
          profileImagePath: imgDir
        }; // ほんとはこう書きたい
        // return {
        //      profileImagePath: fs.existsSync(imgDir) ? imgDir : IMAGE_DIR + NO_IMAGE
        // }
      });
    }
  },
  created: function created() {
    /* 初期表示 */
    this.getQuestion();
  }
});

/***/ }),

/***/ "./resources/js/components/QuestionArea.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/QuestionArea.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionArea.vue?vue&type=template&id=1ee98ffe& */ "./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe&");
/* harmony import */ var _QuestionArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionArea.vue?vue&type=script&lang=js& */ "./resources/js/components/QuestionArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuestionArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__.render,
  _QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuestionArea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuestionArea.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/QuestionArea.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuestionArea_vue_vue_type_template_id_1ee98ffe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./QuestionArea.vue?vue&type=template&id=1ee98ffe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/QuestionArea.vue?vue&type=template&id=1ee98ffe& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("v-card", [
    _c(
      "div",
      { staticClass: "d-flex flex-no-warp" },
      [
        !_vm.aDispFlg
          ? _c("question-image", { attrs: { imgPath: _vm.qImgPath } })
          : _c("question-image", { attrs: { imgPath: _vm.qImgPath } }),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("choices-area", {
              attrs: { adminFlg: _vm.adminFlg, choices: _vm.choices },
            }),
            _vm._v(" "),
            _c("panelists-area", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.adminFlg == false,
                  expression: "adminFlg == false",
                },
              ],
              attrs: { panelists: _vm.panelists },
            }),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);