"use strict";
exports.id = 243;
exports.ids = [243];
exports.modules = {

/***/ 2243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ AuthContextProvider),
  "_": () => (/* binding */ UserAuth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./src/common/hooks/useAppDispatch.ts

const useAppDispatch = ()=>(0,external_react_redux_.useDispatch)();
/* harmony default export */ const hooks_useAppDispatch = (useAppDispatch);

// EXTERNAL MODULE: ./src/common/services/local.ts
var local = __webpack_require__(710);
// EXTERNAL MODULE: ./src/features/auth/auth.ts
var auth = __webpack_require__(4844);
;// CONCATENATED MODULE: ./src/common/context/authContext/authContext.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */ 





const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)({
    logIn: async ({ email , password  })=>{},
    register: async ({ email , password , username  })=>{},
    logOut: ()=>{},
    errorMessage: "",
    isLoadingSignIn: false,
    isLoadingSignUp: false,
    errorSignUpMessage: ""
});
function AuthContextProvider({ children  }) {
    const [signIn, { isLoading: isLoadingSignIn  }] = (0,auth/* useSignInMutation */.uf)();
    const [signUp, { isLoading: isLoadingSignUp  }] = (0,auth/* useSignUpMutation */.OE)();
    const [getUser] = (0,auth/* useGetUserMutation */.EJ)();
    const { 0: errorMessage , 1: setErrorMessage  } = (0,external_react_.useState)("");
    const { 0: errorSignUpMessage , 1: setErrorSignUpMessage  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const dispatch = hooks_useAppDispatch();
    const logIn = (0,external_react_.useCallback)(async ({ email , password  })=>{
        try {
            setErrorMessage("");
            const response = await signIn({
                email,
                password
            }).unwrap();
            const { token , expToken , userId  } = response.data;
            localStorage.setItem("accessToken", token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("expToken", expToken.toString());
            router.push("/");
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setErrorMessage(err?.data?.errors?.[0].message);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        signIn
    ]);
    const register = (0,external_react_.useCallback)(async ({ username , email , password  })=>{
        try {
            setErrorSignUpMessage("");
            const response = await signUp({
                username,
                email,
                password
            }).unwrap();
            const { token , expToken , userId  } = response.data;
            localStorage.setItem("accessToken", token);
            localStorage.setItem("userId", userId);
            localStorage.setItem("expToken", expToken.toString());
            router.push("/");
        } catch (err) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            setErrorSignUpMessage(err?.data?.errors?.[0].message);
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        signUp
    ]);
    const logOut = (0,external_react_.useCallback)(()=>{
        localStorage.clear();
        router.push("/login");
        dispatch(local/* default.util.resetApiState */.Z.util.resetApiState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            try {
                await getUser().unwrap();
            // eslint-disable-next-line no-empty
            } catch (err) {}
        })();
    }, [
        getUser
    ]);
    (0,external_react_.useEffect)(()=>{
        // if token expired then log out the user
        const expToken = Number(localStorage.getItem("expToken"));
        if (expToken * 1000 < Date.now()) {
            localStorage.clear();
            router.push("/login");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const authContextProviderValue = (0,external_react_.useMemo)(()=>({
            logIn,
            logOut,
            errorMessage,
            isLoadingSignIn,
            register,
            isLoadingSignUp,
            errorSignUpMessage
        }), [
        errorMessage,
        errorSignUpMessage,
        isLoadingSignIn,
        isLoadingSignUp,
        logIn,
        logOut,
        register, 
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: authContextProviderValue,
        children: children
    });
}
const UserAuth = ()=>{
    return (0,external_react_.useContext)(AuthContext);
};


/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://dog-breeds-production-325d.up.railway.app/v1/",
        prepareHeaders: (headers)=>{
            const userId = localStorage.getItem("userId");
            const accessToken = localStorage.getItem("accessToken");
            if (userId && accessToken) {
                headers.set("X-User-id", userId);
                headers.set("Authorization", `Bearer ${accessToken}`);
            }
            return headers;
        }
    }),
    tagTypes: [
        "GetSelectedBreeds",
        "GetRandomImages"
    ],
    endpoints: ()=>({})
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 4844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EJ": () => (/* binding */ useGetUserMutation),
/* harmony export */   "OE": () => (/* binding */ useSignUpMutation),
/* harmony export */   "iJ": () => (/* binding */ authApi),
/* harmony export */   "uf": () => (/* binding */ useSignInMutation)
/* harmony export */ });
/* harmony import */ var _common_services_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);

const authApi = _common_services_local__WEBPACK_IMPORTED_MODULE_0__/* ["default"].injectEndpoints */ .Z.injectEndpoints({
    endpoints: (builder)=>({
            signIn: builder.mutation({
                query: ({ email , password  })=>({
                        url: "auth/signin",
                        method: "POST",
                        body: {
                            email,
                            password
                        }
                    })
            }),
            signUp: builder.mutation({
                query: ({ email , username , password  })=>({
                        url: "auth/signup",
                        method: "POST",
                        body: {
                            email,
                            username,
                            password
                        }
                    })
            }),
            getUser: builder.mutation({
                query: ()=>({
                        url: "auth/user",
                        method: "GET"
                    })
            })
        })
});
const { useSignInMutation , useSignUpMutation , useGetUserMutation  } = authApi;


/***/ })

};
;