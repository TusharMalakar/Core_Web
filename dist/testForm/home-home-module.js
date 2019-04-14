(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 800px;\n    margin: auto;\n    padding: 0px;\n    height: 100%;\n}\n\n.mat-card-header {\n    color: rgba(0, 0, 0, .54);\n    background: rgba(0, 0, 0, 0.062);\n    font-weight: bold;\n    padding: 0px;\n}\n\n.mat-card-title  {\n    margin-left: 5px;\n    margin-top: 10px;\n}\n\n.mat-card-content {\n    margin: 0px;\n}\n\n.mat-card>.mat-card-actions:last-child {\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.description {\n    margin-left: 10px;\n}\n\n.table{\n    width: 100%;\n    height: 100%;\n    overflow-x:  auto;\n    overflow-y:  auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29sbGFiLWNhcmQvY29sbGFiLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZSAge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbi50YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogIGF1dG87XG4gICAgb3ZlcmZsb3cteTogIGF1dG87XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title> <h4>{{collabData.title}}</h4> </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <mat-accordion>\n        <h4 class=\"description\"> {{ collabData.description }} </h4>\n        \n        \n        <!-- Event Binding: In this case the event is (opened) -->\n        <mat-expansion-panel \n                       (opened)=\"panelOpenState = true && makeTable()\"\n                       (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Skills/Classes Wanted.\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n          </mat-expansion-panel-header>\n\n            <ng-container class=\"table-container\">\n              <div class=\"table\">\n                <collab-table [table] = \"table\" [xAxisReq] = \"xAxisReq\"></collab-table>\n              </div>\n            </ng-container>\n          \n          \n        </mat-expansion-panel>\n    </mat-accordion>\n    \n  </mat-card-content>\n\n  <mat-card-actions>\n        <button mat-raised-button color = \"primary\"> Join </button>\n        <button mat-raised-button color = \"primary\"> Leave </button>\n        <button mat-raised-button color = \"primary\"> Delete</button>\n  </mat-card-actions>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.ts ***!
  \***********************************************************/
/*! exports provided: CollabCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabCardComponent", function() { return CollabCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/tableBuilder.model */ "./src/app/shared/models/tableBuilder.model.ts");





var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent(userService) {
        this.userService = userService;
        this.table = [];
        this.xAxisReq = [];
    }
    CollabCardComponent.prototype.ngOnInit = function () {
    };
    /*
    Function that will build our table.
    async: Will allow us to do await functions
    */
    CollabCardComponent.prototype.makeTable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var yAxisUsers, _a, _i, yAxisUsers_1, y, tableRow;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //Fuction will stop here until function getAllRequred returns
                        _a = this;
                        return [4 /*yield*/, this.getAllRequired()];
                    case 1:
                        //Fuction will stop here until function getAllRequred returns
                        _a.xAxisReq = _b.sent();
                        //Will members of the collaboration
                        yAxisUsers = this.collabData.members;
                        _i = 0, yAxisUsers_1 = yAxisUsers;
                        _b.label = 2;
                    case 2:
                        if (!(_i < yAxisUsers_1.length)) return [3 /*break*/, 5];
                        y = yAxisUsers_1[_i];
                        return [4 /*yield*/, this.checkIfKnown(y, this.xAxisReq)];
                    case 3:
                        tableRow = _b.sent();
                        this.table.push(tableRow);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //WIll check if a user knows skill or class, from the list of classes and skills that a user knows
    CollabCardComponent.prototype.checkIfKnown = function (userName, listOfRequired) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tmp, knownByUser, _i, listOfRequired_1, x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tmp = null;
                        tmp = new src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_4__["TableBuilder"](userName);
                        _i = 0, listOfRequired_1 = listOfRequired;
                        _a.label = 1;
                    case 1:
                        if (!(_i < listOfRequired_1.length)) return [3 /*break*/, 4];
                        x = listOfRequired_1[_i];
                        //Will return both skills and classes in a single array
                        return [4 /*yield*/, this.userService.getUserSkillsAndClasses(userName).then(function (result) {
                                knownByUser = result;
                            })];
                    case 2:
                        //Will return both skills and classes in a single array
                        _a.sent();
                        if (knownByUser.includes(x)) {
                            //console.log(userName , " knows ", x);
                            tmp.setKnown(x, true);
                        }
                        else {
                            //console.log(userName , " doesn't know ", x);
                            tmp.setKnown(x, false);
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, tmp];
                }
            });
        });
    };
    CollabCardComponent.prototype.getAllRequired = function () {
        var xAxisReq = [];
        xAxisReq = (this.collabData.skills).concat(this.collabData.classes);
        return xAxisReq;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_2__["CollabModel"])
    ], CollabCardComponent.prototype, "collabData", void 0);
    CollabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'collab-card',
            template: __webpack_require__(/*! ./collab-card.component.html */ "./src/app/home/collab-card/collab-card.component.html"),
            styles: [__webpack_require__(/*! ./collab-card.component.css */ "./src/app/home/collab-card/collab-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CollabCardComponent);
    return CollabCardComponent;
}());



