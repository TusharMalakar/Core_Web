(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/update-userdata/update-userdata.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/update-userdata/update-userdata.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXBkYXRlLXVzZXJkYXRhL3VwZGF0ZS11c2VyZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/update-userdata/update-userdata.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/update-userdata/update-userdata.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  update-userdata works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/update-userdata/update-userdata.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/update-userdata/update-userdata.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateUserdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserdataComponent", function() { return UpdateUserdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdateUserdataComponent = /** @class */ (function () {
    function UpdateUserdataComponent() {
    }
    UpdateUserdataComponent.prototype.ngOnInit = function () {
    };
    UpdateUserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'update-userdata',
            template: __webpack_require__(/*! ./update-userdata.component.html */ "./src/app/user/update-userdata/update-userdata.component.html"),
            styles: [__webpack_require__(/*! ./update-userdata.component.css */ "./src/app/user/update-userdata/update-userdata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdateUserdataComponent);
    return UpdateUserdataComponent;
}());



/***/ }),

/***/ "./src/app/user/user-page/user-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .usercard1 {\n      margin-top: 30px;\n      padding: 0px;\n      border-radius: 5px;\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .mat-card-avatar {\n      background-image: url('/assets/userPhoto.png');\n      background-size: cover;\n\n  }\n\n  .mat-card-actions {\n      display: flex;\n  }\n\n  .list-header-title {\n    color: rgba(0, 0, 0, .54);\n    background: rgba(0, 0, 0, 0.062);\n    font-weight: bold;\n    padding: 0px;\n   \n  }\n\n  .mat-card-image {\n    margin: 0px;\n    max-width: 100%;\n  }\n\n  .mat-card-header {\n      padding-left: 10px;\n      padding-top: 10px; \n  }\n\n  .mat-raised-button {\n      width: 100%;\n      height: 100%;\n      margin-bottom: 7px;\n  }\n\n  .usercard2 {\n   margin-top: 30px;\n   color: rgba(0, 0, 0, .54);\n   background: rgba(0, 0, 0, 0.062);\n   height: 92%;\n   padding-bottom: 25px;\n   border-radius: 5px;\n   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .viewport {\n    width: 100%;\n    height: 100%;\n    margin-left: 40px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .cdk-virtual-scroll-viewport {\n    height: 80%;\n    margin: 0px;\n    background-color: white;\n\n}\n\n  .example-form .mat-form-field {\n  margin: 0px;\n}\n\n  .mat-list {\n    width: 100%;\n    height: 100%;\n}\n\n  .grid-container {\n    grid: auto-flow / 1fr;\n    width: 100%;\n    height: 100%;\n  }\n\n  .grid-search {\n    grid-area: grid-search;\n    margin-left: 25px;\n   \n  }\n\n  .grid-item {\n    grid-area: grid-item;\n    height: 100%;\n    margin-left: 25px;\n    margin-right: 25px;\n    margin-bottom: 0px;\n  }\n\n  .mat-chip-list {\n    margin: 1px;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .example-full-width {\n    width: 80%;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    background: rgba(255, 255, 255, 0.671);\n    border-radius: 15px;\n  }\n\n  .wrapper {\n    display:inline-block;\n    margin-top: 10px;\n    margin-bottom: 15px;\n    height: 30px;\n    }\n\n  input {\n        background-color: white;\n        border: 3;\n        width: 200px;\n        height: 30px;\n    }\n\n  button {\n        \n        border: 3;\n        width: 100px;\n        height: 38px;\n    }\n\n  \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5RUFBeUU7RUFDN0U7O0VBRUE7TUFDSSw4Q0FBOEM7TUFDOUMsc0JBQXNCOztFQUUxQjs7RUFDQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZOztFQUVkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7O0VBSUE7R0FDQyxnQkFBZ0I7R0FDaEIseUJBQXlCO0dBQ3pCLGdDQUFnQztHQUNoQyxXQUFXO0dBQ1gsb0JBQW9CO0dBQ3BCLGtCQUFrQjtHQUNsQix5RUFBeUU7QUFDNUU7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5RUFBeUU7QUFDN0U7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1Qjs7QUFFM0I7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7RUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGlCQUFpQjs7RUFFbkI7O0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaOztFQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7RUFDQTs7UUFFSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7SUFDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudXNlcmNhcmQxIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG5cbiAgLm1hdC1jYXJkLWF2YXRhciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdXNlclBob3RvLnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICB9XG4gIC5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAubGlzdC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2Mik7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgXG4gIH1cblxuICAubWF0LWNhcmQtaW1hZ2Uge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7IFxuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIFxuXG5cbiAgLnVzZXJjYXJkMiB7XG4gICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjIpO1xuICAgaGVpZ2h0OiA5MiU7XG4gICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi52aWV3cG9ydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cbi5leGFtcGxlLWZvcm0gLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cblxuXG4ubWF0LWxpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBncmlkOiBhdXRvLWZsb3cgLyAxZnI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuZ3JpZC1zZWFyY2gge1xuICAgIGdyaWQtYXJlYTogZ3JpZC1zZWFyY2g7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICBcbiAgfVxuICAuZ3JpZC1pdGVtIHtcbiAgICBncmlkLWFyZWE6IGdyaWQtaXRlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC5tYXQtY2hpcC1saXN0IHtcbiAgICBtYXJnaW46IDFweDtcbiAgfVxuXG4gIC5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3MSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuICBcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAzO1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgXG4gICAgICAgIGJvcmRlcjogMztcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgfVxuXG4gIFxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\n  fxLayout = \"row\"         :  If ;using big screens, display data in rows\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\n-->\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n        <mat-card class=\"usercard1\">\n                <mat-card-header class=\"list-header-title\">\n                    <div mat-card-avatar></div>\n                    <mat-card-title>{{ userData?.name }}</mat-card-title>\n                    <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\n                  </mat-card-header>    \n                <img mat-card-image src=\"/assets/userPhoto.png\">\n                <mat-card-content>\n                \n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\n                    <mat-grid-tile>\n                          <button mat-raised-button color=\"warm\">{{ userData?.github }}</button>\n                    </mat-grid-tile>\n                    \n                    <mat-grid-tile>\n                        <button mat-raised-button color=\"primary\">{{ userData?.linkedin }}</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n              </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n      <div class=\"usercard2\">\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\n          <!-- Will hold class list -->\n            <mat-grid-tile>\n            <div class =\"grid-container\">  \n              <div class = \"grid-search\">\n                  <div class=\"wrapper\">\n                      <input type=\"text\" placeholder=\"Search for Class...\" />\n                      <button mat-flat-button color=\"primary\">Add Class</button>\n                  </div>\n              </div>\n              \n              <div class = \"grid-item\">\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\n                      <mat-chip-list>\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\n                          {{ class }}\n                          <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                      </mat-chip-list>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>    \n            </mat-grid-tile>\n            <br>\n            <br>\n            <br>\n          <!-- Will hold the skill list -->\n          <mat-grid-tile>\n              <div class =\"grid-container\">  \n                  <div class = \"grid-search\">\n                      <div class=\"wrapper\">\n                          <input type=\"text\" placeholder=\"Search for Skills...\" />\n                          <button mat-flat-button color=\"primary\">Add Skill</button>\n                      </div>\n                  </div>\n                  <div class = \"grid-item\">\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\n                          <mat-chip-list>\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\n                              {{ skill }}\n                              <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            \n                          </mat-chip-list>\n                        </cdk-virtual-scroll-viewport>\n                    </div>\n                </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.ts ***!
  \*******************************************************/
