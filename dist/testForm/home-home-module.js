(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/cdk/esm5/stepper.es5.js":
/*!*******************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/stepper.es5.js ***!
  \*******************************************************/
/*! exports provided: StepperSelectionEvent, STEP_STATE, STEPPER_GLOBAL_OPTIONS, MAT_STEPPER_GLOBAL_OPTIONS, CdkStep, CdkStepper, CdkStepLabel, CdkStepperNext, CdkStepperPrevious, CdkStepperModule, CdkStepHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperSelectionEvent", function() { return StepperSelectionEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_STATE", function() { return STEP_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_GLOBAL_OPTIONS", function() { return STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_GLOBAL_OPTIONS", function() { return MAT_STEPPER_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStep", function() { return CdkStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepper", function() { return CdkStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepLabel", function() { return CdkStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperNext", function() { return CdkStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperPrevious", function() { return CdkStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepperModule", function() { return CdkStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkStepHeader", function() { return CdkStepHeader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
var CdkStepLabel = /** @class */ (function () {
    function CdkStepLabel(/** @docs-private */ template) {
        this.template = template;
    }
    CdkStepLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepLabel]',
                },] },
    ];
    /** @nocollapse */
    CdkStepLabel.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
    ]; };
    return CdkStepLabel;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepHeader = /** @class */ (function () {
    function CdkStepHeader(_elementRef) {
        this._elementRef = _elementRef;
    }
    /** Focuses the step header. */
    /**
     * Focuses the step header.
     * @return {?}
     */
    CdkStepHeader.prototype.focus = /**
     * Focuses the step header.
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    CdkStepHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepHeader]',
                    host: {
                        'role': 'tab',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkStepHeader.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return CdkStepHeader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Used to generate unique ID for each stepper component.
 * @type {?}
 */
var nextId = 0;
/**
 * Change event emitted on selection changes.
 */
var  /**
 * Change event emitted on selection changes.
 */
StepperSelectionEvent = /** @class */ (function () {
    function StepperSelectionEvent() {
    }
    return StepperSelectionEvent;
}());
/**
 * Enum to represent the different states of the steps.
 * @type {?}
 */
var STEP_STATE = {
    NUMBER: 'number',
    EDIT: 'edit',
    DONE: 'done',
    ERROR: 'error'
};
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @type {?}
 */
var STEPPER_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('STEPPER_GLOBAL_OPTIONS');
/**
 * InjectionToken that can be used to specify the global stepper options.
 * @deprecated Use `STEPPER_GLOBAL_OPTIONS` instead.
 * \@breaking-change 8.0.0.
 * @type {?}
 */
var MAT_STEPPER_GLOBAL_OPTIONS = STEPPER_GLOBAL_OPTIONS;
var CdkStep = /** @class */ (function () {
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    function CdkStep(_stepper, stepperOptions) {
        this._stepper = _stepper;
        /**
         * Whether user has seen the expanded step content or not.
         */
        this.interacted = false;
        this._editable = true;
        this._optional = false;
        this._customCompleted = null;
        this._customError = null;
        this._stepperOptions = stepperOptions ? stepperOptions : {};
        this._displayDefaultIndicatorType = this._stepperOptions.displayDefaultIndicatorType !== false;
        this._showError = !!this._stepperOptions.showError;
    }
    Object.defineProperty(CdkStep.prototype, "editable", {
        /** Whether the user can return to this step once it has been marked as completed. */
        get: /**
         * Whether the user can return to this step once it has been marked as completed.
         * @return {?}
         */
        function () { return this._editable; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._editable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "optional", {
        /** Whether the completion of step is optional. */
        get: /**
         * Whether the completion of step is optional.
         * @return {?}
         */
        function () { return this._optional; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._optional = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStep.prototype, "completed", {
        /** Whether step is marked as completed. */
        get: /**
         * Whether step is marked as completed.
         * @return {?}
         */
        function () {
            return this._customCompleted == null ? this._getDefaultCompleted() : this._customCompleted;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customCompleted = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultCompleted = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl ? this.stepControl.valid && this.interacted : this.interacted;
    };
    Object.defineProperty(CdkStep.prototype, "hasError", {
        /** Whether step has an error. */
        get: /**
         * Whether step has an error.
         * @return {?}
         */
        function () {
            return this._customError == null ? this._getDefaultError() : this._customError;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customError = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    CdkStep.prototype._getDefaultError = /**
     * @private
     * @return {?}
     */
    function () {
        return this.stepControl && this.stepControl.invalid && this.interacted;
    };
    /** Selects this step component. */
    /**
     * Selects this step component.
     * @return {?}
     */
    CdkStep.prototype.select = /**
     * Selects this step component.
     * @return {?}
     */
    function () {
        this._stepper.selected = this;
    };
    /** Resets the step to its initial state. Note that this includes resetting form data. */
    /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    CdkStep.prototype.reset = /**
     * Resets the step to its initial state. Note that this includes resetting form data.
     * @return {?}
     */
    function () {
        this.interacted = false;
        if (this._customCompleted != null) {
            this._customCompleted = false;
        }
        if (this._customError != null) {
            this._customError = false;
        }
        if (this.stepControl) {
            this.stepControl.reset();
        }
    };
    /**
     * @return {?}
     */
    CdkStep.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Since basically all inputs of the MatStep get proxied through the view down to the
        // underlying MatStepHeader, we have to make sure that change detection runs correctly.
        this._stepper._stateChanged();
    };
    CdkStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-step',
                    exportAs: 'cdkStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>',
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    CdkStep.ctorParameters = function () { return [
        { type: CdkStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return CdkStepper; }),] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [STEPPER_GLOBAL_OPTIONS,] }] }
    ]; };
    CdkStep.propDecorators = {
        stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [CdkStepLabel,] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }],
        stepControl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-label',] }],
        ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['aria-labelledby',] }],
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        completed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStep;
}());
var CdkStepper = /** @class */ (function () {
    function CdkStepper(_dir, _changeDetectorRef, _elementRef, _document) {
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        /**
         * Emits when the component is destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._linear = false;
        this._selectedIndex = 0;
        /**
         * Event emitted when the selected step has changed.
         */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._orientation = 'horizontal';
        this._groupId = nextId++;
        this._document = _document;
    }
    Object.defineProperty(CdkStepper.prototype, "steps", {
        /** The list of step components that the stepper is holding. */
        get: /**
         * The list of step components that the stepper is holding.
         * @return {?}
         */
        function () {
            return this._steps;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "linear", {
        /** Whether the validity of previous steps should be checked or not. */
        get: /**
         * Whether the validity of previous steps should be checked or not.
         * @return {?}
         */
        function () { return this._linear; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._linear = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selectedIndex", {
        /** The index of the selected step. */
        get: /**
         * The index of the selected step.
         * @return {?}
         */
        function () { return this._selectedIndex; },
        set: /**
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var newIndex = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(index);
            if (this.steps) {
                // Ensure that the index can't be out of bounds.
                if (newIndex < 0 || newIndex > this.steps.length - 1) {
                    throw Error('cdkStepper: Cannot assign out-of-bounds value to `selectedIndex`.');
                }
                if (this._selectedIndex != newIndex &&
                    !this._anyControlsInvalidOrPending(newIndex) &&
                    (newIndex >= this._selectedIndex || this.steps.toArray()[newIndex].editable)) {
                    this._updateSelectedItemIndex(index);
                }
            }
            else {
                this._selectedIndex = newIndex;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkStepper.prototype, "selected", {
        /** The step that is selected. */
        get: /**
         * The step that is selected.
         * @return {?}
         */
        function () {
            // @breaking-change 8.0.0 Change return type to `CdkStep | undefined`.
            return this.steps ? this.steps.toArray()[this.selectedIndex] : (/** @type {?} */ (undefined));
        },
        set: /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Note that while the step headers are content children by default, any components that
        // extend this one might have them as view chidren. We initialize the keyboard handling in
        // AfterViewInit so we're guaranteed for both view and content children to be defined.
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusKeyManager"](this._stepHeader)
            .withWrap()
            .withVerticalOrientation(this._orientation === 'vertical');
        (this._dir ? (/** @type {?} */ (this._dir.change)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._layoutDirection()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function (direction) { return _this._keyManager.withHorizontalOrientation(direction); });
        this._keyManager.updateActiveItemIndex(this._selectedIndex);
        this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(function () {
            if (!_this.selected) {
                _this._selectedIndex = Math.max(_this._selectedIndex - 1, 0);
            }
        });
    };
    /**
     * @return {?}
     */
    CdkStepper.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Selects and focuses the next step in list. */
    /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    CdkStepper.prototype.next = /**
     * Selects and focuses the next step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    CdkStepper.prototype.previous = /**
     * Selects and focuses the previous step in list.
     * @return {?}
     */
    function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    /** Resets the stepper to its initial state. Note that this includes clearing form data. */
    /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    CdkStepper.prototype.reset = /**
     * Resets the stepper to its initial state. Note that this includes clearing form data.
     * @return {?}
     */
    function () {
        this._updateSelectedItemIndex(0);
        this.steps.forEach(function (step) { return step.reset(); });
        this._stateChanged();
    };
    /** Returns a unique id for each step label element. */
    /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepLabelId = /**
     * Returns a unique id for each step label element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-label-" + this._groupId + "-" + i;
    };
    /** Returns unique id for each step content element. */
    /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    CdkStepper.prototype._getStepContentId = /**
     * Returns unique id for each step content element.
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return "cdk-step-content-" + this._groupId + "-" + i;
    };
    /** Marks the component to be change detected. */
    /**
     * Marks the component to be change detected.
     * @return {?}
     */
    CdkStepper.prototype._stateChanged = /**
     * Marks the component to be change detected.
     * @return {?}
     */
    function () {
        this._changeDetectorRef.markForCheck();
    };
    /** Returns position state of the step with the given index. */
    /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._getAnimationDirection = /**
     * Returns position state of the step with the given index.
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var position = index - this._selectedIndex;
        if (position < 0) {
            return this._layoutDirection() === 'rtl' ? 'next' : 'previous';
        }
        else if (position > 0) {
            return this._layoutDirection() === 'rtl' ? 'previous' : 'next';
        }
        return 'current';
    };
    /** Returns the type of icon to be displayed. */
    /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getIndicatorType = /**
     * Returns the type of icon to be displayed.
     * @param {?} index
     * @param {?=} state
     * @return {?}
     */
    function (index, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        /** @type {?} */
        var step = this.steps.toArray()[index];
        /** @type {?} */
        var isCurrentStep = this._isCurrentStep(index);
        return step._displayDefaultIndicatorType
            ? this._getDefaultIndicatorLogic(step, isCurrentStep)
            : this._getGuidelineLogic(step, isCurrentStep, state);
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    CdkStepper.prototype._getDefaultIndicatorLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @return {?}
     */
    function (step, isCurrentStep) {
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (!step.completed || isCurrentStep) {
            return STEP_STATE.NUMBER;
        }
        else {
            return step.editable ? STEP_STATE.EDIT : STEP_STATE.DONE;
        }
    };
    /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    CdkStepper.prototype._getGuidelineLogic = /**
     * @private
     * @param {?} step
     * @param {?} isCurrentStep
     * @param {?=} state
     * @return {?}
     */
    function (step, isCurrentStep, state) {
        if (state === void 0) { state = STEP_STATE.NUMBER; }
        if (step._showError && step.hasError && !isCurrentStep) {
            return STEP_STATE.ERROR;
        }
        else if (step.completed && !isCurrentStep) {
            return STEP_STATE.DONE;
        }
        else if (step.completed && isCurrentStep) {
            return state;
        }
        else if (step.editable && isCurrentStep) {
            return STEP_STATE.EDIT;
        }
        else {
            return state;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._isCurrentStep = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._selectedIndex === index;
    };
    /** Returns the index of the currently-focused step header. */
    /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    CdkStepper.prototype._getFocusIndex = /**
     * Returns the index of the currently-focused step header.
     * @return {?}
     */
    function () {
        return this._keyManager ? this._keyManager.activeItemIndex : this._selectedIndex;
    };
    /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    CdkStepper.prototype._updateSelectedItemIndex = /**
     * @private
     * @param {?} newIndex
     * @return {?}
     */
    function (newIndex) {
        /** @type {?} */
        var stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex],
        });
        // If focus is inside the stepper, move it to the next header, otherwise it may become
        // lost when the active step content is hidden. We can't be more granular with the check
        // (e.g. checking whether focus is inside the active step), because we don't have a
        // reference to the elements that are rendering out the content.
        this._containsFocus() ? this._keyManager.setActiveItem(newIndex) :
            this._keyManager.updateActiveItemIndex(newIndex);
        this._selectedIndex = newIndex;
        this._stateChanged();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CdkStepper.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var hasModifier = Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["hasModifierKey"])(event);
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var manager = this._keyManager;
        if (manager.activeItemIndex != null && !hasModifier &&
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["SPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"])) {
            this.selectedIndex = manager.activeItemIndex;
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["HOME"]) {
            manager.setFirstItemActive();
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["END"]) {
            manager.setLastItemActive();
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkStepper.prototype._anyControlsInvalidOrPending = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var steps = this.steps.toArray();
        steps[this._selectedIndex].interacted = true;
        if (this._linear && index >= 0) {
            return steps.slice(0, index).some(function (step) {
                /** @type {?} */
                var control = step.stepControl;
                /** @type {?} */
                var isIncomplete = control ?
                    (control.invalid || control.pending || !step.interacted) :
                    !step.completed;
                return isIncomplete && !step.optional;
            });
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    CdkStepper.prototype._layoutDirection = /**
     * @private
     * @return {?}
     */
    function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Checks whether the stepper contains the focused element. */
    /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    CdkStepper.prototype._containsFocus = /**
     * Checks whether the stepper contains the focused element.
     * @private
     * @return {?}
     */
    function () {
        if (!this._document || !this._elementRef) {
            return false;
        }
        /** @type {?} */
        var stepperElement = this._elementRef.nativeElement;
        /** @type {?} */
        var focusedElement = this._document.activeElement;
        return stepperElement === focusedElement || stepperElement.contains(focusedElement);
    };
    CdkStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkStepper]',
                    exportAs: 'cdkStepper',
                },] },
    ];
    /** @nocollapse */
    CdkStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    CdkStepper.propDecorators = {
        _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStep,] }],
        _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [CdkStepHeader,] }],
        linear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return CdkStepper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var CdkStepperNext = /** @class */ (function () {
    function CdkStepperNext(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    CdkStepperNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperNext.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperNext.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStepperNext;
}());
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var CdkStepperPrevious = /** @class */ (function () {
    function CdkStepperPrevious(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    CdkStepperPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'button[cdkStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkStepperPrevious.ctorParameters = function () { return [
        { type: CdkStepper }
    ]; };
    CdkStepperPrevious.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkStepperPrevious;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdkStepperModule = /** @class */ (function () {
    function CdkStepperModule() {
    }
    CdkStepperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                    exports: [
                        CdkStep,
                        CdkStepper,
                        CdkStepHeader,
                        CdkStepLabel,
                        CdkStepperNext,
                        CdkStepperPrevious,
                    ],
                    declarations: [
                        CdkStep,
                        CdkStepper,
                        CdkStepHeader,
                        CdkStepLabel,
                        CdkStepperNext,
                        CdkStepperPrevious,
                    ]
                },] },
    ];
    return CdkStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/stepper.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/material/esm5/stepper.es5.js ***!
  \************************************************************/
