(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/material/esm5/select.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/select.es5.js ***!
  \***********************************************************/
/*! exports provided: MatSelectModule, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectChange, MatSelectBase, _MatSelectMixinBase, MatSelectTrigger, MatSelect, matSelectAnimations, transformPanel, fadeInContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectBase", function() { return MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectMixinBase", function() { return _MatSelectMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformPanel", function() { return transformPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInContent", function() { return fadeInContent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * \@docs-private
 * @type {?}
 */
var matSelectAnimations = {
    /**
     * This animation ensures the select's overlay panel animation (transformPanel) is called when
     * closing the select.
     * This is needed due to https://github.com/angular/angular/issues/23302
     */
    transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanelWrap', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()], { optional: true }))
    ]),
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            // 32px = 2 * 16px padding
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            // 64px = 48px padding on the left + 16px padding on the right
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })))
    ]),
    /**
     * This animation fades in the background color and text content of the
     * select's options. It is time delayed to occur 100ms after the overlay
     * panel has transformed in.
     * @deprecated Not used anymore. To be removed.
     * \@breaking-change 8.0.0
     */
    fadeInContent: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInContent', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => showing', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var transformPanel = matSelectAnimations.transformPanel;
/**
 * @deprecated
 * \@breaking-change 8.0.0
 * \@docs-private
 * @type {?}
 */
var fadeInContent = matSelectAnimations.fadeInContent;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * \@docs-private
 * @return {?}
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * \@docs-private
 * @return {?}
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 * @return {?}
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var nextUniqueId = 0;
/**
 * The max height of the select's overlay panel
 * @type {?}
 */
var SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis
 * @type {?}
 */
var SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @type {?}
 */
var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @type {?}
 */
var SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 20 = 44
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 * @type {?}
 */
var SELECT_MULTIPLE_PANEL_PADDING_X = 0;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 * @type {?}
 */
var SELECT_PANEL_VIEWPORT_PADDING = 8;
/**
 * Injection token that determines the scroll handling while a select is open.
 * @type {?}
 */
