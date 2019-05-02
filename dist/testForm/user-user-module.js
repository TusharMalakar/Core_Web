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

module.exports = "    .usercard1 {\r\n      margin-top: 30px;\r\n      padding: 0px;\r\n      border-radius: 5px;\r\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n  .mat-card-avatar {\r\n      background-image: url('/assets/userPhoto.png');\r\n      vertical-align: middle;\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n\r\n  }\r\n\r\n  .mat-card-actions {\r\n      display: flex;\r\n  }\r\n\r\n  .list-header-title {\r\n    color: rgba(0, 0, 0, .54);\r\n    background: rgba(0, 0, 0, 0.062);\r\n    font-weight: bold;\r\n    padding: 0px;\r\n   \r\n  }\r\n\r\n  .mat-card-image {\r\n    margin: 0px;\r\n    max-width: 100%;\r\n  }\r\n\r\n  .mat-card-header {\r\n      padding-left: 10px;\r\n      padding-top: 10px; \r\n  }\r\n\r\n  .mat-raised-button {\r\n      width: 100%;\r\n      height: 100%;\r\n      margin-bottom: 7px;\r\n  }\r\n\r\n  .usercard2 {\r\n   margin-top: 30px;\r\n   color: rgba(0, 0, 0, .54);\r\n   background: rgba(0, 0, 0, 0.062);\r\n   height: 92%;\r\n   padding-bottom: 25px;\r\n   border-radius: 5px;\r\n   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n  .viewport {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-left: 40px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n  .cdk-virtual-scroll-viewport {\r\n    height: 80%;\r\n    margin: 0px;\r\n    background-color: white;\r\n\r\n}\r\n\r\n  .example-form .mat-form-field {\r\n  margin: 0px;\r\n}\r\n\r\n  .mat-list {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n  .grid-container {\r\n    grid: auto-flow / 1fr;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .grid-search {\r\n    grid-area: grid-search;\r\n    margin-left: 25px;\r\n   \r\n  }\r\n\r\n  .grid-item {\r\n    grid-area: grid-item;\r\n    height: 100%;\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .mat-chip-list {\r\n    margin: 1px;\r\n  }\r\n\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n  .example-full-width {\r\n    width: 80%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    background: rgba(255, 255, 255, 0.671);\r\n    border-radius: 15px;\r\n  }\r\n\r\n  .wrapper {\r\n    display:inline-block;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    height: 30px;\r\n    }\r\n\r\n  input {\r\n        background-color: white;\r\n        border: 3;\r\n        width: 200px;\r\n        height: 30px;\r\n    }\r\n\r\n  button {\r\n        \r\n        border: 3;\r\n        width: 100px;\r\n        height: 38px;\r\n    }\r\n\r\n  .avatar {\r\n      vertical-align: middle;\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5RUFBeUU7RUFDN0U7O0VBRUE7TUFDSSw4Q0FBOEM7TUFDOUMsc0JBQXNCO01BQ3RCLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCOztFQUV0Qjs7RUFDQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZOztFQUVkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIsaUJBQWlCO0VBQ3JCOztFQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7O0VBSUE7R0FDQyxnQkFBZ0I7R0FDaEIseUJBQXlCO0dBQ3pCLGdDQUFnQztHQUNoQyxXQUFXO0dBQ1gsb0JBQW9CO0dBQ3BCLGtCQUFrQjtHQUNsQix5RUFBeUU7QUFDNUU7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQix5RUFBeUU7QUFDN0U7O0VBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1Qjs7QUFFM0I7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBSUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7RUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGlCQUFpQjs7RUFFbkI7O0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaOztFQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFNBQVM7UUFDVCxZQUFZO1FBQ1osWUFBWTtJQUNoQjs7RUFDQTs7UUFFSSxTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0VBR0E7TUFDRSxzQkFBc0I7TUFDdEIsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7SUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudXNlcmNhcmQxIHtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VzZXJQaG90by5wbmcnKTtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICB9XHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4OyBcclxuICB9XHJcblxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAudXNlcmNhcmQyIHtcclxuICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcclxuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2Mik7XHJcbiAgIGhlaWdodDogOTIlO1xyXG4gICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4udmlld3BvcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5tYXQtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIDFmcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZ3JpZC1zZWFyY2gge1xyXG4gICAgZ3JpZC1hcmVhOiBncmlkLXNlYXJjaDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICBcclxuICB9XHJcbiAgLmdyaWQtaXRlbSB7XHJcbiAgICBncmlkLWFyZWE6IGdyaWQtaXRlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jaGlwLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3MSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IDM7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyOiAzO1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgLmF2YXRhciB7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\r\n  fxLayout = \"row\"         :  If ;using big screens, display data in rows\r\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\r\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\r\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\r\n-->\r\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n        <mat-card class=\"usercard1\">\r\n                <mat-card-header class=\"list-header-title\">\r\n                    <div mat-card-avatar >\r\n                        <img mat-card-image [src]=\"imageToShow\"\r\n                        class =\"avatar\"\r\n                        alt=\"Place image title\"\r\n                        *ngIf=\"!isImageLoading; else noImageFound\">\r\n                    </div>\r\n                    <mat-card-title>{{ userData?.name }}</mat-card-title>\r\n                    <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\r\n                  </mat-card-header>    \r\n                  <img mat-card-image [src]=\"imageToShow\"\r\n                    alt=\"Place image title\"\r\n                    *ngIf=\"!isImageLoading; else noImageFound\">\r\n                    \r\n               <!--Taking picture as input-->\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" id=\"file\"(change)=\"handleFileInput($event.target.files)\">\r\n                <button (click)=\"uploadFileToActivity()\">submit</button>\r\n              </div>\r\n                    <ng-template #noImageFound>\r\n                      <img src=\"/assets/userPhoto.png\"> \r\n                    </ng-template>\r\n                <!--img mat-card-image -->\r\n                <mat-card-content>\r\n                \r\n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\r\n                    <mat-grid-tile>\r\n                          <button mat-raised-button color=\"warm\">{{ userData?.github }}</button>\r\n                    </mat-grid-tile>\r\n                    \r\n                    <mat-grid-tile>\r\n                        <button mat-raised-button color=\"primary\">{{ userData?.linkedin }}</button>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n\r\n              </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n      <div class=\"usercard2\">\r\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\r\n          <!-- Will hold class list -->\r\n            <mat-grid-tile>\r\n            <div class =\"grid-container\">  \r\n              <div class = \"grid-search\">\r\n                  <div class=\"wrapper\">\r\n                      <!--add a new skill--> \r\n                      <form #classForm=\"ngForm\" (ngSubmit)=\"addclass(classForm)\" class=\"form form-login\">\r\n                          <input name=\"NewClass\" id=\"login-email\" type=\"text\" class=\"form-input\" placeholder=\"Add a new class\" required ngModel>\r\n                          <button mat-flat-button color=\"primary\">Add class</button>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class = \"grid-item\">\r\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\r\n                      <mat-chip-list>\r\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\r\n                          {{ class }}\r\n                          <mat-icon matChipRemove>cancel</mat-icon>\r\n                        </mat-chip>\r\n                      </mat-chip-list>\r\n                    </cdk-virtual-scroll-viewport>\r\n                </div>\r\n            </div>    \r\n            </mat-grid-tile>\r\n            <br>\r\n            <br>\r\n            <br>\r\n          <!-- Will hold the skill list -->\r\n          <mat-grid-tile>\r\n              <div class =\"grid-container\">  \r\n                  <div class = \"grid-search\">\r\n                      <div class=\"wrapper\">\r\n\r\n                        <!--add a new skill--> \r\n                        <form #skillForm=\"ngForm\" (ngSubmit)=\"addskill(skillForm)\" class=\"form form-login\">\r\n                            <input name=\"NewSkill\" id=\"login-email\" type=\"text\" class=\"form-input\" placeholder=\"Add a new skill\" required ngModel>\r\n                            <button mat-flat-button color=\"primary\">Add Skill</button>\r\n                        </form>\r\n                          \r\n                      </div>\r\n                  </div>\r\n                  <div class = \"grid-item\">\r\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\r\n                          <mat-chip-list>\r\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\r\n                              {{ skill }}\r\n                              <mat-icon matChipRemove>cancel</mat-icon>\r\n                            </mat-chip>\r\n                            \r\n                          </mat-chip-list>\r\n                        </cdk-virtual-scroll-viewport>\r\n                    </div>\r\n                </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

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
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");







