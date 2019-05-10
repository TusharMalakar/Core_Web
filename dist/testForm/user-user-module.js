(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/edit-classes/edit-classes.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".example-chip-list {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LWNsYXNzZXMvZWRpdC1jbGFzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtY2xhc3Nlcy9lZGl0LWNsYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"
=======
module.exports = ".example-chip-list {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LWNsYXNzZXMvZWRpdC1jbGFzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtY2xhc3Nlcy9lZGl0LWNsYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-classes/edit-classes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n<mat-form-field class=\"example-chip-list\">\r\n        <mat-chip-list #chipListClasses>\r\n                <mat-chip\r\n                *ngFor = \"let class of classes\"\r\n                [selectable] = \"selectable\"\r\n                [removable] = \"removable\"\r\n                (removed) = \"removeClass(class)\">\r\n                {{ class }}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input \r\n                placeholder=\"New Class...\"\r\n                #classInput\r\n                [formControl]=\"classCtrl\"\r\n                [matAutocomplete]=\"auto2\"\r\n                [matChipInputFor]=\"chipListClasses\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                (matChipInputTokenEnd)=\"addClass($event)\">\r\n                <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\r\n                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\r\n                        {{ class }}\r\n                        </mat-option>\r\n                </mat-autocomplete>\r\n        </mat-chip-list>\r\n</mat-form-field>\r\n<br>\r\n        <button mat-raised-button (click) = \"update()\">Update</button>\r\n<br>\r\n\r\n"
=======
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipListClasses>\n                <mat-chip\n                *ngFor = \"let class of classes\"\n                [selectable] = \"selectable\"\n                [removable] = \"removable\"\n                (removed) = \"removeClass(class)\">\n                {{ class }}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input \n                placeholder=\"New Class...\"\n                #classInput\n                [formControl]=\"classCtrl\"\n                [matAutocomplete]=\"auto2\"\n                [matChipInputFor]=\"chipListClasses\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"addClass($event)\">\n                <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                        {{ class }}\n                        </mat-option>\n                </mat-autocomplete>\n        </mat-chip-list>\n</mat-form-field>\n<br>\n        <button mat-raised-button (click) = \"update()\">Update</button>\n<br>\n\n"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-classes/edit-classes.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.ts ***!
  \*************************************************************/
/*! exports provided: EditClassesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClassesComponent", function() { return EditClassesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var EditClassesComponent = /** @class */ (function () {
    function EditClassesComponent(userService, 
    //Handles the openning/closing of the Dialog
    dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
    }
    EditClassesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classes = this.data.userData['classes'];
        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
    };
    EditClassesComponent.prototype.addClass = function (event) {
        if (!this.matAutocomplete2.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.classes.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.classCtrl.setValue(null);
        }
    };
    EditClassesComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    EditClassesComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    EditClassesComponent.prototype.update = function () {
        this.userService.updateUserclass(this.classes).subscribe(function (result) { console.log(result); });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], EditClassesComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocomplete"])
    ], EditClassesComponent.prototype, "matAutocomplete2", void 0);
    EditClassesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-edit-classes',
            template: __webpack_require__(/*! ./edit-classes.component.html */ "./src/app/user/edit-classes/edit-classes.component.html"),
            styles: [__webpack_require__(/*! ./edit-classes.component.css */ "./src/app/user/edit-classes/edit-classes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditClassesComponent);
    return EditClassesComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".hide_file {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    font-size: 24px;\r\n    width: 100%;\r\n}\r\n\r\n.mat-button {\r\n    border: 1px solid royalblue;\r\n}\r\n\r\n.uploadPic{\r\n    position:relative;\r\n    text-align:center;\r\n    float:left;\r\n    cursor:pointer;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXBpY3R1cmUvZWRpdC1waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtcGljdHVyZS9lZGl0LXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByb3lhbGJsdWU7XHJcbn1cclxuXHJcblxyXG4udXBsb2FkUGlje1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"
=======
module.exports = ".hide_file {\n    position: absolute;\n    z-index: 1000;\n    opacity: 0;\n    cursor: pointer;\n    right: 0;\n    top: 0;\n    height: 100%;\n    font-size: 24px;\n    width: 100%;\n}\n\n.mat-button {\n    border: 1px solid royalblue;\n}\n\n.uploadPic{\n    position:relative;\n    text-align:center;\n    float:left;\n    cursor:pointer;\n    margin-left: 10%;\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXBpY3R1cmUvZWRpdC1waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtcGljdHVyZS9lZGl0LXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2ZpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcm95YWxibHVlO1xufVxuXG5cbi51cGxvYWRQaWN7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICB9XG5cbiAgXG4gICJdfQ== */"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = " <!--Taking picture as input-->\r\n <div class = \"container\">\r\n    <div class=\"uploadPic\">\r\n        <input  type=\"file\" class=\"hide_file\" (change)=\"handleFileInput($event.target.files)\">\r\n        <button mat-flat-button color=\"primary\" >Upload File</button> \r\n    </div>\r\n    <button class=\"uploadButton\" mat-button color=\"primary\" (click)=\"uploadFileToActivity()\">submit</button>\r\n</div>\r\n"
=======
module.exports = " <!--Taking picture as input-->\n <div class = \"container\">\n    <div class=\"uploadPic\">\n        <input  type=\"file\" class=\"hide_file\" (change)=\"handleFileInput($event.target.files)\">\n        <button mat-flat-button color=\"primary\" >Upload File</button> \n    </div>\n    <button class=\"uploadButton\" mat-button color=\"primary\" (click)=\"uploadFileToActivity()\">submit</button>\n</div>\n"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.ts ***!
  \*************************************************************/
/*! exports provided: EditPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPictureComponent", function() { return EditPictureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var EditPictureComponent = /** @class */ (function () {
    function EditPictureComponent(userService, dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        //default variable for selected file.
        this.fileToUpload = null;
        this.submitPressed = false;
    }
    EditPictureComponent.prototype.ngOnInit = function () {
    };
    //function which you use in (change)-event of your file input tag:
    EditPictureComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    EditPictureComponent.prototype.uploadFileToActivity = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.uploadProfilePicture(this.fileToUpload).subscribe(function (data) {
                            console.log(data);
                        })
                        //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
                        //     // do something, if upload success
                        //     }, error => {
                        //       console.log(error);
                        //     });
                    ];
                    case 1:
                        _a.sent();
                        //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
                        //     // do something, if upload success
                        //     }, error => {
                        //       console.log(error);
                        //     });
                        this.submitPressed = true;
                        this.dialogRef.close(this.submitPressed);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditPictureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-picture',
            template: __webpack_require__(/*! ./edit-picture.component.html */ "./src/app/user/edit-picture/edit-picture.component.html"),
            styles: [__webpack_require__(/*! ./edit-picture.component.css */ "./src/app/user/edit-picture/edit-picture.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditPictureComponent);
    return EditPictureComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".example-chip-list {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"
=======
module.exports = ".example-chip-list {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n<mat-form-field class=\"example-chip-list\">\r\n    <mat-chip-list #chipListSkills>\r\n            <mat-chip\r\n            *ngFor=\"let skill of skills\"\r\n            [selectable]=\"selectable\"\r\n            [removable]=\"removable\"\r\n            (removed)=\"removeSkill(skill)\">\r\n            {{ skill }}\r\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n            placeholder=\"New Skill...\"\r\n            #skillInput\r\n            [formControl]=\"skillCtrl\"\r\n            [matAutocomplete]=\"auto\"\r\n            [matChipInputFor]=\"chipListSkills\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n            (matChipInputTokenEnd)=\"addSkill($event)\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\r\n                    <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\r\n                    {{ skill }}\r\n                    </mat-option>\r\n            </mat-autocomplete>\r\n    </mat-chip-list>             \r\n</mat-form-field>\r\n<br>\r\n  <button mat-raised-button (click) = \"update()\">Update</button>\r\n<br>\r\n"
=======
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipListSkills>\n            <mat-chip\n            *ngFor=\"let skill of skills\"\n            [selectable]=\"selectable\"\n            [removable]=\"removable\"\n            (removed)=\"removeSkill(skill)\">\n            {{ skill }}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n            </mat-chip>\n            <input\n            placeholder=\"New Skill...\"\n            #skillInput\n            [formControl]=\"skillCtrl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipListSkills\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"addOnBlur\"\n            (matChipInputTokenEnd)=\"addSkill($event)\">\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                    <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                    {{ skill }}\n                    </mat-option>\n            </mat-autocomplete>\n    </mat-chip-list>             \n</mat-form-field>\n<br>\n  <button mat-raised-button (click) = \"update()\">Update</button>\n<br>\n"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.ts ***!
  \***********************************************************/
/*! exports provided: EditSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSkillsComponent", function() { return EditSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var EditSkillsComponent = /** @class */ (function () {
    function EditSkillsComponent(userService, collabService, dialogRef, data) {
        this.userService = userService;
        this.collabService = collabService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
    }
    EditSkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skills = this.data.userData['skills'];
        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
    };
    EditSkillsComponent.prototype.addSkill = function (event) {
        if (!this.matAutocomplete1.isOpen) {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim()) {
                this.skills.push(value.trim());
            }
            if (input) {
                input.value = '';
            }
            this.skillCtrl.setValue(null);
        }
    };
    EditSkillsComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    EditSkillsComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    EditSkillsComponent.prototype.update = function () {
        this.userService.updateUserSkills(this.skills).subscribe(function (result) { console.log(result); });
        this.dialogRef.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditSkillsComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], EditSkillsComponent.prototype, "matAutocomplete1", void 0);
    EditSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-skills',
            template: __webpack_require__(/*! ./edit-skills.component.html */ "./src/app/user/edit-skills/edit-skills.component.html"),
            styles: [__webpack_require__(/*! ./edit-skills.component.css */ "./src/app/user/edit-skills/edit-skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditSkillsComponent);
    return EditSkillsComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".mat-form-field {\r\n    width: 95%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn0iXX0= */"
=======
module.exports = ".mat-form-field {\n    width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogOTUlO1xufSJdfQ== */"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n    <div class = \"container\">\r\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\r\n\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['name']\" name = \"username\" id = \"username\" type = \"text\" class = \"form-control\"\r\n                    #username = \"ngModel\" matInput placeholder = \"User Name...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['github']\" name = \"github\" id = \"github\" type = \"text\" class = \"form-control\"\r\n                    #github = \"ngModel\" matInput placeholder = \"Github...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['linkedin']\" name = \"linkedin\" id = \"linkedin\" type = \"text\" class = \"form-control\"\r\n                    #linkedin = \"ngModel\" matInput placeholder = \"LinkedIn...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <button mat-raised-button>Update</button>\r\n            <br>\r\n        </form>\r\n      </div>\r\n      \r\n"
=======
module.exports = "<h2 mat-dialog-title> Update User Details </h2>\n    <div class = \"container\">\n        <!-- Template Driven Form: Angular uses these fields and apply a form-level directive to the form, craeting\n                                    a FormGroup and linking it to the form.\n                [(ngModel)] two-way(bi-directional) binding to allow for sync of form fields and view model\n                controller: data, which was passed down from user-page component, of type UserModel will control the fields\n        -->\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\n        \n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['name']\" name = \"username\" id = \"username\" type = \"text\" class = \"form-control\"\n                    #username = \"ngModel\" matInput placeholder = \"User Name...\" required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['github']\" name = \"github\" id = \"github\" type = \"text\" class = \"form-control\"\n                    #github = \"ngModel\" matInput placeholder = \"Github...\" required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = \"data.userData['linkedin']\" name = \"linkedin\" id = \"linkedin\" type = \"text\" class = \"form-control\"\n                    #linkedin = \"ngModel\" matInput placeholder = \"LinkedIn...\" required>\n            </mat-form-field>\n            <br>\n            <button mat-raised-button>Update</button>\n            <br>\n        </form>\n      </div>\n      \n"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditUserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserFormComponent", function() { return EditUserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var EditUserFormComponent = /** @class */ (function () {
<<<<<<< HEAD
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Constructor that will create an instance of EditUserFormComponent
    *        and allow us to inject our dependencies; services that will be needed in the component
    *
    *	@param[userService]  ,  service that will handle both retrival and updating user data via http requests
    *	@param[dialogRef]    ,  handles the openning/closing of the Dialog
    *	@param[data]         ,  handles passing of data from/to component opening the dialog
    *	@return nothing
    */
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
    function EditUserFormComponent(userService, _formBuilder, 
    //Handles the openning/closing of the Dialog
    dialogRef, 
    //Handles passing of data from/to component opening the dialog
    data) {
        this.userService = userService;
        this._formBuilder = _formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
    }
<<<<<<< HEAD
    EditUserFormComponent.prototype.ngOnInit = function () {
    };
    EditUserFormComponent.prototype.update = function (userData) {
        this.userService.updateUserProfile(userData).subscribe(function (result) { console.log(result); });
=======
    EditUserFormComponent.prototype.ngOnInit = function () { };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will call the UserService to update user details, once thats done return to UserPageComponent
    *
    *	@param[userData]  ,  UserModel that will hold the fields that will be updated on the database
    *	@return nothing
    */
    EditUserFormComponent.prototype.update = function (userData) {
        //User userService to make an http request to update the fields specified on the Template Driven Form
        this.userService.updateUserProfile(userData).subscribe(function (result) { console.log(result); });
        //Will close the dialog and go back to the UserPageComponent
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        this.dialogRef.close();
    };
    EditUserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-user-form',
            template: __webpack_require__(/*! ./edit-user-form.component.html */ "./src/app/user/edit-user-form/edit-user-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-user-form.component.css */ "./src/app/user/edit-user-form/edit-user-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], EditUserFormComponent);
    return EditUserFormComponent;
}());



/***/ }),

/***/ "./src/app/user/user-page/user-page.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".usercard1 {\r\n  margin-top: 30px;\r\n  padding: 0px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.mat-card-avatar {\r\n  background-image: url('/assets/userPhoto.png');\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.mat-card-actions {\r\n  display: flex;\r\n}\r\n\r\n.list-header-title {\r\ncolor: rgba(0, 0, 0, .54);\r\nbackground: rgba(0, 0, 0, 0.062);\r\nfont-weight: bold;\r\npadding: 0px;\r\n\r\n}\r\n\r\n.mat-card-header {\r\n  padding-left: 10px;\r\n  padding-top: 10px; \r\n}\r\n\r\n.mat-raised-button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.usercard2 {\r\nmargin-top: 30px;\r\ncolor: rgba(0, 0, 0, .54);\r\nbackground: rgba(0, 0, 0, 0.062);\r\nheight: 86.5%;\r\npadding-bottom: 25px;\r\nborder-radius: 5px;\r\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.viewport {\r\nwidth: 100%;\r\nheight: 100%;\r\nmargin-left: 40px;\r\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.cdk-virtual-scroll-viewport {\r\nheight: 70%;\r\nmargin: 0px;\r\nbackground-color: white;\r\n\r\n}\r\n\r\n.example-form .mat-form-field {\r\nmargin: 0px;\r\n}\r\n\r\n.mat-list {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.grid-container {\r\ngrid: auto-flow / 1fr;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.grid-search {\r\ngrid-area: grid-search;\r\nmargin-left: 25px;\r\n\r\n}\r\n\r\n.grid-item {\r\ngrid-area: grid-item;\r\nheight: 100%;\r\nmargin-left: 25px;\r\nmargin-right: 25px;\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.mat-chip-list {\r\nmargin: 1px;\r\n}\r\n\r\n.example-form {\r\nmin-width: 150px;\r\nmax-width: 500px;\r\nwidth: 100%;\r\n}\r\n\r\n.example-full-width {\r\nwidth: 80%;\r\nmargin-top: 15px;\r\nmargin-bottom: 15px;\r\nbackground: rgba(255, 255, 255, 0.671);\r\nborder-radius: 15px;\r\n}\r\n\r\n.wrapper {\r\ndisplay:inline-block;\r\nmargin-top: 10px;\r\nmargin-bottom: 15px;\r\nheight: 30px;\r\n}\r\n\r\ninput {\r\n    background-color: white;\r\n    border: 3;\r\n    width: 200px;\r\n    height: 30px;\r\n}\r\n\r\nbutton {\r\n    \r\n    border: solid black 1px;\r\n    width: 100px;\r\n    height: 38px;\r\n}\r\n\r\n.mat-flat-button  {\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: 10px; \r\n}\r\n\r\n.uploadButton {\r\n  height: 38px;\r\n}\r\n\r\n.middle {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.containerPic:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n.containerPic:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.image-background {\r\n  background: #555555;\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.containerPic {\r\n  position: relative;\r\n}\r\n\r\n.mat-card-image {\r\nmargin: 0px;\r\nmargin-left: 8.099%;\r\nmargin-right: 10%;\r\ndisplay: block;\r\nheight: 490px;\r\nmax-height: 500px;\r\nmax-width: 85%;\r\ntransition: .5s ease;\r\n-webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\nopacity: 1;\r\n}\r\n\r\n.mat-grid-tile {\r\n  overflow: unset;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLFlBQVk7O0FBRVo7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQTtBQUNBLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7O0FBRWpCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixtQ0FBMkI7UUFBM0IsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVjs7QUFHQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyY2FyZDEge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdXNlclBob3RvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXItdGl0bGUge1xyXG5jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnBhZGRpbmc6IDBweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi51c2VyY2FyZDIge1xyXG5tYXJnaW4tdG9wOiAzMHB4O1xyXG5jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcclxuaGVpZ2h0OiA4Ni41JTtcclxucGFkZGluZy1ib3R0b206IDI1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnZpZXdwb3J0IHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxubWFyZ2luLWxlZnQ6IDQwcHg7XHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG5oZWlnaHQ6IDcwJTtcclxubWFyZ2luOiAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSAubWF0LWZvcm0tZmllbGQge1xyXG5tYXJnaW46IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWxpc3Qge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG5ncmlkOiBhdXRvLWZsb3cgLyAxZnI7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkLXNlYXJjaCB7XHJcbmdyaWQtYXJlYTogZ3JpZC1zZWFyY2g7XHJcbm1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cclxufVxyXG4uZ3JpZC1pdGVtIHtcclxuZ3JpZC1hcmVhOiBncmlkLWl0ZW07XHJcbmhlaWdodDogMTAwJTtcclxubWFyZ2luLWxlZnQ6IDI1cHg7XHJcbm1hcmdpbi1yaWdodDogMjVweDtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNoaXAtbGlzdCB7XHJcbm1hcmdpbjogMXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxubWluLXdpZHRoOiAxNTBweDtcclxubWF4LXdpZHRoOiA1MDBweDtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG53aWR0aDogODAlO1xyXG5tYXJnaW4tdG9wOiAxNXB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKTtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxuaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIFxyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b24gIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG59XHJcblxyXG5cclxuXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJQaWM6aG92ZXIgLmltYWdlIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jb250YWluZXJQaWM6aG92ZXIgLm1pZGRsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5pbWFnZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1NTU1O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lclBpYyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxubWFyZ2luOiAwcHg7XHJcbm1hcmdpbi1sZWZ0OiA4LjA5OSU7XHJcbm1hcmdpbi1yaWdodDogMTAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxuaGVpZ2h0OiA0OTBweDtcclxubWF4LWhlaWdodDogNTAwcHg7XHJcbm1heC13aWR0aDogODUlO1xyXG50cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gIG92ZXJmbG93OiB1bnNldDtcclxufVxyXG4iXX0= */"
=======
module.exports = ".usercard1 {\n  margin-top: 30px;\n  padding: 0px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mat-card-avatar {\n  background-image: url('/assets/userPhoto.png');\n  background-size: cover;\n\n}\n\n.mat-card-actions {\n  display: flex;\n}\n\n.list-header-title {\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nfont-weight: bold;\npadding: 0px;\n\n}\n\n.mat-card-header {\n  padding-left: 10px;\n  padding-top: 10px; \n}\n\n.mat-raised-button {\n  width: 100%;\n  height: 100%;\n}\n\n.usercard2 {\nmargin-top: 30px;\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nheight: 86.5%;\npadding-bottom: 25px;\nborder-radius: 5px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.viewport {\nwidth: 100%;\nheight: 100%;\nmargin-left: 40px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.cdk-virtual-scroll-viewport {\nheight: 70%;\nmargin: 0px;\nbackground-color: white;\n\n}\n\n.example-form .mat-form-field {\nmargin: 0px;\n}\n\n.mat-list {\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-container {\ngrid: auto-flow / 1fr;\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-search {\ngrid-area: grid-search;\nmargin-left: 25px;\n\n}\n\n.grid-item {\ngrid-area: grid-item;\nheight: 100%;\nmargin-left: 25px;\nmargin-right: 25px;\nmargin-bottom: 0px;\n}\n\n.mat-chip-list {\nmargin: 1px;\n}\n\n.example-form {\nmin-width: 150px;\nmax-width: 500px;\nwidth: 100%;\n}\n\n.example-full-width {\nwidth: 80%;\nmargin-top: 15px;\nmargin-bottom: 15px;\nbackground: rgba(255, 255, 255, 0.671);\nborder-radius: 15px;\n}\n\n.wrapper {\ndisplay:inline-block;\nmargin-top: 10px;\nmargin-bottom: 15px;\nheight: 30px;\n}\n\ninput {\n    background-color: white;\n    border: 3;\n    width: 200px;\n    height: 30px;\n}\n\nbutton {\n    \n    border: solid black 1px;\n    width: 100px;\n    height: 38px;\n}\n\n.mat-flat-button  {\n  width: auto;\n  margin-left: auto;\n  margin-right: 10px; \n}\n\n.uploadButton {\n  height: 38px;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.containerPic:hover .image {\n  opacity: 0.3;\n}\n\n.containerPic:hover .middle {\n  opacity: 1;\n}\n\n.image-background {\n  background: #555555;\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.containerPic {\n  position: relative;\n}\n\n.mat-card-image {\nmargin: 0px;\nmargin-left: 8.099%;\nmargin-right: 10%;\ndisplay: block;\nheight: 490px;\nmax-height: 500px;\nmax-width: 85%;\ntransition: .5s ease;\n-webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\nopacity: 1;\n}\n\n.mat-grid-tile {\n  overflow: unset;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLFlBQVk7O0FBRVo7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQTtBQUNBLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7O0FBRWpCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixtQ0FBMkI7UUFBM0IsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVjs7QUFHQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyY2FyZDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLm1hdC1jYXJkLWF2YXRhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91c2VyUGhvdG8ucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbn1cbi5tYXQtY2FyZC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxpc3QtaGVhZGVyLXRpdGxlIHtcbmNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucGFkZGluZzogMHB4O1xuXG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyBcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG5cbi51c2VyY2FyZDIge1xubWFyZ2luLXRvcDogMzBweDtcbmNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcbmhlaWdodDogODYuNSU7XG5wYWRkaW5nLWJvdHRvbTogMjVweDtcbmJvcmRlci1yYWRpdXM6IDVweDtcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi52aWV3cG9ydCB7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbm1hcmdpbi1sZWZ0OiA0MHB4O1xuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG5oZWlnaHQ6IDcwJTtcbm1hcmdpbjogMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbn1cblxuLmV4YW1wbGUtZm9ybSAubWF0LWZvcm0tZmllbGQge1xubWFyZ2luOiAwcHg7XG59XG5cblxuXG4ubWF0LWxpc3Qge1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG59XG5cbi5ncmlkLWNvbnRhaW5lciB7XG5ncmlkOiBhdXRvLWZsb3cgLyAxZnI7XG53aWR0aDogMTAwJTtcbmhlaWdodDogMTAwJTtcbn1cblxuLmdyaWQtc2VhcmNoIHtcbmdyaWQtYXJlYTogZ3JpZC1zZWFyY2g7XG5tYXJnaW4tbGVmdDogMjVweDtcblxufVxuLmdyaWQtaXRlbSB7XG5ncmlkLWFyZWE6IGdyaWQtaXRlbTtcbmhlaWdodDogMTAwJTtcbm1hcmdpbi1sZWZ0OiAyNXB4O1xubWFyZ2luLXJpZ2h0OiAyNXB4O1xubWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWF0LWNoaXAtbGlzdCB7XG5tYXJnaW46IDFweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG5taW4td2lkdGg6IDE1MHB4O1xubWF4LXdpZHRoOiA1MDBweDtcbndpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbndpZHRoOiA4MCU7XG5tYXJnaW4tdG9wOiAxNXB4O1xubWFyZ2luLWJvdHRvbTogMTVweDtcbmJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NzEpO1xuYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLndyYXBwZXIge1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG5tYXJnaW4tdG9wOiAxMHB4O1xubWFyZ2luLWJvdHRvbTogMTVweDtcbmhlaWdodDogMzBweDtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG5idXR0b24ge1xuICAgIFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG5cbi5tYXQtZmxhdC1idXR0b24gIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxufVxuXG5cblxuLnVwbG9hZEJ1dHRvbiB7XG4gIGhlaWdodDogMzhweDtcbn1cblxuLm1pZGRsZSB7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lclBpYzpob3ZlciAuaW1hZ2Uge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5jb250YWluZXJQaWM6aG92ZXIgLm1pZGRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLmltYWdlLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjNTU1NTU1O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyUGljIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5tYXQtY2FyZC1pbWFnZSB7XG5tYXJnaW46IDBweDtcbm1hcmdpbi1sZWZ0OiA4LjA5OSU7XG5tYXJnaW4tcmlnaHQ6IDEwJTtcbmRpc3BsYXk6IGJsb2NrO1xuaGVpZ2h0OiA0OTBweDtcbm1heC1oZWlnaHQ6IDUwMHB4O1xubWF4LXdpZHRoOiA4NSU7XG50cmFuc2l0aW9uOiAuNXMgZWFzZTtcbmJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbm9wYWNpdHk6IDE7XG59XG5cblxuLm1hdC1ncmlkLXRpbGUge1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG4iXX0= */"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<!--\r\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\r\n  fxLayout = \"row\"         :  If ;using big screens, display data in rows\r\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\r\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\r\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\r\n-->\r\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n        <mat-card class=\"usercard1\">\r\n          \r\n                <mat-card-header class=\"list-header-title\">\r\n\r\n                    <div mat-card-avatar></div>\r\n                      <mat-card-title>{{ userData?.name }}</mat-card-title>\r\n                      <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\r\n                      <button mat-flat-button color=\"primary\" (click) = \"openDialog1()\" *ngIf=\"canEdit\">Edit</button>\r\n              \r\n                </mat-card-header>  \r\n\r\n              \r\n                <div class=\"containerPic\">\r\n                  <div class=\"image-background\">\r\n                      <div class=\"image-container\">\r\n                          <img mat-card-image [src]=\"imageToShow\" \r\n                          alt=\"Image not found\" onerror=\"this.onerror=null; this.src = 'assets/userPhoto.png';\"\r\n                           class=\"image\">\r\n                          </div> \r\n                          <div class=\"middle\"  *ngIf=\"canEdit\">\r\n                            <button mat-raised-button class=\"text\" (click) = \"openDialog4()\">Change Picture</button>\r\n                      </div>\r\n                  </div>  \r\n                </div>\r\n\r\n                <!--img mat-card-image -->\r\n                <mat-card-content>\r\n                \r\n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\r\n                    <mat-grid-tile>\r\n                          <button mat-raised-button color=\"warm\" (click) = \"onNavigateGithub()\" >{{ userData?.github }}</button>\r\n                    </mat-grid-tile>\r\n                    \r\n                    <mat-grid-tile>\r\n                        <button mat-raised-button color=\"primary\" (click) = \"onNavigateLinkedIn()\">{{ userData?.linkedin }}</button>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n\r\n              </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n      <div class=\"usercard2\">\r\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\r\n          <!-- Will hold class list -->\r\n            <mat-grid-tile>\r\n            <div class =\"grid-container\">  \r\n              <div class = \"grid-search\">\r\n                  <div class=\"wrapper\">\r\n                      <button (click) = \"openDialog2()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class = \"grid-item\">\r\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\r\n                      <mat-chip-list>\r\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\r\n                          {{ class }}\r\n                        </mat-chip>\r\n                      </mat-chip-list>\r\n                    </cdk-virtual-scroll-viewport>\r\n                </div>\r\n            </div>    \r\n            </mat-grid-tile>\r\n            <br>\r\n            <br>\r\n            <br>\r\n          <!-- Will hold the skill list -->\r\n          <mat-grid-tile>\r\n              <div class =\"grid-container\">  \r\n                  <div class = \"grid-search\">\r\n                      <div class=\"wrapper\">\r\n                          <button (click) = \"openDialog3()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\r\n                      </div>\r\n                  </div>\r\n                  <div class = \"grid-item\">\r\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\r\n                          <mat-chip-list>\r\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\r\n                              {{ skill }}\r\n                            </mat-chip>  \r\n                          </mat-chip-list>\r\n                        </cdk-virtual-scroll-viewport>\r\n                    </div>\r\n                </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n    </div>\r\n  </div>"
=======
module.exports = "<!--\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\n  fxLayout = \"row\"         : If ;using big screens, display data in rows\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\n-->\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n        <mat-card class=\"usercard1\">\n          \n                <mat-card-header class=\"list-header-title\">\n\n                    <div mat-card-avatar></div>\n                      <mat-card-title>{{ userData?.name }}</mat-card-title>\n                      <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\n                      <button mat-flat-button color=\"primary\" (click) = \"openDialog1()\" *ngIf=\"canEdit\">Edit</button>\n              \n                </mat-card-header>  \n\n              \n                <div class=\"containerPic\">\n                  <div class=\"image-background\">\n                      <div class=\"image-container\">\n                          <img mat-card-image [src] = \"imageLink\"\n                          onerror=\"this.onerror=null; this.src = 'assets/userPhoto.png';\"\n                           class=\"image\">\n                          </div> \n                          <div class=\"middle\"  *ngIf=\"canEdit\">\n                            <button mat-raised-button class=\"text\" (click) = \"openDialog4()\">Change Picture</button>\n                      </div>\n                  </div>  \n                </div>\n\n                <!--img mat-card-image -->\n                <mat-card-content>\n                \n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\n                    <mat-grid-tile>\n                          <button mat-raised-button color=\"warm\" (click) = \"onNavigateGithub()\" >{{ userData?.github }}</button>\n                    </mat-grid-tile>\n                    \n                    <mat-grid-tile>\n                        <button mat-raised-button color=\"primary\" (click) = \"onNavigateLinkedIn()\">{{ userData?.linkedin }}</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n\n              </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\n      <div class=\"usercard2\">\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\n          <!-- Will hold class list -->\n            <mat-grid-tile>\n            <div class =\"grid-container\">  \n              <div class = \"grid-search\">\n                  <div class=\"wrapper\">\n                      <button (click) = \"openDialog2()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\n                  </div>\n              </div>\n              \n              <div class = \"grid-item\">\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\n                      <mat-chip-list>\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\n                          {{ class }}\n                        </mat-chip>\n                      </mat-chip-list>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>    \n            </mat-grid-tile>\n            <br>\n            <br>\n            <br>\n          <!-- Will hold the skill list -->\n          <mat-grid-tile>\n              <div class =\"grid-container\">  \n                  <div class = \"grid-search\">\n                      <div class=\"wrapper\">\n                          <button (click) = \"openDialog3()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\n                      </div>\n                  </div>\n                  <div class = \"grid-item\">\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\n                          <mat-chip-list>\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\n                              {{ skill }}\n                            </mat-chip>  \n                          </mat-chip-list>\n                        </cdk-virtual-scroll-viewport>\n                    </div>\n                </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </div>\n  </div>"
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6

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
/* harmony import */ var _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../edit-picture/edit-picture.component */ "./src/app/user/edit-picture/edit-picture.component.ts");
/* harmony import */ var _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../edit-skills/edit-skills.component */ "./src/app/user/edit-skills/edit-skills.component.ts");
/* harmony import */ var _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../edit-classes/edit-classes.component */ "./src/app/user/edit-classes/edit-classes.component.ts");
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../edit-user-form/edit-user-form.component */ "./src/app/user/edit-user-form/edit-user-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");










var UserPageComponent = /** @class */ (function () {
<<<<<<< HEAD
    /*
    TODO:
      Autocomplete on edit skills and classes.
  
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Constructor that will create an instance of UserPageComponent
    *        and allow us to inject our dependencies; services that will be needed in the component
    *
    *	@param[userService]  ,  service that will handle both retrival and updating user data via http requests
    *	@param[activeRoute]  ,  will allow us to retrieve path parameters if they are set
    *	@param[dialog]       ,  will open a
    *	@return nothing
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
    */
    function UserPageComponent(userService, router, formBuilder, activeRoute, dialog) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.dialog = dialog;
        this.filteredUsers = [];
        this.isLoading = false;
        //default variable for selected file.
        this.fileToUpload = null;
    }
<<<<<<< HEAD
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will be called once the Angular has finished initializing and setting up the component
    *        This function is async as we need to wait for data to be retrieved before setting values or doing logic
    *
    *	@return nothing
    */
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
    UserPageComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
<<<<<<< HEAD
                    case 0: return [4 /*yield*/, this.activeRoute.paramMap
                            .subscribe(function (params) {
                            _this.username = params.get('username');
                        })];
                    case 1:
                        _a.sent();
=======
                    case 0: 
                    //Will retrieve the 'username' parameter from the url if set.
                    return [4 /*yield*/, this.activeRoute.paramMap
                            .subscribe(function (params) {
                            _this.username = params.get('username');
                        })
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
                    ];
                    case 1:
                        //Will retrieve the 'username' parameter from the url if set.
                        _a.sent();
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
                        return [4 /*yield*/, this.userService.getUserdetails()
                                .subscribe(function (res) {
                                if (res['username'] === _this.username || _this.username == null) {
                                    _this.canEdit = true;
                                }
                                else {
                                    _this.canEdit = false;
                                }
                            })];
                    case 2:
<<<<<<< HEAD
                        _a.sent();
                        this.loadUserData(this.username);
                        this.classesForm = this.formBuilder.group({
                            userInput: null
                        });
=======
                        //Will set the 'canEdit' boolean variable depending if the user viewing the page is the owner. 
                        //If so, allow that user to edit his page fields.
                        _a.sent();
                        //Load the user data that will be displayed in our html files
                        this.loadUserData(this.username);
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
                        return [2 /*return*/];
                }
            });
        });
    };
<<<<<<< HEAD
    UserPageComponent.prototype.loadUserData = function (username) {
        var _this = this;
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will load a users data or another users data, depending on whether the variable
    *        'username' has been set from the url parameter.
    *
    *	@param[username]  ,  variable that will store the username retrieved from the url parameter
    *	@return nothing
    */
    UserPageComponent.prototype.loadUserData = function (username) {
        var _this = this;
        //If username is set, retrieve data for that user
        //Else retrieve the data of the current user logged in
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        if (username) {
            this.userService.getMemberdetails(username).subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
<<<<<<< HEAD
                _this.profileMemberPicture(username);
            });
=======
            });
            this.profileMemberPicture(username);
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        }
        else {
            this.userService.getUserdetails().subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
<<<<<<< HEAD
                _this.profilePicture();
            });
        }
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
=======
            });
            this.profilePicture();
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        }
    };
    UserPageComponent.prototype.profilePicture = function () {
        var _this = this;
<<<<<<< HEAD
        this.userService.getPicture().subscribe(function (picture) {
            _this.createImageFromBlob(picture);
            //console.log(picture)
=======
        this.userService.getPicture().subscribe(function (link) {
            console.log(link);
            _this.imageLink = link;
            console.log(_this.imageLink);
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        });
    };
    UserPageComponent.prototype.profileMemberPicture = function (username) {
        var _this = this;
<<<<<<< HEAD
        this.userService.getMemberPicture(username).subscribe(function (picture) {
            _this.createImageFromBlob(picture);
            //console.log(picture)
        });
    };
    UserPageComponent.prototype.openDialog1 = function () {
        //Dialog refeerence
        var dialogRef = this.dialog.open(_edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__["EditUserFormComponent"], {
            width: '50%',
=======
        this.userService.getMemberPicture(username).subscribe(function (link) {
            _this.imageLink = link;
        });
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditUserFormComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog1 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
        var dialogRef = this.dialog.open(_edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__["EditUserFormComponent"], {
            width: '50%',
            //Data that will be passed to the dialog
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
            data: {
                userData: this.userData
            }
        });
<<<<<<< HEAD
=======
        //Logic done after the dialog has been closed from the dialog window
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
<<<<<<< HEAD
    UserPageComponent.prototype.openDialog2 = function () {
        //Dialog refeerence
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditClassesComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog2 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        var dialogRef = this.dialog.open(_edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_3__["EditClassesComponent"], {
            width: '95%',
            data: {
                userData: this.userData
            }
        });
<<<<<<< HEAD
=======
        //Logic done after the dialog has been closed from the dialog window
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
<<<<<<< HEAD
    UserPageComponent.prototype.openDialog3 = function () {
        //Dialog refeerence
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditSkillsComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog3 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        var dialogRef = this.dialog.open(_edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_2__["EditSkillsComponent"], {
            width: '70%',
            data: {
                userData: this.userData
            }
        });
<<<<<<< HEAD
=======
        //Logic done after the dialog has been closed from the dialog window
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
<<<<<<< HEAD
    UserPageComponent.prototype.openDialog4 = function () {
        //Dialog refeerence
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will open a dialog window with the content of EditPictureComponent
    *        The window will open on the same screen, using the same data as the current screen
    *
    *	@return nothing
    */
    UserPageComponent.prototype.openDialog4 = function () {
        //Dialog refeerence that will handle the closing of the dialog and to receive 
        //notifiations when the dialog has been closed
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        var dialogRef = this.dialog.open(_edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_1__["EditPictureComponent"], {
            width: '280px',
            data: {
                userData: this.userData
            }
        });
<<<<<<< HEAD
=======
        //Logic done after the dialog has been closed from the dialog window
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + result);
            if (result == true) {
            }
        });
    };
    UserPageComponent.prototype.changeProfilePic = function () {
        console.log("Change profile pic.");
    };
<<<<<<< HEAD
    UserPageComponent.prototype.onNavigateGithub = function () {
        window.open("https://" + (this.userData).github, "_blank");
    };
=======
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will redirect to a users github page and will open on a separate window
    *
    *	@return nothing
    */
    UserPageComponent.prototype.onNavigateGithub = function () {
        window.open("https://" + (this.userData).github, "_blank");
    };
    /**
    * @author Edwin Quintuna
    *
    *	@brief Function that will redirect to a users linkedIn page and will open on a separate window
    *
    *	@return nothing
    */
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
    UserPageComponent.prototype.onNavigateLinkedIn = function () {
        window.open("https://" + (this.userData).linkedin, "_blank");
    };
    UserPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-user-page',
            template: __webpack_require__(/*! ./user-page.component.html */ "./src/app/user/user-page/user-page.component.html"),
            styles: [__webpack_require__(/*! ./user-page.component.css */ "./src/app/user/user-page/user-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");




<<<<<<< HEAD
var routes = [
    {
=======
/**
* @author Edwin Quintuna
*
*	@brief Configure the routes for the feature module. Once loaded, we have
*        access to the components declared in the feature module
*
*	@param[routes] ,  array that will contain our routes
*	@param[path]       ,  string that will redirect to the module specified on 'loadChildren'
*	@param[component]       , component to be loaded depending on the 'path' that was taken
*	@return nothing
*/
var routes = [
    {
        //Path to UserPageComponent, which places the parameter ':username' in the path
        //':username' will be used to retrieve that specific users data 
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
        path: ':username',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]
    },
    {
        //This is the default path the user will enter if the url is /user
        path: '',
        component: _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPageComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
<<<<<<< HEAD
=======
            //Lets angular know that the route list is only responsible 
            //for providing additional routes and intended for feature modules
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-page/user-page.component */ "./src/app/user/user-page/user-page.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-user-form/edit-user-form.component */ "./src/app/user/edit-user-form/edit-user-form.component.ts");
/* harmony import */ var _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-classes/edit-classes.component */ "./src/app/user/edit-classes/edit-classes.component.ts");
/* harmony import */ var _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-skills/edit-skills.component */ "./src/app/user/edit-skills/edit-skills.component.ts");
/* harmony import */ var _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-picture/edit-picture.component */ "./src/app/user/edit-picture/edit-picture.component.ts");












//Material Components











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__["UserPageComponent"], _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__["EditUserFormComponent"], _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__["EditClassesComponent"], _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__["EditSkillsComponent"], _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__["EditPictureComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_10__["UserRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                //Flex Module
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
<<<<<<< HEAD
                //Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
=======
                //Template Driven Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //
>>>>>>> afb4c8f639181f60916a58657a4a0d19b635ecd6
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_19__["EditUserFormComponent"],
                _edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_20__["EditClassesComponent"],
                _edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_21__["EditSkillsComponent"],
                _edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_22__["EditPictureComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map