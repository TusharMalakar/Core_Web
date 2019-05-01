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
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");



var UpdateUserdataComponent = /** @class */ (function () {
    function UpdateUserdataComponent(userservice) {
        this.userservice = userservice;
    }
    UpdateUserdataComponent.prototype.ngOnInit = function () {
    };
    UpdateUserdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'update-userdata',
            template: __webpack_require__(/*! ./update-userdata.component.html */ "./src/app/user/update-userdata/update-userdata.component.html"),
            styles: [__webpack_require__(/*! ./update-userdata.component.css */ "./src/app/user/update-userdata/update-userdata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "    .usercard1 {\n      margin-top: 30px;\n      padding: 0px;\n      border-radius: 5px;\n      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n\n  .mat-card-avatar {\n      background-image: url('/assets/userPhoto.png');\n      background-size: cover;\n\n  }\n\n  .mat-card-actions {\n      display: flex;\n  }\n\n  .list-header-title {\n    color: rgba(0, 0, 0, .54);\n    background: rgba(0, 0, 0, 0.062);\n    font-weight: bold;\n    padding: 0px;\n   \n  }\n\n  .mat-card-header {\n      padding-left: 10px;\n      padding-top: 10px; \n  }\n\n  .mat-raised-button {\n      width: 100%;\n      height: 100%;\n      margin-bottom: 7px;\n  }\n\n  .usercard2 {\n   margin-top: 30px;\n   color: rgba(0, 0, 0, .54);\n   background: rgba(0, 0, 0, 0.062);\n   height: 86.5%;\n   padding-bottom: 25px;\n   border-radius: 5px;\n   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .viewport {\n    width: 100%;\n    height: 100%;\n    margin-left: 40px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n  .cdk-virtual-scroll-viewport {\n    height: 70%;\n    margin: 0px;\n    background-color: white;\n\n}\n\n  .example-form .mat-form-field {\n  margin: 0px;\n}\n\n  .mat-list {\n    width: 100%;\n    height: 100%;\n}\n\n  .grid-container {\n    grid: auto-flow / 1fr;\n    width: 100%;\n    height: 100%;\n  }\n\n  .grid-search {\n    grid-area: grid-search;\n    margin-left: 25px;\n   \n  }\n\n  .grid-item {\n    grid-area: grid-item;\n    height: 100%;\n    margin-left: 25px;\n    margin-right: 25px;\n    margin-bottom: 0px;\n  }\n\n  .mat-chip-list {\n    margin: 1px;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .example-full-width {\n    width: 80%;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    background: rgba(255, 255, 255, 0.671);\n    border-radius: 15px;\n  }\n\n  .wrapper {\n    display:inline-block;\n    margin-top: 10px;\n    margin-bottom: 15px;\n    height: 30px;\n    }\n\n  input {\n        background-color: white;\n        border: 3;\n        width: 200px;\n        height: 30px;\n    }\n\n  button {\n        \n        border: 3;\n        width: 100px;\n        height: 38px;\n    }\n\n  .image-background {\n   background: #000;\n   display: table;\n   width: 100%;\n   height: 100%;\n   position: relative;\n\n   overflow: hidden;\n }\n\n  .image-container {\n   display: table-cell;\n   vertical-align: middle;\n   text-align: center;\n   margin: auto;\n   max-height: 100%;\n   max-width: 100%;\n\n   \n }\n\n  .mat-card-image {\n  margin: 0px;\n  margin-left: 8.099%;\n  margin-right: 10%;\n\n  \n  \n\n  display: block;\n  height: 450px;\n  max-height: 450px;\n  max-width: 85%;\n  \n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQix5RUFBeUU7RUFDN0U7O0VBRUE7TUFDSSw4Q0FBOEM7TUFDOUMsc0JBQXNCOztFQUUxQjs7RUFDQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZOztFQUVkOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLGlCQUFpQjtFQUNyQjs7RUFFQTtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO0VBQ3RCOztFQUlBO0dBQ0MsZ0JBQWdCO0dBQ2hCLHlCQUF5QjtHQUN6QixnQ0FBZ0M7R0FDaEMsYUFBYTtHQUNiLG9CQUFvQjtHQUNwQixrQkFBa0I7R0FDbEIseUVBQXlFO0FBQzVFOztFQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUVBQXlFO0FBQzdFOztFQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7O0FBRTNCOztFQUVBO0VBQ0UsV0FBVztBQUNiOztFQUlBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0VBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7O0VBRW5COztFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWjs7RUFFQTtRQUNJLHVCQUF1QjtRQUN2QixTQUFTO1FBQ1QsWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0VBQ0E7O1FBRUksU0FBUztRQUNULFlBQVk7UUFDWixZQUFZO0lBQ2hCOztFQUdIO0dBQ0UsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZCxXQUFXO0dBQ1gsWUFBWTtHQUNaLGtCQUFrQjs7R0FFbEIsZ0JBQWdCO0NBQ2xCOztFQUVBO0dBQ0UsbUJBQW1CO0dBQ25CLHNCQUFzQjtHQUN0QixrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixlQUFlOzs7Q0FHakI7O0VBRUE7RUFDQyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjs7Ozs7RUFLakIsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYzs7O0FBR2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLnVzZXJjYXJkMSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfVxuXG4gIC5tYXQtY2FyZC1hdmF0YXIge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3VzZXJQaG90by5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgfVxuICAubWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmxpc3QtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNjIpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgIFxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDsgXG4gIH1cblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgXG5cblxuICAudXNlcmNhcmQyIHtcbiAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2Mik7XG4gICBoZWlnaHQ6IDg2LjUlO1xuICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4udmlld3BvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxufVxuXG4uZXhhbXBsZS1mb3JtIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5cblxuLm1hdC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZ3JpZDogYXV0by1mbG93IC8gMWZyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmdyaWQtc2VhcmNoIHtcbiAgICBncmlkLWFyZWE6IGdyaWQtc2VhcmNoO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgXG4gIH1cbiAgLmdyaWQtaXRlbSB7XG4gICAgZ3JpZC1hcmVhOiBncmlkLWl0ZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAubWF0LWNoaXAtbGlzdCB7XG4gICAgbWFyZ2luOiAxcHg7XG4gIH1cblxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NzEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4gIC53cmFwcGVyIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIFxuICAgICAgICBib3JkZXI6IDM7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgIH1cblxuICBcbiAuaW1hZ2UtYmFja2dyb3VuZCB7XG4gICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgZGlzcGxheTogdGFibGU7XG4gICB3aWR0aDogMTAwJTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbiAuaW1hZ2UtY29udGFpbmVyIHtcbiAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbWFyZ2luOiBhdXRvO1xuICAgbWF4LWhlaWdodDogMTAwJTtcbiAgIG1heC13aWR0aDogMTAwJTtcblxuICAgXG4gfVxuXG4gLm1hdC1jYXJkLWltYWdlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4LjA5OSU7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuXG4gIFxuICBcblxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbWF4LWhlaWdodDogNDUwcHg7XG4gIG1heC13aWR0aDogODUlO1xuICBcbiAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\n  fxLayout = \"row\"         :  If ;using big screens, display data in rows\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\n-->\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n        <mat-card class=\"usercard1\">\n          \n                <mat-card-header class=\"list-header-title\">\n                    <div mat-card-avatar></div>\n                    <mat-card-title>{{ userData?.name }}</mat-card-title>\n                    <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\n                  </mat-card-header>  \n\n                  <div class=\"image-background\">\n                    <div class=\"iamge-container\">\n                        <img mat-card-image [src]=\"imageToShow\"\n                        alt=\"Place image title\"\n                        *ngIf=\"!isImageLoading; else noImageFound\">\n                    </div>\n                  </div>\n\n                     <!--Taking picture as input-->\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"file\"(change)=\"handleFileInput($event.target.files)\">\n                <button (click)=\"uploadFileToActivity()\">submit</button>\n              </div>\n                    <ng-template #noImageFound>\n                      <img src=\"/assets/userPhoto.png\"> \n                    </ng-template>\n                <!--img mat-card-image -->\n                <mat-card-content>\n                \n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\n                    <mat-grid-tile>\n                          <button mat-raised-button color=\"warm\">{{ userData?.github }}</button>\n                    </mat-grid-tile>\n                    \n                    <mat-grid-tile>\n                        <button mat-raised-button color=\"primary\">{{ userData?.linkedin }}</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n\n              </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n      <div class=\"usercard2\">\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\n          <!-- Will hold class list -->\n            <mat-grid-tile>\n            <div class =\"grid-container\">  \n              <div class = \"grid-search\">\n                  <div class=\"wrapper\">\n                      <input type=\"text\" placeholder=\"Search for Class...\" />\n                      <button (click)=\"addClass()\" mat-flat-button color=\"primary\">Add Class</button>\n                  </div>\n              </div>\n              \n              <div class = \"grid-item\">\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\n                      <mat-chip-list>\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\n                          {{ class }}\n                          <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                      </mat-chip-list>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>    \n            </mat-grid-tile>\n            <br>\n            <br>\n            <br>\n          <!-- Will hold the skill list -->\n          <mat-grid-tile>\n              <div class =\"grid-container\">  \n                  <div class = \"grid-search\">\n                      <div class=\"wrapper\">\n                          <input type=\"text\" placeholder=\"Search for Skills...\" />\n                          <button (click)=\"addSkill()\" mat-flat-button color=\"primary\">Add Skill</button>\n                      </div>\n                  </div>\n                  <div class = \"grid-item\">\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\n                          <mat-chip-list>\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\n                              {{ skill }}\n                              <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            \n                          </mat-chip-list>\n                        </cdk-virtual-scroll-viewport>\n                    </div>\n                </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </div>\n  </div>"

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
        //default variable for selected file.
        this.fileToUpload = null;
        this.userService.getUserdetails().subscribe(function (userData) {
            _this.userData = userData;
            _this.userClass = userData["classes"];
            console.log("userClasses : " + _this.userClass);
            _this.userSkill = userData["skills"];
            console.log("userSkills : " + _this.userSkill);
        });
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.profilePicture();
        this.classesForm = this.formBuilder.group({
            userInput: null
        });
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
            console.log(data);
        });
        //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
        //     // do something, if upload success
        //     }, error => {
        //       console.log(error);
        //     });
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