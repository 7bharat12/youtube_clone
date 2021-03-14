(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function SigninComponent_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_div_9_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.signupForm.get("username")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function SigninComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_14_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_div_14_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SigninComponent_div_14_span_2_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.signupForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.signupForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.email);
} }
function SigninComponent_div_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_div_17_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.signupForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
class SigninComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.signupForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
        if (this.authService.checkAuthenticated())
            this.router.navigate(['/homepage']);
    }
    onSubmit() {
        if (this.signupForm.valid) {
            const username = this.signupForm.get('username').value;
            const password = this.signupForm.get('password').value;
            const email = this.signupForm.get('email').value;
            this.authService.signup(username, password, email);
        }
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 20, vars: 4, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "placeholder", "Username", "formControlName", "username"], ["class", "alert alert-danger", 4, "ngIf"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "placeholder", "pat@example.com", "formControlName", "email"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], ["mat-raised-button", "", "color", "accent", 1, "btn-block"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SigninComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SigninComponent_div_14_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SigninComponent_div_17_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.signupForm.get("username")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.signupForm.get("username")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.signupForm.get("username")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.signupForm.get("email")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.signupForm.get("password")) == null ? null : tmp_3_0.touched)));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.users[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n    margin: auto;\r\n    top: 15%;\r\n\topacity: 1;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n    color: black;\r\n}\r\n\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n\r\n  .mat-form-field-placeholder{\r\n\r\n\tcolor: red !important;\r\n  }\r\n\r\n  .mat-focused .mat-form-field-placeholder{\r\n  \r\n\tcolor: blue !important;\r\n  }\r\n\r\n  .mat-form-field-underline .mat-form-field-ripple{\r\n\r\n\tbackground-color:rgb(0, 140, 255) !important;\r\n  }\r\n\r\n  .mat-form-field-underline{\r\n  \r\n\tbackground-color:rgb(0, 140, 255) !important;\r\n  }\r\n\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground: #FFF7FA;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLFlBQVk7SUFDVCw0QkFBNEI7QUFDaEM7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixZQUFZO0lBQ1osUUFBUTtDQUNYLFVBQVU7Q0FDViw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLGdCQUFnQjtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLHlCQUF5QjtDQUN6QixVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFDQTs7Q0FFQyxxQkFBcUI7RUFDcEI7O0FBRUE7O0NBRUQsc0JBQXNCO0VBQ3JCOztBQUNGOztDQUVDLDRDQUE0QztFQUMzQzs7QUFFQTs7Q0FFRCw0Q0FBNEM7RUFDM0M7O0FBQ0Y7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixtQ0FBbUM7Q0FDbkMsT0FBTztDQUNQLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBOztDQUVDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbi13cmFwcGVyIHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4udXNlcnMge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDE1JTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdHotaW5kZXg6IDU7XHJcblx0bWF4LXdpZHRoOiAzMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJveC5iYWNrIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHR0b3A6IC0yMHB4O1xyXG5cdG9wYWNpdHk6IC44O1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXJ7XHJcblxyXG5cdGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcGxhY2Vob2xkZXJ7XHJcbiAgXHJcblx0Y29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuICB9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGV7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDE0MCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZXtcclxuICBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxNDAsIDI1NSkgIWltcG9ydGFudDtcclxuICB9XHJcbi5ib3g6YmVmb3JlIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0xMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG5cdGxlZnQ6IDA7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XHJcblx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMzAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuLm1haW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAubWF0LWNhcmQge1xyXG5cdHBhZGRpbmc6IDQ1cHggNzBweCA1NXB4O1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuXHRsaW5lLWhlaWdodDogNTRweDtcclxuXHRiYWNrZ3JvdW5kOiAjRkZGN0ZBO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuXHRwYWRkaW5nOiAwLjgzNzVlbSAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bhara\angularRecipe\src\main.ts */"zUnb");


/***/ }),

/***/ "596N":
/*!******************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.ts ***!
  \******************************************************/
/*! exports provided: EmailverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyComponent", function() { return EmailverifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");


class EmailverifyComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmailverifyComponent.ɵfac = function EmailverifyComponent_Factory(t) { return new (t || EmailverifyComponent)(); };
EmailverifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailverifyComponent, selectors: [["app-emailverify"]], decls: 5, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box"]], template: function EmailverifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email verified successfully!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.positronx[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n    margin: auto;\r\n    top: 25%;\r\n\topacity: 1;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n    color: black;\r\n}\r\n\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground: #FFF7FA;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0lBQ1QsNEJBQTRCO0FBQ2hDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLFlBQVk7SUFDWixRQUFRO0NBQ1gsVUFBVTtDQUNWLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1YsZ0JBQWdCO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsbUNBQW1DO0NBQ25DLE9BQU87Q0FDUCxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLHlCQUF5QjtDQUN6QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7QUFFQTs7Q0FFQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztBQUNWOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEIiLCJmaWxlIjoiZW1haWx2ZXJpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXdyYXBwZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5wb3NpdHJvbngge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJveCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAyNSU7XHJcblx0b3BhY2l0eTogMTtcclxuXHRwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib3guYmFjayB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0dG9wOiAtMjBweDtcclxuXHRvcGFjaXR5OiAuODtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmJveDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTEwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcblx0bGVmdDogMDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuXHRtaW4td2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxyXG4ubWFpbi13cmFwcGVyIC5idG4tYmxvY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcblx0cGFkZGluZzogNDVweCA3MHB4IDU1cHg7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG5cdGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG5cdGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcblx0cGFkZGluZzogMC44Mzc1ZW0gMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "6XR0":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _news_area_news_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news-area/news-area.component */ "VQeC");


