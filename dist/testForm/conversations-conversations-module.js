(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversations-conversations-module"],{

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .container-bottom {\r\n    float: right;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n/* Chat containers */\r\n\r\n\r\n.container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\n/* Chat containers */\r\n\r\n\r\n.container2 {\r\n  border: 4px solid #dedede;\r\n  background-color: plum;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/* Darker chat container */\r\n\r\n\r\n.darker {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n/* Clear floats */\r\n\r\n\r\n.container::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n.right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\r\n}\r\n\r\n\r\n/* Style time text */\r\n\r\n\r\n.time-right {\r\n  float: right;\r\n  color: #aaa;\r\n}\r\n\r\n\r\n/* Style time text */\r\n\r\n\r\n.time-left {\r\n  float: left;\r\n  color: #999;\r\n}\r\n\r\n\r\n.mat-card {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n.mat-card2 {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n.mat-card-header {\r\n \r\n  font-weight: bold;\r\n  display: inline;\r\n  \r\n}\r\n\r\n\r\n.mat-card-title  {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: 0px;\r\n  color: rgba(0, 0, 0, 0.836);\r\n  background: rgba(34, 34, 34, 0.13);\r\n  padding: 5px;\r\n}\r\n\r\n\r\n.mat-card-content {\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: 5px;\r\n \r\n}\r\n\r\n\r\n.mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n  margin: 0px;\r\n  margin-left: 22px;\r\n}\r\n\r\n\r\n.mat-expansion-panel {\r\n  background: rgba(255, 254, 254, 0.151);\r\n}\r\n\r\n\r\n.requirements {\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  \r\n}\r\n\r\n\r\n.content .description{\r\n  font-size: 20px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n.content .date,.location,.duration{\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n\r\n.table{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x:  auto;\r\n  overflow-y:  auto;\r\n}\r\n\r\n\r\n.mat-card {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVyc2F0aW9ucy9jb2xsYWItbWVzc2FnaW5nL2NvbGxhYi1tZXNzYWdpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjs7O0FBR0Esb0JBQW9COzs7QUFDcEI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7O0FBQ0Esb0JBQW9COzs7QUFDcEI7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7O0FBRUEsMEJBQTBCOzs7QUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOzs7QUFFQSxpQkFBaUI7OztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7OztBQUlBLG9CQUFvQjs7O0FBQ3BCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUEsb0JBQW9COzs7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx5RUFBeUU7QUFDM0U7OztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjs7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQiLCJmaWxlIjoic3JjL2FwcC9jb252ZXJzYXRpb25zL2NvbGxhYi1tZXNzYWdpbmcvY29sbGFiLW1lc3NhZ2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbnRhaW5lci1ib3R0b20ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuLyogQ2hhdCBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lcjIge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIERhcmtlciBjaGF0IGNvbnRhaW5lciAqL1xyXG4uZGFya2VyIHtcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuLnRpbWUtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLyogU3R5bGUgdGltZSB0ZXh0ICovXHJcbi50aW1lLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjEyLCAyMTIsIDAuMDQ4KTtcclxuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZDIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XHJcbiAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuIFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlICB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gXHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjE1MSk7XHJcbn1cclxuXHJcbi5yZXF1aXJlbWVudHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudCAuZGVzY3JpcHRpb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6ICBhdXRvO1xyXG4gIG92ZXJmbG93LXk6ICBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/conversations/collab-messaging/collab-messaging.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/conversations/collab-messaging/collab-messaging.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"LoadMyMessages()\">get message</button>\n<mat-card >\n        <div class=\"container2\">\n          <span>\n            Messaging to {{showTitle()}}\n          </span>\n        </div>\n        <div class=\"container\">\n            <span class=\"right\">{{showTitle()}}</span>\n            <p class=\"right\">Hello. How are you today?</p>\n            <span class=\"time-right\">11:00</span>\n          </div>\n          \n          <div class=\"container darker\">\n              <span>{{showTitle()}}</span>\n            <p>Hey! I'm fine. Thanks for asking!</p>\n            <span class=\"time-left\">11:01</span>\n          </div>\n          \n          <div class=\"container\">\n              <span class=\"right\">{{showTitle()}}</span>\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\n            <span class=\"time-right\">11:02</span>\n          </div>\n          \n          <div class=\"container darker\">\n              <span>{{showTitle()}}</span>\n            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\n            <span class=\"time-left\">11:05</span>\n          </div>\n\n          <div class=\"container\">\n              <span class=\"right\">{{showTitle()}}</span>\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\n            <span class=\"time-right\">11:02</span>\n          </div>\n          \n          \n\n        <form class=\"container-Button\" [formGroup] = \"form\" (ngSubmit) = \"SendMessage()\">    \n                <mat-form-field>\n                    <input \n                        \n                        formControlName = \"message\"\n                        matInput\n                        id=\"message\" \n                        type=\"text\" \n                        placeholder=\"Message\">\n                </mat-form-field> \n                <div *ngIf=\" message.touched && message.invalid\" \n                class=\"alert alert-danger\">\n                <mat-error *ngIf=\"message.errors.required\">null<strong>Required!</strong></mat-error>\n            </div>\n            <button class=\"right\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">send</button>\n        </form>\n\n</mat-card>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnNhdGlvbnMvbWVzc2VuZ2VyL21lc3Nlbmdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/conversations/messenger/messenger.component.html":
/*!******************************************************************!*\
  !*** ./src/app/conversations/messenger/messenger.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  messenger works!\n</p>\n\n<h1>This page will provide all the recipients list that user text at least one time</h1>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessengerComponent = /** @class */ (function () {
    function MessengerComponent() {
    }
    MessengerComponent.prototype.ngOnInit = function () {
    };
    MessengerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/conversations/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./messenger.component.css */ "./src/app/conversations/messenger/messenger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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