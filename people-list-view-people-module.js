(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["people-list-view-people-module"],{

/***/ "3z55":
/*!***************************************************!*\
  !*** ./src/app/people-list-view/people.module.ts ***!
  \***************************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _person_detail_view_person_detail_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person-detail-view/person-detail-view.component */ "AUvm");
/* harmony import */ var _people_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-list-view.component */ "XkDy");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _people_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people-routing.module */ "S+fM");











class PeopleModule {
}
PeopleModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PeopleModule });
PeopleModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PeopleModule_Factory(t) { return new (t || PeopleModule)(); }, providers: [
        _services_swapi_service__WEBPACK_IMPORTED_MODULE_4__["SwapiService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
            _people_routing_module__WEBPACK_IMPORTED_MODULE_9__["PeopleRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PeopleModule, { declarations: [_people_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PeopleListViewComponent"], _person_detail_view_person_detail_view_component__WEBPACK_IMPORTED_MODULE_2__["PersonDetailViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
        _people_routing_module__WEBPACK_IMPORTED_MODULE_9__["PeopleRoutingModule"]], exports: [_people_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PeopleListViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PeopleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_people_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PeopleListViewComponent"], _person_detail_view_person_detail_view_component__WEBPACK_IMPORTED_MODULE_2__["PersonDetailViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                    _people_routing_module__WEBPACK_IMPORTED_MODULE_9__["PeopleRoutingModule"]
                ],
                providers: [
                    _services_swapi_service__WEBPACK_IMPORTED_MODULE_4__["SwapiService"]
                ],
                exports: [
                    _people_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PeopleListViewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AUvm":
/*!********************************************************************!*\
  !*** ./src/app/person-detail-view/person-detail-view.component.ts ***!
  \********************************************************************/
/*! exports provided: PersonDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailViewComponent", function() { return PersonDetailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");








function PersonDetailViewComponent_div_0_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Birth Year: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Gender: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Hair Color: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Height: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Mass: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Skin Color: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.birth_year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.hair_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.mass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r5.skin_color);
} }
function PersonDetailViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PersonDetailViewComponent_div_0_ul_1_Template, 32, 7, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, ctx_r0.person$))("ngIfElse", _r1);
} }
function PersonDetailViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-spinner", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("diameter", 50);
} }
class PersonDetailViewComponent {
    constructor(swapiService, store) {
        this.swapiService = swapiService;
        this.store = store;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('url'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(state => this.url = state);
        this.person$ = this.swapiService.getPerson(this.url);
    }
}
PersonDetailViewComponent.??fac = function PersonDetailViewComponent_Factory(t) { return new (t || PersonDetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_swapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PersonDetailViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PersonDetailViewComponent, selectors: [["app-person-detail-view"]], decls: 4, vars: 4, consts: [["class", "attribute-list", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "attribute-list"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], [1, "name"], [1, "attribute"], [1, "value"], [1, "loading", 3, "diameter"]], template: function PersonDetailViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, PersonDetailViewComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PersonDetailViewComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 2, ctx.person$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".attribute-list[_ngcontent-%COMP%] {\r\n  color: rgb(21, 22, 24);\r\n}\r\n\r\n.loading[_ngcontent-%COMP%] {\r\n  margin: 25% 50%;\r\n}\r\n\r\n.attribute[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color:rgb(104, 104, 104);\r\n}\r\n\r\n.value[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-size: large;\r\n  font-weight: bold;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  padding-inline-start: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbi1kZXRhaWwtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJwZXJzb24tZGV0YWlsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHRyaWJ1dGUtbGlzdCB7XHJcbiAgY29sb3I6IHJnYigyMSwgMjIsIDI0KTtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIG1hcmdpbjogMjUlIDUwJTtcclxufVxyXG5cclxuLmF0dHJpYnV0ZSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOnJnYigxMDQsIDEwNCwgMTA0KTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PersonDetailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-detail-view',
                templateUrl: './person-detail-view.component.html',
                styleUrls: ['./person-detail-view.component.css']
            }]
    }], function () { return [{ type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapiService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "S+fM":
/*!***********************************************************!*\
  !*** ./src/app/people-list-view/people-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PeopleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleRoutingModule", function() { return PeopleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _person_detail_view_person_detail_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person-detail-view/person-detail-view.component */ "AUvm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _people_list_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-list-view.component */ "XkDy");






const ROUTES = [
    { path: '', component: _people_list_view_component__WEBPACK_IMPORTED_MODULE_3__["PeopleListViewComponent"] },
    { path: ':name', component: _person_detail_view_person_detail_view_component__WEBPACK_IMPORTED_MODULE_1__["PersonDetailViewComponent"] },
];
class PeopleRoutingModule {
}
PeopleRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: PeopleRoutingModule });
PeopleRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function PeopleRoutingModule_Factory(t) { return new (t || PeopleRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](PeopleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PeopleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XkDy":
/*!****************************************************************!*\
  !*** ./src/app/people-list-view/people-list-view.component.ts ***!
  \****************************************************************/
/*! exports provided: PeopleListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleListViewComponent", function() { return PeopleListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/list-view/list-view.component */ "fQZA");






class PeopleListViewComponent {
    constructor(swapiService, router, store) {
        this.swapiService = swapiService;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.url = this.store.select('url');
        this.swapiService.getPeople().subscribe((response) => this.people = response.results);
    }
    onSelect(person) {
        this.store.dispatch({
            type: 'SET_URL',
            payload: person.url
        });
        this.router.navigateByUrl(`/people/` + person.name);
    }
}
PeopleListViewComponent.??fac = function PeopleListViewComponent_Factory(t) { return new (t || PeopleListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_swapi_service__WEBPACK_IMPORTED_MODULE_1__["SwapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PeopleListViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PeopleListViewComponent, selectors: [["app-people-list-view"]], decls: 1, vars: 1, consts: [[3, "data", "selected"]], template: function PeopleListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-list-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selected", function PeopleListViewComponent_Template_app_list_view_selected_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.people);
    } }, directives: [_shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW9wbGUtbGlzdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PeopleListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people-list-view',
                templateUrl: './people-list-view.component.html',
                styleUrls: ['./people-list-view.component.css']
            }]
    }], function () { return [{ type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_1__["SwapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=people-list-view-people-module.js.map