class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 3, vars: 0, consts: [["id", "home-page-skeleton"], ["id", "guide-skeleton"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-news-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_news_area_news_area_component__WEBPACK_IMPORTED_MODULE_1__["NewsAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "7mV1":
/*!********************************************************!*\
  !*** ./src/app/romance-area/romance-area.component.ts ***!
  \********************************************************/
/*! exports provided: RomanceAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomanceAreaComponent", function() { return RomanceAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _romance_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../romance-vids.service */ "AT5E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _romance_skel_romance_skel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../romance-skel/romance-skel.component */ "b71w");






function RomanceAreaComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-romance-skel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rom_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("romVidsData", rom_r1);
} }
class RomanceAreaComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.romVidsListing = [];
        this.romVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.romVidsListing = this.dataservice.getRomVids();
        this.romVidsObj = this.dataservice.getRomVidById(this.activatedRoute.snapshot.params.id);
    }
}
RomanceAreaComponent.ɵfac = function RomanceAreaComponent_Factory(t) { return new (t || RomanceAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_romance_vids_service__WEBPACK_IMPORTED_MODULE_1__["RomanceVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RomanceAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RomanceAreaComponent, selectors: [["app-romance-area"]], decls: 2, vars: 1, consts: [["cols", "3", "id", "home-container-media"], [4, "ngFor", "ngForOf"], [3, "romVidsData"]], template: function RomanceAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RomanceAreaComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.romVidsListing);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _romance_skel_romance_skel_component__WEBPACK_IMPORTED_MODULE_5__["RomanceSkelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb21hbmNlLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AM4H":
/*!******************************************************!*\
  !*** ./src/app/sports-skel/sports-skel.component.ts ***!
  \******************************************************/
/*! exports provided: SportsSkelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsSkelComponent", function() { return SportsSkelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sports_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sports-vids.service */ "RbDW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class SportsSkelComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.sportsVidsData = {};
        this.sportsVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.sportsVidsObj = this.dataservice.getSportsVidById(this.activatedRoute.snapshot.params.id);
    }
}
SportsSkelComponent.ɵfac = function SportsSkelComponent_Factory(t) { return new (t || SportsSkelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sports_vids_service__WEBPACK_IMPORTED_MODULE_1__["SportsVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SportsSkelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsSkelComponent, selectors: [["app-sports-skel"]], inputs: { sportsVidsData: "sportsVidsData" }, decls: 10, vars: 4, consts: [[1, "video-comp"], ["target", "_blank", 2, "color", "white", 3, "href"], ["src", "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1"], [1, "info", 2, "font-weight", "bold"], [1, "info"]], template: function SportsSkelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.sportsVidsData.playLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sportsVidsData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sportsVidsData.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sportsVidsData.views);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9ydHMtc2tlbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "AT5E":
/*!*****************************************!*\
  !*** ./src/app/romance-vids.service.ts ***!
  \*****************************************/
/*! exports provided: RomanceVidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomanceVidsService", function() { return RomanceVidsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RomanceVidsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: "FilterCopy | Every College Romance | Feat. Tinder",
                playLink: "https://www.youtube.com/watch?v=rBv8PJbAuwg",
                embedLink: "https://www.youtube.com/embed/v=rBv8PJbAuwg?controls=1",
                views: "79851 views",
                channel: "FilterCopy"
            },
            {
                id: 2,
                title: "Awkward Conversations With Girlfriend | TSP Originals",
                playLink: "https://www.youtube.com/watch?v=it3acV6dfVI",
                embedLink: "https://www.youtube.com/embed/v=it3acV6dfVI?controls=1",
                views: "58933 views",
                channel: "The Screen Patti"
            },
            {
                id: 3,
                title: "When you fall in Love | TSP's Hum Tum",
                playLink: "https://www.youtube.com/watch?v=0HOEoieMauo",
                embedLink: "https://www.youtube.com/embed/v=0HOEoieMauo?controls=1",
                views: "52650 views",
                channel: "The Screen Patti"
            }
        ];
    }
    getRomVids() {
        return this.data;
    }
    getRomVidById(id) {
        return this.data.find(p => p.id == id);
    }
}
RomanceVidsService.ɵfac = function RomanceVidsService_Factory(t) { return new (t || RomanceVidsService)(); };
RomanceVidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RomanceVidsService, factory: RomanceVidsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Df6e":
/*!********************************************!*\
  !*** ./src/app/sports/sports.component.ts ***!
  \********************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sports_area_sports_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sports-area/sports-area.component */ "dLGy");


class SportsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SportsComponent.ɵfac = function SportsComponent_Factory(t) { return new (t || SportsComponent)(); };
SportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsComponent, selectors: [["app-sports"]], decls: 3, vars: 0, consts: [["id", "home-page-skeleton"], ["id", "guide-skeleton"]], template: function SportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sports-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sports_area_sports_area_component__WEBPACK_IMPORTED_MODULE_1__["SportsAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9ydHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "H3H7":
/*!***************************************!*\
  !*** ./src/app/total-vids.service.ts ***!
  \***************************************/
/*! exports provided: TotalVidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalVidsService", function() { return TotalVidsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TotalVidsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: "Cristiano Ronaldo - All 30 Goals In 2020/2021",
                playLink: "https://www.youtube.com/watch?v=OUKeADsjL7E",
                embedLink: "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1",
                views: "26838 views",
                channel: "Genius Production"
            },
            {
                id: 2,
                title: "Best Comedy Scenes of Jim Carrey",
                playLink: "https://www.youtube.com/watch?v=w5e1rK4xZps",
                embedLink: "https://www.youtube.com/embed/v=w5e1rK4xZps?controls=1",
                views: "382403 views",
                channel: "The kRiddo"
            },
            {
                id: 3,
                title: "Lionel Messi Is A Mastermind ● 2021",
                playLink: "https://www.youtube.com/watch?v=kv-e2dgwmnk",
                embedLink: "https://www.youtube.com/embed/v=kv-e2dgwmnk?controls=1",
                views: "10575 views",
                channel: "NugoBasilaiaa"
            },
            {
                id: 4,
                title: "Shawn Mendes, Camila Cabello - Señorita",
                playLink: "https://www.youtube.com/watch?v=Pkh8UtuejGw",
                embedLink: "https://www.youtube.com/embed/v=Pkh8UtuejGw?controls=1",
                views: "10137 views",
                channel: "Shawn Mendes"
            },
            {
                id: 5,
                title: "Ed Sheeran - Shape of You (Official Music Video)",
                playLink: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
                embedLink: "https://www.youtube.com/embed/v=JGwWNGJdvx8?controls=1",
                views: "54304 views",
                channel: "Ed Sheeran"
            },
            {
                id: 6,
                title: "Best of Michael Scott - The Office US",
                playLink: "https://www.youtube.com/watch?v=IBJJrZ5LAVQ",
                embedLink: "https://www.youtube.com/embed/v=IBJJrZ5LAVQ?controls=1",
                views: "49572 views",
                channel: "The Office"
            },
            {
                id: 7,
                title: "All Champions League Finals & Goals (2005-2020)",
                playLink: "https://www.youtube.com/watch?v=pF81Zxw9o34",
                embedLink: "https://www.youtube.com/embed/v=pF81Zxw9o34?controls=1",
                views: "39278 views",
                channel: "Alsido Football"
            },
            {
                id: 8,
                title: "Ritviz - Sage [Official Music Video]",
                playLink: "https://www.youtube.com/watch?v=_kUrW9SEaJc",
                embedLink: "https://www.youtube.com/embed/v=_kUrW9SEaJc?controls=1",
                views: "49153 views",
                channel: "RITVIZ"
            },
            {
                id: 9,
                title: "Friends: Top 20 Funniest Moments | TBS",
                playLink: "https://www.youtube.com/watch?v=xHcPhdZBngw",
                embedLink: "https://www.youtube.com/embed/v=xHcPhdZBngw?controls=1",
                views: "11297 views",
                channel: "TBS"
            },
            {
                id: 10,
                title: "The Beauty of Football - Greatest Moments",
                playLink: "https://www.youtube.com/watch?v=A-r9sj7zHJ4",
                embedLink: "https://www.youtube.com/embed/v=A-r9sj7zHJ4?controls=1",
                views: "19791 views",
                channel: "LeBreton"
            },
            {
                id: 11,
                title: "FilterCopy | Every College Romance | Feat. Tinder",
                playLink: "https://www.youtube.com/watch?v=rBv8PJbAuwg",
                embedLink: "https://www.youtube.com/embed/v=rBv8PJbAuwg?controls=1",
                views: "79851 views",
                channel: "FilterCopy"
            },
            {
                id: 12,
                title: "How I Met Your Mother - TOP 5 Moments",
                playLink: "https://www.youtube.com/watch?v=sCUEc7ZGGeU",
                embedLink: "https://www.youtube.com/embed/v=sCUEc7ZGGeU?controls=1",
                views: "5016 views",
                channel: "Stanislav Václavík"
            },
            {
                id: 13,
                title: "Katy Perry - Bon Appétit (Official) ft. Migos",
                playLink: "https://www.youtube.com/watch?v=dPI-mRFEIH0",
                embedLink: "https://www.youtube.com/embed/v=dPI-mRFEIH0?controls=1",
                views: "19086 views",
                channel: "Katy Perry"
            },
            {
                id: 14,
                title: "Awkward Conversations With Girlfriend | TSP Originals",
                playLink: "https://www.youtube.com/watch?v=it3acV6dfVI",
                embedLink: "https://www.youtube.com/embed/v=it3acV6dfVI?controls=1",
                views: "58933 views",
                channel: "The Screen Patti"
            },
            {
                id: 15,
                title: "When you fall in Love | TSP's Hum Tum",
                playLink: "https://www.youtube.com/watch?v=0HOEoieMauo",
                embedLink: "https://www.youtube.com/embed/v=0HOEoieMauo?controls=1",
                views: "52650 views",
                channel: "The Screen Patti"
            }
        ];
    }
    getAllVids() {
        return this.data;
    }
    getVidById(id) {
        return this.data.find(p => p.id == id);
    }
}
TotalVidsService.ɵfac = function TotalVidsService_Factory(t) { return new (t || TotalVidsService)(); };
TotalVidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TotalVidsService, factory: TotalVidsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _video_area_video_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../video-area/video-area.component */ "fNPR");


class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 3, vars: 0, consts: [["id", "home-page-skeleton"], ["id", "guide-skeleton"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-video-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_video_area_video_area_component__WEBPACK_IMPORTED_MODULE_1__["VideoAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Oy0r":
/*!**************************************************!*\
  !*** ./src/app/forgotpwd/forgotpwd.component.ts ***!
  \**************************************************/
/*! exports provided: ForgotpwdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpwdComponent", function() { return ForgotpwdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class ForgotpwdComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgotpwdComponent.ɵfac = function ForgotpwdComponent_Factory(t) { return new (t || ForgotpwdComponent)(); };
ForgotpwdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotpwdComponent, selectors: [["app-forgotpwd"]], decls: 11, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box"], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter recovery email"], ["mat-raised-button", "", "color", "accent", "routerLink", "/homepage", 1, "btn-block"]], template: function ForgotpwdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Send mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.positronx[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n    margin: auto;\r\n    top: 25%;\r\n\topacity: 1;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n    color: black;\r\n}\r\n\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground: #FFF7FA;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHB3ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtJQUNULDRCQUE0QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixZQUFZO0lBQ1osUUFBUTtDQUNYLFVBQVU7Q0FDViw0QkFBNEI7Q0FDNUIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLGdCQUFnQjtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLHlCQUF5QjtDQUN6QixVQUFVO0NBQ1YsV0FBVztDQUNYLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1DQUFtQztDQUNuQyxPQUFPO0NBQ1AscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6ImZvcmdvdHB3ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4td3JhcHBlciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnBvc2l0cm9ueCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDI1JTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHBhZGRpbmc6IDYwcHggNTBweCA0MHB4IDUwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdHotaW5kZXg6IDU7XHJcblx0bWF4LXdpZHRoOiAzMzBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJveC5iYWNrIHtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHR0b3A6IC0yMHB4O1xyXG5cdG9wYWNpdHk6IC44O1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uYm94OmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xyXG5cdG1pbi13aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDMwMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXHJcbi5tYWluLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1jYXJkIHtcclxuXHRwYWRkaW5nOiA0NXB4IDcwcHggNTVweDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcblx0bGluZS1oZWlnaHQ6IDU0cHg7XHJcblx0YmFja2dyb3VuZDogI0ZGRjdGQTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuXHRwYWRkaW5nOiAwLjgzNzVlbSAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "Qtqu":
/*!**************************************************!*\
  !*** ./src/app/videoskel/videoskel.component.ts ***!
  \**************************************************/
/*! exports provided: VideoskelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoskelComponent", function() { return VideoskelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _total_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../total-vids.service */ "H3H7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class VideoskelComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.totalVidsData = {};
        this.totalVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.totalVidsObj = this.dataservice.getVidById(this.activatedRoute.snapshot.params.id);
    }
}
VideoskelComponent.ɵfac = function VideoskelComponent_Factory(t) { return new (t || VideoskelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_vids_service__WEBPACK_IMPORTED_MODULE_1__["TotalVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
VideoskelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoskelComponent, selectors: [["app-videoskel"]], inputs: { totalVidsData: "totalVidsData" }, decls: 10, vars: 4, consts: [[1, "video-comp"], ["target", "_blank", 2, "color", "white", 3, "href"], ["src", "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1"], [1, "info", 2, "font-weight", "bold"], [1, "info"]], template: function VideoskelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.totalVidsData.playLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalVidsData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalVidsData.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalVidsData.views);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3NrZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "R/ny":
/*!********************************************!*\
  !*** ./src/app/comedy/comedy.component.ts ***!
  \********************************************/
/*! exports provided: ComedyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComedyComponent", function() { return ComedyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comedy_area_comedy_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comedy-area/comedy-area.component */ "XEry");


class ComedyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComedyComponent.ɵfac = function ComedyComponent_Factory(t) { return new (t || ComedyComponent)(); };
ComedyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComedyComponent, selectors: [["app-comedy"]], decls: 3, vars: 0, consts: [["id", "home-page-skeleton"], ["id", "guide-skeleton"]], template: function ComedyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-comedy-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_comedy_area_comedy_area_component__WEBPACK_IMPORTED_MODULE_1__["ComedyAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21lZHkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RbDW":
/*!****************************************!*\
  !*** ./src/app/sports-vids.service.ts ***!
  \****************************************/
/*! exports provided: SportsVidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsVidsService", function() { return SportsVidsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SportsVidsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: "Cristiano Ronaldo - All 30 Goals In 2020/2021",
                playLink: "https://www.youtube.com/watch?v=OUKeADsjL7E",
                embedLink: "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1",
                views: "26838 views",
                channel: "Genius Production"
            },
            {
                id: 2,
                title: "Lionel Messi Is A Mastermind ● 2021",
                playLink: "https://www.youtube.com/watch?v=kv-e2dgwmnk",
                embedLink: "https://www.youtube.com/embed/v=kv-e2dgwmnk?controls=1",
                views: "10575 views",
                channel: "NugoBasilaiaa"
            },
            {
                id: 3,
                title: "All Champions League Finals & Goals (2005-2020)",
                playLink: "https://www.youtube.com/watch?v=pF81Zxw9o34",
                embedLink: "https://www.youtube.com/embed/v=pF81Zxw9o34?controls=1",
                views: "39278 views",
                channel: "Alsido Football"
            },
            {
                id: 4,
                title: "The Beauty of Football - Greatest Moments",
                playLink: "https://www.youtube.com/watch?v=A-r9sj7zHJ4",
                embedLink: "https://www.youtube.com/embed/v=A-r9sj7zHJ4?controls=1",
                views: "19791 views",
                channel: "LeBreton"
            }
        ];
    }
    getSportsVids() {
        return this.data;
    }
    getSportsVidById(id) {
        return this.data.find(p => p.id == id);
    }
}
SportsVidsService.ɵfac = function SportsVidsService_Factory(t) { return new (t || SportsVidsService)(); };
SportsVidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SportsVidsService, factory: SportsVidsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx_r0.username, "");
} }
function AppComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SIGN UP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_30_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'angularRecipe';
        this.isAuthenticated = false;
        this.authService.isAuthenticated.subscribe((isAuthenticated) => this.isAuthenticated = isAuthenticated);
        this.authService.user.subscribe((username) => this.username = username);
    }
    ngOnInit() {
        this.isAuthenticated = this.authService.checkAuthenticated();
        this.username = this.authService.checkUser();
    }
    logout() {
        this.authService.logout('/');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 33, vars: 5, consts: [["rel", "stylesheet", "href", "//fonts.googleapis.com/css?family=Roboto:500,300,700,400", "name", "www-roboto", "nonce", "YxLPRC2w1l0Yd7yZ1k67fw"], ["rel", "stylesheet", "href", "//fonts.googleapis.com/css?family=YT%20Sans%3A300%2C500%2C700", "name", "www-webfont-yt-sans", "nonce", "YxLPRC2w1l0Yd7yZ1k67fw"], [1, "cont", 2, "text-align", "center"], ["mode", "side", "opened", ""], ["class", "list-group", 4, "ngIf"], [1, "list-group"], ["routerLink", "/homepage", 1, "list-group-item"], ["routerLink", "/comedy", 1, "list-group-item"], ["routerLink", "/sports", 1, "list-group-item"], ["routerLink", "/romance", 1, "list-group-item"], ["routerLink", "/news", 1, "list-group-item"], ["class", "btn", 4, "ngIf"], ["class", "btn", "id", "logout", 3, "click", 4, "ngIf"], ["routerLink", "/", 1, "list-group-item"], [1, "btn"], ["routerLink", "/signin"], ["routerLink", "/login"], ["id", "logout", 1, "btn", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-drawer-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Comedy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Romance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_div_25_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_27_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_div_29_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated === true);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".cont[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n}\r\n.btn[_ngcontent-%COMP%]\r\n{\r\n    border-radius: 10px;\r\n    background-color: lightcyan;\r\n    margin: 10px;\r\n    color: darkblue;\r\n    font-weight: bold;\r\n    width: 100px;\r\n}\r\n.list-group-item[_ngcontent-%COMP%]\r\n{\r\n    background-color: lightyellow;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: bold;\r\n}\r\n#logout[_ngcontent-%COMP%] {\r\n    background-color: lightsalmon;\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5idG5cclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiBkYXJrYmx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW1cclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiNsb2dvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzYWxtb247XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"] });


/***/ }),

/***/ "VQeC":
/*!**************************************************!*\
  !*** ./src/app/news-area/news-area.component.ts ***!
  \**************************************************/
/*! exports provided: NewsAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAreaComponent", function() { return NewsAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _news_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news-vids.service */ "gJNy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _news_skel_news_skel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../news-skel/news-skel.component */ "sfFW");






function NewsAreaComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-news-skel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newsVidsData", news_r1);
} }
class NewsAreaComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.newsVidsListing = [];
        this.newsVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.newsVidsListing = this.dataservice.getNewsVids();
        this.newsVidsObj = this.dataservice.getNewsVidById(this.activatedRoute.snapshot.params.id);
    }
}
NewsAreaComponent.ɵfac = function NewsAreaComponent_Factory(t) { return new (t || NewsAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_news_vids_service__WEBPACK_IMPORTED_MODULE_1__["NewsVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NewsAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsAreaComponent, selectors: [["app-news-area"]], decls: 2, vars: 1, consts: [["cols", "3", "id", "home-container-media"], [4, "ngFor", "ngForOf"], [3, "newsVidsData"]], template: function NewsAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsAreaComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsVidsListing);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _news_skel_news_skel_component__WEBPACK_IMPORTED_MODULE_5__["NewsSkelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6Uy":
/*!****************************************!*\
  !*** ./src/app/comedy-vids.service.ts ***!
  \****************************************/
/*! exports provided: ComedyVidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComedyVidsService", function() { return ComedyVidsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ComedyVidsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: "Best Comedy Scenes of Jim Carrey",
                playLink: "https://www.youtube.com/watch?v=w5e1rK4xZps",
                embedLink: "https://www.youtube.com/embed/v=w5e1rK4xZps?controls=1",
                views: "382403 views",
                channel: "The kRiddo"
            },
            {
                id: 2,
                title: "Best of Michael Scott - The Office US",
                playLink: "https://www.youtube.com/watch?v=IBJJrZ5LAVQ",
                embedLink: "https://www.youtube.com/embed/v=IBJJrZ5LAVQ?controls=1",
                views: "49572 views",
                channel: "The Office"
            },
            {
                id: 3,
                title: "Friends: Top 20 Funniest Moments | TBS",
                playLink: "https://www.youtube.com/watch?v=xHcPhdZBngw",
                embedLink: "https://www.youtube.com/embed/v=xHcPhdZBngw?controls=1",
                views: "11297 views",
                channel: "TBS"
            },
            {
                id: 4,
                title: "How I Met Your Mother - TOP 5 Moments",
                playLink: "https://www.youtube.com/watch?v=sCUEc7ZGGeU",
                embedLink: "https://www.youtube.com/embed/v=sCUEc7ZGGeU?controls=1",
                views: "5016 views",
                channel: "Stanislav Václavík"
            }
        ];
    }
    getComVids() {
        return this.data;
    }
    getComVidById(id) {
        return this.data.find(p => p.id == id);
    }
}
ComedyVidsService.ɵfac = function ComedyVidsService_Factory(t) { return new (t || ComedyVidsService)(); };
ComedyVidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComedyVidsService, factory: ComedyVidsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "XEry":
/*!******************************************************!*\
  !*** ./src/app/comedy-area/comedy-area.component.ts ***!
  \******************************************************/
/*! exports provided: ComedyAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComedyAreaComponent", function() { return ComedyAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comedy_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comedy-vids.service */ "W6Uy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comedy_skel_comedy_skel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comedy-skel/comedy-skel.component */ "cVzz");






function ComedyAreaComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comedy-skel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const com_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comVidsData", com_r1);
} }
class ComedyAreaComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.comVidsListing = [];
        this.comVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.comVidsListing = this.dataservice.getComVids();
        this.comVidsObj = this.dataservice.getComVidById(this.activatedRoute.snapshot.params.id);
    }
}
ComedyAreaComponent.ɵfac = function ComedyAreaComponent_Factory(t) { return new (t || ComedyAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comedy_vids_service__WEBPACK_IMPORTED_MODULE_1__["ComedyVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ComedyAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComedyAreaComponent, selectors: [["app-comedy-area"]], decls: 2, vars: 1, consts: [["cols", "3", "id", "home-container-media"], [4, "ngFor", "ngForOf"], [3, "comVidsData"]], template: function ComedyAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComedyAreaComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comVidsListing);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _comedy_skel_comedy_skel_component__WEBPACK_IMPORTED_MODULE_5__["ComedySkelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21lZHktYXJlYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _comedy_comedy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comedy/comedy.component */ "R/ny");
/* harmony import */ var _sports_sports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sports/sports.component */ "Df6e");
/* harmony import */ var _romance_romance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./romance/romance.component */ "xomd");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ "Oy0r");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "596N");
/* harmony import */ var _videoskel_videoskel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./videoskel/videoskel.component */ "Qtqu");
/* harmony import */ var _video_area_video_area_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./video-area/video-area.component */ "fNPR");
/* harmony import */ var _sports_area_sports_area_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sports-area/sports-area.component */ "dLGy");
/* harmony import */ var _comedy_area_comedy_area_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comedy-area/comedy-area.component */ "XEry");
/* harmony import */ var _news_area_news_area_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./news-area/news-area.component */ "VQeC");
/* harmony import */ var _romance_area_romance_area_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./romance-area/romance-area.component */ "7mV1");
/* harmony import */ var _sports_skel_sports_skel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sports-skel/sports-skel.component */ "AM4H");
/* harmony import */ var _comedy_skel_comedy_skel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comedy-skel/comedy-skel.component */ "cVzz");
/* harmony import */ var _romance_skel_romance_skel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./romance-skel/romance-skel.component */ "b71w");
/* harmony import */ var _news_skel_news_skel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news-skel/news-skel.component */ "sfFW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "ofXK");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_auth_service__WEBPACK_IMPORTED_MODULE_30__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
        _comedy_comedy_component__WEBPACK_IMPORTED_MODULE_5__["ComedyComponent"],
        _sports_sports_component__WEBPACK_IMPORTED_MODULE_6__["SportsComponent"],
        _romance_romance_component__WEBPACK_IMPORTED_MODULE_7__["RomanceComponent"],
        _news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_11__["ForgotpwdComponent"],
        _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_12__["EmailverifyComponent"],
        _videoskel_videoskel_component__WEBPACK_IMPORTED_MODULE_13__["VideoskelComponent"],
        _video_area_video_area_component__WEBPACK_IMPORTED_MODULE_14__["VideoAreaComponent"],
        _sports_area_sports_area_component__WEBPACK_IMPORTED_MODULE_15__["SportsAreaComponent"],
        _comedy_area_comedy_area_component__WEBPACK_IMPORTED_MODULE_16__["ComedyAreaComponent"],
        _news_area_news_area_component__WEBPACK_IMPORTED_MODULE_17__["NewsAreaComponent"],
        _romance_area_romance_area_component__WEBPACK_IMPORTED_MODULE_18__["RomanceAreaComponent"],
        _sports_skel_sports_skel_component__WEBPACK_IMPORTED_MODULE_19__["SportsSkelComponent"],
        _comedy_skel_comedy_skel_component__WEBPACK_IMPORTED_MODULE_20__["ComedySkelComponent"],
        _romance_skel_romance_skel_component__WEBPACK_IMPORTED_MODULE_21__["RomanceSkelComponent"],
        _news_skel_news_skel_component__WEBPACK_IMPORTED_MODULE_22__["NewsSkelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_29__["HttpClientModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetComponentScope"](_sports_area_sports_area_component__WEBPACK_IMPORTED_MODULE_15__["SportsAreaComponent"], [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__["MatGridTile"], _sports_skel_sports_skel_component__WEBPACK_IMPORTED_MODULE_19__["SportsSkelComponent"]], []);


/***/ }),