var UserPageComponent = /** @class */ (function () {
    function UserPageComponent(userService, router, formBuilder, conver, getmem) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.conver = conver;
        this.getmem = getmem;
        this.filteredUsers = [];
        this.isLoading = false;
        //regular expression to check empty string
        this.regex = "^\\s+$";
        //default variable for selected file.
        this.fileToUpload = null;
        this.userService.getUserdetails().subscribe(function (userData) { return _this.userData = userData; });
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.profilePicture();
        this.classesForm = this.formBuilder.group({ userInput: null });
    };
    //it will display other members profile from nebvar 
    UserPageComponent.prototype.otherUserProfile = function () {
        var _this = this;
        this.userService.getUserdetails_(this.getmem.mem).subscribe(function (userData) { return _this.userData = userData; });
        console.log("other User profile " + this.userData);
    };
    UserPageComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            //image to show is the final place holder of profile picture
            _this.imageToShow = reader.result;
            return _this.imageToShow;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserPageComponent.prototype.profilePicture = function () {
        var _this = this;
        this.userService.getPicture().subscribe(function (picture) {
            _this.createImageFromBlob(picture);
            //console.log(picture)
        });
    };
    //function which you use in (change)-event of your file input tag:
    UserPageComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    UserPageComponent.prototype.uploadFileToActivity = function () {
        this.userService.uploadProfilePicture(this.fileToUpload).subscribe(function (data) {
            //console.log(data)
        });
    };
    UserPageComponent.prototype.addskill = function (newSkill) {
        //return if input is empty string
        if (newSkill.value["NewSkill"] == this.regex) {
            console.log("it is an empty string  ");
            return 0;
        }
        //taking values from input
        var newObject = Object.assign(newSkill.value["NewSkill"]);
        //console.log(newObject)
        //copying all the skills as object that are already exist
        var skills = this.userData["skills"];
        //checking if the skill is already exist or not
        for (var iter in skills) {
            if (newObject == skills[iter]) {
                //console.log(skills[iter]," already exits !")
                return 0;
            }
        }
        //Combining input skill and previous skills
        newObject = skills.concat(newObject);
        this.userService.updateUserSkill(newObject).subscribe(function (data) {
            //console.log(data)
        });
    };
    UserPageComponent.prototype.addclass = function (newclass) {
        //return if input is empty string
        if (newclass.value["NewClass"] == this.regex) {
            console.log("it is an empty strings");
            return 0;
        }
        //taking values from input
        var newObject = Object.assign(newclass.value["NewClass"]);
        //console.log(newObject)
        //copying all the classes as object that are already exist
        var classes = this.userData["classes"];
        //checking if the skill is already exist or not
        for (var iter in classes) {
            if (newObject == classes[iter]) {
                // console.log(classes[iter]," already exits !")
                return 0;
            }
        }
        //Combining input skill and previous skills
        newObject = classes.concat(newObject);
        this.userService.updateUserclass(newObject).subscribe(function (data) {
            //console.log(data)
        });
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user/user-page/user-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_1__["ConversationService"], src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]])
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