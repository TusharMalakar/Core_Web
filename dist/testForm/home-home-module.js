(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/material/esm5/card.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/card.es5.js ***!
  \*********************************************************/
/*! exports provided: MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardImage, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardXlImage, MatCardAvatar, MatCard, MatCardHeader, MatCardTitleGroup, MatCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardContent", function() { return MatCardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitle", function() { return MatCardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSubtitle", function() { return MatCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardActions", function() { return MatCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardFooter", function() { return MatCardFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardImage", function() { return MatCardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardSmImage", function() { return MatCardSmImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardMdImage", function() { return MatCardMdImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardLgImage", function() { return MatCardLgImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardXlImage", function() { return MatCardXlImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardAvatar", function() { return MatCardAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCard", function() { return MatCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardHeader", function() { return MatCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardTitleGroup", function() { return MatCardTitleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return MatCardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardContent = /** @class */ (function () {
    function MatCardContent() {
    }
    MatCardContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-content',
                    host: { 'class': 'mat-card-content' }
                },] },
    ];
    return MatCardContent;
}());
/**
 * Title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardTitle = /** @class */ (function () {
    function MatCardTitle() {
    }
    MatCardTitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-title, [mat-card-title], [matCardTitle]",
                    host: {
                        'class': 'mat-card-title'
                    }
                },] },
    ];
    return MatCardTitle;
}());
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardSubtitle = /** @class */ (function () {
    function MatCardSubtitle() {
    }
    MatCardSubtitle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]",
                    host: {
                        'class': 'mat-card-subtitle'
                    }
                },] },
    ];
    return MatCardSubtitle;
}());
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardActions = /** @class */ (function () {
    function MatCardActions() {
        /**
         * Position of the actions inside the card.
         */
        this.align = 'start';
    }
    MatCardActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-actions',
                    exportAs: 'matCardActions',
                    host: {
                        'class': 'mat-card-actions',
                        '[class.mat-card-actions-align-end]': 'align === "end"',
                    }
                },] },
    ];
    MatCardActions.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return MatCardActions;
}());
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * \@docs-private
 */
var MatCardFooter = /** @class */ (function () {
    function MatCardFooter() {
    }
    MatCardFooter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'mat-card-footer',
                    host: { 'class': 'mat-card-footer' }
                },] },
    ];
    return MatCardFooter;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardImage = /** @class */ (function () {
    function MatCardImage() {
    }
    MatCardImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-image], [matCardImage]',
                    host: { 'class': 'mat-card-image' }
                },] },
    ];
    return MatCardImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardSmImage = /** @class */ (function () {
    function MatCardSmImage() {
    }
    MatCardSmImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-sm-image], [matCardImageSmall]',
                    host: { 'class': 'mat-card-sm-image' }
                },] },
    ];
    return MatCardSmImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardMdImage = /** @class */ (function () {
    function MatCardMdImage() {
    }
    MatCardMdImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-md-image], [matCardImageMedium]',
                    host: { 'class': 'mat-card-md-image' }
                },] },
    ];
    return MatCardMdImage;
}());
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardLgImage = /** @class */ (function () {
    function MatCardLgImage() {
    }
    MatCardLgImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-lg-image], [matCardImageLarge]',
                    host: { 'class': 'mat-card-lg-image' }
                },] },
    ];
    return MatCardLgImage;
}());
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardXlImage = /** @class */ (function () {
    function MatCardXlImage() {
    }
    MatCardXlImage.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-xl-image], [matCardImageXLarge]',
                    host: { 'class': 'mat-card-xl-image' }
                },] },
    ];
    return MatCardXlImage;
}());
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * \@docs-private
 */
var MatCardAvatar = /** @class */ (function () {
    function MatCardAvatar() {
    }
    MatCardAvatar.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-card-avatar], [matCardAvatar]',
                    host: { 'class': 'mat-card-avatar' }
                },] },
    ];
    return MatCardAvatar;
}());
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */
var MatCard = /** @class */ (function () {
    function MatCard() {
    }
    MatCard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card',
                    exportAs: 'matCard',
                    template: "<ng-content></ng-content><ng-content select=\"mat-card-footer\"></ng-content>",
                    styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media screen and (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px 0}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child{margin-left:0;margin-right:0}.mat-card-title{margin-bottom:8px}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card' }
                },] },
    ];
    return MatCard;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * \@docs-private
 */
var MatCardHeader = /** @class */ (function () {
    function MatCardHeader() {
    }
    MatCardHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-header',
                    template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content><div class=\"mat-card-header-text\"><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-header' }
                },] },
    ];
    return MatCardHeader;
}());
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * \@docs-private
 */