/***/ "b71w":
/*!********************************************************!*\
  !*** ./src/app/romance-skel/romance-skel.component.ts ***!
  \********************************************************/
/*! exports provided: RomanceSkelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomanceSkelComponent", function() { return RomanceSkelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _romance_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../romance-vids.service */ "AT5E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class RomanceSkelComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.romVidsData = {};
        this.romVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.romVidsObj = this.dataservice.getRomVidById(this.activatedRoute.snapshot.params.id);
    }
}
RomanceSkelComponent.ɵfac = function RomanceSkelComponent_Factory(t) { return new (t || RomanceSkelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_romance_vids_service__WEBPACK_IMPORTED_MODULE_1__["RomanceVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RomanceSkelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RomanceSkelComponent, selectors: [["app-romance-skel"]], inputs: { romVidsData: "romVidsData" }, decls: 10, vars: 4, consts: [[1, "video-comp"], ["target", "_blank", 2, "color", "white", 3, "href"], ["src", "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1"], [1, "info", 2, "font-weight", "bold"], [1, "info"]], template: function RomanceSkelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.romVidsData.playLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.romVidsData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.romVidsData.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.romVidsData.views);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb21hbmNlLXNrZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "cVzz":
/*!******************************************************!*\
  !*** ./src/app/comedy-skel/comedy-skel.component.ts ***!
  \******************************************************/
/*! exports provided: ComedySkelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComedySkelComponent", function() { return ComedySkelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comedy_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comedy-vids.service */ "W6Uy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class ComedySkelComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.comVidsData = {};
        this.comVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.comVidsObj = this.dataservice.getComVidById(this.activatedRoute.snapshot.params.id);
    }
}
ComedySkelComponent.ɵfac = function ComedySkelComponent_Factory(t) { return new (t || ComedySkelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_comedy_vids_service__WEBPACK_IMPORTED_MODULE_1__["ComedyVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ComedySkelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComedySkelComponent, selectors: [["app-comedy-skel"]], inputs: { comVidsData: "comVidsData" }, decls: 10, vars: 4, consts: [[1, "video-comp"], ["target", "_blank", 2, "color", "white", 3, "href"], ["src", "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1"], [1, "info", 2, "font-weight", "bold"], [1, "info"]], template: function ComedySkelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.comVidsData.playLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comVidsData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comVidsData.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comVidsData.views);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21lZHktc2tlbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.APIUrl = 'http://localhost:5000/api';
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.users = [
            new Map([
                ['username', 'bharat'],
                ['password', 'bharat123'],
            ]),
        ];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.users);
    }
    login(username, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataVal = yield this.getUser(username);
            if (this.dataVal.length === 1) {
                var user = this.dataVal[0];
                if (password === user['pwd']) {
                    this.isAuthenticated.next(true);
                    this.user.next(username);
                    this.router.navigate(['/']);
                    return false;
                }
                else
                    return true;
            }
            else
                return true;
        });
    }
    checkAuthenticated() {
        const authenticated = this.user.value === null ? false : true;
        this.isAuthenticated.next(authenticated);
        return authenticated;
    }
    checkUser() {
        const username = this.user;
        return username;
    }
    logout(redirect) {
        this.isAuthenticated.next(false);
        this.user.next(null);
        this.router.navigate([redirect]);
    }
    signup(username, password, email) {
        this.addUser({ userName: username, pwd: password, email: email }).subscribe((res) => {
            alert(res.toString());
            if (res.toString().includes('already taken'))
                return;
            else
                this.router.navigate(['login']);
        });
        // let userMap = new Map([
        //   ['username', username],
        //   ['password', password],
        // ]);
        // this.users.push(userMap);
        // this.usersUpdated.next([...this.users]);
    }
    getUserList() {
        return this.http.get(this.APIUrl + '/user');
    }
    getUser(username) {
        return this.http.get(this.APIUrl + '/user/' + username).toPromise();
    }
    addUser(val) {
        return this.http.post(this.APIUrl + '/user', val);
    }
    updateUser(val) {
        return this.http.put(this.APIUrl + '/user', val);
    }
    deleteUser(val) {
        return this.http.delete(this.APIUrl + '/user/' + val);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dLGy":
/*!******************************************************!*\
  !*** ./src/app/sports-area/sports-area.component.ts ***!
  \******************************************************/
/*! exports provided: SportsAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsAreaComponent", function() { return SportsAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sports_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sports-vids.service */ "RbDW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function SportsAreaComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sports-skel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sports_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sportsVidsData", sports_r1);
} }
class SportsAreaComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.sportsVidsListing = [];
        this.sportsVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.sportsVidsListing = this.dataservice.getSportsVids();
        this.sportsVidsObj = this.dataservice.getSportsVidById(this.activatedRoute.snapshot.params.id);
    }
}
SportsAreaComponent.ɵfac = function SportsAreaComponent_Factory(t) { return new (t || SportsAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sports_vids_service__WEBPACK_IMPORTED_MODULE_1__["SportsVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SportsAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsAreaComponent, selectors: [["app-sports-area"]], decls: 2, vars: 1, consts: [["cols", "3", "id", "home-container-media"], [4, "ngFor", "ngForOf"], [3, "sportsVidsData"]], template: function SportsAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsAreaComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sportsVidsListing);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9ydHMtYXJlYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "fNPR":
/*!****************************************************!*\
  !*** ./src/app/video-area/video-area.component.ts ***!
  \****************************************************/
/*! exports provided: VideoAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAreaComponent", function() { return VideoAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _total_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../total-vids.service */ "H3H7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _videoskel_videoskel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videoskel/videoskel.component */ "Qtqu");






function VideoAreaComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-videoskel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalVidsData", total_r1);
} }
class VideoAreaComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.totalVidsListing = [];
        this.totalVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.totalVidsListing = this.dataservice.getAllVids();
        this.totalVidsObj = this.dataservice.getVidById(this.activatedRoute.snapshot.params.id);
    }
}
VideoAreaComponent.ɵfac = function VideoAreaComponent_Factory(t) { return new (t || VideoAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_total_vids_service__WEBPACK_IMPORTED_MODULE_1__["TotalVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
VideoAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoAreaComponent, selectors: [["app-video-area"]], decls: 2, vars: 1, consts: [["cols", "3", "id", "home-container-media"], [4, "ngFor", "ngForOf"], [3, "totalVidsData"]], template: function VideoAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideoAreaComponent_mat_grid_tile_1_Template, 2, 1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.totalVidsListing);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _videoskel_videoskel_component__WEBPACK_IMPORTED_MODULE_5__["VideoskelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlby1hcmVhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "gJNy":
/*!**************************************!*\
  !*** ./src/app/news-vids.service.ts ***!
  \**************************************/
/*! exports provided: NewsVidsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsVidsService", function() { return NewsVidsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewsVidsService {
    constructor() {
        this.data = [
            {
                id: 1,
                title: "Shawn Mendes, Camila Cabello - Señorita",
                playLink: "https://www.youtube.com/watch?v=Pkh8UtuejGw",
                embedLink: "https://www.youtube.com/embed/v=Pkh8UtuejGw?controls=1",
                views: "10137 views",
                channel: "Shawn Mendes"
            },
            {
                id: 2,
                title: "Ed Sheeran - Shape of You (Official Music Video)",
                playLink: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
                embedLink: "https://www.youtube.com/embed/v=JGwWNGJdvx8?controls=1",
                views: "54304 views",
                channel: "Ed Sheeran"
            },
            {
                id: 3,
                title: "Ritviz - Sage [Official Music Video]",
                playLink: "https://www.youtube.com/watch?v=_kUrW9SEaJc",
                embedLink: "https://www.youtube.com/embed/v=_kUrW9SEaJc?controls=1",
                views: "49153 views",
                channel: "RITVIZ"
            },
            {
                id: 4,
                title: "Katy Perry - Bon Appétit (Official) ft. Migos",
                playLink: "https://www.youtube.com/watch?v=dPI-mRFEIH0",
                embedLink: "https://www.youtube.com/embed/v=dPI-mRFEIH0?controls=1",
                views: "19086 views",
                channel: "Katy Perry"
            }
        ];
    }
    getNewsVids() {
        return this.data;
    }
    getNewsVidById(id) {
        return this.data.find(p => p.id == id);
    }
}
NewsVidsService.ɵfac = function NewsVidsService_Factory(t) { return new (t || NewsVidsService)(); };
NewsVidsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NewsVidsService, factory: NewsVidsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sfFW":
/*!**************************************************!*\
  !*** ./src/app/news-skel/news-skel.component.ts ***!
  \**************************************************/
/*! exports provided: NewsSkelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsSkelComponent", function() { return NewsSkelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _news_vids_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news-vids.service */ "gJNy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class NewsSkelComponent {
    constructor(dataservice, activatedRoute) {
        this.dataservice = dataservice;
        this.activatedRoute = activatedRoute;
        this.newsVidsData = {};
        this.newsVidsObj = {};
    }
    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params.id);
        this.newsVidsObj = this.dataservice.getNewsVidById(this.activatedRoute.snapshot.params.id);
    }
}
NewsSkelComponent.ɵfac = function NewsSkelComponent_Factory(t) { return new (t || NewsSkelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_news_vids_service__WEBPACK_IMPORTED_MODULE_1__["NewsVidsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NewsSkelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsSkelComponent, selectors: [["app-news-skel"]], inputs: { newsVidsData: "newsVidsData" }, decls: 10, vars: 4, consts: [[1, "video-comp"], ["target", "_blank", 2, "color", "white", 3, "href"], ["src", "https://www.youtube.com/embed/v=OUKeADsjL7E?controls=1"], [1, "info", 2, "font-weight", "bold"], [1, "info"]], template: function NewsSkelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.newsVidsData.playLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsVidsData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsVidsData.channel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newsVidsData.views);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLXNrZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comedy_comedy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comedy/comedy.component */ "R/ny");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "596N");
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ "Oy0r");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news/news.component */ "6XR0");
/* harmony import */ var _romance_romance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./romance/romance.component */ "xomd");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _sports_sports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sports/sports.component */ "Df6e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"]
    },
    {
        path: 'comedy',
        component: _comedy_comedy_component__WEBPACK_IMPORTED_MODULE_1__["ComedyComponent"]
    },
    {
        path: 'news',
        component: _news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"]
    },
    {
        path: 'romance',
        component: _romance_romance_component__WEBPACK_IMPORTED_MODULE_7__["RomanceComponent"]
    },
    {
        path: 'sports',
        component: _sports_sports_component__WEBPACK_IMPORTED_MODULE_9__["SportsComponent"]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'emailverify',
        component: _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_2__["EmailverifyComponent"]
    },
    {
        path: 'forgotpwd',
        component: _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_3__["ForgotpwdComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function LoginComponent_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_9_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.username == null ? null : ctx_r0.username.errors == null ? null : ctx_r0.username.errors.required);
} }
function LoginComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_14_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.password == null ? null : ctx_r1.password.errors == null ? null : ctx_r1.password.errors.required);
} }
class LoginComponent {
    constructor(fb, router, authService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.invalid = false;
    }
    ngOnInit() {
        console.log(this.authService.checkAuthenticated());
        if (this.authService.checkAuthenticated())
            this.router.navigate(['/homepage']);
    }
    onSubmit() {
        if (this.userForm.valid) {
            const username = this.userForm.get('username').value;
            const password = this.userForm.get('password').value;
            this.authService.login(username, password).then((value) => {
                if (value === true) {
                    window.alert("Wrong username or password");
                }
            });
        }
    }
    get user() {
        return this.authService.checkUser();
    }
    get username() {
        return this.userForm.get('username');
    }
    get password() {
        return this.userForm.get('password');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 19, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["type", "text", "placeholder", "Enter Username", "formControlName", "username"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "Enter Password", "formControlName", "password"], ["mat-raised-button", "", "color", "accent", 1, "btn-block"], ["mat-raised-button", "", "color", "accent", "routerLink", "/forgotpwd", 1, "btn-block"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.username == null ? null : ctx.username.invalid) && ((ctx.username == null ? null : ctx.username.dirty) || (ctx.username == null ? null : ctx.username.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.invalid) && ((ctx.password == null ? null : ctx.password.dirty) || (ctx.password == null ? null : ctx.password.touched)));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n    background-color: whitesmoke;\r\n}\r\n\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n    margin: auto;\r\n    top: 25%;\r\n\topacity: 1;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n    color: black;\r\n}\r\n\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n\r\n  .mat-form-field-placeholder{\r\n\r\n\tcolor: red !important;\r\n  }\r\n\r\n  .mat-focused .mat-form-field-placeholder{\r\n  \r\n\tcolor: blue !important;\r\n  }\r\n\r\n  .mat-form-field-underline .mat-form-field-ripple{\r\n\r\n\tbackground-color:rgb(0, 140, 255) !important;\r\n  }\r\n\r\n  .mat-form-field-underline{\r\n  \r\n\tbackground-color:rgb(0, 140, 255) !important;\r\n  }\r\n\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground: #FFF7FA;\r\n}\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\r\n\r\n.alert-danger[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsWUFBWTtJQUNULDRCQUE0QjtBQUNoQzs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLFlBQVk7SUFDWixRQUFRO0NBQ1gsVUFBVTtDQUNWLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1YsZ0JBQWdCO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUNBOztDQUVDLHFCQUFxQjtFQUNwQjs7QUFFQTs7Q0FFRCxzQkFBc0I7RUFDckI7O0FBQ0Y7O0NBRUMsNENBQTRDO0VBQzNDOztBQUVBOztDQUVELDRDQUE0QztFQUMzQzs7QUFDRjtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1DQUFtQztDQUNuQyxPQUFPO0NBQ1AscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluLXdyYXBwZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5ib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMjUlO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0cGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0ei1pbmRleDogNTtcclxuXHRtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm94LmJhY2sge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdHRvcDogLTIwcHg7XHJcblx0b3BhY2l0eTogLjg7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1wbGFjZWhvbGRlcntcclxuXHJcblx0Y29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1wbGFjZWhvbGRlcntcclxuICBcclxuXHRjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZXtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwgMTQwLCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xyXG4gIFxyXG5cdGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDE0MCwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmJveDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTEwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XHJcblx0bGVmdDogMDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcclxuXHRtaW4td2lkdGg6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiAzMDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAuZXhhbXBsZS1mdWxsLXdpZHRoLFxyXG4ubWFpbi13cmFwcGVyIC5idG4tYmxvY2sge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcblx0cGFkZGluZzogNDVweCA3MHB4IDU1cHg7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG5cdGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG5cdGJhY2tncm91bmQ6ICNGRkY3RkE7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG5cdHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "xomd":
/*!**********************************************!*\
  !*** ./src/app/romance/romance.component.ts ***!
  \**********************************************/
/*! exports provided: RomanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RomanceComponent", function() { return RomanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _romance_area_romance_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../romance-area/romance-area.component */ "7mV1");


class RomanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
RomanceComponent.ɵfac = function RomanceComponent_Factory(t) { return new (t || RomanceComponent)(); };
RomanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RomanceComponent, selectors: [["app-romance"]], decls: 3, vars: 0, consts: [["id", "home-page-skeleton"], ["id", "guide-skeleton"]], template: function RomanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-romance-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_romance_area_romance_area_component__WEBPACK_IMPORTED_MODULE_1__["RomanceAreaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb21hbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map