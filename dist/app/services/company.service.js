System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', './auth.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, auth_service_1;
    var CompanyService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            CompanyService = (function () {
                function CompanyService(http, authService) {
                    this.http = http;
                    this.authService = authService;
                    this._companiesUrl = 'https://ada-capstone-api.herokuapp.com/companies/';
                }
                CompanyService.prototype.getCompanies = function () {
                    var _this = this;
                    return this.http.get(this._companiesUrl)
                        .map(function (res) { return res.json().data; })
                        .catch(function (err) { return _this.handleError(err); });
                };
                CompanyService.prototype.getCompany = function (id) {
                    var header = new http_1.Headers();
                    var companiesUrl = "https://ada-capstone-api.herokuapp.com/companies_employees/" + id;
                    if (this.authService.loggedIn()) {
                        var bearerString = "Bearer " + localStorage.getItem('id_token');
                        header.append('Authorization', bearerString);
                    }
                    return this.http.get(companiesUrl, { headers: header })
                        .map(function (res) { return res.json().data; })
                        .do(function (data) { return console.log(data); })
                        .catch(this.handleError);
                };
                CompanyService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CompanyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, auth_service_1.Auth0Service])
                ], CompanyService);
                return CompanyService;
            }());
            exports_1("CompanyService", CompanyService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFDQyx3QkFDUyxJQUFVLEVBQ1YsV0FBeUI7b0JBRHpCLFNBQUksR0FBSixJQUFJLENBQU07b0JBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWM7b0JBRTFCLGtCQUFhLEdBQUcsbURBQW1ELENBQUM7Z0JBRnZDLENBQUM7Z0JBSXRDLHFDQUFZLEdBQVo7b0JBQUEsaUJBS0M7b0JBSkEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7eUJBQ3RDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQTNCLENBQTJCLENBQUM7eUJBRXZDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFFRCxtQ0FBVSxHQUFWLFVBQVcsRUFBVTtvQkFDcEIsSUFBSSxNQUFNLEdBQVksSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxZQUFZLEdBQVcsZ0VBQThELEVBQUksQ0FBQTtvQkFDN0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksWUFBWSxHQUFXLFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN4RSxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDakQsQ0FBQztvQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO3lCQUNyRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzt5QkFDM0IsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFFTyxvQ0FBVyxHQUFuQixVQUFvQixLQUFlO29CQUNoQyxtRkFBbUY7b0JBQ25GLDRDQUE0QztvQkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7Z0JBbENIO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQW1DYixxQkFBQztZQUFELENBakNBLEFBaUNDLElBQUE7WUFqQ0QsMkNBaUNDLENBQUEiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2NvbXBhbnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFuZ3VsYXIgaW1wb3J0c1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbi8vIFJ4anMgaW1wb3J0c1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBQcm9qZWN0IGltcG9ydHNcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi9tb2RlbHMvY29tcGFueSc7XG5pbXBvcnQgeyBBdXRoMFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIENvbXBhbnlTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBodHRwOiBIdHRwLFxuXHRcdHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGgwU2VydmljZSkge31cblxuXHRwcml2YXRlIF9jb21wYW5pZXNVcmwgPSAnaHR0cHM6Ly9hZGEtY2Fwc3RvbmUtYXBpLmhlcm9rdWFwcC5jb20vY29tcGFuaWVzLyc7XG5cblx0Z2V0Q29tcGFuaWVzKCkgeyBcblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl9jb21wYW5pZXNVcmwpXG5cdFx0XHQubWFwKHJlcyA9PiA8Q29tcGFueVtdPiByZXMuanNvbigpLmRhdGEpXG5cdFx0XHQvLyAuZG8oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcblx0XHRcdC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKTtcblx0fVxuXG5cdGdldENvbXBhbnkoaWQ6IG51bWJlcikge1xuXHRcdHZhciBoZWFkZXI6IEhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRcdHZhciBjb21wYW5pZXNVcmw6IHN0cmluZyA9IGBodHRwczovL2FkYS1jYXBzdG9uZS1hcGkuaGVyb2t1YXBwLmNvbS9jb21wYW5pZXNfZW1wbG95ZWVzLyR7aWR9YFxuXHRcdGlmICh0aGlzLmF1dGhTZXJ2aWNlLmxvZ2dlZEluKCkpIHtcbiAgICAgIHZhciBiZWFyZXJTdHJpbmc6IHN0cmluZyA9IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICBoZWFkZXIuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgYmVhcmVyU3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuaHR0cC5nZXQoY29tcGFuaWVzVXJsLCB7IGhlYWRlcnM6IGhlYWRlciB9KVxuXHRcdFx0Lm1hcChyZXMgPT4gcmVzLmpzb24oKS5kYXRhKVxuXHRcdFx0LmRvKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHRcblx0fVxuXG5cdHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIGVycm9yIHRvIHNvbWUgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcbiAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
