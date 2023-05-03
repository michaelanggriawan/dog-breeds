"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/common/context/authContext/authContext.tsx + 1 modules
var authContext = __webpack_require__(2243);
;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/common/utils/createEmoticonCache.ts

function createEmotionCache() {
    return cache_default()({
        key: "css",
        prepend: true
    });
}

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/common/config/index.ts
const isDev = "production" === "development";
const isProd = (/* unused pure expression or super */ null && ("production" === "production"));

// EXTERNAL MODULE: ./src/common/services/local.ts
var local = __webpack_require__(710);
// EXTERNAL MODULE: ./src/features/auth/auth.ts
var auth = __webpack_require__(4844);
;// CONCATENATED MODULE: ./src/modules/redux/user/store.ts


const initialState = {
    userInfo: {
        username: "",
        email: "",
        userId: ""
    }
};
const reducerName = "user";
const slice = (0,toolkit_.createSlice)({
    name: reducerName,
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addMatcher(auth/* authApi.endpoints.getUser.matchFulfilled */.iJ.endpoints.getUser.matchFulfilled, (state, action)=>{
            state.userInfo = {
                ...action.payload.data
            };
        }).addMatcher(auth/* authApi.endpoints.signUp.matchFulfilled */.iJ.endpoints.signUp.matchFulfilled, (state, action)=>{
            state.userInfo = {
                username: action.payload.data.username,
                userId: action.payload.data.userId,
                email: action.payload.data.email
            };
        });
    }
});
const userReducer = {
    [reducerName]: slice.reducer
};

;// CONCATENATED MODULE: ./src/modules/redux/reducer.ts



const reducer = (0,toolkit_.combineReducers)({
    [local/* default.reducerPath */.Z.reducerPath]: local/* default.reducer */.Z.reducer,
    ...userReducer
});
/* harmony default export */ const redux_reducer = (reducer);

;// CONCATENATED MODULE: ./src/modules/redux/store.ts




const configureAppStore = (preloadedState)=>{
    const store = (0,toolkit_.configureStore)({
        reducer: redux_reducer,
        devTools: isDev,
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(local/* default.middleware */.Z.middleware),
        preloadedState
    });
    return store;
};
const store = configureAppStore();
/* harmony default export */ const redux_store = (store);

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/modules/theme/globalStyles.tsx
// @mui


// ----------------------------------------------------------------------
function GlobalStyles() {
    const inputGlobalStyles = /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            "*": {
                boxSizing: "border-box"
            },
            html: {
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%",
                WebkitOverflowScrolling: "touch"
            },
            body: {
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100%"
            },
            "#__next": {
                width: "100%",
                height: "100%"
            },
            input: {
                "&[type=number]": {
                    MozAppearance: "textfield",
                    "&::-webkit-outer-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    },
                    "&::-webkit-inner-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    }
                }
            },
            img: {
                display: "block",
                maxWidth: "100%"
            },
            ul: {
                margin: 0,
                padding: 0
            }
        }
    });
    return inputGlobalStyles;
}

;// CONCATENATED MODULE: ./src/modules/theme/pallete.ts

const WHITE = {
    900: "#FFFFFF"
};
const GREY = {
    900: "#171717",
    800: "#262626",
    700: "#404040",
    600: "#525252",
    500: "#737373",
    400: "#A3A3A3",
    300: "#D4D4D4",
    200: "#E5E5E5",
    100: "#F5F5F5",
    50: "#FAFAFA"
};
const PRIMARY = {
    900: "#9B660A",
    800: "#E3960F",
    700: "#F1AC34",
    600: "#F3B64C",
    500: "#F6C878",
    400: "#F7CE87",
    300: "#F9DDAB",
    200: "#FBE7C3",
    100: "#FDF0DB",
    50: "#FEFAF3"
};
const GREEN = {
    900: "#63685A",
    800: "#858877",
    700: "#A6AD95",
    600: "#C7D0B3",
    500: "#DDE7C7",
    400: "#E6EDD5",
    300: "#ECF2E0",
    200: "#F1F5E9",
    100: "#F7F9F1",
    50: "#FCFDF9"
};
const BLUE = {
    900: "#626667",
    800: "#838889",
    700: "#A4AAAC",
    600: "#C4CCCE",
    500: "#DAE3E5",
    400: "#E3EAEC",
    300: "#EBF0F1",
    200: "#F0F4F5",
    100: "#F6F8F9"
};
const ERROR = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#fff"
};
const COMMON = {
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: PRIMARY,
    blue: BLUE,
    green: GREEN,
    gray: GREY,
    white: WHITE,
    error: ERROR,
    divider: (0,styles_.alpha)(GREY[500], 0.24),
    action: {
        hover: (0,styles_.alpha)(GREY[500], 0.08),
        selected: (0,styles_.alpha)(GREY[500], 0.16),
        disabled: (0,styles_.alpha)(GREY[500], 0.8),
        disabledBackground: (0,styles_.alpha)(GREY[500], 0.24),
        focus: (0,styles_.alpha)(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48
    }
};
/* harmony default export */ const pallete = ({
    ...COMMON,
    text: {
        primary: GREY[800],
        secondary: GREY[600],
        disabled: GREY[500]
    },
    background: {
        paper: "#fff",
        default: "#fff",
        neutral: GREY[200]
    },
    action: {
        ...COMMON.action,
        active: GREY[600]
    }
});

;// CONCATENATED MODULE: ./src/modules/theme/typography.ts
// ----------------------------------------------------------------------
function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// ----------------------------------------------------------------------
const FONT_PRIMARY = "Public Sans, sans-serif"; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font
const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({
            sm: 52,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 40,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 26,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 19,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 18,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};
/* harmony default export */ const theme_typography = (typography);

;// CONCATENATED MODULE: ./src/modules/theme/theme.tsx


// @mui


// components

// import componentsOverride from '@/modules/theme/overrides';
//


function ThemeProvider({ children  }) {
    const themeOptions = (0,external_react_.useMemo)(()=>({
            palette: pallete,
            typography: theme_typography,
            shape: {
                borderRadius: 8
            }
        }), []);
    const theme = (0,styles_.createTheme)(themeOptions);
    //   theme.components = componentsOverride(theme);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {}),
            children
        ]
    });
}

;// CONCATENATED MODULE: ./src/modules/theme/index.ts

/* harmony default export */ const theme = (ThemeProvider);

;// CONCATENATED MODULE: ./src/pages/_app.tsx










const clientSideEmotionCache = createEmotionCache();
function LoginGuard({ children  }) {
    const router = (0,router_.useRouter)();
    const isAuthenticated =  false && 0;
    (0,external_react_.useEffect)(()=>{
        if (!isAuthenticated) {
            if (router.pathname !== "/register" && router.pathname !== "/login") {
                router.push("/login");
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isAuthenticated
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
        children: children
    });
}
function App({ Component , pageProps , emoticonCache =clientSideEmotionCache  }) {
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.CacheProvider, {
        value: emoticonCache,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: redux_store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(theme, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(authContext/* AuthContextProvider */.H, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LoginGuard, {
                        children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }))
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [243], () => (__webpack_exec__(5107)));
module.exports = __webpack_exports__;

})();