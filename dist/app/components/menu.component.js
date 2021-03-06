System.register(['angular2/core', 'angular2/router', './login.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_component_1;
    var MenuBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            MenuBarComponent = (function () {
                function MenuBarComponent() {
                }
                MenuBarComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-bar',
                        template: "\n\t\t<div class=\"ui menu fixed top sticky\">\n      <a href=\"http://adadevelopersacademy.org/\" class=\"header item\">\n        <img class=\"logo\" src=\"app/assets/images/logos/ada_large.png\" alt=\"Logo for Ada Developers Academy\">\n      </a>\n        <a class=\"item\" [routerLink]=\"['Home']\">Home</a>\n        <a class=\"item\" [routerLink]=\"['Adies']\">Adies</a>\n        <a class=\"item\" [routerLink]=\"['Companies']\">Companies</a>\n      <div class=\"right menu\">\n        <login></login>\n      </div>\n        \n    </div>\n\t",
                        directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MenuBarComponent);
                return MenuBarComponent;
            }());
            exports_1("MenuBarComponent", MenuBarComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map