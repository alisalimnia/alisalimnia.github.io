"use strict";
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 3250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SingleSkill)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);




function SingleSkill({ dataSkille  }) {
    const imageData = dataSkille?.thumbnail.data?.attributes;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-10 justify-between w-full h-full font-thin",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60 -z-[999]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex gap-3 items-center justify-center h-32",
                children: !!imageData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    width: imageData.width,
                    height: imageData.height,
                    src: `${process.env.NEXT_PUBLIC_BASEURL}${imageData.url}`,
                    alt: imageData?.alternativeText || `لوگو مهارت ${dataSkille.titleEn}`,
                    title: imageData?.alternativeText || `لوگو مهارت ${dataSkille.titleEn}`,
                    className: "w-20 h-auto rounded-lg"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-wrap gap-3 items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: dataSkille.titleEn
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap gap-5 justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                content: `تعداد توصیه های مهارت ${dataSkille.titleEn}`,
                                color: "invert",
                                placement: "bottom",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-1 items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__.MailBox, {
                                            className: "w-5 h-5 text-primary "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-light pt-1",
                                            children: dataSkille?.recommends.data.length
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                content: `تعداد پروژه های مهارت ${dataSkille.titleEn}`,
                                color: "invert",
                                placement: "bottom",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-1 items-center w-full h-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__.ClipboardList, {
                                            className: "w-5 h-5 text-primary"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-light pt-1",
                                            children: dataSkille.skill_projects.data.length
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4117:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GetSkillsRequest)
/* harmony export */ });
/* harmony import */ var SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function GetSkillsRequest() {
    return await SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__/* .http.get */ .d.get("/skills?populate=*").then((res)=>{
        if (res.status === 200) {
            return res.data;
        }
    });
// .then(({ data }) => console.log(data))
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;