/*! exports provided: MatStepperModule, MatStepLabel, MatStep, MatStepper, MatHorizontalStepper, MatVerticalStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatStepperIntl, MAT_STEPPER_INTL_PROVIDER, matStepperAnimations, MatStepperIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperModule", function() { return MatStepperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepLabel", function() { return MatStepLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStep", function() { return MatStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepper", function() { return MatStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHorizontalStepper", function() { return MatHorizontalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVerticalStepper", function() { return MatVerticalStepper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperNext", function() { return MatStepperNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperPrevious", function() { return MatStepperPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepHeader", function() { return MatStepHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER_FACTORY", function() { return MAT_STEPPER_INTL_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIntl", function() { return MatStepperIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_STEPPER_INTL_PROVIDER", function() { return MAT_STEPPER_INTL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matStepperAnimations", function() { return matStepperAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStepperIcon", function() { return MatStepperIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
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
var MatStepLabel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepLabel, _super);
    function MatStepLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepLabel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matStepLabel]',
                },] },
    ];
    return MatStepLabel;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepLabel"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Stepper data that is required for internationalization.
 */
var MatStepperIntl = /** @class */ (function () {
    function MatStepperIntl() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Label that is rendered below optional steps.
         */
        this.optionalLabel = 'Optional';
    }
    MatStepperIntl.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ MatStepperIntl.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
    return MatStepperIntl;
}());
/**
 * \@docs-private
 * @param {?} parentIntl
 * @return {?}
 */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/**
 * \@docs-private
 * @type {?}
 */
var MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStepHeader = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepHeader, _super);
    function MatStepHeader(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        var _this = _super.call(this, _elementRef) || this;
        _this._intl = _intl;
        _this._focusMonitor = _focusMonitor;
        _focusMonitor.monitor(_elementRef, true);
        _this._intlSubscription = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepHeader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    };
    /** Returns string label of given step if it is a text label. */
    /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    MatStepHeader.prototype._stringLabel = /**
     * Returns string label of given step if it is a text label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? null : this.label;
    };
    /** Returns MatStepLabel if the label of given step is a template label. */
    /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    MatStepHeader.prototype._templateLabel = /**
     * Returns MatStepLabel if the label of given step is a template label.
     * @return {?}
     */
    function () {
        return this.label instanceof MatStepLabel ? this.label : null;
    };
    /** Returns the host HTML element. */
    /**
     * Returns the host HTML element.
     * @return {?}
     */
    MatStepHeader.prototype._getHostElement = /**
     * Returns the host HTML element.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    MatStepHeader.prototype._getIconContext = /**
     * Template context variables that are exposed to the `matStepperIcon` instances.
     * @return {?}
     */
    function () {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    };
    /**
     * @param {?} state
     * @return {?}
     */
    MatStepHeader.prototype._getDefaultTextForState = /**
     * @param {?} state
     * @return {?}
     */
    function (state$$1) {
        if (state$$1 == 'number') {
            return "" + (this.index + 1);
        }
        if (state$$1 == 'edit') {
            return 'create';
        }
        if (state$$1 == 'error') {
            return 'warning';
        }
        return state$$1;
    };
    MatStepHeader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-step-header',
                    template: "<div class=\"mat-step-header-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\"><div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\"><ng-container *ngSwitchCase=\"true\" [ngTemplateOutlet]=\"iconOverrides[state]\" [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container><ng-container *ngSwitchDefault [ngSwitch]=\"state\"><span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span><mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon></ng-container></div></div><div class=\"mat-step-label\" [class.mat-step-label-active]=\"active\" [class.mat-step-label-selected]=\"selected\" [class.mat-step-label-error]=\"state == 'error'\"><ng-container *ngIf=\"_templateLabel()\" [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container><div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div><div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div><div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div></div>",
                    styles: [".mat-step-header{overflow:hidden;outline:0;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon .mat-icon,.mat-step-icon-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    host: {
                        'class': 'mat-step-header',
                        'role': 'tab',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStepHeader.ctorParameters = function () { return [
        { type: MatStepperIntl },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    MatStepHeader.propDecorators = {
        state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        errorMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        iconOverrides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        optional: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MatStepHeader;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepHeader"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Animations used by the Material steppers.
 * \@docs-private
 * @type {?}
 */
var matStepperAnimations = {
    /**
     * Animation that transitions the step along the X axis in a horizontal stepper.
     */
    horizontalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'none', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /**
     * Animation that transitions the step along the Y axis in a vertical stepper.
     */
    verticalStepTransition: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('stepTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('previous', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('next', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', visibility: 'hidden' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*', visibility: 'visible' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* <=> current', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Template to be used to override the icons inside the step header.
 */
var MatStepperIcon = /** @class */ (function () {
    function MatStepperIcon(templateRef) {
        this.templateRef = templateRef;
    }
    MatStepperIcon.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'ng-template[matStepperIcon]',
                },] },
    ];
    /** @nocollapse */
    MatStepperIcon.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
    ]; };
    MatStepperIcon.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['matStepperIcon',] }]
    };
    return MatStepperIcon;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStep = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStep, _super);
    /** @breaking-change 8.0.0 remove the `?` after `stepperOptions` */
    function MatStep(stepper, _errorStateMatcher, stepperOptions) {
        var _this = _super.call(this, stepper, stepperOptions) || this;
        _this._errorStateMatcher = _errorStateMatcher;
        return _this;
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MatStep.prototype.isErrorState = /**
     * Custom error state matcher that additionally checks for validity of interacted form.
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        /** @type {?} */
        var originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        /** @type {?} */
        var customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    };
    MatStep.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-step',
                    template: "<ng-template><ng-content></ng-content></ng-template>",
                    providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], useExisting: MatStep }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    exportAs: 'matStep',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatStep.ctorParameters = function () { return [
        { type: MatStepper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MatStepper; }),] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],] }] }
    ]; };
    MatStep.propDecorators = {
        stepLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [MatStepLabel,] }]
    };
    return MatStep;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStep"]));
var MatStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepper, _super);
    function MatStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Event emitted when the current step is done transitioning in.
         */
        _this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Consumer-specified template-refs to be used to override the header icons.
         */
        _this._iconOverrides = {};
        /**
         * Stream of animation `done` events when the body expands/collapses.
         */
        _this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this;
    }
    /**
     * @return {?}
     */
    MatStepper.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._icons.forEach(function (_a) {
            var name = _a.name, templateRef = _a.templateRef;
            return _this._iconOverrides[name] = templateRef;
        });
        // Mark the component for change detection whenever the content children query changes
        this._steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe(function () { return _this._stateChanged(); });
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(function (x, y) { return x.fromState === y.fromState && x.toState === y.toState; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._destroyed)).subscribe(function (event) {
            if (((/** @type {?} */ (event.toState))) === 'current') {
                _this.animationDone.emit();
            }
        });
    };
    MatStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[matStepper]'
                },] },
    ];
    MatStepper.propDecorators = {
        _stepHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [MatStepHeader,] }],
        _steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStep,] }],
        _icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [MatStepperIcon,] }],
        animationDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return MatStepper;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"]));
var MatHorizontalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatHorizontalStepper, _super);
    function MatHorizontalStepper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Whether the label should display in bottom or end position.
         */
        _this.labelPosition = 'end';
        return _this;
    }
    MatHorizontalStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-horizontal-stepper',
                    exportAs: 'matHorizontalStepper',
                    template: "<div class=\"mat-horizontal-stepper-header-container\"><ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-horizontal-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div></ng-container></div><div class=\"mat-horizontal-content-container\"><div *ngFor=\"let step of steps; let i = index\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" class=\"mat-horizontal-stepper-content\" role=\"tabpanel\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-horizontal',
                        '[class.mat-stepper-label-position-end]': 'labelPosition == "end"',
                        '[class.mat-stepper-label-position-bottom]': 'labelPosition == "bottom"',
                        'aria-orientation': 'horizontal',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.horizontalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatHorizontalStepper }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    MatHorizontalStepper.propDecorators = {
        labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MatHorizontalStepper;
}(MatStepper));
var MatVerticalStepper = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatVerticalStepper, _super);
    function MatVerticalStepper(dir, changeDetectorRef, 
    // @breaking-change 8.0.0 `elementRef` and `_document` parameters to become required.
    elementRef, _document) {
        var _this = _super.call(this, dir, changeDetectorRef, elementRef, _document) || this;
        _this._orientation = 'vertical';
        return _this;
    }
    MatVerticalStepper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{selector: 'mat-vertical-stepper',
                    exportAs: 'matVerticalStepper',
                    template: "<div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\"><mat-step-header class=\"mat-vertical-stepper-header\" (click)=\"step.select()\" (keydown)=\"_onKeydown($event)\" [tabIndex]=\"_getFocusIndex() == i ? 0 : -1\" [id]=\"_getStepLabelId(i)\" [attr.aria-posinset]=\"i + 1\" [attr.aria-setsize]=\"steps.length\" [attr.aria-controls]=\"_getStepContentId(i)\" [attr.aria-selected]=\"selectedIndex === i\" [attr.aria-label]=\"step.ariaLabel || null\" [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\" [index]=\"i\" [state]=\"_getIndicatorType(i, step.state)\" [label]=\"step.stepLabel || step.label\" [selected]=\"selectedIndex === i\" [active]=\"step.completed || selectedIndex === i || !linear\" [optional]=\"step.optional\" [errorMessage]=\"step.errorMessage\" [iconOverrides]=\"_iconOverrides\"></mat-step-header><div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\"><div class=\"mat-vertical-stepper-content\" role=\"tabpanel\" [attr.tabindex]=\"selectedIndex === i ? 0 : null\" [@stepTransition]=\"_getAnimationDirection(i)\" (@stepTransition.done)=\"_animationDone.next($event)\" [id]=\"_getStepContentId(i)\" [attr.aria-labelledby]=\"_getStepLabelId(i)\" [attr.aria-expanded]=\"selectedIndex === i\"><div class=\"mat-vertical-content\"><ng-container [ngTemplateOutlet]=\"step.content\"></ng-container></div></div></div></div>",
                    styles: [".mat-stepper-horizontal,.mat-stepper-vertical{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative;top:36px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{border-top-width:1px;border-top-style:solid;content:'';display:inline-block;height:0;position:absolute;top:36px;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto;padding:24px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;padding:24px;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:'';position:absolute;top:-16px;bottom:-16px;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}"],
                    inputs: ['selectedIndex'],
                    host: {
                        'class': 'mat-stepper-vertical',
                        'aria-orientation': 'vertical',
                        'role': 'tablist',
                    },
                    animations: [matStepperAnimations.verticalStepTransition],
                    providers: [{ provide: MatStepper, useExisting: MatVerticalStepper }],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatVerticalStepper.ctorParameters = function () { return [
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] }
    ]; };
    return MatVerticalStepper;
}(MatStepper));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Button that moves to the next step in a stepper workflow.
 */
var MatStepperNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperNext, _super);
    function MatStepperNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperNext.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'button[matStepperNext]',
                    host: {
                        '(click)': '_stepper.next()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }]
                },] },
    ];
    return MatStepperNext;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperNext"]));
/**
 * Button that moves to the previous step in a stepper workflow.
 */
