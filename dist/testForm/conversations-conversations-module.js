(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversations-conversations-module"],{

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .container-bottom {\r\n    float: right;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n  \r\n  /* Chat containers */\r\n  \r\n  .container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n}\r\n  \r\n  /* Chat containers */\r\n  \r\n  .container2 {\r\n  border: 4px solid #dedede;\r\n  background-color: plum;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n  \r\n  /* Darker chat container */\r\n  \r\n  .darker {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n  \r\n  /* Clear floats */\r\n  \r\n  .container::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n  \r\n  .right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\r\n}\r\n  \r\n  /* Style time text */\r\n  \r\n  .time-right {\r\n  float: right;\r\n  color: #aaa;\r\n}\r\n  \r\n  /* Style time text */\r\n  \r\n  .time-left {\r\n  float: left;\r\n  color: #999;\r\n}\r\n  \r\n  .mat-card {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  \r\n  .mat-card2 {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  \r\n  .mat-card-header {\r\n \r\n  font-weight: bold;\r\n  display: inline;\r\n  \r\n}\r\n  \r\n  .mat-card-title  {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: 0px;\r\n  color: rgba(0, 0, 0, 0.836);\r\n  background: rgba(34, 34, 34, 0.13);\r\n  padding: 5px;\r\n}\r\n  \r\n  .mat-card-content {\r\n  margin: 0px;\r\n}\r\n  \r\n  .mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: 5px;\r\n \r\n}\r\n  \r\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n  margin: 0px;\r\n  margin-left: 22px;\r\n}\r\n  \r\n  .mat-expansion-panel {\r\n  background: rgba(255, 254, 254, 0.151);\r\n}\r\n  \r\n  .requirements {\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  \r\n}\r\n  \r\n  .content .description{\r\n  font-size: 20px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n  \r\n  .content .date,.location,.duration{\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n  \r\n  .table{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x:  auto;\r\n  overflow-y:  auto;\r\n}\r\n  \r\n  .mat-card {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjs7RUFHQSxvQkFBb0I7O0VBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0VBQ0Esb0JBQW9COztFQUNwQjtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztFQUVBLDBCQUEwQjs7RUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztFQUVBLGlCQUFpQjs7RUFDakI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0VBSUEsb0JBQW9COztFQUNwQjtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0VBRUEsb0JBQW9COztFQUNwQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0VBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx5RUFBeUU7QUFDM0U7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx5RUFBeUU7QUFDM0U7O0VBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGVBQWU7O0FBRWpCOztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0VBRUE7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztFQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7RUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7RUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7O0FBRXBCOztFQUlBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztFQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UscURBQXFEO0FBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWJvdHRvbSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi8qIENoYXQgY29udGFpbmVycyAqL1xyXG4uY29udGFpbmVyMiB7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXHJcbi5kYXJrZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDowO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xyXG4udGltZS1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuLnRpbWUtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xyXG4gIGJvcmRlcjogLjRweCBzb2xpZCByZ2IoNTksIDU5LCA1OSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLm1hdC1jYXJkMiB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjEyLCAyMTIsIDAuMDQ4KTtcclxuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIFxyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUgIHtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMC4xMyk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiBcclxufVxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbiwgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcclxufVxyXG5cclxuLnJlcXVpcmVtZW50cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW50IC5kZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCAuZGF0ZSwubG9jYXRpb24sLmR1cmF0aW9ue1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogIGF1dG87XHJcbiAgb3ZlcmZsb3cteTogIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button (click)=\"LoadMyMessages()\">get message</button>\r\n<mat-card >\r\n        <div class=\"container2\">\r\n          <span>\r\n            Messaging to {{showTitle()}}\r\n          </span>\r\n        </div>\r\n        <div class=\"container\">\r\n            <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Hello. How are you today?</p>\r\n            <span class=\"time-right\">11:00</span>\r\n          </div>\r\n          \r\n          <div class=\"container darker\">\r\n              <span>{{showTitle()}}</span>\r\n            <p>Hey! I'm fine. Thanks for asking!</p>\r\n            <span class=\"time-left\">11:01</span>\r\n          </div>\r\n          \r\n          <div class=\"container\">\r\n              <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\r\n            <span class=\"time-right\">11:02</span>\r\n          </div>\r\n          \r\n          <div class=\"container darker\">\r\n              <span>{{showTitle()}}</span>\r\n            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\r\n            <span class=\"time-left\">11:05</span>\r\n          </div>\r\n\r\n          <div class=\"container\">\r\n              <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\r\n            <span class=\"time-right\">11:02</span>\r\n          </div>\r\n          \r\n          \r\n\r\n        <form class=\"container-Button\" [formGroup] = \"form\" (ngSubmit) = \"SendMessage()\">    \r\n                <mat-form-field>\r\n                    <input \r\n                        \r\n                        formControlName = \"message\"\r\n                        matInput\r\n                        id=\"message\" \r\n                        type=\"text\" \r\n                        placeholder=\"Message\">\r\n                </mat-form-field> \r\n                <div *ngIf=\" message.touched && message.invalid\" \r\n                class=\"alert alert-danger\">\r\n                <mat-error *ngIf=\"message.errors.required\">null<strong>Required!</strong></mat-error>\r\n            </div>\r\n            <button class=\"right\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">send</button>\r\n        </form>\r\n\r\n</mat-card>"

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
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/models/message.model */ "./src/app/shared/models/message.model.ts");
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var CollabMessagingComponent = /** @class */ (function () {
    function CollabMessagingComponent(userService, collabservice, conversation, router, mem_, formBuilder) {
        this.userService = userService;
        this.collabservice = collabservice;
        this.conversation = conversation;
        this.router = router;
        this.mem_ = mem_;
        this.formBuilder = formBuilder;
        this.sender = this.mem_.sender;
        this.partOf = false;
        this.isOwner = false;
        this.message = new _shared_models_message_model__WEBPACK_IMPORTED_MODULE_1__["Message"]();
    }
    CollabMessagingComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({ message: [this.message.message, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required] });
    };
    //spliting username by @ 
    CollabMessagingComponent.prototype.getName = function (username) {
        var temp = username.substring(0, 2).toUpperCase();
        return temp;
    };
    //Display a title
    CollabMessagingComponent.prototype.showTitle = function () {
        if (this.mem_.mem != null) {
            return this.getName(this.mem_.mem);
        }
        else if (this.mem_.collabId != null) {
            return this.mem_.Title_;
        }
        else
            this.router.navigate(['/home']);
    };
    //send message
    CollabMessagingComponent.prototype.SendMessage = function () {
        if (this.mem_.mem != null) {
            console.log("sending message to " + this.mem_.mem);
            this.sendPersonalMessage();
        }
        else if (this.mem_.collabId != null) {
            console.log("sending message to " + this.mem_.collabId);
            this.SendGroupMessage();
        }
        else
            this.router.navigate(['/home']);
    };
    //sendPersonalMessage()
    CollabMessagingComponent.prototype.sendPersonalMessage = function () {
        var message = this.form.value;
        this.conversation.sendPersonalMessage(message, this.mem_.mem).subscribe(function (message) { return console.log(message); });
    };
    //sendGroud message to collab members
    CollabMessagingComponent.prototype.SendGroupMessage = function () {
        var message = this.form.value;
        this.conversation.sendMessageToCollabGroup(message, this.mem_.collabId).subscribe(function (message) { return console.log(message); });
    };
    //based on user input e.g. collbId od individual, it will load messages
    CollabMessagingComponent.prototype.LoadMyMessages = function () {
        if (this.mem_.mem != null) {
            this.LoadIndividualMessage();
        }
        else if (this.mem_.collabId != null) {
            this.LoadGroupMessage();
        }
        else
            this.router.navigate(['/home']);
    };
    //return participients and messages of current user
    CollabMessagingComponent.prototype.LoadIndividualMessage = function () {
        this.sender = this.mem_.sender;
        this.conversation.LoadOtherUserMessage(0, this.sender).subscribe(function (message) {
            console.log(message);
        });
    };
    //return  collabId and  group messages of current user 
    CollabMessagingComponent.prototype.LoadGroupMessage = function () {
        this.collabID = this.mem_.collabId;
        this.conversation.LoadGroupMessage(0, this.collabID).subscribe(function (message) {
            console.log(message);
        });
    };
    CollabMessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-collab-messaging',
            template: __webpack_require__(/*! ./collab-messaging.component.html */ "./src/app/conversations/collab-messaging/collab-messaging.component.html"),
            styles: [__webpack_require__(/*! ./collab-messaging.component.css */ "./src/app/conversations/collab-messaging/collab-messaging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_2__["ConversationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            src_app_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], CollabMessagingComponent);
    return CollabMessagingComponent;
}());