var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('mat-select-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/**
 * Change event object that is emitted when the select value has changed.
 */
var  /**
 * Change event object that is emitted when the select value has changed.
 */
MatSelectChange = /** @class */ (function () {
    function MatSelectChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatSelectChange;
}());
// Boilerplate for applying mixins to MatSelect.
/**
 * \@docs-private
 */
var  
// Boilerplate for applying mixins to MatSelect.
/**
 * \@docs-private
 */
MatSelectBase = /** @class */ (function () {
    function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatSelectBase;
}());
/** @type {?} */
var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["mixinErrorState"])(MatSelectBase))));
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
var MatSelectTrigger = /** @class */ (function () {
    function MatSelectTrigger() {
    }
    MatSelectTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: 'mat-select-trigger'
                },] },
    ];
    return MatSelectTrigger;
}());
var MatSelect = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(MatSelect, _super);
    function MatSelect(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer) {
        var _this = _super.call(this, elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._viewportRuler = _viewportRuler;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._ngZone = _ngZone;
        _this._dir = _dir;
        _this._parentFormField = _parentFormField;
        _this.ngControl = ngControl;
        _this._liveAnnouncer = _liveAnnouncer;
        /**
         * Whether or not the overlay panel is open.
         */
        _this._panelOpen = false;
        /**
         * Whether filling out the select is required in the form.
         */
        _this._required = false;
        /**
         * The scroll position of the overlay panel, calculated to center the selected option.
         */
        _this._scrollTop = 0;
        /**
         * Whether the component is in multiple selection mode.
         */
        _this._multiple = false;
        /**
         * Comparison function to specify which option is displayed. Defaults to object equality.
         */
        _this._compareWith = function (o1, o2) { return o1 === o2; };
        /**
         * Unique id for this input.
         */
        _this._uid = "mat-select-" + nextUniqueId++;
        /**
         * Emits whenever the component is destroyed.
         */
        _this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * The cached font-size of the trigger element.
         */
        _this._triggerFontSize = 0;
        /**
         * `View -> model callback called when value changes`
         */
        _this._onChange = function () { };
        /**
         * `View -> model callback called when select has been touched`
         */
        _this._onTouched = function () { };
        /**
         * The IDs of child options to be passed to the aria-owns attribute.
         */
        _this._optionIds = '';
        /**
         * The value of the select panel's transform-origin property.
         */
        _this._transformOrigin = 'top';
        /**
         * Emits when the panel element is finished transforming in.
         */
        _this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        _this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        _this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        /**
         * Whether the component is disabling centering of the active option over the trigger.
         */
        _this._disableOptionCentering = false;
        _this._focused = false;
        /**
         * A name for this control that can be used by `mat-form-field`.
         */
        _this.controlType = 'mat-select';
        /**
         * Aria label of the select. If not specified, the placeholder will be used as label.
         */
        _this.ariaLabel = '';
        /**
         * Combined stream of all of the child options' change events.
         */
        _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["defer"])(function () {
            if (_this.options) {
                return rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, _this.options.map(function (option) { return option.onSelectionChange; }));
            }
            return _this._ngZone.onStable
                .asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["switchMap"])(function () { return _this.optionSelectionChanges; }));
        });
        /**
         * Event emitted when the select panel has been toggled.
         */
        _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * Event emitted when the select has been opened.
         */
        _this._openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) { return o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () { }));
        /**
         * Event emitted when the select has been closed.
         */
        _this._closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (o) { return !o; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["map"])(function () { }));
        /**
         * Event emitted when the selected value has been changed by the user.
         */
        _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * \@docs-private
         */
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        if (_this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this.ngControl.valueAccessor = _this;
        }
        _this._scrollStrategyFactory = scrollStrategyFactory;
        _this._scrollStrategy = _this._scrollStrategyFactory();
        _this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        return _this;
    }
    Object.defineProperty(MatSelect.prototype, "focused", {
        /** Whether the select is focused. */
        get: /**
         * Whether the select is focused.
         * @return {?}
         */
        function () {
            return this._focused || this._panelOpen;
        },
        /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * @breaking-change 8.0.0
         */
        set: /**
         * @deprecated Setter to be removed as this property is intended to be readonly.
         * \@breaking-change 8.0.0
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._focused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "placeholder", {
        /** Placeholder to be shown if no value has been selected. */
        get: /**
         * Placeholder to be shown if no value has been selected.
         * @return {?}
         */
        function () { return this._placeholder; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "required", {
        /** Whether the component is required. */
        get: /**
         * Whether the component is required.
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "multiple", {
        /** Whether the user should be allowed to select multiple options. */
        get: /**
         * Whether the user should be allowed to select multiple options.
         * @return {?}
         */
        function () { return this._multiple; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._selectionModel) {
                throw getMatSelectDynamicMultipleError();
            }
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "disableOptionCentering", {
        /** Whether to center the active option over the trigger. */
        get: /**
         * Whether to center the active option over the trigger.
         * @return {?}
         */
        function () { return this._disableOptionCentering; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "compareWith", {
        /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         */
        get: /**
         * Function to compare the option values with the selected values. The first argument
         * is a value from an option. The second is a value from the selection. A boolean
         * should be returned.
         * @return {?}
         */
        function () { return this._compareWith; },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            if (typeof fn !== 'function') {
                throw getMatSelectNonFunctionValueError();
            }
            this._compareWith = fn;
            if (this._selectionModel) {
                // A different comparator means the selection could change.
                this._initializeSelection();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "value", {
        /** Value of the select control. */
        get: /**
         * Value of the select control.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (newValue !== this._value) {
                this.writeValue(newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "id", {
        /** Unique id of the element. */
        get: /**
         * Unique id of the element.
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value || this._uid;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy))
            .subscribe(function () {
            if (_this.panelOpen) {
                _this._scrollTop = 0;
                _this.openedChange.emit(true);
            }
            else {
                _this.openedChange.emit(false);
                _this.overlayDir.offsetX = 0;
                _this._changeDetectorRef.markForCheck();
            }
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._initKeyManager();
        this._selectionModel.onChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function (event) {
            event.added.forEach(function (option) { return option.select(); });
            event.removed.forEach(function (option) { return option.deselect(); });
        });
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            _this._resetOptions();
            _this._initializeSelection();
        });
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            this.updateErrorState();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MatSelect.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatSelect.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    };
    /** Toggles the overlay panel open or closed. */
    /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    MatSelect.prototype.toggle = /**
     * Toggles the overlay panel open or closed.
     * @return {?}
     */
    function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    /**
     * Opens the overlay panel.
     * @return {?}
     */
    MatSelect.prototype.open = /**
     * Opens the overlay panel.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
        }
        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.
        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
        this._panelOpen = true;
        this._keyManager.withHorizontalOrientation(null);
        this._calculateOverlayPosition();
        this._highlightCorrectOption();
        this._changeDetectorRef.markForCheck();
        // Set the font size on the panel element once it exists.
        this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
            if (_this._triggerFontSize && _this.overlayDir.overlayRef &&
                _this.overlayDir.overlayRef.overlayElement) {
                _this.overlayDir.overlayRef.overlayElement.style.fontSize = _this._triggerFontSize + "px";
            }
        });
    };
    /** Closes the overlay panel and focuses the host element. */
    /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    MatSelect.prototype.close = /**
     * Closes the overlay panel and focuses the host element.
     * @return {?}
     */
    function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    MatSelect.prototype.writeValue = /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} value New value to be written to the model.
     * @return {?}
     */
    function (value) {
        if (this.options) {
            this._setSelectionByValue(value);
        }
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    MatSelect.prototype.registerOnChange = /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the value changes.
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    MatSelect.prototype.registerOnTouched = /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} fn Callback to be triggered when the component has been touched.
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    MatSelect.prototype.setDisabledState = /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param {?} isDisabled Sets whether the component is disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    };
    Object.defineProperty(MatSelect.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: /**
         * Whether or not the overlay panel is open.
         * @return {?}
         */
        function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "selected", {
        /** The currently selected option. */
        get: /**
         * The currently selected option.
         * @return {?}
         */
        function () {
            return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSelect.prototype, "triggerValue", {
        /** The value displayed in the trigger. */
        get: /**
         * The value displayed in the trigger.
         * @return {?}
         */
        function () {
            if (this.empty) {
                return '';
            }
            if (this._multiple) {
                /** @type {?} */
                var selectedOptions = this._selectionModel.selected.map(function (option) { return option.viewValue; });
                if (this._isRtl()) {
                    selectedOptions.reverse();
                }
                // TODO(crisbeto): delimiter should be configurable for proper localization.
                return selectedOptions.join(', ');
            }
            return this._selectionModel.selected[0].viewValue;
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the element is in RTL mode. */
    /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    MatSelect.prototype._isRtl = /**
     * Whether the element is in RTL mode.
     * @return {?}
     */
    function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    /** Handles all keydown events on the select. */
    /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleKeydown = /**
     * Handles all keydown events on the select.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    };
    /** Handles keyboard events while the select is closed. */
    /**
     * Handles keyboard events while the select is closed.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleClosedKeydown = /**
     * Handles keyboard events while the select is closed.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"];
        /** @type {?} */
        var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"];
        /** @type {?} */
        var manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if ((isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) || ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            /** @type {?} */
            var selectedOption = this.selected;
            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
                keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
            }
            else {
                manager.onKeydown(event);
            }
            // Since the value has changed, we need to announce it ourselves.
            // @breaking-change 8.0.0 remove null check for _liveAnnouncer.
            if (this._liveAnnouncer && selectedOption !== this.selected) {
                this._liveAnnouncer.announce(((/** @type {?} */ (this.selected))).viewValue);
            }
        }
    };
    /** Handles keyboard events when the selected is open. */
    /**
     * Handles keyboard events when the selected is open.
     * @private
     * @param {?} event
     * @return {?}
     */
    MatSelect.prototype._handleOpenKeydown = /**
     * Handles keyboard events when the selected is open.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"];
        /** @type {?} */
        var manager = this._keyManager;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]) {
            event.preventDefault();
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"] ? manager.setFirstItemActive() : manager.setLastItemActive();
        }
        else if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
        }
        else if ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]) && manager.activeItem &&
            !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["A"] && event.ctrlKey) {
            event.preventDefault();
            /** @type {?} */
            var hasDeselectedOptions_1 = this.options.some(function (opt) { return !opt.disabled && !opt.selected; });
            this.options.forEach(function (option) {
                if (!option.disabled) {
                    hasDeselectedOptions_1 ? option.select() : option.deselect();
                }
            });
        }
        else {
            /** @type {?} */
            var previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    };
    /**
     * @return {?}
     */
    MatSelect.prototype._onFocus = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    };
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    MatSelect.prototype._onBlur = /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     * @return {?}
     */
    function () {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    };
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    MatSelect.prototype._onAttached = /**
     * Callback that is invoked when the overlay panel has been attached.
     * @return {?}
     */
    function () {
        var _this = this;
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["take"])(1)).subscribe(function () {
            _this._setPseudoCheckboxPaddingSize();
            _this._changeDetectorRef.detectChanges();
            _this._calculateOverlayOffsetX();
            _this.panel.nativeElement.scrollTop = _this._scrollTop;
        });
    };
    /** Returns the theme to be used on the panel. */
    /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    MatSelect.prototype._getPanelTheme = /**
     * Returns the theme to be used on the panel.
     * @return {?}
     */
    function () {
        return this._parentFormField ? "mat-" + this._parentFormField.color : '';
    };
    // TODO(josephperrott): Remove after 2018 spec updates are fully merged.
    /** Sets the pseudo checkbox padding size based on the width of the pseudo checkbox. */
    // TODO(josephperrott): Remove after 2018 spec updates are fully merged.
    /**
     * Sets the pseudo checkbox padding size based on the width of the pseudo checkbox.
     * @private
     * @return {?}
     */
    MatSelect.prototype._setPseudoCheckboxPaddingSize = 
    // TODO(josephperrott): Remove after 2018 spec updates are fully merged.
    /**
     * Sets the pseudo checkbox padding size based on the width of the pseudo checkbox.
     * @private
     * @return {?}
     */
    function () {
        if (!SELECT_MULTIPLE_PANEL_PADDING_X && this.multiple) {
            /** @type {?} */
            var pseudoCheckbox = this.panel.nativeElement.querySelector('.mat-pseudo-checkbox');
            if (pseudoCheckbox) {
                SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + pseudoCheckbox.offsetWidth;
            }
        }
    };
    Object.defineProperty(MatSelect.prototype, "empty", {
        /** Whether the select has a value. */
        get: /**
         * Whether the select has a value.
         * @return {?}
         */
        function () {
            return !this._selectionModel || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MatSelect.prototype._initializeSelection = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(function () {
            _this._setSelectionByValue(_this.ngControl ? _this.ngControl.value : _this._value);
            _this.stateChanges.next();
        });
    };
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @private
     * @param {?} value
     * @return {?}
     */
    MatSelect.prototype._setSelectionByValue = /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.multiple && value) {
            if (!Array.isArray(value)) {
                throw getMatSelectNonArrayValueError();
            }
            this._selectionModel.clear();
            value.forEach(function (currentValue) { return _this._selectValue(currentValue); });
            this._sortValues();
        }
        else {
            this._selectionModel.clear();
            /** @type {?} */
            var correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.setActiveItem(correspondingOption);
            }
        }
        this._changeDetectorRef.markForCheck();
    };
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    /**
     * Finds and selects and option based on its value.
     * @private
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    MatSelect.prototype._selectValue = /**
     * Finds and selects and option based on its value.
     * @private
     * @param {?} value
     * @return {?} Option that has the corresponding value.
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var correspondingOption = this.options.find(function (option) {
            try {
                // Treat null as a special reset value.
                return option.value != null && _this._compareWith(option.value, value);
            }
            catch (error) {
                if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["isDevMode"])()) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    };
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @private
     * @return {?}
     */
    MatSelect.prototype._initKeyManager = /**
     * Sets up a key manager to listen to keyboard events on the overlay panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead()
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            // Restore focus to the trigger before closing. Ensures that the focus
            // position won't be lost if the user got focus into the overlay.
            _this.focus();
            _this.close();
        });
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this._destroy)).subscribe(function () {
            if (_this._panelOpen && _this.panel) {
                _this._scrollActiveOptionIntoView();
            }
            else if (!_this._panelOpen && !_this.multiple && _this._keyManager.activeItem) {
                _this._keyManager.activeItem._selectViaInteraction();
            }
        });
    };
    /** Drops current option subscriptions and IDs and resets from scratch. */
    /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @private
     * @return {?}
     */
    MatSelect.prototype._resetOptions = /**
     * Drops current option subscriptions and IDs and resets from scratch.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
            _this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !_this.multiple && _this._panelOpen) {
                _this.close();
                _this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        rxjs__WEBPACK_IMPORTED_MODULE_13__["merge"].apply(void 0, this.options.map(function (option) { return option._stateChanges; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(changedOrDestroyed))
            .subscribe(function () {
            _this._changeDetectorRef.markForCheck();
            _this.stateChanges.next();
        });
        this._setOptionIds();
    };
    /** Invoked when an option is clicked. */
    /**
     * Invoked when an option is clicked.
     * @private
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    MatSelect.prototype._onSelect = /**
     * Invoked when an option is clicked.
     * @private
     * @param {?} option
     * @param {?} isUserInput
     * @return {?}
     */
    function (option, isUserInput) {
        /** @type {?} */
        var wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            this._propagateChanges(option.value);
        }
        else {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    };
    /** Sorts the selected values in the selected based on their order in the panel. */
    /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @private
     * @return {?}
     */
    MatSelect.prototype._sortValues = /**
     * Sorts the selected values in the selected based on their order in the panel.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.multiple) {
            /** @type {?} */
            var options_1 = this.options.toArray();
            this._selectionModel.sort(function (a, b) {
                return _this.sortComparator ? _this.sortComparator(a, b, options_1) :
                    options_1.indexOf(a) - options_1.indexOf(b);
            });
            this.stateChanges.next();
        }
    };
    /** Emits change event to set the model value. */
    /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    MatSelect.prototype._propagateChanges = /**
     * Emits change event to set the model value.
     * @private
     * @param {?=} fallbackValue
     * @return {?}
     */
    function (fallbackValue) {
        /** @type {?} */
        var valueToEmit = null;
        if (this.multiple) {
            valueToEmit = ((/** @type {?} */ (this.selected))).map(function (option) { return option.value; });
        }
        else {
            valueToEmit = this.selected ? ((/** @type {?} */ (this.selected))).value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(new MatSelectChange(this, valueToEmit));
        this._changeDetectorRef.markForCheck();
    };
    /** Records option IDs to pass to the aria-owns property. */
    /**
     * Records option IDs to pass to the aria-owns property.
     * @private
     * @return {?}
     */
    MatSelect.prototype._setOptionIds = /**
     * Records option IDs to pass to the aria-owns property.
     * @private
     * @return {?}
     */
    function () {
        this._optionIds = this.options.map(function (option) { return option.id; }).join(' ');
    };
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @private
     * @return {?}
     */
    MatSelect.prototype._highlightCorrectOption = /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     * @private
     * @return {?}
     */
    function () {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    };
    /** Scrolls the active option into view. */
    /**
     * Scrolls the active option into view.
     * @private
     * @return {?}
     */
    MatSelect.prototype._scrollActiveOptionIntoView = /**
     * Scrolls the active option into view.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activeOptionIndex = this._keyManager.activeItemIndex || 0;
        /** @type {?} */
        var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_countGroupLabelsBeforeOption"])(activeOptionIndex, this.options, this.optionGroups);
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_getOptionScrollPosition"])(activeOptionIndex + labelCount, this._getItemHeight(), this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    };
    /** Focuses the select element. */
    /**
     * Focuses the select element.
     * @return {?}
     */
    MatSelect.prototype.focus = /**
     * Focuses the select element.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /** Gets the index of the provided option in the option list. */
    /**
     * Gets the index of the provided option in the option list.
     * @private
     * @param {?} option
     * @return {?}
     */
    MatSelect.prototype._getOptionIndex = /**
     * Gets the index of the provided option in the option list.
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @private
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayPosition = /**
     * Calculates the scroll position and x- and y-offsets of the overlay panel.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var items = this._getItemCount();
        /** @type {?} */
        var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        var scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        /** @type {?} */
        var maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        /** @type {?} */
        var selectedOptionOffset = this.empty ? 0 : (/** @type {?} */ (this._getOptionIndex(this._selectionModel.selected[0])));
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        /** @type {?} */
        var scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    };
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayScroll = /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionOffsetFromScrollTop = itemHeight * selectedIndex;
        /** @type {?} */
        var halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        /** @type {?} */
        var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    };
    /** Returns the aria-label of the select component. */
    /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabel = /**
     * Returns the aria-label of the select component.
     * @return {?}
     */
    function () {
        // If an ariaLabelledby value has been set by the consumer, the select should not overwrite the
        // `aria-labelledby` value by setting the ariaLabel to the placeholder.
        return this.ariaLabelledby ? null : this.ariaLabel || this.placeholder;
    };
    /** Returns the aria-labelledby of the select component. */
    /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    MatSelect.prototype._getAriaLabelledby = /**
     * Returns the aria-labelledby of the select component.
     * @return {?}
     */
    function () {
        if (this.ariaLabelledby) {
            return this.ariaLabelledby;
        }
        // Note: we use `_getAriaLabel` here, because we want to check whether there's a
        // computed label. `this.ariaLabel` is only the user-specified label.
        if (!this._parentFormField || !this._parentFormField._hasFloatingLabel() ||
            this._getAriaLabel()) {
            return null;
        }
        return this._parentFormField._labelId || null;
    };
    /** Determines the `aria-activedescendant` to be set on the host. */
    /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    MatSelect.prototype._getAriaActiveDescendant = /**
     * Determines the `aria-activedescendant` to be set on the host.
     * @return {?}
     */
    function () {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    };
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @private
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetX = /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        /** @type {?} */
        var viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        var isRtl = this._isRtl();
        /** @type {?} */
        var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        /** @type {?} */
        var offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else {
            /** @type {?} */
            var selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        /** @type {?} */
        var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        /** @type {?} */
        var rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    };
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @private
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._calculateOverlayOffsetY = /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     * @private
     * @param {?} selectedIndex
     * @param {?} scrollBuffer
     * @param {?} maxScroll
     * @return {?}
     */
    function (selectedIndex, scrollBuffer, maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        /** @type {?} */
        var optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this._disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            /** @type {?} */
            var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            /** @type {?} */
            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            /** @type {?} */
            var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    };
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @private
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._checkOverlayWithinViewport = /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     * @private
     * @param {?} maxScroll
     * @return {?}
     */
    function (maxScroll) {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var viewportSize = this._viewportRuler.getViewportSize();
        /** @type {?} */
        var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        /** @type {?} */
        var panelHeightTop = Math.abs(this._offsetY);
        /** @type {?} */
        var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        /** @type {?} */
        var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    };
    /** Adjusts the overlay panel up to fit in the viewport. */
    /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @private
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    MatSelect.prototype._adjustPanelUp = /**
     * Adjusts the overlay panel up to fit in the viewport.
     * @private
     * @param {?} panelHeightBottom
     * @param {?} bottomSpaceAvailable
     * @return {?}
     */
    function (panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        /** @type {?} */
        var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
        }
    };
    /** Adjusts the overlay panel down to fit in the viewport. */
    /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @private
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    MatSelect.prototype._adjustPanelDown = /**
     * Adjusts the overlay panel down to fit in the viewport.
     * @private
     * @param {?} panelHeightTop
     * @param {?} topSpaceAvailable
     * @param {?} maxScroll
     * @return {?}
     */
    function (panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        /** @type {?} */
        var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
        }
    };
    /** Sets the transform origin point based on the selected option. */
    /**
     * Sets the transform origin point based on the selected option.
     * @private
     * @return {?}
     */
    MatSelect.prototype._getOriginBasedOnOption = /**
     * Sets the transform origin point based on the selected option.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var itemHeight = this._getItemHeight();
        /** @type {?} */
        var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        /** @type {?} */
        var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return "50% " + originY + "px 0px";
    };
    /** Calculates the amount of items in the select. This includes options and group labels. */
    /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @private
     * @return {?}
     */
    MatSelect.prototype._getItemCount = /**
     * Calculates the amount of items in the select. This includes options and group labels.
     * @private
     * @return {?}
     */
    function () {
        return this.options.length + this.optionGroups.length;
    };
    /** Calculates the height of the select's options. */
    /**
     * Calculates the height of the select's options.
     * @private
     * @return {?}
     */
    MatSelect.prototype._getItemHeight = /**
     * Calculates the height of the select's options.
     * @private
     * @return {?}
     */
    function () {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatSelect.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this._ariaDescribedby = ids.join(' ');
    };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    MatSelect.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    function () {
        this.focus();
        this.open();
    };
    Object.defineProperty(MatSelect.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._panelOpen || !this.empty;
        },
        enumerable: true,
        configurable: true
    });
    MatSelect.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{selector: 'mat-select',
                    exportAs: 'matSelect',
                    template: "<div cdk-overlay-origin class=\"mat-select-trigger\" aria-hidden=\"true\" (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger><div class=\"mat-select-value\" [ngSwitch]=\"empty\"><span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\u00A0'}}</span> <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\"><span *ngSwitchDefault>{{triggerValue || '\u00A0'}}</span><ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content></span></div><div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div></div><ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayPositions]=\"_positions\" [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width\" [cdkConnectedOverlayOffsetY]=\"_offsetY\" (backdropClick)=\"close()\" (attach)=\"_onAttached()\" (detach)=\"close()\"><div class=\"mat-select-panel-wrap\" [@transformPanelWrap]><div #panel class=\"mat-select-panel {{ _getPanelTheme() }}\" [ngClass]=\"panelClass\" [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\" (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\" [style.transformOrigin]=\"_transformOrigin\" [style.font-size.px]=\"_triggerFontSize\" (keydown)=\"_handleKeydown($event)\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mat-select{display:inline-block;width:100%;outline:0}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform .4s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}@media (-ms-high-contrast:active){.mat-select-panel{outline:solid 1px}}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color .4s .133s cubic-bezier(.25,.8,.25,1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}"],
                    inputs: ['disabled', 'disableRipple', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        'role': 'listbox',
                        '[attr.id]': 'id',
                        '[attr.tabindex]': 'tabIndex',
                        '[attr.aria-label]': '_getAriaLabel()',
                        '[attr.aria-labelledby]': '_getAriaLabelledby()',
                        '[attr.aria-required]': 'required.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-owns]': 'panelOpen ? _optionIds : null',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                        '[class.mat-select-disabled]': 'disabled',
                        '[class.mat-select-invalid]': 'errorState',
                        '[class.mat-select-required]': 'required',
                        '[class.mat-select-empty]': 'empty',
                        'class': 'mat-select',
                        '(keydown)': '_handleKeydown($event)',
                        '(focus)': '_onFocus()',
                        '(blur)': '_onBlur()',
                    },
                    animations: [
                        matSelectAnimations.transformPanelWrap,
                        matSelectAnimations.transformPanel
                    ],
                    providers: [
                        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldControl"], useExisting: MatSelect },
                        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                    ],
                },] },
    ];
    /** @nocollapse */
    MatSelect.ctorParameters = function () { return [
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ViewportRuler"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["ErrorStateMatcher"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Attribute"], args: ['tabindex',] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["LiveAnnouncer"] }
    ]; };
    MatSelect.propDecorators = {
        trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['trigger',] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: ['panel',] }],
        overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"],] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], { descendants: true },] }],
        optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptgroup"],] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"], args: [MatSelectTrigger,] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"], args: ['aria-labelledby',] }],
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['opened',] }],
        _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"], args: ['closed',] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return MatSelect;
}(_MatSelectMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatSelectModule = /** @class */ (function () {
    function MatSelectModule() {
    }
    MatSelectModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    ],
                    exports: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"]],
                    declarations: [MatSelect, MatSelectTrigger],
                    providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
                },] },
    ];
    return MatSelectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=select.es5.js.map


