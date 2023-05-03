"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 9151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(2105);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/common/context/authContext/authContext.tsx + 1 modules
var authContext = __webpack_require__(2243);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/common/hooks/useAppSelector.ts

const useAppSelector = external_react_redux_.useSelector;
/* harmony default export */ const hooks_useAppSelector = (useAppSelector);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/modules/redux/user/selector.ts

const selectUser = (0,toolkit_.createSelector)((state)=>state.user, (user)=>user.userInfo);

;// CONCATENATED MODULE: ./src/common/components/Layout/NavBar.tsx







function NavBar({ children  }) {
    const { 0: anchorEl , 1: setAnchorEl  } = (0,external_react_.useState)(null);
    const { username  } = hooks_useAppSelector(selectUser);
    const { logOut  } = (0,authContext/* UserAuth */._)();
    const handleMenu = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                component: "nav",
                color: "primary",
                position: "sticky",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h6",
                            component: "div",
                            sx: {
                                flexGrow: 1
                            },
                            children: "Dog Breeds"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.IconButton, {
                                    size: "large",
                                    "aria-label": "account of current user",
                                    "aria-controls": "menu-appbar",
                                    "aria-haspopup": "true",
                                    onClick: handleMenu,
                                    color: "inherit",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(icons_.AccountCircle, {}),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                            variant: "body1",
                                            paddingLeft: "5px",
                                            children: [
                                                "Hello, ",
                                                username
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Menu, {
                                    id: "menu-appbar",
                                    anchorEl: anchorEl,
                                    anchorOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "right"
                                    },
                                    open: Boolean(anchorEl),
                                    onClose: handleClose,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                        onClick: logOut,
                                        children: "Log Out"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            children
        ]
    });
}


/***/ }),

/***/ 5900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R9": () => (/* binding */ useGetSelectedBreedQuery),
/* harmony export */   "Y$": () => (/* binding */ useRemoveSelectedBreedMutation),
/* harmony export */   "cQ": () => (/* binding */ useGetRandomImageQuery),
/* harmony export */   "no": () => (/* binding */ useSelectBreedMutation),
/* harmony export */   "xE": () => (/* binding */ useGetBreedsListQuery)
/* harmony export */ });
/* unused harmony export breedsApi */
/* harmony import */ var _common_services_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);

const breedsApi = _common_services_local__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            getBreedsList: builder.query({
                query: ()=>({
                        url: "breeds",
                        method: "GET"
                    })
            }),
            selectBreed: builder.mutation({
                query: ({ selectedBreeds  })=>({
                        url: "breeds/save",
                        method: "POST",
                        body: {
                            selectedBreeds
                        }
                    }),
                invalidatesTags: [
                    "GetSelectedBreeds",
                    "GetRandomImages"
                ]
            }),
            getSelectedBreed: builder.query({
                query: ()=>({
                        url: "breeds/save",
                        method: "GET"
                    }),
                providesTags: [
                    "GetSelectedBreeds"
                ]
            }),
            removeSelectedBreed: builder.mutation({
                query: ({ breed  })=>({
                        url: "breeds/save",
                        method: "DELETE",
                        body: {
                            breed
                        }
                    }),
                invalidatesTags: [
                    "GetSelectedBreeds",
                    "GetRandomImages"
                ]
            }),
            getRandomImage: builder.query({
                query: ()=>({
                        url: "breeds/images",
                        method: "GET"
                    }),
                providesTags: [
                    "GetRandomImages"
                ]
            })
        })
});
const { useGetBreedsListQuery , useSelectBreedMutation , useGetSelectedBreedQuery , useRemoveSelectedBreedMutation , useGetRandomImageQuery ,  } = breedsApi;


/***/ })

};
;