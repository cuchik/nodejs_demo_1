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
var vocab_service_1 = require('./vocab.service');
var VocabComponent = (function () {
    function VocabComponent(vocabService, route) {
        this.vocabService = vocabService;
        this.route = route;
    }
    VocabComponent.prototype.getTheme = function () {
        var name = '';
        this.subscription = this.route.params.subscribe(function (param) {
            name = param['name'];
        });
        return name;
    };
    VocabComponent.prototype.getVocabs = function () {
        var _this = this;
        this.vocabService.getVocabs(this.getTheme()).then(function (vocabs) { return _this.vocabs = vocabs; });
    };
    VocabComponent.prototype.addVocab = function () {
        var _this = this;
        var body = {
            type: 'vocab',
            theme: this.getTheme(),
            en: this.en,
            vn: this.vn
        };
        this.vocabService.addVocab(body).then(function (vocabs) { return _this.getVocabs(); });
    };
    VocabComponent.prototype.deleteVocab = function (body) {
        var _this = this;
        this.vocabService.deleteVocab(body).then(function (vocabs) { return _this.getVocabs(); });
    };
    VocabComponent.prototype.ngOnInit = function () {
        this.getVocabs();
    };
    VocabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-vocabs',
            templateUrl: 'vocab.component.html',
            styleUrls: ['vocab.component.css']
        }), 
        __metadata('design:paramtypes', [vocab_service_1.VocabService, router_1.ActivatedRoute])
    ], VocabComponent);
    return VocabComponent;
}());
exports.VocabComponent = VocabComponent;
//# sourceMappingURL=vocab.component.js.map