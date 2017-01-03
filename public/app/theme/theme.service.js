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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ThemeService = (function () {
    function ThemeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ThemeService.prototype.getThemes = function () {
        return this.http.get('api/themes')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ThemeService.prototype.getThemesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getThemes()); }, 2000);
        });
    };
    ThemeService.prototype.getTheme = function (name) {
        return this.http.get('api/oneTheme/' + name)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ThemeService.prototype.addTheme = function (body) {
        var options = new http_1.RequestOptions({ headers: this.headers }); // Create a request option
        return this.http.post('api/addTheme', body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ThemeService.prototype.deleteTheme = function (body) {
        var options = new http_1.RequestOptions({ headers: this.headers }); // Create a request option
        return this.http.post('api/deleteTheme', body, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ThemeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ThemeService.prototype.extractData = function (res) {
        var body = JSON.parse(res['_body']);
        return body || {};
    };
    ThemeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;
//# sourceMappingURL=theme.service.js.map