"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var theme_service_1 = require('./theme.service');
var ThemeDetailComponent = (function () {
    function ThemeDetailComponent(themeService, route, location) {
        this.themeService = themeService;
        this.route = route;
        this.location = location;
    }
    ThemeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (param) {
            var name = param['name'];
            _this.themeService.getTheme(name).then(function (theme) { return _this.theme = theme[0]; });
        });
    };
    ThemeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ThemeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-theme-detail',
            templateUrl: 'theme-detail.component.html',
            styleUrls: ['theme-detail.component.css']
        }), 
        __metadata('design:paramtypes', [theme_service_1.ThemeService, router_1.ActivatedRoute, common_1.Location])
    ], ThemeDetailComponent);
    return ThemeDetailComponent;
}());
exports.ThemeDetailComponent = ThemeDetailComponent;
//# sourceMappingURL=theme-detail.component.js.map