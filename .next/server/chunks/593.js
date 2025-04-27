"use strict";
exports.id = 593;
exports.ids = [593];
exports.modules = {

/***/ 8070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SingleItemProject)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9986);
/* harmony import */ var react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





function SingleItemProject({ dataProject  }) {
    const imageData = dataProject?.thumbnail.data?.attributes;
    const category = dataProject.project_categories.data.length > 0 && dataProject.project_categories.data[0].attributes.title || "";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-5 justify-between w-full h-full font-thin",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-full h-full inset-0 bg-body bg-center bg-no-repeat opacity-60 -z-[999]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex gap-3 items-center justify-center",
                children: !!imageData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    width: imageData.width,
                    height: imageData.height,
                    src: `${process.env.NEXT_PUBLIC_BASEURL}${imageData.url}`,
                    alt: imageData?.alternativeText || `عکس پروژه ${dataProject.title}`,
                    className: "rounded-lg w-full h-full"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-between h-full gap-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-wrap gap-3 items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-normal text-center",
                            children: dataProject.title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex flex-wrap gap-3 items-center justify-center",
                        children: !!dataProject.desc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center",
                            children: dataProject.desc.substring(0, 150) + (dataProject.desc.length > 150 ? " ..." : "")
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `py-1 px-3 font-bold rounded-md text-xs ${dataProject.developing ? "bg-yellow-50 text-yellow-800" : "bg-green-50 text-green-800"}`,
                                        children: dataProject.developing ? "در حال توسعه" : "اتمام توسعه"
                                    }),
                                    !!category && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "py-1 px-3 font-bold rounded-md text-xs bg-blue-50 text-blue-800",
                                        children: category
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between gap-2",
                                children: [
                                    !!dataProject.sourceUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                        content: "سورس کد",
                                        color: "invert",
                                        placement: "bottom",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: dataProject.sourceUrl,
                                            target: "_blank",
                                            className: "flex items-center justify-center bg-primary text-white rounded p-1.5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__.Bookmark, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    }),
                                    !!dataProject.previewUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                        content: "پیش نمایش",
                                        color: "invert",
                                        placement: "bottom",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            href: dataProject.previewUrl,
                                            target: "_blank",
                                            className: "flex items-center justify-center bg-primary text-white rounded p-1.5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_huge_icons_outline__WEBPACK_IMPORTED_MODULE_2__.View, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GetProjectsRequest)
/* harmony export */ });
/* harmony import */ var SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__]);
SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function GetProjectsRequest() {
    return await SERVICES_HttpService__WEBPACK_IMPORTED_MODULE_0__/* .http.get */ .d.get("/projects?populate=*").then((res)=>{
        if (res.status === 200) {
            return res.data;
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;