(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register-page/register.component.css":
/*!***************************************************************!*\
  !*** ./src/app/register/register-page/register.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #162A58;\n  padding: 2px 2px;\n}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 50%;\n  padding: 16px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1.2px solid #ccc;\n  box-sizing: border-box;\n  border-radius: 20px;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #3366FF;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  width: 50%;\n}\n\nbutton:hover {\n  opacity: 0.8;\n}\n\n/* Center the image and position the close button */\n\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative;\n}\n\nimg.logo {\n  width: 40%;\n  border-radius: 50%;\n}\n\n.container {\n  padding: 16px;\n  text-align: center;\n\n}\n\n.RegiAccount {\n    width: 50%;\n    padding: 16px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border-radius: 20px;\n    \n    color: white;\n    text-align: center;\n\n\n}\n\nspan.psw {\n  float: right;\n  padding-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUdBLGdDQUFnQzs7QUFDaEM7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBLG1EQUFtRDs7QUFDbkQ7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCOztBQUVwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixrQkFBa0I7OztBQUd0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci1wYWdlL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MkE1ODtcbiAgcGFkZGluZzogMnB4IDJweDtcbn1cblxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbmlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMS4ycHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG4vKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY2RkY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG5idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cblxuXG4vKiBDZW50ZXIgdGhlIGltYWdlIGFuZCBwb3NpdGlvbiB0aGUgY2xvc2UgYnV0dG9uICovXG4uaW1nY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLmxvZ28ge1xuICB3aWR0aDogNDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLlJlZ2lBY2NvdW50IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblxufVxuXG5zcGFuLnBzdyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy10b3A6IDFweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register-page/register.component.html":
/*!****************************************************************!*\
  !*** ./src/app/register/register-page/register.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n<body>\n\n    <div class=\"imgcontainer\">\n        <img src=\"assets/logo.png\"  width=\"250\" height=\"200\">\n        \n      </div>\n\n    <form  [formGroup]=\"regiForm\" (ngSubmit)=\"onSubmit(username.value,password.value,password2.value)\">\n      <div class=\"container\">\n        \n          <label>\n            <input type=\"text\" #username placeholder=\"Enter Hunter Email\" formControlName=\"username\" required>\n          </label><br>\n          <label>  \n            <input type=\"text\" #password placeholder=\"Enter password\" formControlName=\"password\" required>\n          </label><br>\n          <label>  \n            <input type=\"text\" #password2 placeholder=\"Re-enter password\" formControlName=\"password\" required>\n          </label><br>\n          <button type=\"submit\" [disabled]=\"!regiForm.valid\">Register Me</button>\n          \n          <h4>----or----</h4>\n\n      </div>\n    </form>\n\n    <div class =\"container\">\n        <button>\n          <a routerLink=\"/login\" >login page</a>\n          <router-outlet></router-outlet>  \n        </button>\n      </div>\n\n      <div class=\"container\">\n          <div>\n            \n          </div>\n      </div>\n\n</body>\n</html>\n-->\n<p>Register!</p>\n\n"

/***/ }),

/***/ "./src/app/register/register-page/register.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/register/register-page/register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.isRegiError = false;
        this.regiForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password2: [' ', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (username, password, password2) {
        var _this = this;
        console.log(username, password, password2);
        if (password != password2) {
            alert("Password did not matche!");
        }
        else {
            this.userService.registerUser(username, password)
                .subscribe(function (data) {
                //storing json object to localStorage
                localStorage.setItem('accessToken', data.token);
                if (data.success == true) {
                    _this.router.navigate(['/home']);
                    console.log(username + " registered");
                }
                else {
                    alert(data.error);
                    _this.router.navigate(['/register']);
                }
                ;
                return;
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register-page/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register-page/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_page_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-page/register.component */ "./src/app/register/register-page/register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _register_page_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-page/register.component */ "./src/app/register/register-page/register.component.ts");





var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_page_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map