var MatStepperPrevious = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatStepperPrevious, _super);
    function MatStepperPrevious() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatStepperPrevious.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'button[matStepperPrevious]',
                    host: {
                        '(click)': '_stepper.previous()',
                        '[type]': 'type',
                    },
                    inputs: ['type'],
                    providers: [{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepper"], useExisting: MatStepper }]
                },] },
    ];
    return MatStepperPrevious;
}(_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperPrevious"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatStepperModule = /** @class */ (function () {
    function MatStepperModule() {
    }
    MatStepperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["PortalModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["CdkStepperModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                    ],
                    exports: [
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    declarations: [
                        MatHorizontalStepper,
                        MatVerticalStepper,
                        MatStep,
                        MatStepLabel,
                        MatStepper,
                        MatStepperNext,
                        MatStepperPrevious,
                        MatStepHeader,
                        MatStepperIcon,
                    ],
                    providers: [MAT_STEPPER_INTL_PROVIDER, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]],
                },] },
    ];
    return MatStepperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=stepper.es5.js.map


/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    max-width: 800px;\r\n    margin: auto;\r\n    padding: 0px;\r\n    height: 100%;\r\n    background: rgba(214, 212, 212, 0.048);\r\n    border: .4px solid rgb(59, 59, 59);\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.mat-card-header {\r\n   \r\n    font-weight: bold;\r\n    display: inline;\r\n    \r\n}\r\n\r\n.mat-card-title  {\r\n    margin-left: -16px;\r\n    margin-right: -16px;\r\n    margin-top: 0px;\r\n    color: rgba(0, 0, 0, 0.836);\r\n    background: rgba(34, 34, 34, 0.13);\r\n    padding: 5px;\r\n}\r\n\r\n.mat-card-content {\r\n    margin: 0px;\r\n}\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n    margin-bottom: 5px;\r\n   \r\n}\r\n\r\n.mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n    margin: 0px;\r\n    margin-left: 22px;\r\n}\r\n\r\n.mat-expansion-panel {\r\n    background: rgba(255, 254, 254, 0.151);\r\n}\r\n\r\n.requirements {\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    \r\n}\r\n\r\n.content .description{\r\n    font-size: 20px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.content .date,.location,.duration{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n}\r\n\r\n.table{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow-x:  auto;\r\n    overflow-y:  auto;\r\n}\r\n\r\n.mat-card {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItY2FyZC9jb2xsYWItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMseUVBQXlFO0FBQzdFOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1jYXJkL2NvbGxhYi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAyMTIsIDIxMiwgMC4wNDgpO1xyXG4gICAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMC4xMyk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgIFxyXG59XHJcbi5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtYnV0dG9uLCAubWF0LWNhcmQtYWN0aW9ucyAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTQsIDI1NCwgMC4xNTEpO1xyXG59XHJcblxyXG4ucmVxdWlyZW1lbnRzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRlbnQgLmRlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IC5kYXRlLC5sb2NhdGlvbiwuZHVyYXRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuXHJcbi50YWJsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogIGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiAgYXV0bztcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/collab-card/collab-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/collab-card/collab-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header >\r\n\r\n    <mat-card-title> \r\n\r\n      <mat-grid-list  cols=\"2\" rowHeight=\"4:1\">\r\n        \r\n        <mat-grid-tile>{{collabData?.title}}</mat-grid-tile>\r\n        <mat-grid-tile><mat-icon>group</mat-icon> : {{collabData?.members.length}} / {{ collabData?.size}}</mat-grid-tile>\r\n      </mat-grid-list>\r\n      \r\n    </mat-card-title>\r\n\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-accordion>\r\n        <div class = \"content\">\r\n            <p class=\"description\">Description: {{ collabData?.description }} </p>\r\n            <p class=\"date\">Date: {{ collabData?.date | date:'medium' }}</p>\r\n            <p class=\"duration\">Apply By: {{ collabData?.duration | date:'medium' }}</p>\r\n            <p class=\"location\">Location: {{ collabData?.location }}</p>\r\n\r\n            <div class = \"requirements\">\r\n                <mat-chip-list>\r\n                    Classes: \r\n                    <mat-chip *ngFor = \"let class of collabData?.classes\">\r\n                      {{ class }}\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n                <br>\r\n                <mat-chip-list>\r\n                    Skills: \r\n                    <mat-chip *ngFor=\"let skill of collabData?.skills\">\r\n                      {{ skill }}\r\n                    </mat-chip>\r\n                </mat-chip-list>\r\n            </div>\r\n      \r\n        </div>\r\n        <br>\r\n        \r\n        <!-- Event Binding: In this case the event is (opened) -->\r\n        <mat-expansion-panel \r\n                       (opened)=\"panelOpenState = true && makeTable()\"\r\n                       (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h4>Members</h4>\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n          </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n            <ng-container class=\"table-container\">\r\n              <div class=\"table\">\r\n                <collab-table [table] = \"table\" [xAxisReq] = \"xAxisReq\"></collab-table>\r\n              </div>\r\n            </ng-container>\r\n          \r\n          \r\n        </mat-expansion-panel>\r\n    </mat-accordion>\r\n    \r\n  </mat-card-content>\r\n\r\n  <mat-expansion-panel \r\n                       (opened)=\"panelOpenState = true && actionCheck()\"\r\n                       (closed)=\"panelOpenState = false\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <h4>Actions</h4>\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n          </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n            <mat-card-actions>\r\n              <button *ngIf=\"checkPartOf() == false\" mat-raised-button color = \"primary\" (click) = \"joinCollab()\"  > Join </button>\r\n              <button *ngIf=\"checkPartOf() == true\"  mat-raised-button color = \"primary\" (click) = \"leaveCollab()\" > Leave </button>\r\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (click) = \"deleteCollab()\"> Delete </button>\r\n              <button *ngIf=\"checkOwner() == true\"   mat-raised-button color = \"primary\" (ckick) = \"editCollab()\"> Edit </button>\r\n            </mat-card-actions>   \r\n        </mat-expansion-panel>\r\n\r\n  \r\n\r\n</mat-card>"

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






var CollabCardComponent = /** @class */ (function () {
    function CollabCardComponent(userService, collabService) {
        this.userService = userService;
        this.collabService = collabService;
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
        console.log(this.userData['username']);
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
        console.log(this.partOf);
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
            src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_1__["CollabsService"]])
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

module.exports = "p {\r\n    padding: 16px;\r\n    text-align: center;\r\n  \r\n  }\r\n\r\n  .collab {\r\n    margin-top:25px;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .add-collab-button {\r\n    z-index: 5; \r\n    position: fixed; \r\n    display: flex;\r\n    align-self: flex-end; \r\n    bottom: 7%; \r\n    margin-bottom: 5px;\r\n    margin-left: 80%; \r\n  }\r\n\r\n  \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItbGlzdC9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCOztFQUVwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbGxhYi1saXN0L2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICB9XHJcblxyXG4gIC5jb2xsYWIge1xyXG4gICAgbWFyZ2luLXRvcDoyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIC5hZGQtY29sbGFiLWJ1dHRvbiB7XHJcbiAgICB6LWluZGV4OiA1OyBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IFxyXG4gICAgYm90dG9tOiA3JTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogODAlOyBcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/home/collab-list/home.component.html":
/*!******************************************************!*\
  !*** ./src/app/home/collab-list/home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <!--\r\n     selected.value: Is a value from .ts file.\r\n     selectedIndex: DOM value\r\n   -->\r\n   <mat-tab-group [selectedIndex] = \"selected.value\" \r\n                  (selectedIndexChange) =\"currentTab($event)\" >\r\n\r\n      <mat-tab label=\"All Collabs\">\r\n        <ng-template matTabContent>\r\n          <ng-container *ngFor = \"let collab of collabData\">\r\n            <div class =\"collab\">\r\n                <!-- Property binding from component to component using @Input() and @Output -->\r\n                <collab-card [collabData] = \"collab\"></collab-card>\r\n            </div>      \r\n          </ng-container>\r\n        </ng-template>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"My Collabs\">\r\n        <ng-template matTabContent>\r\n            <ng-container *ngFor = \"let collab of collabData\">\r\n              <div class =\"collab\">\r\n                <!-- Property binding from component to component using @Input() and @Output -->\r\n                <collab-card [collabData] = \"collab\"></collab-card>\r\n              </div>      \r\n            </ng-container>\r\n        </ng-template>\r\n      </mat-tab>\r\n\r\n      <mat-tab label=\"Recommended Collabs\">\r\n        <ng-template matTabContent>\r\n          <ng-container *ngFor = \"let collab of collabData\">\r\n            <div class =\"collab\">\r\n                <!-- Property binding from component to component using @Input() and @Output -->\r\n                <collab-card [collabData] = \"collab\"></collab-card>\r\n            </div>      \r\n          </ng-container>\r\n        </ng-template>\r\n      </mat-tab>\r\n\r\n   </mat-tab-group>\r\n\r\n   <div class = \"add-collab-button\">\r\n     <a mat-fab color = \"primary\" routerLink=\"/home/createcollab\" style=\"margin-right: 14px\">\r\n      <mat-icon>add</mat-icon>\r\n     </a>\r\n   </div>\r\n     \r\n          \r\n            \r\n"

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
                            this.collabService.getCollabs("getActiveCollabs").subscribe(function (data) { return _this.collabData = data; });
                            return [3 /*break*/, 7];
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.collabService.getCollabs("getCollabDetails").subscribe(function (data) { return _this.collabData = data; })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: 
                    //console.log(this.userData);
                    return [4 /*yield*/, this.collabService.getReqCollabs(this.userData["classes"], this.userData["skills"]).subscribe(function (data) { return _this.collabData = data; })];
                    case 5:
                        //console.log(this.userData);
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

module.exports = "table { \r\n    width: 100%; \r\n    border-collapse: collapse; \r\n  }\r\n  /* Zebra striping */\r\n  tr:nth-of-type(odd) { \r\n    background: #eee; \r\n  }\r\n  th { \r\n    background: #333; \r\n    color: white; \r\n    font-weight: bold; \r\n  }\r\n  td, th { \r\n    padding: 6px; \r\n    border: 1px solid #ccc; \r\n    text-align: left; \r\n  }\r\n  .mat-card-avatar {\r\n    background-image: url('/assets/userPhoto.png');\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCO0VBQ0EsbUJBQW1CO0VBQ25CO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLDhDQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb2xsYWItdGFibGUvY29sbGFiLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgfVxyXG4gIC8qIFplYnJhIHN0cmlwaW5nICovXHJcbiAgdHI6bnRoLW9mLXR5cGUob2RkKSB7IFxyXG4gICAgYmFja2dyb3VuZDogI2VlZTsgXHJcbiAgfVxyXG4gIHRoIHsgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzOyBcclxuICAgIGNvbG9yOiB3aGl0ZTsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgfVxyXG4gIHRkLCB0aCB7IFxyXG4gICAgcGFkZGluZzogNnB4OyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgfVxyXG5cclxuICAubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy91c2VyUGhvdG8ucG5nJyk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG59Il19 */"

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
        //console.log(this.xAxisReq);
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

/***/ "./src/app/home/create-collab/create-collab.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\n    width: 70%;\n    margin-top: 10px;\n}\n\n.container {\n    margin-top: 50px;\n    margin-left: 25px;\n    margin-right: 25px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.example-chip-list {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jcmVhdGUtY29sbGFiL2NyZWF0ZS1jb2xsYWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5RUFBeUU7QUFDN0U7O0FBRUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NyZWF0ZS1jb2xsYWIvY3JlYXRlLWNvbGxhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/create-collab/create-collab.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/create-collab/create-collab.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Steppers -->\r\n<div class = \"container\">\r\n        <mat-vertical-stepper [linear] = \"true\" #stepper>\r\n    \r\n                <mat-step [stepControl] = \"firstFormGroup\">\r\n                    <form [formGroup] = \"firstFormGroup\" (ngSubmit) = \"onSubmit()\">\r\n                        <ng-template matStepLabel >Fill in Collab Info</ng-template>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder = \"Collab Title...\" formControlName = \"title\" required>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <textarea matInput placeholder = \"Description...\" formControlName = \"description\" required></textarea>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                                <input matInput placeholder = \"Location...\" formControlName = \"location\" required>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Collab Size...\" formControlName = \"size\" required>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                                <input formControlName = \"date\" matInput [owlDateTimeTrigger]=\"dt\" placeholder = \"Choose a date\" [owlDateTime]=\"dt\" required>\r\n                                <owl-date-time #dt></owl-date-time>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                                <input type = \"number\" min=\"2\"  matInput placeholder = \"Duration...\" formControlName = \"duration\" required>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-step>\r\n                <mat-step [stepControl] = \"secondFormGroup\" >\r\n                    <ng-template matStepLabel>Add Classes and Skills</ng-template>\r\n                    <div>\r\n                        <mat-form-field class=\"example-chip-list\">\r\n                            <mat-chip-list #chipList>\r\n                                <mat-chip\r\n                                    *ngFor=\"let skill of skills\"\r\n                                    [selectable]=\"selectable\"\r\n                                    [removable]=\"removable\"\r\n                                    (removed)=\"removeSkill(skill)\">\r\n                                    {{ skill }}\r\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                                </mat-chip>\r\n                                <input\r\n                                    placeholder=\"New Skill...\"\r\n                                    #skillInput\r\n                                    [formControl]=\"skillCtrl\"\r\n                                    [matAutocomplete]=\"auto\"\r\n                                    [matChipInputFor]=\"chipList\"\r\n                                    [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                                    (matChipInputTokenEnd)=\"addSkill($event)\">\r\n                                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selectedSkill($event)\">\r\n                                        <mat-option *ngFor=\"let skill of filteredSkills | async\" [value]=\"skill\">\r\n                                            {{ skill }}\r\n                                        </mat-option>\r\n                                    </mat-autocomplete>\r\n                            </mat-chip-list>\r\n                                    \r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"example-chip-list\">\r\n                            <mat-chip-list #chipListClasses>\r\n                                <mat-chip\r\n                                    *ngFor = \"let class of classes\"\r\n                                    [selectable] = \"selectable\"\r\n                                    [removable] = \"removable\"\r\n                                    (removed) = \"removeClass(class)\">\r\n                                    {{ class }}\r\n                                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                                </mat-chip>\r\n                                <input \r\n                                    placeholder=\"New Class...\"\r\n                                    #classInput\r\n                                    [formControl]=\"classCtrl\"\r\n                                    [matChipInputFor]=\"chipListClasses\"\r\n                                    [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                                    (matChipInputTokenEnd)=\"addClass($event)\">\r\n                            </mat-chip-list>\r\n\r\n                        </mat-form-field>\r\n                    </div>\r\n                    \r\n            \r\n                </mat-step>\r\n                <mat-step>\r\n                    <ng-template matStepLabel> Confirm Your Information</ng-template>\r\n                    <div>\r\n                        <button mat-raised-button (click) = \"createCollab()\" color=\"primary\">Done</button>\r\n                    </div>\r\n                </mat-step>\r\n            \r\n        </mat-vertical-stepper>\r\n    </div>"

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
        this.filteredSkills = this.skillCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (skill) { return skill ? _this._filter(skill) : _this.allSkills.slice(); }));
        this.filteredClasses = this.classCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (_class) { return _class ? _this._filter(_class) : _this.allClasses.slice(); }));
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
        if (!this.matAutocomplete.isOpen) {
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
        if (!this.matAutocomplete.isOpen) {
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
    CreateCollabComponent.prototype._filter = function (value) {
        var _this = this;
        var filterValue = value.toLowerCase();
        this.userService.searchSkills(filterValue).subscribe(function (res) { _this.allSkills = res['matches']; });
        return this.allSkills.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
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
    ], CreateCollabComponent.prototype, "matAutocomplete", void 0);
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
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message/message.component */ "./src/app/home/message/message.component.ts");
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_list_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collab-list/home.component */ "./src/app/home/collab-list/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var routes = [
    {
        path: '',
        component: _collab_list_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "collabinfo",
        component: _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_4__["CollabCardComponent"]
    },
    {
        path: "createcollab",
        component: _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_3__["CreateCollabComponent"]
    },
    {
        path: "message",
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_2__["MessageComponent"],
        canLoad: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
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
/* harmony import */ var _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./collab-card/collab-card.component */ "./src/app/home/collab-card/collab-card.component.ts");
/* harmony import */ var _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./collab-table/collab-table.component */ "./src/app/home/collab-table/collab-table.component.ts");
/* harmony import */ var _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./create-collab/create-collab.component */ "./src/app/home/create-collab/create-collab.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./message/message.component */ "./src/app/home/message/message.component.ts");














