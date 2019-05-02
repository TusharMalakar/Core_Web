(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"default~home-home-module~login-login-module~register-register-module~user-user-module",
		"default~home-home-module~user-user-module",
		"home-home-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"default~home-home-module~login-login-module~register-register-module~user-user-module",
		"login-login-module"
	],
	"./register/register.module": [
		"./src/app/register/register.module.ts",
		"default~home-home-module~login-login-module~register-register-module~user-user-module",
		"register-register-module"
	],
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"default~home-home-module~login-login-module~register-register-module~user-user-module",
		"default~home-home-module~user-user-module",
		"user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule',
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    // {
    //   path: 'conversations',
    //   loadChildren: './ conversations/conversations.module#ConversationsModule',
    // },
    //default component
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'testForm';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var _guard_auth_inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/auth.inspector */ "./src/app/guard/auth.inspector.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _conversations_collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./conversations/collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");






//Declares our routing






//These are the materials that will make our site adaptable











//Angular Flex Module



//Clock


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _conversations_collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_27__["CollabMessagingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                //Forms Modules
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                //HTTP requests
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                //Material
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                //Our Routes will be here to make code cleaner
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"],
                //Clock
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_26__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_26__["OwlNativeDateTimeModule"],
            ],
            providers: [
                _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__["ConversationService"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _guard_auth_inspector__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbnMvY29sbGFiLW1lc3NhZ2luZy9jb2xsYWItbWVzc2FnaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  collab-messaging works!\n</p>\n"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.ts ***!
  \******************************************************************************/
/*! exports provided: CollabMessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabMessagingComponent", function() { return CollabMessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollabMessagingComponent = /** @class */ (function () {
    function CollabMessagingComponent() {
    }
    CollabMessagingComponent.prototype.ngOnInit = function () {
    };
    CollabMessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collab-messaging',
            template: __webpack_require__(/*! ./collab-messaging.component.html */ "./src/app/conversations/collab-messaging/collab-messaging.component.html"),
            styles: [__webpack_require__(/*! ./collab-messaging.component.css */ "./src/app/conversations/collab-messaging/collab-messaging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollabMessagingComponent);
    return CollabMessagingComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, service) {
        this.router = router;
        this.service = service;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('accessToken') == null) {
            return true;
        }
        else {
            this.router.navigate(["home"]);
            return false;
        }
    };
    AuthGuard.prototype.canLoad = function () {
        if (localStorage.getItem('accessToken')) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guard/auth.inspector.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/auth.inspector.ts ***!
  \*****************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    //Handler: Will intercept any http request going out.
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        //If the request doesn't need auth; use this.
        //req.headers.get('No-Auth') :  This checks the header of the request
        //next.handle(req.clone()) : clone the whole request and send it
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        //If we do need auth, first if will fail.
        //localStorage.getItem('accessToken') : Will check if there is a token in local storage
        if (localStorage.getItem('accessToken') != null) {
            //Copies request that was caught and adds the authorization
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", localStorage.getItem('accessToken'))
            });
            //This sends the request that was cloned.
            return next.handle(clonedreq).do(
            //If Successful
            function (succ) { }, 
            //If error
            function (err) {
                if (err.status === 401) {
                    _this.router.navigateByUrl('/login');
                }
            });
        }
        //If no token, send user to login.
        else {
            this.router.navigateByUrl('/login');
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.container .mat-drawer {\n    min-width: 200px;\n}\n\n.container .mat-drawer .mat-button {\n    display: block;\n    width: 100%;\n    text-align: left;\n}\n\n.spacer {\n    flex: 1 1 auto;\n}\n\n.mat-toolbar-row .mat-button {\n    background-color: transparent;\n    font-size: 20px;\n    \n}\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n.example-full-width {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmNvbnRhaW5lciAubWF0LWRyYXdlciB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLmNvbnRhaW5lciAubWF0LWRyYXdlciAubWF0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtdG9vbGJhci1yb3cgLm1hdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"container\" autosize >\r\n    <!-- Will be triggered by (click) = \"drawer.toggle()\" -->\r\n     \r\n    <div class=\"sidenav-content\">\r\n        <mat-toolbar color=\"primary\">\r\n            <mat-toolbar-row>\r\n                <!-- \r\n                  drawer.toggle(): will call #drawer and will bring the sidenav into view\r\n                -->\r\n                <button mat-icon-button (click) = \"drawer.toggle()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                </button>\r\n                <button mat-button routerLink=\"/home\">Hunter Collab</button>\r\n         \r\n                <span class=\"spacer\"></span>\r\n                \r\n                <mat-menu #menu=\"matMenu\" >\r\n                  \r\n                </mat-menu>\r\n\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    \r\n    <mat-drawer #drawer class=\"sidenav\">\r\n            <button mat-menu-item routerLink=\"/home\">\r\n              <mat-icon>home</mat-icon>\r\n              <span>Home</span>\r\n            </button> \r\n\r\n            <button mat-menu-item routerLink=\"/user\">\r\n              <mat-icon>person</mat-icon>\r\n              <span>Profile</span>\r\n            </button> \r\n           \r\n            <button mat-menu-item >\r\n                <span>Direct Messages  </span>\r\n                <mat-icon>send</mat-icon>\r\n            </button> \r\n              <!--Collab username goes in the list-->\r\n                 <mat-list dense>\r\n                    <ng-container *ngFor = \"let collab of collabData\" >\r\n                        \r\n                          <button mat-menu-item (click)=\"getTitle(collab.title)\">\r\n                            <div routerLink=\"/home/message\">\r\n                              <mat-icon routerLink=\"/home/message\">group</mat-icon>\r\n                              <span  (click)=\"groupMessageingPageLink(collab._id.$oid)\">{{collab.title}}   \r\n                                 <mat-icon >control_point</mat-icon>\r\n                              </span>                           \r\n                            </div>                             \r\n                            </button> \r\n                \r\n                         <mat-list-item *ngFor =\"let mem of collab?.members\">\r\n                            <div ng-if=\"mem != sender\">\r\n                              <!--Taking individual user as input to navigate user -->\r\n                              <div>\r\n                                  <button mat-menu-item >\r\n                                      <mat-icon routerLink=\"/user\">person</mat-icon>                                     \r\n                                          <span (click)=\"PersonalmessagePageLink(mem)\" >{{extractFirstNameAndLastName(mem)}} </span> \r\n                                    </button> \r\n                              </div>\r\n                          </div>\r\n                          \r\n                            \r\n                                            \r\n                        </mat-list-item> \r\n                   </ng-container> \r\n                 </mat-list>\r\n                  <span>----------------------------------</span>\r\n                 <button mat-menu-item (click)=\"logOut()\">\r\n                    <mat-icon>logout</mat-icon>\r\n                    <span>LogOut</span>\r\n                  </button>          \r\n    </mat-drawer>\r\n   \r\n</mat-drawer-container>\r\n\r\n\r\n     \r\n  "

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/models/message.model */ "./src/app/shared/models/message.model.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, collabService, userservice, loadMessage) {
        this.router = router;
        this.collabService = collabService;
        this.userservice = userservice;
        this.loadMessage = loadMessage;
        this.panelOpenState = false;
        this.mem = null;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collabService.collabDetails().subscribe(function (collab) {
            _this.collabData = collab;
            console.log(collab);
        });
        this.userservice.getUserdetails().subscribe(function (data) {
            _this.userdata = data;
            _this.sender = _this.userdata.username;
        });
    };
    NavbarComponent.prototype.extractFirstNameAndLastName = function (username) {
        var temp = username.split("@");
        return temp[0];
    };
    NavbarComponent.prototype.GoToHomePage = function (id) {
        this.collabId = id;
        console.log("Going to Collab page of " + this.collabId);
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.GoToProfile = function (mem_) {
        this.mem = mem_;
        console.log("Going to profile page of " + this.mem);
        this.router.navigate(['/user']);
    };
    NavbarComponent.prototype.groupMessageingPageLink = function (id) {
        this.collabId = id;
        console.log("Going to Group message " + this.collabId);
        this.router.navigate(['/home/message']);
    };
    NavbarComponent.prototype.PersonalmessagePageLink = function (mem) {
        this.mem = mem;
        console.log("Going to message page of " + this.mem);
        this.router.navigate(['/home/message']);
    };
    NavbarComponent.prototype.getTitle = function (title) {
        this.Title_ = title;
        console.log("Showing title " + this.Title_);
    };
    NavbarComponent.prototype.logOut = function () {
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"], src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__["Message"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/dbAccess/collabs.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/dbAccess/collabs.service.ts ***!
  \****************************************************/
/*! exports provided: CollabsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabsService", function() { return CollabsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CollabsService = /** @class */ (function () {
    function CollabsService(http) {
        this.http = http;
        this.rootUrl = 'https://huntercollabapi.herokuapp.com';
    }
    //collab/getCollabDetails
    CollabsService.prototype.collabDetails = function () {
        return this.http.get(this.rootUrl + "/collab/getCollabDetails");
    };
    //collab/getAllCollabs
    CollabsService.prototype.allCollabs = function () {
        return this.http.get(this.rootUrl + "/collab/getAllCollabs");
    };
    //collab/getActiveCollabs 
    CollabsService.prototype.activeCollabs = function () {
        return this.http.get(this.rootUrl + "/collab/getActiveCollabs");
    };
    //Get Both All and My Collabs
    CollabsService.prototype.getCollabs = function (collabType) {
        return this.http.get(this.rootUrl + "/collab/" + collabType);
    };
    //______________POST_REQUEST____________
    //create a new collab, wehre owner = currentUser
    // size, date, duration, location, title, description, classes and skills are required
    CollabsService.prototype.createCollab = function (collabData) {
        var body = {
            size: collabData.size,
            date: collabData.date,
            duration: collabData.duration,
            location: collabData.location,
            title: collabData.title,
            description: collabData.description,
            classes: collabData.classes,
            skills: collabData.skills,
        };
        return this.http.post(this.rootUrl + "/collab/createCollab", body);
    };
    //Join Collab
    CollabsService.prototype.joinCollab = function (id) {
        console.log(id["$oid"]);
        var body = {
            id: id["$oid"]
        };
        return this.http.post(this.rootUrl + "/collab/joinCollab", body);
    };
    //Leave Collab
    CollabsService.prototype.leaveCollab = function (id) {
        //console.log(id["$oid"]);
        var body = {
            id: id["$oid"]
        };
        return this.http.post(this.rootUrl + "/collab/leaveCollab", body);
    };
    //TODO: Get this http request working
    CollabsService.prototype.deleteCollab = function (id) {
        //console.log(id["$oid"]);
        var body = {
            id: id["$oid"]
        };
        return this.http.delete(this.rootUrl + "/collab/deleteCollabForReal");
    };
    //TODO: Get this http request working
    CollabsService.prototype.getReqCollabs = function (classes, skills) {
        //console.log(classes);
        //console.log(skills);
        var body = {
            classes: classes,
            skills: skills
        };
        return this.http.post(this.rootUrl + "/collab/getRecommendedCollabs", body);
    };
    CollabsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CollabsService);
    return CollabsService;
}());



/***/ }),

/***/ "./src/app/shared/dbAccess/conversation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/dbAccess/conversation.service.ts ***!
  \*********************************************************/
/*! exports provided: ConversationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationService", function() { return ConversationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ConversationService = /** @class */ (function () {
    function ConversationService(http) {
        this.http = http;
        this.rootUrl = 'https://huntercollabapi.herokuapp.com';
    }
    //send group message to collab group
    ConversationService.prototype.sendMessageToCollabGroup = function (message, collabID) {
        var body = {
            message: message,
            collabId: collabID
        };
        return this.http.post(this.rootUrl + "/messaging/sendMessage", body);
    };
    //send personal message to collab members
    ConversationService.prototype.sendPersonalMessage = function (message, recipient) {
        var body = {
            message: message,
            recipient: recipient
        };
        console.log(message + " " + recipient);
        return this.http.post(this.rootUrl + "/messaging/sendMessage", body);
    };
    //return current user conversations
    ConversationService.prototype.myCoversations = function () {
        return this.http.get(this.rootUrl + "/messaging/myConvos");
    };
    /**
      page should be 0, 1, 2, 3, et cetera.
      If you set page = 0, it will return the latest 20 messages.
      If you set page = 1, it will skip the latest 20 messages and return the next 20 messages.
      If you set page = 2, it will skip the latest 40 messages and return the next 20 messages.
      …. You get the idea.
  
      otherUser should be the other user’s username
     */
    ConversationService.prototype.LoadOtherUserMessage = function (page, otherUser) {
        var body = {
            page: page,
            otherUser: otherUser
        };
        return this.http.post(this.rootUrl + "/messaging/getMessages", body);
    };
    ConversationService.prototype.LoadGroupMessage = function (page, CollabId) {
        var body = {
            page: page,
            collabId: CollabId
        };
        return this.http.post(this.rootUrl + "/messaging/getMessages", body);
    };
    ConversationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "./src/app/shared/dbAccess/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/dbAccess/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







//import 'rxjs/add/operator/throw';
var UserService = /** @class */ (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.rootUrl = 'https://huntercollabapi.herokuapp.com';
    }
    UserService.prototype.getToken = function () {
        return localStorage.getItem('accessToken');
    };
    //"/user?username="+UserName+"&password="password
    UserService.prototype.userAuthentication = function (userName, password) {
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.get(this.rootUrl + "/auth/login?" + "username=" + userName + "&password=" + password, { headers: reqHeader });
    };
    UserService.prototype.registerUser = function (username, password) {
        var body = {
            username: username,
            password: password,
        };
        //This request does not need authorization 
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        //Adding Parameters
        var requestedUrl = this.rootUrl + "/user?username=" + username + "&password=" + password;
        //Testing url 
        console.log(requestedUrl);
        //requestUrl: endpoint
        //body: Needed, but not used
        //{headers : reqHeader} : Creating object from the header library; set to non-auth 
        return this.http.put(requestedUrl, body, { headers: reqHeader });
    };
    UserService.prototype.isAuthenticated = function () {
        return localStorage.getItem('accessToken') !== null;
    };
    //url + json authentication
    UserService.prototype.getUserdetails = function () {
        return this.http.get(this.rootUrl + "/user");
    };
    UserService.prototype.getUserdetails_ = function (user) {
        return this.http.get(this.rootUrl + "/user/" + user);
    };
    //wrapper of other user
    UserService.prototype.otheruserprofile = function (user) {
        this.member = user;
        console.log(this.member);
        this.router.navigate(['/user']);
    };
    UserService.prototype.getUserSkills = function (userName) {
        return this.http.get(this.rootUrl + "/user/skills/" + userName).toPromise();
    };
    UserService.prototype.getUserClasses = function (userName) {
        return this.http.get(this.rootUrl + "/user/classes/" + userName).toPromise();
    };
    UserService.prototype.getUserSkillsAndClasses = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var xAxisReq, classes, skills;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        xAxisReq = [];
                        return [4 /*yield*/, this.getUserSkills(username).then(function (result) {
                                xAxisReq = result["skills"];
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getUserClasses(username).then(function (result) {
                                classes = result["classes"];
                            })];
                    case 2:
                        _a.sent();
                        /*
                        for(let classTaken of classes){
                            xAxisReq.push({
                            skillOrClass: classTaken,
                            type: "class"
                          });
                        }
                        for(let skill of skills){
                          xAxisReq.push({
                          skillOrClass: skill,
                          type: "skill"
                        });
                      }
                      */
                        return [2 /*return*/, xAxisReq];
                }
            });
        });
    };
    UserService.prototype.searchSkills = function (constrain) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("query", constrain);
        return this.http.get(this.rootUrl + "/search/skills", { params: params });
    };
    //___________POST_________________
    //you can update user profile taking all these as input but "Not required"
    UserService.prototype.updateUserProfile = function (github, linkedin, skills, classes) {
        var body = {
            github: github,
            linkedin: linkedin,
            skills: skills,
            classes: classes
        };
        return this.http.post(this.rootUrl + "/user", body);
    };
    UserService.prototype.updateUserSkill = function (skills) {
        var body = {
            skills: skills,
        };
        console.log(body);
        return this.http.post(this.rootUrl + "/user", body);
    };
    UserService.prototype.updateUserclass = function (classes) {
        var body = {
            classes: classes
        };
        console.log(body);
        return this.http.post(this.rootUrl + "/user", body);
    };
    //download profile-picture as Bold file
    UserService.prototype.getPicture = function () {
        // user/profilePicture
        return this.http.get(this.rootUrl + "/user/profilePicture", { responseType: 'blob' })
            .catch(this.errorhandler);
    };
    UserService.prototype.uploadProfilePicture = function (fileToUpload) {
        var formData = new FormData();
        formData.append('pic', fileToUpload, fileToUpload.name);
        return this.http.post(this.rootUrl + "/user/profilePicture", formData);
    };
    //it will split usename by "@" and return "First.Last" of user
    UserService.prototype.gertFirstandLastName = function (username) {
        var str = username;
        var result = str.split('@');
        console.log(result[0]);
        return result[0];
    };
    //Http error handler 
    UserService.prototype.errorhandler = function (error) {
        var str = "error";
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error.message || "server Error");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/models/message.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/message.model.ts ***!
  \************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tusha\Desktop\CS499\hunterCollap\current\webApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map