/***/ }),

/***/ "./src/app/home/collab-list/home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    padding: 16px;\n    text-align: center;\n  \n  }\n\n  .collab {\n    margin-top:25px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1saXN0L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuXG4gIC5jb2xsYWIge1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <mat-tab-group>\n\n      <mat-tab label=\"All Collabs\">\n        <ng-template matTabContent>\n          <ng-container *ngFor = \"let collab of collabData\">\n            <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n            </div>      \n          </ng-container>\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"Recommended Collabs\">\n        <ng-template matTabContent>\n            Recommended Collabs\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"My Collabs\">\n        <ng-template matTabContent>\n            My Collabs\n            \n\n        </ng-template>\n      </mat-tab>\n\n   </mat-tab-group>\n     \n          \n            \n"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/home/collab-list/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, collabService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.collabService = collabService;
        this.collabService.allCollabs().subscribe(function (data) { return _this.collabData = data; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.userDetails = function () {
        var _this = this;
        this.userService.getUserdetails().subscribe(function (userData) { return _this.userData = userData; });
    };
    HomeComponent.prototype.userPicture = function () {
        ///user/profilePicture
        this.userService.getPicture().subscribe(function (data) {
            // BitmapImage image = new BitmapImage();
            // image.SetSource(stream);  
        });
    };
    // return array of JSON OBJECTS
    HomeComponent.prototype.collabDetails = function () {
        this.collabService.collabDetails().subscribe(function (data) {
        });
    };
    HomeComponent.prototype.activeCollabs = function () {
        this.collabService.activeCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.myCollabs = function () {
        this.collabService.myCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/collab-list/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/collab-list/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__["CollabsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table { \n    width: 100%; \n    border-collapse: collapse; \n  }\n  /* Zebra striping */\n  tr:nth-of-type(odd) { \n    background: #eee; \n  }\n  th { \n    background: #333; \n    color: white; \n    font-weight: bold; \n  }\n  td, th { \n    padding: 6px; \n    border: 1px solid #ccc; \n    text-align: left; \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0EsbUJBQW1CO0VBQ25CO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi10YWJsZS9jb2xsYWItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxuICB9XG4gIC8qIFplYnJhIHN0cmlwaW5nICovXG4gIHRyOm50aC1vZi10eXBlKG9kZCkgeyBcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcbiAgfVxuICB0aCB7IFxuICAgIGJhY2tncm91bmQ6ICMzMzM7IFxuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICB9XG4gIHRkLCB0aCB7IFxuICAgIHBhZGRpbmc6IDZweDsgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table>\n    <tr *ngFor = \"let row of table\">\n      <td>{{ row.userName}}</td>\n      <td *ngFor = \"let req of row.list\" [style.background-color] = \"req.knows ? '#ccffcc' : '#ffcccc'\"> {{ req.nameOf }} </td>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.ts ***!
  \*************************************************************/
/*! exports provided: CollabTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabTableComponent", function() { return CollabTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollabTableComponent = /** @class */ (function () {
    function CollabTableComponent() {
        this.table = [];
        this.xAxisReq = [];
    }
    CollabTableComponent.prototype.ngOnInit = function () {
        console.log(this.xAxisReq);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CollabTableComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('xAxisReq'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CollabTableComponent.prototype, "xAxisReq", void 0);
    CollabTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'collab-table',
            template: __webpack_require__(/*! ./collab-table.component.html */ "./src/app/home/collab-table/collab-table.component.html"),
            styles: [__webpack_require__(/*! ./collab-table.component.css */ "./src/app/home/collab-table/collab-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollabTableComponent);
    return CollabTableComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    {
        path: '',
        component: _collab_list_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "collabinfo",
        component: _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_1__["CollabCardComponent"]
    },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./collab-table/collab-table.component */ "./src/app/home/collab-table/collab-table.component.ts");








//Material Components







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_13__["CollabCardComponent"], _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_14__["CollabTableComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollDispatchModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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
    //messaging/myConvos
    CollabsService.prototype.myCollabs = function () {
        return this.http.get(this.rootUrl + "/messaging/myConvos");
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

/***/ "./src/app/shared/models/collab.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/collab.model.ts ***!
  \***********************************************/
/*! exports provided: CollabModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollabModel", function() { return CollabModel; });
var CollabModel = /** @class */ (function () {
    function CollabModel() {
    }
    return CollabModel;
}());



/***/ }),

/***/ "./src/app/shared/models/tableBuilder.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/tableBuilder.model.ts ***!
  \*****************************************************/
/*! exports provided: TableBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBuilder", function() { return TableBuilder; });
var TableBuilder = /** @class */ (function () {
    function TableBuilder(name) {
        this.userName = name;
        this.list = [];
    }
    TableBuilder.prototype.setKnown = function (nameOf, knowsOf) {
        this.list.push({
            nameOf: nameOf,
            knows: knowsOf
        });
    };
    return TableBuilder;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map