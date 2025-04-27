"use strict";
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ http)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const aliSalimnia = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
    timeout: 30000,
    timeoutErrorMessage: "ارسال درخواست خیلی طول کشید",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASEURL_API_USER_TOKEN}`
    }
});
const http = {
    get: aliSalimnia.get,
    post: aliSalimnia.post,
    put: aliSalimnia.put,
    delete: aliSalimnia.delete,
    patch: aliSalimnia.patch
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;