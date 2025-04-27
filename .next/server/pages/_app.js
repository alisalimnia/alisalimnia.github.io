(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-huge-icons/outline"
var outline_ = __webpack_require__(9986);
;// CONCATENATED MODULE: ./src/layout/Header.tsx






function Header() {
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    const [scrolled, setScrolled] = (0,external_react_.useState)(false);
    const pathName = (0,navigation.usePathname)();
    (0,external_react_.useEffect)(()=>{
        setShowMenu(false);
    }, [
        pathName
    ]);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition >= 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const menuList = [
        {
            id: 1,
            title: "خانه",
            url: "/"
        },
        {
            id: 2,
            title: "مهارت ها",
            url: "/skills"
        },
        {
            id: 3,
            title: "پروژه ها",
            url: "/projects"
        }
    ];
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `w-full fixed top-0 z-[999999]${scrolled ? " bg-black/50 backdrop-blur" : ""} duration-100`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `container flex items-center justify-between${scrolled ? " py-2 md:py-5" : " py-5 md:py-10"} duration-300`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "md:hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(outline_.MenuLineHorizontal, {
                            className: "w-12 h-12",
                            onClick: ()=>setShowMenu(!showMenu)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `fixed flex flex-col top-5 right-5 min-w-[200px] backdrop-blur-sm bg-black/40 rounded-lg ${showMenu ? "flex" : "hidden"}`,
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "flex w-full ",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(outline_.RemoveThin, {
                                        className: "w-12 h-12",
                                        onClick: ()=>setShowMenu(!showMenu)
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("nav", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "flex flex-col gap-5 p-3",
                                        children: menuList.map(({ id , title , url  })=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: url,
                                                    className: "text-lg hover:animate-color-text",
                                                    children: title
                                                })
                                            }, id))
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "hidden md:flex",
                    children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "flex items-center gap-5",
                            children: menuList.map(({ id , title , url  })=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: url,
                                        className: "text-lg hover:animate-color-text",
                                        children: title
                                    })
                                }, id))
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "hidden md:flex text-lg lg:text-xl",
                            children: "Ali Salimnia"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            width: "64",
                            height: "24",
                            src: "/assets/images/color-logo.png",
                            alt: "Ali Salimnia Logo",
                            title: 'لوگو علی سلیم نیا، حروف اول اسم "پیمان" با کد رنگی #ff6d00',
                            className: "w-12"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/layout/index.tsx


function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed w-full h-full inset-0 bg-body bg-center -z-[99999] opacity-60"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                className: "mt-32 md:mt-28",
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/_app.tsx






external_nprogress_default().configure({
    showSpinner: true
});
router_default().events.on("routeChangeStart", ()=>external_nprogress_default().start());
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done());
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done());
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RootLayout, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "وبسایت علی سلیم نیا | FrontEnd Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: "https://alisalimnia.github.io/"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "/assets/images/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "theme-color",
                        content: "#2c333f"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: "وبسایت شخصی علی سلیم نیا | FrontEnd Developer"
                    }, "title"),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: "https://alisalimnia.github.io/"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "/assets/images/og-cover.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:image:src",
                        content: "/assets/images/og-cover.png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "author",
                        content: "علی سلیم نیا"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:locale",
                        content: "fa_IR"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: "توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:site_name",
                        content: "AliSalimnia | FrontEnd Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:url",
                        content: "https://alisalimnia.github.io"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:site",
                        content: "https://t.me/salimniaali79"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:creator",
                        content: "https://t.me/salimniaali79"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:title",
                        content: "وبسایت علی سلیم نیا | FrontEnd Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "twitter:description",
                        content: "توسعه دهنده فرانت اند با انگیزه از سایت من دیدن کنید :) | FrontEnd Developer"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9986:
/***/ ((module) => {

"use strict";
module.exports = require("react-huge-icons/outline");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,893,675,664,332], () => (__webpack_exec__(7644)));
module.exports = __webpack_exports__;

})();