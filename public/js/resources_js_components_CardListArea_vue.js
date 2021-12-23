"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_CardListArea_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick */ "./node_modules/vue-slick/dist/slickCarousel.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["cardList"],
  components: {
    Slick: vue_slick__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      slickOptions: {
        autoplay: true,
        infinite: true,
        speed: 450,
        slidesToShow: 10,
        slidesToScroll: 3,
        responsive: [{
          breakpoint: 1760,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 1080,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 532,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
    };
  },
  methods: {
    next: function next() {
      this.$refs.slick.next();
    },
    prev: function prev() {
      this.$refs.slick.prev();
    },
    reInit: function reInit() {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.slick.reSlick();
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/CardListArea.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CardListArea.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardListArea.vue?vue&type=template&id=595f83e6& */ "./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6&");
/* harmony import */ var _CardListArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardListArea.vue?vue&type=script&lang=js& */ "./resources/js/components/CardListArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardListArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardListArea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardListArea.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CardListArea.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardListArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardListArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardListArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardListArea_vue_vue_type_template_id_595f83e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardListArea.vue?vue&type=template&id=595f83e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CardListArea.vue?vue&type=template&id=595f83e6& ***!
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
  return _c(
    "Slick",
    {
      ref: "slick",
      staticClass: "slick-outer",
      attrs: { options: _vm.slickOptions },
    },
    _vm._l(_vm.cardList, function (card) {
      return _c(
        "div",
        { key: card.id, staticClass: "image-thumb" },
        [
          _c(
            "v-card",
            {
              attrs: {
                outlined: "",
                flat: "",
                height: "250",
                "min-width": "180",
              },
            },
            [
              _c("v-img", {
                staticClass: "grey darken-3",
                attrs: {
                  height: "180",
                  contain: "",
                  src: "https://wired.jp/app/uploads/2018/01/GettyImages-522585140.webp",
                },
              }),
              _vm._v(" "),
              _c("v-card-title", { staticClass: "pt-1" }, [
                _vm._v(_vm._s(card.user_name)),
              ]),
              _vm._v(" "),
              _c("v-card-subtitle", { staticClass: "pb-1" }, [
                _vm._v(_vm._s(card.department)),
              ]),
            ],
            1
          ),
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);