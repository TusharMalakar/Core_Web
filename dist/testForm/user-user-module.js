(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/user/edit-classes/edit-classes.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-chip-list {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LWNsYXNzZXMvZWRpdC1jbGFzc2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtY2xhc3Nlcy9lZGl0LWNsYXNzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/edit-classes/edit-classes.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-classes/edit-classes.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n<mat-form-field class=\"example-chip-list\">\r\n        <mat-chip-list #chipListClasses>\r\n                <mat-chip\r\n                *ngFor = \"let class of classes\"\r\n                [selectable] = \"selectable\"\r\n                [removable] = \"removable\"\r\n                (removed) = \"removeClass(class)\">\r\n                {{ class }}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                </mat-chip>\r\n                <input \r\n                placeholder=\"New Class...\"\r\n                #classInput\r\n                [formControl]=\"classCtrl\"\r\n                [matAutocomplete]=\"auto2\"\r\n                [matChipInputFor]=\"chipListClasses\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                (matChipInputTokenEnd)=\"addClass($event)\">\r\n                <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\r\n                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\r\n                        {{ class }}\r\n                        </mat-option>\r\n                </mat-autocomplete>\r\n        </mat-chip-list>\r\n</mat-form-field>\r\n<br>\r\n        <button mat-raised-button (click) = \"update()\">Update</button>\r\n<br>\r\n\r\n"

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

module.exports = ".hide_file {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    font-size: 24px;\r\n    width: 100%;\r\n}\r\n\r\n.mat-button {\r\n    border: 1px solid royalblue;\r\n}\r\n\r\n.uploadPic{\r\n    position:relative;\r\n    text-align:center;\r\n    float:left;\r\n    cursor:pointer;\r\n    margin-left: 10%;\r\n  }\r\n\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXBpY3R1cmUvZWRpdC1waWN0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2VkaXQtcGljdHVyZS9lZGl0LXBpY3R1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlX2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByb3lhbGJsdWU7XHJcbn1cclxuXHJcblxyXG4udXBsb2FkUGlje1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgfVxyXG5cclxuICBcclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/user/edit-picture/edit-picture.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/edit-picture/edit-picture.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!--Taking picture as input-->\r\n <div class = \"container\">\r\n    <div class=\"uploadPic\">\r\n        <input  type=\"file\" class=\"hide_file\" (change)=\"handleFileInput($event.target.files)\">\r\n        <button mat-flat-button color=\"primary\" >Upload File</button> \r\n    </div>\r\n    <button class=\"uploadButton\" mat-button color=\"primary\" (click)=\"uploadFileToActivity()\">submit</button>\r\n</div>\r\n"

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

module.exports = ".example-chip-list {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXNraWxscy9lZGl0LXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user/edit-skills/edit-skills.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-skills/edit-skills.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n<mat-form-field class=\"example-chip-list\">\r\n    <mat-chip-list #chipListSkills>\r\n            <mat-chip\r\n            *ngFor=\"let skill of skills\"\r\n            [selectable]=\"selectable\"\r\n            [removable]=\"removable\"\r\n            (removed)=\"removeSkill(skill)\">\r\n            {{ skill }}\r\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n            </mat-chip>\r\n            <input\r\n            placeholder=\"New Skill...\"\r\n            #skillInput\r\n            [formControl]=\"skillCtrl\"\r\n            [matAutocomplete]=\"auto\"\r\n            [matChipInputFor]=\"chipListSkills\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n            (matChipInputTokenEnd)=\"addSkill($event)\">\r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\r\n                    <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\r\n                    {{ skill }}\r\n                    </mat-option>\r\n            </mat-autocomplete>\r\n    </mat-chip-list>             \r\n</mat-form-field>\r\n<br>\r\n  <button mat-raised-button (click) = \"update()\">Update</button>\r\n<br>\r\n"

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

module.exports = ".mat-form-field {\r\n    width: 95%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXVzZXItZm9ybS9lZGl0LXVzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/edit-user-form/edit-user-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/edit-user-form/edit-user-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title> Update User Details </h2>\r\n    <div class = \"container\">\r\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\r\n\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['name']\" name = \"username\" id = \"username\" type = \"text\" class = \"form-control\"\r\n                    #username = \"ngModel\" matInput placeholder = \"User Name...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['github']\" name = \"github\" id = \"github\" type = \"text\" class = \"form-control\"\r\n                    #github = \"ngModel\" matInput placeholder = \"Github...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <mat-form-field>\r\n                <input [(ngModel)] = \"data.userData['linkedin']\" name = \"linkedin\" id = \"linkedin\" type = \"text\" class = \"form-control\"\r\n                    #linkedin = \"ngModel\" matInput placeholder = \"LinkedIn...\" required>\r\n            </mat-form-field>\r\n            <br>\r\n            <button mat-raised-button>Update</button>\r\n            <br>\r\n        </form>\r\n      </div>\r\n      \r\n"

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
    EditUserFormComponent.prototype.ngOnInit = function () {
    };
    EditUserFormComponent.prototype.update = function (userData) {
        this.userService.updateUserProfile(userData).subscribe(function (result) { console.log(result); });
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

module.exports = ".usercard1 {\r\n  margin-top: 30px;\r\n  padding: 0px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.mat-card-avatar {\r\n  background-image: url('/assets/userPhoto.png');\r\n  background-size: cover;\r\n\r\n}\r\n\r\n.mat-card-actions {\r\n  display: flex;\r\n}\r\n\r\n.list-header-title {\r\ncolor: rgba(0, 0, 0, .54);\r\nbackground: rgba(0, 0, 0, 0.062);\r\nfont-weight: bold;\r\npadding: 0px;\r\n\r\n}\r\n\r\n.mat-card-header {\r\n  padding-left: 10px;\r\n  padding-top: 10px; \r\n}\r\n\r\n.mat-raised-button {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.usercard2 {\r\nmargin-top: 30px;\r\ncolor: rgba(0, 0, 0, .54);\r\nbackground: rgba(0, 0, 0, 0.062);\r\nheight: 86.5%;\r\npadding-bottom: 25px;\r\nborder-radius: 5px;\r\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.viewport {\r\nwidth: 100%;\r\nheight: 100%;\r\nmargin-left: 40px;\r\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.cdk-virtual-scroll-viewport {\r\nheight: 70%;\r\nmargin: 0px;\r\nbackground-color: white;\r\n\r\n}\r\n\r\n.example-form .mat-form-field {\r\nmargin: 0px;\r\n}\r\n\r\n.mat-list {\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.grid-container {\r\ngrid: auto-flow / 1fr;\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n.grid-search {\r\ngrid-area: grid-search;\r\nmargin-left: 25px;\r\n\r\n}\r\n\r\n.grid-item {\r\ngrid-area: grid-item;\r\nheight: 100%;\r\nmargin-left: 25px;\r\nmargin-right: 25px;\r\nmargin-bottom: 0px;\r\n}\r\n\r\n.mat-chip-list {\r\nmargin: 1px;\r\n}\r\n\r\n.example-form {\r\nmin-width: 150px;\r\nmax-width: 500px;\r\nwidth: 100%;\r\n}\r\n\r\n.example-full-width {\r\nwidth: 80%;\r\nmargin-top: 15px;\r\nmargin-bottom: 15px;\r\nbackground: rgba(255, 255, 255, 0.671);\r\nborder-radius: 15px;\r\n}\r\n\r\n.wrapper {\r\ndisplay:inline-block;\r\nmargin-top: 10px;\r\nmargin-bottom: 15px;\r\nheight: 30px;\r\n}\r\n\r\ninput {\r\n    background-color: white;\r\n    border: 3;\r\n    width: 200px;\r\n    height: 30px;\r\n}\r\n\r\nbutton {\r\n    \r\n    border: solid black 1px;\r\n    width: 100px;\r\n    height: 38px;\r\n}\r\n\r\n.mat-flat-button  {\r\n  width: auto;\r\n  margin-left: auto;\r\n  margin-right: 10px; \r\n}\r\n\r\n.uploadButton {\r\n  height: 38px;\r\n}\r\n\r\n.middle {\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\n.containerPic:hover .image {\r\n  opacity: 0.3;\r\n}\r\n\r\n.containerPic:hover .middle {\r\n  opacity: 1;\r\n}\r\n\r\n.image-background {\r\n  background: #555555;\r\n  display: table;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.containerPic {\r\n  position: relative;\r\n}\r\n\r\n.mat-card-image {\r\nmargin: 0px;\r\nmargin-left: 8.099%;\r\nmargin-right: 10%;\r\ndisplay: block;\r\nheight: 490px;\r\nmax-height: 500px;\r\nmax-width: 85%;\r\ntransition: .5s ease;\r\n-webkit-backface-visibility: hidden;\r\n        backface-visibility: hidden;\r\nopacity: 1;\r\n}\r\n\r\n.mat-grid-tile {\r\n  overflow: unset;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLXBhZ2UvdXNlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5RUFBeUU7QUFDM0U7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsc0JBQXNCOztBQUV4Qjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixnQ0FBZ0M7QUFDaEMsaUJBQWlCO0FBQ2pCLFlBQVk7O0FBRVo7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQTtBQUNBLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLHlFQUF5RTtBQUN6RTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxXQUFXO0FBQ1gsdUJBQXVCOztBQUV2Qjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFJQTtBQUNBLFdBQVc7QUFDWCxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsV0FBVztBQUNYLFlBQVk7QUFDWjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixpQkFBaUI7O0FBRWpCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFlBQVk7QUFDWixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsV0FBVztBQUNYOztBQUVBO0FBQ0EsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0FBQ0EsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixtQ0FBMkI7UUFBM0IsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVjs7QUFHQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItcGFnZS91c2VyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyY2FyZDEge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtYXZhdGFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvdXNlclBob3RvLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbi5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubGlzdC1oZWFkZXItdGl0bGUge1xyXG5jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnBhZGRpbmc6IDBweDtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDsgXHJcbn1cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi51c2VyY2FyZDIge1xyXG5tYXJnaW4tdG9wOiAzMHB4O1xyXG5jb2xvcjogcmdiYSgwLCAwLCAwLCAuNTQpO1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDYyKTtcclxuaGVpZ2h0OiA4Ni41JTtcclxucGFkZGluZy1ib3R0b206IDI1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLnZpZXdwb3J0IHtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxubWFyZ2luLWxlZnQ6IDQwcHg7XHJcbmJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG5oZWlnaHQ6IDcwJTtcclxubWFyZ2luOiAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSAubWF0LWZvcm0tZmllbGQge1xyXG5tYXJnaW46IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubWF0LWxpc3Qge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG5ncmlkOiBhdXRvLWZsb3cgLyAxZnI7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ncmlkLXNlYXJjaCB7XHJcbmdyaWQtYXJlYTogZ3JpZC1zZWFyY2g7XHJcbm1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cclxufVxyXG4uZ3JpZC1pdGVtIHtcclxuZ3JpZC1hcmVhOiBncmlkLWl0ZW07XHJcbmhlaWdodDogMTAwJTtcclxubWFyZ2luLWxlZnQ6IDI1cHg7XHJcbm1hcmdpbi1yaWdodDogMjVweDtcclxubWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNoaXAtbGlzdCB7XHJcbm1hcmdpbjogMXB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxubWluLXdpZHRoOiAxNTBweDtcclxubWF4LXdpZHRoOiA1MDBweDtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG53aWR0aDogODAlO1xyXG5tYXJnaW4tdG9wOiAxNXB4O1xyXG5tYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKTtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxubWFyZ2luLXRvcDogMTBweDtcclxubWFyZ2luLWJvdHRvbTogMTVweDtcclxuaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIFxyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi5tYXQtZmxhdC1idXR0b24gIHtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG59XHJcblxyXG5cclxuXHJcbi51cGxvYWRCdXR0b24ge1xyXG4gIGhlaWdodDogMzhweDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXJQaWM6aG92ZXIgLmltYWdlIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jb250YWluZXJQaWM6aG92ZXIgLm1pZGRsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5pbWFnZS1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiAjNTU1NTU1O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNvbnRhaW5lclBpYyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxubWFyZ2luOiAwcHg7XHJcbm1hcmdpbi1sZWZ0OiA4LjA5OSU7XHJcbm1hcmdpbi1yaWdodDogMTAlO1xyXG5kaXNwbGF5OiBibG9jaztcclxuaGVpZ2h0OiA0OTBweDtcclxubWF4LWhlaWdodDogNTAwcHg7XHJcbm1heC13aWR0aDogODUlO1xyXG50cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5vcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gIG92ZXJmbG93OiB1bnNldDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user-page/user-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/user-page/user-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n  fxLayout.lt-sm=\"column\"  : Will only be applied when the viewport is less thatn small.\r\n  fxLayout = \"row\"         :  If ;using big screens, display data in rows\r\n  fxLayout.xs =\"column\" ;  : using small screens, display data in columns\r\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\r\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\r\n-->\r\n  <div class = \"container\" fxLayout = \"row\" fxLayout.xs = \"column\" fxLayoutWrap fxLayoutAlign=\"center\">\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n        <mat-card class=\"usercard1\">\r\n          \r\n                <mat-card-header class=\"list-header-title\">\r\n\r\n                    <div mat-card-avatar></div>\r\n                      <mat-card-title>{{ userData?.name }}</mat-card-title>\r\n                      <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\r\n                      <button mat-flat-button color=\"primary\" (click) = \"openDialog1()\" *ngIf=\"canEdit\">Edit</button>\r\n              \r\n                </mat-card-header>  \r\n\r\n              \r\n                <div class=\"containerPic\">\r\n                  <div class=\"image-background\">\r\n                      <div class=\"image-container\">\r\n                          <img mat-card-image [src]=\"imageToShow\" \r\n                          alt=\"Image not found\" onerror=\"this.onerror=null; this.src = 'assets/userPhoto.png';\"\r\n                           class=\"image\">\r\n                          </div> \r\n                          <div class=\"middle\"  *ngIf=\"canEdit\">\r\n                            <button mat-raised-button class=\"text\" (click) = \"openDialog4()\">Change Picture</button>\r\n                      </div>\r\n                  </div>  \r\n                </div>\r\n\r\n                <!--img mat-card-image -->\r\n                <mat-card-content>\r\n                \r\n                <mat-grid-list cols=\"2\" rowHeight=\"4:1\" class=\"user-links\">\r\n                    <mat-grid-tile>\r\n                          <button mat-raised-button color=\"warm\" (click) = \"onNavigateGithub()\" >{{ userData?.github }}</button>\r\n                    </mat-grid-tile>\r\n                    \r\n                    <mat-grid-tile>\r\n                        <button mat-raised-button color=\"primary\" (click) = \"onNavigateLinkedIn()\">{{ userData?.linkedin }}</button>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n\r\n              </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex = \"40%\" fxFlex.xs = \"80%\">\r\n      <div class=\"usercard2\">\r\n        <mat-grid-list cols=\"1\" rowHeight=\"2:1\">\r\n          <!-- Will hold class list -->\r\n            <mat-grid-tile>\r\n            <div class =\"grid-container\">  \r\n              <div class = \"grid-search\">\r\n                  <div class=\"wrapper\">\r\n                      <button (click) = \"openDialog2()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\r\n                  </div>\r\n              </div>\r\n              \r\n              <div class = \"grid-item\">\r\n                  <cdk-virtual-scroll-viewport itemSize=\"classes.size\" class=\"viewport\">\r\n                      <mat-chip-list>\r\n                        <mat-chip *ngFor = \"let class of userData?.classes\">\r\n                          {{ class }}\r\n                        </mat-chip>\r\n                      </mat-chip-list>\r\n                    </cdk-virtual-scroll-viewport>\r\n                </div>\r\n            </div>    \r\n            </mat-grid-tile>\r\n            <br>\r\n            <br>\r\n            <br>\r\n          <!-- Will hold the skill list -->\r\n          <mat-grid-tile>\r\n              <div class =\"grid-container\">  \r\n                  <div class = \"grid-search\">\r\n                      <div class=\"wrapper\">\r\n                          <button (click) = \"openDialog3()\" mat-flat-button color=\"primary\" *ngIf=\"canEdit\"> Update </button>\r\n                      </div>\r\n                  </div>\r\n                  <div class = \"grid-item\">\r\n                      <cdk-virtual-scroll-viewport itemSize=\"skills.size\" class=\"viewport\">\r\n                          <mat-chip-list>\r\n                            <mat-chip *ngFor = \"let skill of userData?.skills\">\r\n                              {{ skill }}\r\n                            </mat-chip>  \r\n                          </mat-chip-list>\r\n                        </cdk-virtual-scroll-viewport>\r\n                    </div>\r\n                </div>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n      </div>\r\n    </div>\r\n  </div>"

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
    /*
    TODO:
      Autocomplete on edit skills and classes.
  
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
    UserPageComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.activeRoute.paramMap
                            .subscribe(function (params) {
                            _this.username = params.get('username');
                        })];
                    case 1:
                        _a.sent();
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
                        _a.sent();
                        this.loadUserData(this.username);
                        this.classesForm = this.formBuilder.group({
                            userInput: null
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPageComponent.prototype.loadUserData = function (username) {
        var _this = this;
        if (username) {
            this.userService.getMemberdetails(username).subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
                _this.profileMemberPicture(username);
            });
        }
        else {
            this.userService.getUserdetails().subscribe(function (userData) {
                _this.userData = userData;
                _this.userClass = userData["classes"];
                _this.userSkill = userData["skills"];
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
        }
    };
    UserPageComponent.prototype.profilePicture = function () {
        var _this = this;
        this.userService.getPicture().subscribe(function (picture) {
            _this.createImageFromBlob(picture);
            //console.log(picture)
        });
    };
    UserPageComponent.prototype.profileMemberPicture = function (username) {
        var _this = this;
        this.userService.getMemberPicture(username).subscribe(function (picture) {
            _this.createImageFromBlob(picture);
            //console.log(picture)
        });
    };
    UserPageComponent.prototype.openDialog1 = function () {
        //Dialog refeerence
        var dialogRef = this.dialog.open(_edit_user_form_edit_user_form_component__WEBPACK_IMPORTED_MODULE_4__["EditUserFormComponent"], {
            width: '50%',
            data: {
                userData: this.userData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    UserPageComponent.prototype.openDialog2 = function () {
        //Dialog refeerence
        var dialogRef = this.dialog.open(_edit_classes_edit_classes_component__WEBPACK_IMPORTED_MODULE_3__["EditClassesComponent"], {
            width: '95%',
            data: {
                userData: this.userData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    UserPageComponent.prototype.openDialog3 = function () {
        //Dialog refeerence
        var dialogRef = this.dialog.open(_edit_skills_edit_skills_component__WEBPACK_IMPORTED_MODULE_2__["EditSkillsComponent"], {
            width: '70%',
            data: {
                userData: this.userData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    UserPageComponent.prototype.openDialog4 = function () {
        //Dialog refeerence
        var dialogRef = this.dialog.open(_edit_picture_edit_picture_component__WEBPACK_IMPORTED_MODULE_1__["EditPictureComponent"], {
            width: '280px',
            data: {
                userData: this.userData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + result);
            if (result == true) {
            }
        });
    };
    UserPageComponent.prototype.changeProfilePic = function () {
        console.log("Change profile pic.");
    };
    UserPageComponent.prototype.onNavigateGithub = function () {
        window.open("https://" + (this.userData).github, "_blank");
    };
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




var routes = [
    {
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
                //Forms
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
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