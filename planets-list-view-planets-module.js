(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planets-list-view-planets-module"],{

/***/ "0MFa":
/*!*****************************************************!*\
  !*** ./src/app/planets-list-view/planets.module.ts ***!
  \*****************************************************/
/*! exports provided: PlanetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsModule", function() { return PlanetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _planets_list_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./planets-list-view.component */ "JA1u");
/* harmony import */ var _planet_detail_view_planet_detail_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../planet-detail-view/planet-detail-view.component */ "hBob");
/* harmony import */ var _planets_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./planets-routing.module */ "p88Q");











class PlanetsModule {
}
PlanetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlanetsModule });
PlanetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlanetsModule_Factory(t) { return new (t || PlanetsModule)(); }, providers: [
        _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _planets_routing_module__WEBPACK_IMPORTED_MODULE_9__["PlanetsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanetsModule, { declarations: [_planets_list_view_component__WEBPACK_IMPORTED_MODULE_7__["PlanetsListViewComponent"], _planet_detail_view_planet_detail_view_component__WEBPACK_IMPORTED_MODULE_8__["PlanetDetailViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
        _planets_routing_module__WEBPACK_IMPORTED_MODULE_9__["PlanetsRoutingModule"]], exports: [_planets_list_view_component__WEBPACK_IMPORTED_MODULE_7__["PlanetsListViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_planets_list_view_component__WEBPACK_IMPORTED_MODULE_7__["PlanetsListViewComponent"], _planet_detail_view_planet_detail_view_component__WEBPACK_IMPORTED_MODULE_8__["PlanetDetailViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                    _planets_routing_module__WEBPACK_IMPORTED_MODULE_9__["PlanetsRoutingModule"]
                ],
                providers: [
                    _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]
                ],
                exports: [
                    _planets_list_view_component__WEBPACK_IMPORTED_MODULE_7__["PlanetsListViewComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "JA1u":
/*!******************************************************************!*\
  !*** ./src/app/planets-list-view/planets-list-view.component.ts ***!
  \******************************************************************/
/*! exports provided: PlanetsListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsListViewComponent", function() { return PlanetsListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/list-view/list-view.component */ "fQZA");






class PlanetsListViewComponent {
    constructor(swapiService, router, store) {
        this.swapiService = swapiService;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.url = this.store.select('url');
        this.swapiService.getPlanets().subscribe((response) => this.planets = response.results);
    }
    onSelect(planet) {
        this.store.dispatch({
            type: 'SET_URL',
            payload: planet.url
        });
        this.router.navigateByUrl(`/planets/` + planet.name);
    }
}
PlanetsListViewComponent.ɵfac = function PlanetsListViewComponent_Factory(t) { return new (t || PlanetsListViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_swapi_service__WEBPACK_IMPORTED_MODULE_1__["SwapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
PlanetsListViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetsListViewComponent, selectors: [["app-planets-list-view"]], decls: 1, vars: 1, consts: [[3, "data", "selected"]], template: function PlanetsListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-list-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PlanetsListViewComponent_Template_app_list_view_selected_0_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.planets);
    } }, directives: [_shared_components_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuZXRzLWxpc3Qtdmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetsListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-planets-list-view',
                templateUrl: './planets-list-view.component.html',
                styleUrls: ['./planets-list-view.component.css']
            }]
    }], function () { return [{ type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_1__["SwapiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "hBob":
/*!********************************************************************!*\
  !*** ./src/app/planet-detail-view/planet-detail-view.component.ts ***!
  \********************************************************************/
/*! exports provided: PlanetDetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailViewComponent", function() { return PlanetDetailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/swapi.service */ "X02B");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");








function PlanetDetailViewComponent_div_0_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Population: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Terrain: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.population);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.terrain);
} }
function PlanetDetailViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanetDetailViewComponent_div_0_ul_1_Template, 12, 3, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.planet$))("ngIfElse", _r1);
} }
function PlanetDetailViewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 50);
} }
class PlanetDetailViewComponent {
    constructor(swapiService, store) {
        this.swapiService = swapiService;
        this.store = store;
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('url'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(state => this.url = state);
        this.planet$ = this.swapiService.getPlanet(this.url);
    }
}
PlanetDetailViewComponent.ɵfac = function PlanetDetailViewComponent_Factory(t) { return new (t || PlanetDetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_swapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
PlanetDetailViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetDetailViewComponent, selectors: [["app-planet-detail-view"]], decls: 4, vars: 4, consts: [["class", "attribute-list", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "attribute-list"], ["class", "list", 4, "ngIf", "ngIfElse"], [1, "list"], [1, "name"], [1, "attribute"], [1, "value"], [1, "loading", 3, "diameter"]], template: function PlanetDetailViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlanetDetailViewComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanetDetailViewComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.planet$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".attribute-list[_ngcontent-%COMP%] {\r\n  color: rgb(21, 22, 24);\r\n}\r\n\r\n.loading[_ngcontent-%COMP%] {\r\n  margin: 25% 50%;\r\n}\r\n\r\n.attribute[_ngcontent-%COMP%] {\r\n  font-style: italic;\r\n  color:rgb(104, 104, 104);\r\n}\r\n\r\n.value[_ngcontent-%COMP%] {\r\n  font-style: normal;\r\n  font-size: large;\r\n  font-weight: bold;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  padding-inline-start: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5ldC1kZXRhaWwtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJwbGFuZXQtZGV0YWlsLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHRyaWJ1dGUtbGlzdCB7XHJcbiAgY29sb3I6IHJnYigyMSwgMjIsIDI0KTtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIG1hcmdpbjogMjUlIDUwJTtcclxufVxyXG5cclxuLmF0dHJpYnV0ZSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGNvbG9yOnJnYigxMDQsIDEwNCwgMTA0KTtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxudWwge1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetDetailViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-planet-detail-view',
                templateUrl: './planet-detail-view.component.html',
                styleUrls: ['./planet-detail-view.component.css']
            }]
    }], function () { return [{ type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_3__["SwapiService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "p88Q":
/*!*************************************************************!*\
  !*** ./src/app/planets-list-view/planets-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PlanetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetsRoutingModule", function() { return PlanetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _planets_list_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planets-list-view.component */ "JA1u");
/* harmony import */ var _planet_detail_view_planet_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../planet-detail-view/planet-detail-view.component */ "hBob");






const ROUTES = [
    { path: '', component: _planets_list_view_component__WEBPACK_IMPORTED_MODULE_2__["PlanetsListViewComponent"] },
    { path: ':name', component: _planet_detail_view_planet_detail_view_component__WEBPACK_IMPORTED_MODULE_3__["PlanetDetailViewComponent"] },
];
class PlanetsRoutingModule {
}
PlanetsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlanetsRoutingModule });
PlanetsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlanetsRoutingModule_Factory(t) { return new (t || PlanetsRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlanetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(ROUTES),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=planets-list-view-planets-module.js.map