/***/ }),

/***/ "./src/app/conversations/conversations-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/conversations/conversations-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");





var routes = [
    {
        path: '',
        component: _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__["CollabMessagingComponent"],
    },
    {
        path: 'messenger',
        component: _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_4__["MessengerComponent"]
    },
    {
        path: 'conversations',
        component: _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_3__["CollabMessagingComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/conversations/conversations.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/conversations/conversations.module.ts ***!
  \*******************************************************/
/*! exports provided: ConversationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsModule", function() { return ConversationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversations-routing.module */ "./src/app/conversations/conversations-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collab-messaging/collab-messaging.component */ "./src/app/conversations/collab-messaging/collab-messaging.component.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/conversations/messenger/messenger.component.ts");














//Material Components










var ConversationsModule = /** @class */ (function () {
    function ConversationsModule() {
    }
    ConversationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_collab_messaging_collab_messaging_component__WEBPACK_IMPORTED_MODULE_4__["CollabMessagingComponent"], _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_23__["MessengerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _conversations_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]
        })
    ], ConversationsModule);
    return ConversationsModule;
}());



/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n  }\r\n  .mat-card-avatar {\r\n    background-image: url('/assets/userPhoto.png');\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n}\r\n  .container-bottom {\r\n    float: right;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n  /* Chat containers */\r\n  .container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n}\r\n  /* Chat containers */\r\n  .container2 {\r\n  border: 4px solid #dedede;\r\n  background-color: plum;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n  /* Darker chat container */\r\n  .darker {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n  /* Clear floats */\r\n  .container::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n  .right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\r\n}\r\n  /* Style time text */\r\n  .time-right {\r\n  float: right;\r\n  color: #aaa;\r\n}\r\n  /* Style time text */\r\n  .time-left {\r\n  float: left;\r\n  color: #999;\r\n}\r\n  .mat-card {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  .mat-card2 {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n  .mat-card-header {\r\n \r\n  font-weight: bold;\r\n  display: inline;\r\n  \r\n}\r\n  .mat-card-title  {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: 0px;\r\n  color: rgba(0, 0, 0, 0.836);\r\n  background: rgba(34, 34, 34, 0.13);\r\n  padding: 5px;\r\n}\r\n  .mat-card-content {\r\n  margin: 0px;\r\n}\r\n  .mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: 5px;\r\n \r\n}\r\n  .mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n  margin: 0px;\r\n  margin-left: 22px;\r\n}\r\n  .mat-expansion-panel {\r\n  background: rgba(255, 254, 254, 0.151);\r\n}\r\n  .requirements {\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  \r\n}\r\n  .content .description{\r\n  font-size: 20px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n  .content .date,.location,.duration{\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n  .table{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x:  auto;\r\n  overflow-y:  auto;\r\n}\r\n  .mat-card {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n  .mat-list{\r\n  height: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9tZXNzZW5nZXIvbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSw4Q0FBOEM7SUFDOUMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0VBRUU7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjtFQUdBLG9CQUFvQjtFQUNwQjtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCO0VBQ0Esb0JBQW9CO0VBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7RUFFQSwwQkFBMEI7RUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0VBRUEsaUJBQWlCO0VBQ2pCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0VBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7RUFJQSxvQkFBb0I7RUFDcEI7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0VBRUEsb0JBQW9CO0VBQ3BCO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjtFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMseUVBQXlFO0FBQzNFO0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx5RUFBeUU7QUFDM0U7RUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZUFBZTs7QUFFakI7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkO0VBRUE7RUFDRSxXQUFXO0FBQ2I7RUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7RUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLHNDQUFzQztBQUN4QztFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7QUFFcEI7RUFJQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0VBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7RUFFQTtFQUNFLHFEQUFxRDtBQUN2RDtFQUdBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29udmVyc2F0aW9ucy9tZXNzZW5nZXIvbWVzc2VuZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdXNlclBob3RvLnBuZycpO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59IFxyXG5cclxuICAuY29udGFpbmVyLWJvdHRvbSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcblxyXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbi8qIENoYXQgY29udGFpbmVycyAqL1xyXG4uY29udGFpbmVyMiB7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwbHVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogRGFya2VyIGNoYXQgY29udGFpbmVyICovXHJcbi5kYXJrZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgKi9cclxuLmNvbnRhaW5lcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDowO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFN0eWxlIHRpbWUgdGV4dCAqL1xyXG4udGltZS1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuLnRpbWUtbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xyXG4gIGJvcmRlcjogLjRweCBzb2xpZCByZ2IoNTksIDU5LCA1OSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLm1hdC1jYXJkMiB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjEyLCAyMTIsIDAuMDQ4KTtcclxuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIFxyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGUgIHtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MzYpO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMC4xMyk7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZD4ubWF0LWNhcmQtYWN0aW9uczpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiBcclxufVxyXG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbiwgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU0LCAyNTQsIDAuMTUxKTtcclxufVxyXG5cclxuLnJlcXVpcmVtZW50cyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi5jb250ZW50IC5kZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCAuZGF0ZSwubG9jYXRpb24sLmR1cmF0aW9ue1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogIGF1dG87XHJcbiAgb3ZlcmZsb3cteTogIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG4ubWF0LWxpc3R7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.html":
/*!******************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullpage\">\r\n\r\n</div>\r\n\r\n<mat-card > \r\n      <mat-list >  \r\n          <mat-list-item *ngFor=\"let contact of ContactList\">\r\n            <mat-icon mat-list-icon routerLink=\"/user/{{contact}}\">person</mat-icon>\r\n            <button (click)=\"PersonalmessagePageLink(contact)\">{{extractFirstNameAndLastName(contact)}} </button>\r\n           \r\n          </mat-list-item> \r\n      </mat-list>\r\n</mat-card>\r\n\r\n\r\n                                    \r\n                                      "

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.ts ***!
  \****************************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(collab, userservice, router) {
        this.collab = collab;
        this.userservice = userservice;
        this.router = router;
        //place holder for myCollabs
        this.gropuMess = new Array();
        this.ContactList = new Array();
        this.user = null;
    }
    MessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.getUserdetails().subscribe(function (data) {
            _this.user = data.username;
        });
        this.collab.myCollabs().subscribe(function (data) {
            //console.log(data[1].participants[0]);
            for (var i = 0; i < data.length - 1; i++) {
                if (data[i]._id != null && data[i]._id["$oid"] != null) {
                    _this.gropuMess.push(data[i]);
                }
                //making a personal contact-list
                else if (data[i].participants.length != 0 && data[i].messages.length > 0) {
                    for (var item = 0; item < data[i].participants.length; item++) {
                        //removing user-himself from contact list
                        if (data[i].participants[item] != _this.user) {
                            _this.ContactList.push(data[i].participants[item]);
                        }
                    }
                    //remove duplicate if any exist
                    _this.ContactList = _this.remove_duplicates(_this.ContactList);
                    //console.log(this.ContactList) 
                }
                else
                    return 0;
            }
        });
    };
    //remove duplicate contact
    MessengerComponent.prototype.remove_duplicates = function (arr) {
        var obj = {};
        var ret_arr = [];
        for (var i = 0; i < arr.length; i++) {
            obj[arr[i]] = true;
        }
        for (var key in obj) {
            ret_arr.push(key);
        }
        return ret_arr;
    };
    MessengerComponent.prototype.extractFirstNameAndLastName = function (username) {
        var temp = username.split("@");
        return temp[0];
    };
    MessengerComponent.prototype.PersonalmessagePageLink = function (contact) {
        console.log(contact);
        this.mem = contact;
        this.router.navigate(['/conversations']);
    };
    MessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/conversations/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/conversations/messenger/messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"],
            src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MessengerComponent);
    return MessengerComponent;
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



/***/ })

}]);
//# sourceMappingURL=conversations-conversations-module.js.map