/*! exports provided: UserPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageComponent", function() { return UserPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var UserPageComponent = /** @class */ (function () {
    /*
    TODO:
      DISPLAY Image
      Edit all fields
      Autocomplete on edit skills and classes.
  
    */
    function UserPageComponent(userService, router, formBuilder) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.filteredUsers = [];
        this.isLoading = false;
        this.userService.getUserdetails().subscribe(function (userData) { return _this.userData = userData; });
        console.log(this.userData);
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.classesForm = this.formBuilder.group({
            userInput: null
        });
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user/user-page/user-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], UserPageComponent);
    return UserPageComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _update_userdata_update_userdata_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-userdata/update-userdata.component */ "./src/app/user/update-userdata/update-userdata.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");





var routes = [
    {
        //This is the default path the user will enter if the url is /user
        path: '',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_4__["UserPageComponent"]
    }, {
        path: 'update-userdata',
        component: _update_userdata_update_userdata_component__WEBPACK_IMPORTED_MODULE_1__["UpdateUserdataComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _update_userdata_update_userdata_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./update-userdata/update-userdata.component */ "./src/app/user/update-userdata/update-userdata.component.ts");











//Material Components








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_10__["UserPageComponent"], _update_userdata_update_userdata_component__WEBPACK_IMPORTED_MODULE_18__["UpdateUserdataComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_9__["UserRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                //Flex Module
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                //Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map