/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n    max-width: 800px;\n    margin: auto;\n    padding: 0px;\n    height: 100%;\n    background: rgba(214, 212, 212, 0.048);\n    border: .4px solid rgb(59, 59, 59);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mat-card-header {\n   \n    font-weight: bold;\n    display: inline;\n    \n}\n\n.mat-card-title  {\n    margin-left: -16px;\n    margin-right: -16px;\n    margin-top: 0px;\n    color: rgba(0, 0, 0, 0.836);\n    background: rgba(34, 34, 34, 0.13);\n    padding: 5px;\n}\n\n.mat-card-content {\n    margin: 0px;\n}\n\n.mat-card>.mat-card-actions:last-child {\n    margin-bottom: 5px;\n   \n}\n\n.mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\n    margin: 0px;\n    margin-left: 22px;\n}\n\n.mat-expansion-panel {\n    background: rgba(255, 254, 254, 0.151);\n}\n\n.requirements {\n    margin-left: 30px;\n    margin-right: 30px;\n    \n}\n\n.content .description{\n    font-size: 20px;\n    margin-left: 30px;\n    margin-right: 30px;\n}\n\n.content .date,.location,.duration{\n    margin-left: 40px;\n    margin-right: 40px;\n}\n\n.table{\n    width: 100%;\n    height: 100%;\n    overflow-x:  auto;\n    overflow-y:  auto;\n}\n\n.mat-card {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0FBQzdFOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1jYXJkL2NvbGxhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XG4gICAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBcbn1cblxuLm1hdC1jYXJkLXRpdGxlICB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgXG59XG4ubWF0LWNhcmQtYWN0aW9ucyAubWF0LWJ1dHRvbiwgLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1yYWlzZWQtYnV0dG9ue1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC4xNTEpO1xufVxuXG4ucmVxdWlyZW1lbnRzIHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgXG59XG5cblxuXG4uY29udGVudCAuZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cblxuLnRhYmxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiAgYXV0bztcbiAgICBvdmVyZmxvdy15OiAgYXV0bztcbn1cblxuLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header >\n\n    <mat-card-title> \n\n      <mat-grid-list  cols=\"2\" rowHeight=\"4:1\">\n        <mat-grid-tile>{{collabData?.title}}</mat-grid-tile>\n        <mat-grid-tile><mat-icon>group</mat-icon> : {{collabData?.members.length}} / {{ collabData?.size}}</mat-grid-tile>\n      </mat-grid-list>\n      \n    </mat-card-title>\n\n  </mat-card-header>\n  <mat-card-content>\n    <mat-accordion>\n        <div class = \"content\">\n            <p class=\"description\">Description: {{ collabData?.description }} </p>\n            <p class=\"date\">Date: {{ collabData?.date | date:'medium' }}</p>\n            <p class=\"duration\">Apply By: {{ collabData?.duration | date:'medium' }}</p>\n            <p class=\"location\">Location: {{ collabData?.location }}</p>\n\n            <div class = \"requirements\">\n                <mat-chip-list>\n                    Classes: \n                    <mat-chip *ngFor = \"let class of collabData?.classes\">\n                      {{ class }}\n                    </mat-chip>\n                </mat-chip-list>\n                <br>\n                <mat-chip-list>\n                    Skills: \n                    <mat-chip *ngFor=\"let skill of collabData?.skills\">\n                      {{ skill }}\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n      \n        </div>\n        <br>\n        \n        <!-- Event Binding: In this case the event is (opened) -->\n        <mat-expansion-panel \n                       (opened)=\"panelOpenState = true && makeTable()\"\n                       (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n              <h4>Members</h4>\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n          </mat-expansion-panel-header>\n\n            <ng-container class=\"table-container\">\n              <div class=\"table\">\n                <collab-table [table] = \"table\" [xAxisReq] = \"xAxisReq\"></collab-table>\n              </div>\n            </ng-container>\n          \n          \n        </mat-expansion-panel>\n    </mat-accordion>\n    \n  </mat-card-content>\n\n  <mat-expansion-panel \n                       (opened)=\"panelOpenState = true && actionCheck()\"\n                       (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <h4>Actions</h4>\n          </mat-panel-title>\n          <mat-panel-description>\n          </mat-panel-description>\n          </mat-expansion-panel-header>\n            <mat-card-actions>\n              <button *ngIf=\"checkPartOf() == false\" mat-raised-button color = \"primary\" (click) = \"joinCollab()\"  > Join </button>\n              <button *ngIf=\"checkPartOf() == true\"  mat-raised-button color = \"primary\" (click) = \"leaveCollab()\" > Leave </button>\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (click) = \"deleteCollab()\"> Delete </button>\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (click) = \"editCollab()\">    Edit</button>\n            </mat-card-actions>   \n        </mat-expansion-panel>\n\n  \n\n</mat-card>"

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
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/tableBuilder.model */ "./src/app/shared/models/tableBuilder.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent(userService, collabService, router) {
        this.userService = userService;
        this.collabService = collabService;
        this.router = router;
        this.table = [];
        this.xAxisReq = [];
        this.alreadyBuilt = false;
        this.partOf = false;
        this.isOwner = false;
    }
    CollabCardComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserdetails().subscribe(function (userData) { return _this.userData = userData; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
                        if (!this.alreadyBuilt) return [3 /*break*/, 1];
                        return [3 /*break*/, 6];
                    case 1:
                        this.alreadyBuilt = true;
                        yAxisUsers = void 0;
                        //Fuction will stop here until function getAllRequred returns
                        _a = this;
                        return [4 /*yield*/, this.getAllRequired()];
                    case 2:
                        //Fuction will stop here until function getAllRequred returns
                        _a.xAxisReq = _b.sent();
                        //Will members of the collaboration
                        yAxisUsers = this.collabData.members;
                        _i = 0, yAxisUsers_1 = yAxisUsers;
                        _b.label = 3;
                    case 3:
                        if (!(_i < yAxisUsers_1.length)) return [3 /*break*/, 6];
                        y = yAxisUsers_1[_i];
                        return [4 /*yield*/, this.checkIfKnown(y, this.xAxisReq)];
                    case 4:
                        tableRow = _b.sent();
                        this.table.push(tableRow);
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CollabCardComponent.prototype.RefreshPage = function () {
        this.getAllRequired();
        //Will members of the collaboration
        this.yAxisUsers = this.collabData.members;
    };
    //WIll check if a user knows skill or class, from the list of classes and skills that a user knows
    CollabCardComponent.prototype.checkIfKnown = function (userName, listOfRequired) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tmp, knownByUser, _i, listOfRequired_1, x;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tmp = null;
                        tmp = new src_app_shared_models_tableBuilder_model__WEBPACK_IMPORTED_MODULE_5__["TableBuilder"](userName);
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
    CollabCardComponent.prototype.actionCheck = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isUserOwner()];
                    case 1:
                        _a.sent();
                        this.isPartOf();
                        return [2 /*return*/];
                }
            });
        });
    };
    CollabCardComponent.prototype.isUserOwner = function () {
        if (this.collabData.owner == this.userData['username']) {
            this.isOwner = true;
        }
        else {
            this.isOwner = false;
        }
    };
    CollabCardComponent.prototype.isPartOf = function () {
        for (var _i = 0, _a = this.collabData.members; _i < _a.length; _i++) {
            var member = _a[_i];
            if (member == this.userData['username']) {
                this.partOf = true;
            }
        }
    };
    CollabCardComponent.prototype.checkPartOf = function () {
        return this.partOf;
    };
    CollabCardComponent.prototype.checkOwner = function () {
        return this.isOwner;
    };
    CollabCardComponent.prototype.joinCollab = function () {
        this.collabService.joinCollab(this.collabData._id)
            .subscribe(function (res) { console.log(res); });
    };
    CollabCardComponent.prototype.leaveCollab = function () {
        this.collabService.leaveCollab(this.collabData._id)
            .subscribe(function (res) { console.log(res); });
    };
    CollabCardComponent.prototype.deleteCollab = function () {
        this.collabService.deleteCollab(this.collabData._id)
            .subscribe(function (res) { console.log(res); });
    };
    CollabCardComponent.prototype.editCollab = function () {
        this.router.navigate(['/home/editcollab/', this.collabData._id["$oid"]]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_models_collab_model__WEBPACK_IMPORTED_MODULE_3__["CollabModel"])
    ], CollabCardComponent.prototype, "collabData", void 0);
    CollabCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'collab-card',
            template: __webpack_require__(/*! ./collab-card.component.html */ "./src/app/home/collab-card/collab-card.component.html"),
            styles: [__webpack_require__(/*! ./collab-card.component.css */ "./src/app/home/collab-card/collab-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
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

module.exports = "p {\n    padding: 16px;\n    text-align: center;\n  \n  }\n\n  .collab {\n    margin-top:25px;\n    margin-bottom: 30px;\n  }\n\n  .add-collab-button {\n    z-index: 5; \n    position: fixed; \n    display: flex;\n    align-self: flex-end; \n    bottom: 7%; \n    margin-bottom: 5px;\n    margin-left: 80%; \n  }\n\n  \n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1saXN0L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuXG4gIC5jb2xsYWIge1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmFkZC1jb2xsYWItYnV0dG9uIHtcbiAgICB6LWluZGV4OiA1OyBcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxuICAgIGJvdHRvbTogNyU7IFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tbGVmdDogODAlOyBcbiAgfVxuXG4gIFxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--\n     selected.value: Is a value from .ts file.\n     selectedIndex: DOM value\n   -->\n   <mat-tab-group [selectedIndex] = \"selected.value\" \n                  (selectedIndexChange) =\"currentTab($event)\" >\n\n      <mat-tab label=\"All Collabs\">\n        <ng-template matTabContent>\n          <ng-container *ngFor = \"let collab of collabData\">\n            <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n            </div>      \n          </ng-container>\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"My Collabs\">\n        <ng-template matTabContent>\n            <ng-container *ngFor = \"let collab of collabData\">\n              <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n              </div>      \n            </ng-container>\n        </ng-template>\n      </mat-tab>\n\n      <mat-tab label=\"Recommended Collabs\">\n        <ng-template matTabContent>\n          <ng-container *ngFor = \"let collab of collabData\">\n            <div class =\"collab\">\n                <!-- Property binding from component to component using @Input() and @Output -->\n                <collab-card [collabData] = \"collab\"></collab-card>\n            </div>      \n          </ng-container>\n        </ng-template>\n      </mat-tab>\n\n   </mat-tab-group>\n\n   <div class = \"add-collab-button\">\n     <a mat-fab color = \"primary\" routerLink=\"/home/createcollab\" style=\"margin-right: 14px\">\n      <mat-icon>add</mat-icon>\n     </a>\n   </div>\n     \n          \n            \n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, router, collabService) {
        this.userService = userService;
        this.router = router;
        this.collabService = collabService;
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.userDetails();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentTab(0);
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
            //console.log(data);   
        });
    };
    HomeComponent.prototype.myCollabs = function () {
        this.collabService.myCollabs().subscribe(function (data) {
            //console.log(data);   
        });
    };
    HomeComponent.prototype.currentTab = function ($event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = $event;
                        switch (_a) {
                            case 0: return [3 /*break*/, 1];
                            case 1: return [3 /*break*/, 2];
                            case 2: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        {
                            this.collabService.getCollabs("getActiveCollabs").subscribe(function (data) { return _this.collabData = data.reverse(); });
                            return [3 /*break*/, 7];
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.collabService.getCollabs("getCollabDetails").subscribe(function (data) { return _this.collabData = data.reverse(); })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        console.log(this.userData);
                        return [4 /*yield*/, this.collabService.getReqCollabs(this.userData["classes"], this.userData["skills"]).subscribe(function (data) { return _this.collabData = data.reverse(); })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        {
                            return [3 /*break*/, 7];
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/collab-list/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/collab-list/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_2__["CollabsService"]])
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

module.exports = "table { \n    width: 100%; \n    border-collapse: collapse; \n  }\n  /* Zebra striping */\n  tr:nth-of-type(odd) { \n    background: #eee; \n  }\n  th { \n    background: #333; \n    color: white; \n    font-weight: bold; \n  }\n  td, th { \n    padding: 6px; \n    border: 1px solid #ccc; \n    text-align: left; \n  }\n  td a{\n    display: block;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0EsbUJBQW1CO0VBQ25CO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGNBQWM7O0VBRWhCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcbiAgfVxuICAvKiBaZWJyYSBzdHJpcGluZyAqL1xuICB0cjpudGgtb2YtdHlwZShvZGQpIHsgXG4gICAgYmFja2dyb3VuZDogI2VlZTsgXG4gIH1cbiAgdGggeyBcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcbiAgICBjb2xvcjogd2hpdGU7IFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcbiAgfVxuICB0ZCwgdGggeyBcbiAgICBwYWRkaW5nOiA2cHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxuICB9XG5cbiAgdGQgYXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-table/collab-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/collab-table/collab-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table>\n    <tr *ngFor = \"let row of table\">\n      <td>\n        <button mat-button color= \"primary\" (click) = \"goToProfile(row.userName)\">{{ row.userName }}</button>\n      </td>\n      <td *ngFor = \"let req of row.list\" [style.background-color] = \"req.knows ? '#ccffcc' : '#ffcccc'\"> {{ req.nameOf }} </td>\n    </tr>\n</table>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CollabTableComponent = /** @class */ (function () {
    function CollabTableComponent(router) {
        this.router = router;
        this.table = [];
        this.xAxisReq = [];
    }
    CollabTableComponent.prototype.ngOnInit = function () {
        //console.log(this.xAxisReq);
    };
    CollabTableComponent.prototype.goToProfile = function (user) {
        this.router.navigate(['/user/', user]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CollabTableComponent);
    return CollabTableComponent;
}());



/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    width: 70%;\n    margin-top: 10px;\n}\n\n.container {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 10%;\n    margin-right: 10%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n}\n\n.example-chip-list {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jcmVhdGUtY29sbGFiL2NyZWF0ZS1jb2xsYWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUVBQXlFOztBQUU3RTs7QUFFQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY3JlYXRlLWNvbGxhYi9jcmVhdGUtY29sbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuXG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Steppers -->\n<div class = \"container\">\n        <mat-vertical-stepper [linear] = \"true\" #stepper>\n    \n                <mat-step [stepControl] = \"firstFormGroup\">\n                    <form [formGroup] = \"firstFormGroup\" (ngSubmit) = \"onSubmit()\">\n                        <ng-template matStepLabel >Fill in Collab Info</ng-template>\n                        <mat-form-field>\n                            <input matInput placeholder = \"Collab Title...\" formControlName = \"title\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                            <textarea matInput placeholder = \"Description...\" formControlName = \"description\" required></textarea>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input matInput placeholder = \"Location...\" formControlName = \"location\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Collab Size...\" formControlName = \"size\" required>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input formControlName = \"date\" matInput [owlDateTimeTrigger]=\"dt\" placeholder = \"Choose a date\" [owlDateTime]=\"dt\" required>\n                                <owl-date-time #dt></owl-date-time>\n                        </mat-form-field>\n                        <mat-form-field>\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Duration...\" formControlName = \"duration\" required>\n                        </mat-form-field>\n                    </form>\n                </mat-step>\n                <mat-step [stepControl] = \"secondFormGroup\" >\n                    <ng-template matStepLabel>Add Classes and Skills</ng-template>\n                    <div>\n                        <mat-form-field class=\"example-chip-list\">\n                            <mat-chip-list #chipListSkills>\n                                <mat-chip\n                                    *ngFor=\"let skill of skills\"\n                                    [selectable]=\"selectable\"\n                                    [removable]=\"removable\"\n                                    (removed)=\"removeSkill(skill)\">\n                                    {{ skill }}\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input\n                                    placeholder=\"New Skill...\"\n                                    #skillInput\n                                    [formControl]=\"skillCtrl\"\n                                    [matAutocomplete]=\"auto\"\n                                    [matChipInputFor]=\"chipListSkills\"\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\n                                    (matChipInputTokenEnd)=\"addSkill($event)\">\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                                        <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                                            {{ skill }}\n                                        </mat-option>\n                                    </mat-autocomplete>\n                            </mat-chip-list>\n                                    \n                        </mat-form-field>\n                        <mat-form-field class=\"example-chip-list\">\n                            <mat-chip-list #chipListClasses>\n                                <mat-chip\n                                    *ngFor = \"let class of classes\"\n                                    [selectable] = \"selectable\"\n                                    [removable] = \"removable\"\n                                    (removed) = \"removeClass(class)\">\n                                    {{ class }}\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input \n                                    placeholder=\"New Class...\"\n                                    #classInput\n                                    [formControl]=\"classCtrl\"\n                                    [matAutocomplete]=\"auto2\"\n                                    [matChipInputFor]=\"chipListClasses\"\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\n                                    (matChipInputTokenEnd)=\"addClass($event)\">\n                                    <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                                        <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                                            {{ class }}\n                                        </mat-option>\n                                    </mat-autocomplete>\n                            </mat-chip-list>\n\n                        </mat-form-field>\n                    </div>\n                </mat-step>\n                <mat-step>\n                    <ng-template matStepLabel> Confirm Your Information</ng-template>\n                    <div>\n                        <button mat-raised-button (click) = \"createCollab()\" color=\"primary\">Done</button>\n                    </div>\n                </mat-step>\n            \n        </mat-vertical-stepper>\n    </div>"

/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateCollabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCollabComponent", function() { return CreateCollabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var CreateCollabComponent = /** @class */ (function () {
    function CreateCollabComponent(_formBuilder, userService, collabService, router) {
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.collabService = collabService;
        this.router = router;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
        this.collabData = new src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"];
    }
    CreateCollabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
        this.firstFormGroup = this._formBuilder.group({
            title: [this.collabData.title, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: [this.collabData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: [this.collabData.location, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            size: [this.collabData.size, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            date: [this.collabData.date, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            duration: [this.collabData.duration, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    CreateCollabComponent.prototype.addSkill = function (event) {
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
    CreateCollabComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    CreateCollabComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    CreateCollabComponent.prototype.addClass = function (event) {
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
    CreateCollabComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    CreateCollabComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    CreateCollabComponent.prototype.createCollab = function () {
        var _this = this;
        this.collabData = Object.assign({}, this.firstFormGroup.value);
        this.collabData.skills = this.skills;
        this.collabData.classes = this.classes;
        this.collabData.date = (this.collabData.date).valueOf();
        this.collabData.duration *= 86400000;
        this.collabData.duration += this.collabData.date;
        var createResult;
        this.collabService.createCollab(this.collabData)
            .subscribe(function (result) {
            if (result['success']) {
                _this.router.navigate(['/home']);
            }
            else {
                (function (error) { console.error('success' + error); });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"])
    ], CreateCollabComponent.prototype, "currentCollab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], CreateCollabComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], CreateCollabComponent.prototype, "matAutocomplete1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], CreateCollabComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], CreateCollabComponent.prototype, "matAutocomplete2", void 0);
    CreateCollabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'create-collab',
            template: __webpack_require__(/*! ./create-collab.component.html */ "./src/app/home/create-collab/create-collab.component.html"),
            styles: [__webpack_require__(/*! ./create-collab.component.css */ "./src/app/home/create-collab/create-collab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], CreateCollabComponent);
    return CreateCollabComponent;
}());



/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 90%;\n    margin-left: 15px;\n}\n\n.example-chip-list[_ngcontent-c8] {\n    width: 90%;\n}\n\n.container {\n    margin-top: 50px;\n    margin-bottom: 50px;\n    margin-left: 10%;\n    margin-right: 10%;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.example-chip-list {\n    width: 100%;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9lZGl0LWNvbGxhYi9lZGl0LWNvbGxhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2VkaXQtY29sbGFiL2VkaXQtY29sbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdFtfbmdjb250ZW50LWM4XSB7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n        <form #form = \"ngForm\" (ngSubmit) = \"update(form.value)\">\n                <br>\n                <mat-form-field>\n                <input [(ngModel)] = \"collabData['title']\" name = \"title\" id = \"title\" type = \"text\" class = \"form-control\"\n                        #title = \"ngModel\" matInput placeholder = \"Collab Title...\" required>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                <textarea [(ngModel)] = \"collabData['description']\" name = \"description\" id = \"description\" type = \"text\" class = \"form-control\"\n                        #description = \"ngModel\" matInput placeholder = \"Collab Description...\" required></textarea>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                <input [(ngModel)] = \"collabData['location']\" name = \"location\" id = \"location\" type = \"text\" class = \"form-control\"\n                        #location = \"ngModel\" matInput placeholder = \"Location...\" required>\n                </mat-form-field>\n                <br>\n                <mat-form-field>\n                        <input [(ngModel)] = \"collabData['size']\" name = \"size\" id = \"size\" type = \"text\" class = \"form-control\"\n                                #size = \"ngModel\" matInput placeholder = \"Collab Size...\" required>\n                </mat-form-field>\n                <mat-form-field>\n                        <input [ngModel] = \"collabData['date'] | date:'y-MM-dd' \" (ngModelChange)=\"collabData['date'] = $event\"\n                                name = \"date\" id=\"date\" class = \"form-control\" \n                                #date = \"ngModel\" matInput placeholder = \"Choose a date\" [owlDateTimeTrigger]=\"dt\" [owlDateTime]=\"dt\" required>\n                        <owl-date-time #dt></owl-date-time>\n                </mat-form-field>\n                <mat-form-field>\n                        <input [ngModel] = \"collabData['duration'] | date:'yyyy-MM-dd' \" name = \"duration\" id = \"duration\"  class = \"form-control\"\n                                #duration = \"ngModel\" matInput placeholder = \"Duration...\" [owlDateTimeTrigger]=\"dt2\" [owlDateTime]=\"dt2\" required>\n                        <owl-date-time #dt2></owl-date-time>\n                </mat-form-field>\n                <mat-form-field class=\"example-chip-list\">\n                        <mat-chip-list #chipListSkills>\n                                <mat-chip\n                                *ngFor=\"let skill of skills\"\n                                [selectable]=\"selectable\"\n                                [removable]=\"removable\"\n                                (removed)=\"removeSkill(skill)\">\n                                {{ skill }}\n                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input\n                                placeholder=\"New Skill...\"\n                                #skillInput\n                                [formControl]=\"skillCtrl\"\n                                [matAutocomplete]=\"auto\"\n                                [matChipInputFor]=\"chipListSkills\"\n                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                [matChipInputAddOnBlur]=\"addOnBlur\"\n                                (matChipInputTokenEnd)=\"addSkill($event)\">\n                                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\n                                        <mat-option *ngFor=\"let skill of filteredSkills\" [value]=\"skill\">\n                                        {{ skill }}\n                                        </mat-option>\n                                </mat-autocomplete>\n                        </mat-chip-list>             \n                </mat-form-field>\n                <br>\n                <mat-form-field class=\"example-chip-list\">\n                        <mat-chip-list #chipListClasses>\n                                <mat-chip\n                                *ngFor = \"let class of classes\"\n                                [selectable] = \"selectable\"\n                                [removable] = \"removable\"\n                                (removed) = \"removeClass(class)\">\n                                {{ class }}\n                                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                                </mat-chip>\n                                <input \n                                placeholder=\"New Class...\"\n                                #classInput\n                                [formControl]=\"classCtrl\"\n                                [matAutocomplete]=\"auto2\"\n                                [matChipInputFor]=\"chipListClasses\"\n                                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                                [matChipInputAddOnBlur]=\"addOnBlur\"\n                                (matChipInputTokenEnd)=\"addClass($event)\">\n                        <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"selectedClass($event)\">\n                                <mat-option *ngFor=\"let class of filteredClasses\" [value]=\"class\">\n                                {{ class }}\n                                </mat-option>\n                        </mat-autocomplete>\n                </mat-chip-list>\n\n                </mat-form-field>\n                <br>\n                <button mat-raised-button>Update</button>\n                <br>\n        </form>\n       \n        \n</div>"

/***/ }),

/***/ "./src/app/home/edit-collab/edit-collab.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/edit-collab/edit-collab.component.ts ***!
  \***********************************************************/
/*! exports provided: EditCollabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCollabComponent", function() { return EditCollabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/collab.model */ "./src/app/shared/models/collab.model.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var EditCollabComponent = /** @class */ (function () {
    function EditCollabComponent(userService, collabService, activeRoute) {
        var _this = this;
        this.userService = userService;
        this.collabService = collabService;
        this.activeRoute = activeRoute;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        //Variables for Skills.
        this.skillCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.skills = [];
        this.allSkills = [];
        //Variables for Classes.
        this.classCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.classes = [];
        this.allClasses = [];
        this.collabData = new src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"];
        this.activeRoute.paramMap
            .subscribe(function (params) {
            _this._id = params.get('_id');
        });
    }
    EditCollabComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCollabDetails(this._id)];
                    case 1:
                        _a.sent();
                        this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchSkills(query); })).subscribe(function (skills) { return _this.filteredSkills = skills["matches"]; });
                        this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function (query) { return _this.userService.searchClasses(query); })).subscribe(function (classes) { return _this.filteredClasses = classes["matches"]; });
                        return [2 /*return*/];
                }
            });
        });
    };
    EditCollabComponent.prototype.getCollabDetails = function (id) {
        var _this = this;
        this.collabService.getSingleCollab(id).subscribe(function (res) {
            _this.collabData = res['0'];
            _this.skills = res['0']['skills'];
            _this.classes = res['0']['classes'];
            console.log(_this.collabData);
        });
    };
    EditCollabComponent.prototype.update = function (collabUpdatedData) {
        console.log(collabUpdatedData);
        console.log(this.classes);
        console.log(this.skills);
    };
    EditCollabComponent.prototype.addSkill = function (event) {
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
    EditCollabComponent.prototype.removeSkill = function (skill) {
        var index = this.skills.indexOf(skill);
        if (index >= 0) {
            this.skills.splice(index, 1);
        }
    };
    EditCollabComponent.prototype.selectedSkill = function (event) {
        this.skills.push(event.option.viewValue);
        this.skillInput.nativeElement.value = '';
        this.skillCtrl.setValue(null);
    };
    EditCollabComponent.prototype.addClass = function (event) {
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
    EditCollabComponent.prototype.removeClass = function (_class) {
        var index = this.classes.indexOf(_class);
        if (index >= 0) {
            this.classes.splice(index, 1);
        }
    };
    EditCollabComponent.prototype.selectedClass = function (event) {
        this.classes.push(event.option.viewValue);
        this.classInput.nativeElement.value = '';
        this.classCtrl.setValue(null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_models_collab_model__WEBPACK_IMPORTED_MODULE_1__["CollabModel"])
    ], EditCollabComponent.prototype, "currentCollab", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('skillInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditCollabComponent.prototype, "skillInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], EditCollabComponent.prototype, "matAutocomplete1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('classInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"])
    ], EditCollabComponent.prototype, "classInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"])('auto2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"])
    ], EditCollabComponent.prototype, "matAutocomplete2", void 0);
    EditCollabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-edit-collab',
            template: __webpack_require__(/*! ./edit-collab.component.html */ "./src/app/home/edit-collab/edit-collab.component.html"),
            styles: [__webpack_require__(/*! ./edit-collab.component.css */ "./src/app/home/edit-collab/edit-collab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_3__["CollabsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], EditCollabComponent);
    return EditCollabComponent;
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
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-collab/edit-collab.component */ "./src/app/home/edit-collab/edit-collab.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    {
        path: '',
        component: _collab_list_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: "collabinfo",
        component: _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_2__["CollabCardComponent"]
    },
    {
        path: "createcollab",
        component: _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_1__["CreateCollabComponent"]
    },
    {
        path: "editcollab/:_id",
        component: _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_4__["EditCollabComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
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
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./collab-table/collab-table.component */ "./src/app/home/collab-table/collab-table.component.ts");
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-collab/edit-collab.component */ "./src/app/home/edit-collab/edit-collab.component.ts");














//Material Components














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_21__["CollabCardComponent"], _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_22__["CollabTableComponent"], _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_23__["CreateCollabComponent"], _edit_collab_edit_collab_component__WEBPACK_IMPORTED_MODULE_27__["EditCollabComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_13__["HomeRoutingModule"],
                //Angular Material
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollDispatchModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__["OwlNativeDateTimeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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