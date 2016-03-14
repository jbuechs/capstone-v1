System.register(['angular2/core', 'angular2/router', '../services/adie.service', '../services/company.service', '../services/employee.service', './adie-list.component', './adie-detail.component', './company-list.component', './company-detail.component', './login.component'], function(exports_1, context_1) {
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
    var core_1, router_1, adie_service_1, company_service_1, employee_service_1, adie_list_component_1, adie_detail_component_1, company_list_component_1, company_detail_component_1, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (adie_service_1_1) {
                adie_service_1 = adie_service_1_1;
            },
            function (company_service_1_1) {
                company_service_1 = company_service_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (adie_list_component_1_1) {
                adie_list_component_1 = adie_list_component_1_1;
            },
            function (adie_detail_component_1_1) {
                adie_detail_component_1 = adie_detail_component_1_1;
            },
            function (company_list_component_1_1) {
                company_list_component_1 = company_list_component_1_1;
            },
            function (company_detail_component_1_1) {
                company_detail_component_1 = company_detail_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Capstone Practice App";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t<h1>{{title}}</h1>\n\t<login></login>\n\t<nav>\n    <a [routerLink]=\"['Adies']\">Adies</a>\n    <a [routerLink]=\"['Companies']\">Companies</a>\n  </nav>\n\t<router-outlet></router-outlet>\n\t",
                        providers: [adie_service_1.AdieService, company_service_1.CompanyService, employee_service_1.EmployeeService],
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                    }),
                    router_1.RouteConfig([
                        { path: '/adies', name: 'Adies', component: adie_list_component_1.AdieListComponent },
                        { path: '/companies', name: 'Companies', component: company_list_component_1.CompanyListComponent },
                        { path: '/adie/:id', name: 'AdieDetail', component: adie_detail_component_1.AdieDetailComponent },
                        { path: '/company/:id', name: 'CompanyDetail', component: company_detail_component_1.CompanyDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBQUE7b0JBQ1EsVUFBSyxHQUFHLHVCQUF1QixDQUFDO2dCQUN4QyxDQUFDO2dCQXhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNWLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsdU1BUVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLGtDQUFlLENBQUM7d0JBQ3hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLENBQUM7cUJBQ2hELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDWixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUNBQWlCLEVBQUU7d0JBQy9ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTt3QkFDMUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO3dCQUN6RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUU7cUJBQ2xGLENBQUM7O2dDQUFBO2dCQUlGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbi8vIEltcG9ydCBzZXJ2aWNlc1xuaW1wb3J0IHsgQWRpZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hZGllLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZW1wbG95ZWUuc2VydmljZSc7XG5cbi8vIEltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgeyBBZGllTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYWRpZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGllRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9hZGllLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFueUxpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBhbnktbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFueURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcGFueS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1hcHAnLFxuXHR0ZW1wbGF0ZTogYFxuXHQ8aDE+e3t0aXRsZX19PC9oMT5cblx0PGxvZ2luPjwvbG9naW4+XG5cdDxuYXY+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydBZGllcyddXCI+QWRpZXM8L2E+XG4gICAgPGEgW3JvdXRlckxpbmtdPVwiWydDb21wYW5pZXMnXVwiPkNvbXBhbmllczwvYT5cbiAgPC9uYXY+XG5cdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0YCxcblx0cHJvdmlkZXJzOiBbQWRpZVNlcnZpY2UsIENvbXBhbnlTZXJ2aWNlLCBFbXBsb3llZVNlcnZpY2VdLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIExvZ2luQ29tcG9uZW50XSxcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG5cdHsgcGF0aDogJy9hZGllcycsIG5hbWU6ICdBZGllcycsIGNvbXBvbmVudDogQWRpZUxpc3RDb21wb25lbnQgfSxcblx0eyBwYXRoOiAnL2NvbXBhbmllcycsIG5hbWU6ICdDb21wYW5pZXMnLCBjb21wb25lbnQ6IENvbXBhbnlMaXN0Q29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9hZGllLzppZCcsIG5hbWU6ICdBZGllRGV0YWlsJywgY29tcG9uZW50OiBBZGllRGV0YWlsQ29tcG9uZW50IH0sXG5cdHsgcGF0aDogJy9jb21wYW55LzppZCcsIG5hbWU6ICdDb21wYW55RGV0YWlsJywgY29tcG9uZW50OiBDb21wYW55RGV0YWlsQ29tcG9uZW50IH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXHRwdWJsaWMgdGl0bGUgPSBcIkNhcHN0b25lIFByYWN0aWNlIEFwcFwiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