//Material Components













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [_collab_list_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _collab_card_collab_card_component__WEBPACK_IMPORTED_MODULE_20__["CollabCardComponent"], _collab_table_collab_table_component__WEBPACK_IMPORTED_MODULE_21__["CollabTableComponent"], _create_collab_create_collab_component__WEBPACK_IMPORTED_MODULE_22__["CreateCollabComponent"], _message_message_component__WEBPACK_IMPORTED_MODULE_26__["MessageComponent"]],
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
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
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

/***/ "./src/app/home/message/message.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/message/message.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .container-bottom {\r\n    float: right;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n/* Chat containers */\r\n\r\n\r\n.container {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\n/* Chat containers */\r\n\r\n\r\n.container2 {\r\n  border: 4px solid #dedede;\r\n  background-color: plum;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin: 10px 0;\r\n  text-align: center;\r\n}\r\n\r\n\r\n/* Darker chat container */\r\n\r\n\r\n.darker {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n\r\n\r\n/* Clear floats */\r\n\r\n\r\n.container::after {\r\n  content: \"\";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n\r\n.right {\r\n  float: right;\r\n  margin-left: 20px;\r\n  margin-right:0;\r\n}\r\n\r\n\r\n/* Style time text */\r\n\r\n\r\n.time-right {\r\n  float: right;\r\n  color: #aaa;\r\n}\r\n\r\n\r\n/* Style time text */\r\n\r\n\r\n.time-left {\r\n  float: left;\r\n  color: #999;\r\n}\r\n\r\n\r\n.mat-card {\r\n  max-width: 800px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n.mat-card2 {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  padding: 0px;\r\n  height: 100%;\r\n  background: rgba(214, 212, 212, 0.048);\r\n  border: .4px solid rgb(59, 59, 59);\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n.mat-card-header {\r\n \r\n  font-weight: bold;\r\n  display: inline;\r\n  \r\n}\r\n\r\n\r\n.mat-card-title  {\r\n  margin-left: -16px;\r\n  margin-right: -16px;\r\n  margin-top: 0px;\r\n  color: rgba(0, 0, 0, 0.836);\r\n  background: rgba(34, 34, 34, 0.13);\r\n  padding: 5px;\r\n}\r\n\r\n\r\n.mat-card-content {\r\n  margin: 0px;\r\n}\r\n\r\n\r\n.mat-card>.mat-card-actions:last-child {\r\n  margin-bottom: 5px;\r\n \r\n}\r\n\r\n\r\n.mat-card-actions .mat-button, .mat-card-actions .mat-raised-button{\r\n  margin: 0px;\r\n  margin-left: 22px;\r\n}\r\n\r\n\r\n.mat-expansion-panel {\r\n  background: rgba(255, 254, 254, 0.151);\r\n}\r\n\r\n\r\n.requirements {\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  \r\n}\r\n\r\n\r\n.content .description{\r\n  font-size: 20px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n}\r\n\r\n\r\n.content .date,.location,.duration{\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n\r\n.table{\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x:  auto;\r\n  overflow-y:  auto;\r\n}\r\n\r\n\r\n.mat-card {\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7QUFDYjs7O0FBR0Esb0JBQW9COzs7QUFDcEI7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7O0FBQ0Esb0JBQW9COzs7QUFDcEI7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7O0FBRUEsMEJBQTBCOzs7QUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOzs7QUFFQSxpQkFBaUI7OztBQUNqQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7OztBQUlBLG9CQUFvQjs7O0FBQ3BCO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUEsb0JBQW9COzs7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsa0NBQWtDO0VBQ2xDLHlFQUF5RTtBQUMzRTs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyx5RUFBeUU7QUFDM0U7OztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixlQUFlOztBQUVqQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLHNDQUFzQztBQUN4Qzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjs7O0FBSUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQiLCJmaWxlIjoic3JjL2FwcC9ob21lL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbnRhaW5lci1ib3R0b20ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5cclxuLyogQ2hhdCBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4vKiBDaGF0IGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lcjIge1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNkZWRlZGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGx1bTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIERhcmtlciBjaGF0IGNvbnRhaW5lciAqL1xyXG4uZGFya2VyIHtcclxuICBib3JkZXItY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLyogQ2xlYXIgZmxvYXRzICovXHJcbi5jb250YWluZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6MDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBTdHlsZSB0aW1lIHRleHQgKi9cclxuLnRpbWUtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG5cclxuLyogU3R5bGUgdGltZSB0ZXh0ICovXHJcbi50aW1lLWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMjEyLCAyMTIsIDAuMDQ4KTtcclxuICBib3JkZXI6IC40cHggc29saWQgcmdiKDU5LCA1OSwgNTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5tYXQtY2FyZDIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTQsIDIxMiwgMjEyLCAwLjA0OCk7XHJcbiAgYm9yZGVyOiAuNHB4IHNvbGlkIHJnYig1OSwgNTksIDU5KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuIFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlICB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODM2KTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAzNCwgMzQsIDAuMTMpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQ+Lm1hdC1jYXJkLWFjdGlvbnM6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gXHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnMgLm1hdC1idXR0b24sIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICBtYXJnaW46IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NCwgMjU0LCAwLjE1MSk7XHJcbn1cclxuXHJcbi5yZXF1aXJlbWVudHMge1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4uY29udGVudCAuZGVzY3JpcHRpb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgLmRhdGUsLmxvY2F0aW9uLC5kdXJhdGlvbntcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4udGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6ICBhdXRvO1xyXG4gIG92ZXJmbG93LXk6ICBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/message/message.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/message/message.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button (click)=\"LoadMyMessages()\">get message</button>\r\n<mat-card >\r\n        <div class=\"container2\">\r\n          <span>\r\n            Messaging to {{showTitle()}}\r\n          </span>\r\n        </div>\r\n        <div class=\"container\">\r\n            <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Hello. How are you today?</p>\r\n            <span class=\"time-right\">11:00</span>\r\n          </div>\r\n          \r\n          <div class=\"container darker\">\r\n              <span>{{showTitle()}}</span>\r\n            <p>Hey! I'm fine. Thanks for asking!</p>\r\n            <span class=\"time-left\">11:01</span>\r\n          </div>\r\n          \r\n          <div class=\"container\">\r\n              <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\r\n            <span class=\"time-right\">11:02</span>\r\n          </div>\r\n          \r\n          <div class=\"container darker\">\r\n              <span>{{showTitle()}}</span>\r\n            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\r\n            <span class=\"time-left\">11:05</span>\r\n          </div>\r\n\r\n          <div class=\"container\">\r\n              <span class=\"right\">{{showTitle()}}</span>\r\n            <p class=\"right\">Sweet! So, what do you wanna do today?</p>\r\n            <span class=\"time-right\">11:02</span>\r\n          </div>\r\n          \r\n          \r\n\r\n        <form class=\"container-Button\" [formGroup] = \"form\" (ngSubmit) = \"SendMessage()\">    \r\n                <mat-form-field>\r\n                    <input \r\n                        \r\n                        formControlName = \"message\"\r\n                        matInput\r\n                        id=\"message\" \r\n                        type=\"text\" \r\n                        placeholder=\"Message\">\r\n                </mat-form-field> \r\n                <div *ngIf=\" message.touched && message.invalid\" \r\n                class=\"alert alert-danger\">\r\n                <mat-error *ngIf=\"message.errors.required\">null<strong>Required!</strong></mat-error>\r\n            </div>\r\n            <button class=\"right\" mat-raised-button color = \"primary\" type=\"submit\" [disabled] = \"!form.valid\">send</button>\r\n        </form>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/home/message/message.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/message/message.component.ts ***!
  \***************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _shared_models_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/models/message.model */ "./src/app/shared/models/message.model.ts");
