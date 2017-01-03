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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var theme_service_1 = require('./theme.service');
var ThemeComponent = (function () {
    function ThemeComponent(themeService, router) {
        this.themeService = themeService;
        this.router = router;
    }
    ThemeComponent.prototype.getThemes = function () {
        var _this = this;
        //this.themeService.getThemesSlowly().then(themes => this.themes = themes);
        this.themeService.getThemes().then(function (themes) { return _this.themes = themes; });
    };
    ThemeComponent.prototype.addTheme = function () {
        var _this = this;
        var body = {
            name: this.name,
            type: 'theme'
        };
        this.themeService.addTheme(body).then(function (theme) { return _this.getThemes(); });
    };
    ThemeComponent.prototype.deleteTheme = function (name) {
        var _this = this;
        var body = {
            name: name,
            type: 'theme'
        };
        this.themeService.deleteTheme(body).then(function (theme) { return _this.getThemes(); });
    };
    ThemeComponent.prototype.ngOnInit = function () {
        this.getThemes();
    };
    ThemeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-themes',
            templateUrl: 'theme.component.html',
            styleUrls: ['theme.component.css']
        }), 
        __metadata('design:paramtypes', [theme_service_1.ThemeService, router_1.Router])
    ], ThemeComponent);
    return ThemeComponent;
}());
exports.ThemeComponent = ThemeComponent;
//# sourceMappingURL=theme.component.js.map