var MatCardTitleGroup = /** @class */ (function () {
    function MatCardTitleGroup() {
    }
    MatCardTitleGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-card-title-group',
                    template: "<div><ng-content select=\"mat-card-title, mat-card-subtitle, [mat-card-title], [mat-card-subtitle], [matCardTitle], [matCardSubtitle]\"></ng-content></div><ng-content select=\"img\"></ng-content><ng-content></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    host: { 'class': 'mat-card-title-group' }
                },] },
    ];
    return MatCardTitleGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatCardModule = /** @class */ (function () {
    function MatCardModule() {
    }
    MatCardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                    exports: [
                        MatCard,
                        MatCardHeader,
                        MatCardTitleGroup,
                        MatCardContent,
                        MatCardTitle,
                        MatCardSubtitle,
                        MatCardActions,
                        MatCardFooter,
                        MatCardSmImage,
                        MatCardMdImage,
                        MatCardLgImage,
                        MatCardImage,
                        MatCardXlImage,
                        MatCardAvatar,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    ],
                    declarations: [
                        MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle,
                        MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage,
                        MatCardXlImage, MatCardAvatar,
                    ],
                },] },
    ];
    return MatCardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=card.es5.js.map


/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 400px;\n    margin: auto;\n}\n\n.mat-card-actions {\n    display: flex;\n}\n\n.mat-card-actions .flex-spacer {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXQtY2FyZC1hY3Rpb25zIC5mbGV4LXNwYWNlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title> Collab # </mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <p> Collab Details</p>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <div class=\"button-row\">\n        <button mat-button> Join </button>\n        <button mat-button> Leave </button>\n        <button mat-button> Delete</button>\n    </div>\n  </mat-card-actions>\n\n</mat-card>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent() {
    }
    CollabCardComponent.prototype.ngOnInit = function () {
    };
    CollabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collab-card',
            template: __webpack_require__(/*! ./collab-card.component.html */ "./src/app/home/collab-card/collab-card.component.html"),
            styles: [__webpack_require__(/*! ./collab-card.component.css */ "./src/app/home/collab-card/collab-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "p {\n    padding: 16px;\n    text-align: center;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29sbGFiLWxpc3QvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     <!--\n       <button>\n          <a (click) =\"userDetails()\">Profile</a>\n        </button>\n      <button>\n        </button>\n      <button>\n          <a (click) =\"userSkill()\">userSkill</a>\n        </button>\n        <button>\n          <a (click) =\"userClass()\">userClass</a>\n        </button>\n        <button>\n          <a (click) =\"searchSkill()\">searchSkill</a>\n        </button>\n        <button>\n          <a (click) =\"collabDetails()\">collabDetails</a>\n        </button>\n        <button>\n          <a (click) =\"AllCollabs()\">AllCollabs</a>\n        </button>\n        <button>\n          <a (click) =\"activeCollabs()\">activeCollabs</a>\n        </button>\n        <button>\n          <a (click) =\"myCollabs()\">myCollabs</a>\n        </button>\n\n        <button>\n          <a (click) =\"logOut()\">Logout</a>\n        </button> <br> <br> <br>\n\n\n            <h1>Profile of {{name}}</h1> <br>\n            <td>Github : <a href=\"{{github}}\">{{github}}</a></td> <br>\n            <td>Linkedin : <a href=\"{{linkedin}}\">{{linkedin}}</a></td> <br>\n            <td>{{skills}}</td> <br>\n            <td>{{classes}}</td> <br>\n            <td>{{username}}</td> <br>\n\n            <table style=\"width : 50%\">\n              <thead>\n                <tr>\n                  <th>name</th>\n                  <th>Github</th>\n                  <th>linkedin</th>\n                  <th>skills</th>\n                  <th>classes</th>\n                  <th>username</th>\n                </tr>\n              </thead>\n                  \n          </table> \n\n     -->\n   <mat-tab-group>\n\n      <mat-tab label=\"Active Collabs\">\n        <ng-template matTabContent>\n            Active Collabs\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"Recommended Collabs\">\n        <ng-template matTabContent>\n            Recommended Collabs\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"My Collabs\">\n        <ng-template matTabContent>\n            My Collabs\n        </ng-template>\n      </mat-tab>\n\n   </mat-tab-group>\n     \n          \n            \n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.userDetails = function () {
        var _this = this;
        this.userService.getUserdetails().subscribe(function (data) {
            //setter 
            _this.username = "Email : " + data.username;
            _this.github = data.github;
            _this.linkedin = data.linkedin;
            _this.skills = "Skills : " + data.skills;
            _this.classes = "Classes : " + data.classes;
            _this.name = data.name;
        });
    };
    HomeComponent.prototype.userPicture = function () {
        ///user/profilePicture
        this.userService.getPicture().subscribe(function (data) {
            // BitmapImage image = new BitmapImage();
            // image.SetSource(stream);  
        });
    };
    //user/skills
    HomeComponent.prototype.userSkill = function () {
        this.userService.getSkill().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.userClass = function () {
        this.userService.getClasses().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.searchSkill = function () {
        this.userService.getSkill().subscribe(function (data) {
            console.log(data);
        });
    };
    // return array of JSON OBJECTS
    HomeComponent.prototype.collabDetails = function () {
        this.userService.collabDetails().subscribe(function (data) {
            console.log(data[0].owner);
            console.log(data[0].members);
            //write a for loop to inter arrar
            //for(int i = 0 ; data.length ; i ++){
            /**
       * id = data[i].owner
       * owner = data[i].
       * size = data[i]
       * members = data[i]
       * date   = data[i]
       * duration =  data[i]
       * location = data[i]
       * status = data[i]
       * title = data[i]
       * description = data[i]
       * classes = data[i]
       * skills = data[i]
       * applicants = data[i]
       *  */
            //}
        });
    };
    HomeComponent.prototype.AllCollabs = function () {
        this.userService.allCollabs().subscribe(function (data) {
            console.log(data);
            /**
             * id
             * owner
             * size
             * members
             * date
             * duration
             * location
             * status
             * title
             * description
             * classes
             * skills
             * applicants
             *  */
        });
    };
    HomeComponent.prototype.activeCollabs = function () {
        this.userService.activeCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.myCollabs = function () {
        this.userService.myCollabs().subscribe(function (data) {
            console.log(data);
        });
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/collab-list/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/collab-list/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

// testuser1@myhunter.cuny.edu
[
    {
        "_id": {
            "$oid": "5ca82697e1fe6800040efb48"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 5,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1560465000955,
        "duration": 259200000,
        "location": "MLH NYC Headquarters",
        "status": true,
        "title": "MLH Hackathon",
        "description": "looking for 4 more people to attend hackathon as a group",
        "classes": [
            "Any"
        ],
        "skills": [
            "C++",
            "Java",
            "Python",
            "Firebase"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca826e6e1fe6800040efb49"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 6,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555171800432,
        "duration": 5184000000,
        "location": "Anywhere",
        "status": true,
        "title": "Web App for Portfolio",
        "description": "looking to discuss/build a web app for a portfolio",
        "classes": [
            "CS 335",
            "Practical Web Development"
        ],
        "skills": [
            "C++",
            "Python",
            "Java",
            "JavaScript",
            "HTML",
            "CSS"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82726e1fe6800040efb4a"
        },
        "owner": "testuser1@myhunter.cuny.edu",
        "size": 30,
        "members": [
            "testuser1@myhunter.cuny.edu",
            "testuser99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557939600823,
        "duration": 345600000,
        "location": "Hunter 6th Floor Library",
        "status": true,
        "title": "CS 235 section 3 Final review",
        "description": "study for finals exam, all are welcome",
        "classes": [
            "CS 235"
        ],
        "skills": [
            "C++"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82761e1fe6800040efb4b"
        },
        "owner": "jane.doe99@myhunter.cuny.edu",
        "size": 20,
        "members": [
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu",
            "testuser1@myhunter.cuny.edu"
        ],
        "date": 1555018200807,
        "duration": 7776000000,
        "location": "Hunter North 10th floor, walk towards the labs and make a right",
        "status": true,
        "title": "Hunter ASM Weekly Meeting",
        "description": "come join fellow CS students for weekly meetings from 5:30 PM to 7:30 PM",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca827c2e1fe6800040efb4c"
        },
        "owner": "testuser99@myhunter.cuny.edu",
        "size": 4,
        "members": [
            "testuser99@myhunter.cuny.edu",
            "jane.doe99@myhunter.cuny.edu",
            "john.doe99@myhunter.cuny.edu",
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1557271500378,
        "duration": 259200000,
        "location": "127 Madison Avenue",
        "status": true,
        "title": "Intro to Python meetup",
        "description": "looking for smal group of people to attend a Python intro meetup",
        "classes": [
            "Any"
        ],
        "skills": [
            "Any"
        ],
        "applicants": []
    },
    {
        "_id": {
            "$oid": "5ca82c35e1fe6800040efb4f"
        },
        "owner": "frank.white@myhunter.cuny.edu",
        "size": 1,
        "members": [
            "frank.white@myhunter.cuny.edu"
        ],
        "date": 1554546780684,
        "duration": 3801600000,
        "location": "test",
        "status": true,
        "title": "test edits",
        "description": "test",
        "classes": [
            "123"
        ],
        "skills": [
            "123"
        ],
        "applicants": []
    }
];


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
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");





//Material Components




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_8__["CollabCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                //Angular Material
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map