/* harmony import */ var _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/dbAccess/conversation.service */ "./src/app/shared/dbAccess/conversation.service.ts");
/* harmony import */ var src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dbAccess/collabs.service */ "./src/app/shared/dbAccess/collabs.service.ts");
/* harmony import */ var src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dbAccess/user.service */ "./src/app/shared/dbAccess/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







//import { NavbarComponent } from 'src/app/navbar/navbar.component';


var MessageComponent = /** @class */ (function () {
    function MessageComponent(userService, collabservice, conversation, router, mem_, formBuilder) {
        this.userService = userService;
        this.collabservice = collabservice;
        this.conversation = conversation;
        this.router = router;
        this.mem_ = mem_;
        this.formBuilder = formBuilder;
        this.sender = this.mem_.sender;
        this.partOf = false;
        this.isOwner = false;
        this.message = new _shared_models_message_model__WEBPACK_IMPORTED_MODULE_2__["Message"]();
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({ message: [this.message.message, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required] });
    };
    //spliting username by @ 
    MessageComponent.prototype.getName = function (username) {
        var temp = username.substring(0, 2).toUpperCase();
        return temp;
    };
    //Display a title
    MessageComponent.prototype.showTitle = function () {
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
    MessageComponent.prototype.SendMessage = function () {
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
    MessageComponent.prototype.sendPersonalMessage = function () {
        var message = this.form.value;
        this.conversation.sendPersonalMessage(message, this.mem_.mem).subscribe(function (message) { return console.log(message); });
    };
    //sendGroud message to collab members
    MessageComponent.prototype.SendGroupMessage = function () {
        var message = this.form.value;
        this.conversation.sendMessageToCollabGroup(message, this.mem_.collabId).subscribe(function (message) { return console.log(message); });
    };
    //based on user input e.g. collbId od individual, it will load messages
    MessageComponent.prototype.LoadMyMessages = function () {
        if (this.mem_.mem != null) {
            //setting collabId to null before loading individual message
            this.mem_.collabId = null;
            this.LoadIndividualMessage();
        }
        else if (this.mem_.collabId != null) {
            //setting collab member to null before loading  message
            this.mem_.mem = null;
            this.LoadGroupMessage();
        }
        else
            this.router.navigate(['/home']);
    };
    //return participients and messages of current user
    MessageComponent.prototype.LoadIndividualMessage = function () {
        this.sender = this.mem_.sender;
        this.conversation.LoadOtherUserMessage(0, this.sender).subscribe(function (message) {
            console.log(message);
        });
    };
    //return  collabId and  group messages of current user 
    MessageComponent.prototype.LoadGroupMessage = function () {
        this.collabID = this.mem_.collabId;
        this.conversation.LoadGroupMessage(0, this.collabID).subscribe(function (message) {
            console.log(message);
        });
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/home/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/home/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_dbAccess_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_shared_dbAccess_collabs_service__WEBPACK_IMPORTED_MODULE_4__["CollabsService"],
            _shared_dbAccess_conversation_service__WEBPACK_IMPORTED_MODULE_3__["ConversationService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], MessageComponent);
    return MessageComponent;
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