System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AdieListComponent, Adie, ADIES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import {Adie} from './app/models/adie';
            AdieListComponent = (function () {
                function AdieListComponent() {
                    this.adies = ADIES;
                }
                AdieListComponent.prototype.onSelect = function (adie) {
                    this.selectedAdie = adie;
                };
                AdieListComponent = __decorate([
                    core_1.Component({
                        selector: "adie-list",
                        template: "\n\t<ul>\n\t\t<li *ngFor=\"#adie of adies\" (click)=\"onSelect(adie)\">\n\t\t\tName: {{ adie.name }} | Cohort: {{ adie.cohort }}\n\t\t</li>\n\t</ul>\n  <div *ngIf=\"selectedAdie\">\n      <h2>{{selectedAdie.name}} details</h2>\n      <div><label>id: </label>{{selectedAdie.id}}</div>\n      <div>\n          <label>name: </label>\n          <input [(ngModel)]=\"selectedAdie.name\" placeholder=\"name\"/>\n      </div>\n  </div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdieListComponent);
                return AdieListComponent;
            }());
            exports_1("AdieListComponent", AdieListComponent);
            Adie = (function () {
                function Adie() {
                }
                return Adie;
            }());
            ADIES = [
                {
                    "id": 1,
                    "name": "Audrey Carlsen",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/audrey-carlsen-96b29463",
                    "image": "",
                    "email": "foo1@bar.com",
                    "current_employer": null,
                    "intern_company_id": 3,
                    "bio": "Audrey Carlsen was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 2,
                    "name": "Asha Golveo",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/ashagolveo",
                    "image": "",
                    "email": "agolveo@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 2,
                    "bio": "Asha Golveo was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 3,
                    "name": "Shadae Holmes",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/shadae",
                    "image": "",
                    "email": "shadaeholmes@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 11,
                    "bio": "Shadae Holmes was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 4,
                    "name": "Hsing-Hui Hsu",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/hhhsu",
                    "image": "",
                    "email": "hhhsu1@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 7,
                    "bio": "Hsing-Hui Hsu was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 5,
                    "name": "Blake Johnson",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/blake-johnson-15801937",
                    "image": "",
                    "email": "foo2@bar.com",
                    "current_employer": null,
                    "intern_company_id": 4,
                    "bio": "Blake Johnson was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 6,
                    "name": "Anne Kimsey",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/askimsey",
                    "image": "",
                    "email": "foo3@bar.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Anne Kimsey was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 7,
                    "name": "Whitney-Rose Levis",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/whitneylevis",
                    "image": "",
                    "email": "ms.whitney.levis@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 13,
                    "bio": "Whitney-Rose Levis was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 8,
                    "name": "Davida Marion",
                    "cohort": 1,
                    "twitter": "@davidamarion",
                    "linked_in": "https://www.linkedin.com/in/davidamarion",
                    "image": "",
                    "email": "davidamarion@gmail.com",
                    "current_employer": 6,
                    "intern_company_id": 6,
                    "bio": "Davida Marion was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 9,
                    "name": "Melinda Mizuta",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/melinda-mizuta-3655b57",
                    "image": "",
                    "email": "foo4@bar.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Melinda Mizuta was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 10,
                    "name": "Liz Rush",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lizrush",
                    "image": "",
                    "email": "liz@lizmrush.com",
                    "current_employer": null,
                    "intern_company_id": 10,
                    "bio": "Liz Rush was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 11,
                    "name": "Christina Thompson",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/thompsonchristina",
                    "image": "",
                    "email": "c.thompsonms@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 5,
                    "bio": "Christina Thompson was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 12,
                    "name": "Elizabeth Uselton",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/elizabeth-uselton-17a3994a",
                    "image": "",
                    "email": "foo5@bar.com",
                    "current_employer": null,
                    "intern_company_id": 7,
                    "bio": "Elizabeth Uselton was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 13,
                    "name": "Sue White",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/sue-white-b8953186",
                    "image": "",
                    "email": "sue@mailworks.org",
                    "current_employer": null,
                    "intern_company_id": 12,
                    "bio": "Sue White was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 14,
                    "name": "Ellen Wondra-Lindley",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/ellen-wondra-lindley-27359977",
                    "image": "",
                    "email": "foo6@bar.com",
                    "current_employer": null,
                    "intern_company_id": 8,
                    "bio": "Ellen Wondra-Lindley was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 15,
                    "name": "Galina Yermicheva",
                    "cohort": 1,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/galina-yermicheva-68518196",
                    "image": "",
                    "email": "foo7@bar.com",
                    "current_employer": null,
                    "intern_company_id": 9,
                    "bio": "Galina Yermicheva was a student in Ada Developers Academy cohort 1. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 16,
                    "name": "Rachel Adler",
                    "cohort": 2,
                    "twitter": "@rsmomo",
                    "linked_in": "https://www.linkedin.com/in/rmoshier",
                    "image": "Rachel.JPG",
                    "email": "rmoshier@gmail.com",
                    "current_employer": 6,
                    "intern_company_id": 6,
                    "bio": "Rachel Adler was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 17,
                    "name": "Richa Arora",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/richa-arora-4985085b",
                    "image": "richa.jpg",
                    "email": "ricarora@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Richa Arora was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 18,
                    "name": "Katie Bosch",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/katie-bosch-669782a5",
                    "image": "Katie.JPG",
                    "email": "kab761@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 2,
                    "bio": "Katie Bosch was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 19,
                    "name": "Linnea Damer",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/linnea-damer-5897322b",
                    "image": "Linnea.jpg",
                    "email": "lkdamer@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 7,
                    "bio": "Linnea Damer was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 20,
                    "name": "Bri Dotson",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/bri-dotson-9b613774",
                    "image": "bri.jpg",
                    "email": "bridotson@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 9,
                    "bio": "Bri Dotson was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 21,
                    "name": "Kate Fulton",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/katefulton",
                    "image": "Kat.JPG",
                    "email": "katesuzannefulton@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 4,
                    "bio": "Kate Fulton was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 22,
                    "name": "Kristina Hjertberg",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/khjrtbrg",
                    "image": "",
                    "email": "hjert.k@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 10,
                    "bio": "Kristina Hjertberg was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 23,
                    "name": "Kamilah Jenkins",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kamilah-jenkins-b92a9974",
                    "image": "Kamilah.jpeg",
                    "email": "kamilah.jenkins@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 7,
                    "bio": "Kamilah Jenkins was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 24,
                    "name": "Rachelle Keblitis",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/rkeblitis",
                    "image": "",
                    "email": "rkeblitis@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Rachelle Keblitis was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 25,
                    "name": "Stephanie Kwak",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/stephaniekwak",
                    "image": "Stephanie Pi.jpeg",
                    "email": "eskay@ghadibalo.com",
                    "current_employer": null,
                    "intern_company_id": 17,
                    "bio": "Stephanie Kwak was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 26,
                    "name": "Bonnie Kwong",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/bonnie-kwong-064398a",
                    "image": "",
                    "email": "kbonnie@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Bonnie Kwong was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 27,
                    "name": "Holly Leary",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/holly-leary-63138766",
                    "image": "holly-ada.jpg",
                    "email": "schleary@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 5,
                    "bio": "Holly Leary was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 28,
                    "name": "Rebecca Mark",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/rebecca-mark-31253728",
                    "image": "Rebecca Mark.jpg",
                    "email": "rebecca.lmark@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 4,
                    "bio": "Rebecca Mark was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 29,
                    "name": "Kristen McCabe",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kristen-mccabe-50119bb",
                    "image": "",
                    "email": "kmccabe3@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Kristen McCabe was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 30,
                    "name": "Lily Pace",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lily-pace-b1433140",
                    "image": "Lily.jpg",
                    "email": "lilyfpace@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 18,
                    "bio": "Lily Pace was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 31,
                    "name": "Calla Patel",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/callapatel",
                    "image": "calla.jpeg",
                    "email": "callapatel@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Calla Patel was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 32,
                    "name": "Katherine Patke",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kpatke",
                    "image": "katef.jpg",
                    "email": "kmmpatke@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 17,
                    "bio": "Katherine Patke was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 33,
                    "name": "Crystal Perreira",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/crystalperreira",
                    "image": "crystalperreira.jpg",
                    "email": "cvperreira@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Crystal Perreira was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 34,
                    "name": "Stephanie Pi",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/stephanie-pi-b446ab25",
                    "image": "StephanieK.jpg",
                    "email": "stephmpi@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Stephanie Pi was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 35,
                    "name": "Brenda Praggastis",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/brenda-praggastis-2451919a",
                    "image": "",
                    "email": "bpraggastis@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 14,
                    "bio": "Brenda Praggastis was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 36,
                    "name": "Allie Sterling",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/sterlingallison",
                    "image": "Allie.jpg",
                    "email": "sterling.allie@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 12,
                    "bio": "Allie Sterling was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 37,
                    "name": "Cate Uselton",
                    "cohort": 2,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/cate-uselton-62a5bb61",
                    "image": "",
                    "email": "cathode.use@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 15,
                    "bio": "Cate Uselton was a student in Ada Developers Academy cohort 2. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 38,
                    "name": "Alice Rhomieux",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/alicerhomieux",
                    "image": "Alice1.jpg",
                    "email": "alice.rhomieux@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Alice Rhomieux was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 39,
                    "name": "Amira Hailemariam",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/amirahaile",
                    "image": "Amira1.jpg",
                    "email": "AWatkins31@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 20,
                    "bio": "Amira Hailemariam was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 40,
                    "name": "Anita Wang",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/acmwang",
                    "image": "Anita2.jpg",
                    "email": "michellemccarthy@hotmail.com",
                    "current_employer": null,
                    "intern_company_id": 27,
                    "bio": "Anita Wang was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 41,
                    "name": "Ashley Watkins",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/catchingash",
                    "image": "Ashley2.jpg",
                    "email": "drvonnjerryxlii@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 23,
                    "bio": "Ashley Watkins was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 42,
                    "name": "Brandi Wilson",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/brandiewilson",
                    "image": "Brandi2.jpg",
                    "email": "camarleigh@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 26,
                    "bio": "Brandi Wilson was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 43,
                    "name": "Brenna Leker",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/brennaleker",
                    "image": "Brenna2.jpg",
                    "email": "loraine@lorainekv.com",
                    "current_employer": null,
                    "intern_company_id": 15,
                    "bio": "Brenna Leker was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 44,
                    "name": "Brittany Walentin",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/brittany-walentin-b197234",
                    "image": "Brittany2.jpg",
                    "email": "elgrenier@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Brittany Walentin was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 45,
                    "name": "Carly Jugler",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/carly-jugler-800234b9",
                    "image": "Carly2.jpg",
                    "email": "asovay@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 19,
                    "bio": "Carly Jugler was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 46,
                    "name": "Corinne Pingul",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/corinnepingul",
                    "image": "Corinne2.jpg",
                    "email": "corinnepingul@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Corinne Pingul was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 47,
                    "name": "Elia Grenier",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/eliagrenier",
                    "image": "Elia2.jpg",
                    "email": "sallyamoore@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 28,
                    "bio": "Elia Grenier was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 48,
                    "name": "Elsa Moluf",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/elsamoluf",
                    "image": "Elsa1.jpg",
                    "email": "shannachau@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 11,
                    "bio": "Elsa Moluf was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 49,
                    "name": "Jeri Sommers",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/jerisommers",
                    "image": "Jeri2.jpg",
                    "email": "katrops@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 25,
                    "bio": "Jeri Sommers was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 50,
                    "name": "Kari Lonczak",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kari-lonczak-83a1631b",
                    "image": "Kari1.jpg",
                    "email": "amira.dhaile@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 16,
                    "bio": "Kari Lonczak was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 51,
                    "name": "Katie Atrops",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/katie-atrops-73b61864",
                    "image": "Katie1.jpg",
                    "email": "brittany.walentin@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 21,
                    "bio": "Katie Atrops was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 52,
                    "name": "Kyna Nguyen",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kyna-nguyen-61002378",
                    "image": "Kyna2.jpg",
                    "email": "wilson.e.brandi@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 20,
                    "bio": "Kyna Nguyen was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 53,
                    "name": "Lila Garcia",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lilagarcia",
                    "image": "Lila1.jpg",
                    "email": "elsa.moluf@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 22,
                    "bio": "Lila Garcia was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 54,
                    "name": "Lindsey Reno",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lindsey-reno-23a2a0101",
                    "image": "Lindsey1.jpg",
                    "email": "lindseyannereno@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 2,
                    "bio": "Lindsey Reno was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 55,
                    "name": "Loraine Kanervisto",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lorainekv",
                    "image": "Loraine2.jpg",
                    "email": "vikshab2010@hotmail.com",
                    "current_employer": null,
                    "intern_company_id": 29,
                    "bio": "Loraine Kanervisto was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 56,
                    "name": "Marleigh Chiles",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/camarleigh",
                    "image": "Marleigh2.jpg",
                    "email": "lilagrc@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 25,
                    "bio": "Marleigh Chiles was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 57,
                    "name": "Michelle McCarthy",
                    "cohort": 3,
                    "twitter": "@MisShellyMac",
                    "linked_in": "https://www.linkedin.com/in/michellejmccarthy",
                    "image": "Michelle1.jpg",
                    "email": "kari.lonczak@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 24,
                    "bio": "Michelle McCarthy was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 58,
                    "name": "Sally Moore",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/sally-a-moore-ph-d-05466719",
                    "image": "Sally2.jpg",
                    "email": "brennarama@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 9,
                    "bio": "Sally Moore was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 59,
                    "name": "Shanna Chau",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/shanna-chau-144aa474",
                    "image": "Shanna1.jpg",
                    "email": "carjug@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 1,
                    "bio": "Shanna Chau was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 60,
                    "name": "Viktoryia Shabunia",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Viktoryia1.jpg",
                    "email": "khn710@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 25,
                    "bio": "Viktoryia Shabunia was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 61,
                    "name": "Wang (Loren) Wang",
                    "cohort": 3,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/loren-wang-499aa46a",
                    "image": "Wang1.jpg",
                    "email": "wang131.131@gmail.com",
                    "current_employer": null,
                    "intern_company_id": 29,
                    "bio": "Wang (Loren) Wang was a student in Ada Developers Academy cohort 3. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 62,
                    "name": "Risha Allen",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/risha-allen-ms-lmhc-00a87b18",
                    "image": "Risha.JPG",
                    "email": "risha.a@hotmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Risha Allen was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 63,
                    "name": "Jennie Buechner",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/jenniebuechner",
                    "image": "Jennie.JPG",
                    "email": "Janina.buechner@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Jennie Buechner was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 64,
                    "name": "Audrey Davis",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/audreylynndavis",
                    "image": "Audrey.JPG",
                    "email": "davis.audrey.lynn@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Audrey Davis was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 65,
                    "name": "Katherine Defliese",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/katherine-defliese-12284138",
                    "image": "Katherine.JPG",
                    "email": "kdefliese@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Katherine Defliese was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 66,
                    "name": "Kelly Devlin",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/kellyerindevlin",
                    "image": "Kelly.JPG",
                    "email": "kelly_devlin@alumni.brown.edu",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Kelly Devlin was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 67,
                    "name": "Daphne Gold",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/daphnegold",
                    "image": "Daphne.JPG",
                    "email": "dg1181@nyu.edu",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Daphne Gold was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 68,
                    "name": "Emily Gordon",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Emily.JPG",
                    "email": "emgord@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Emily Gordon was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 69,
                    "name": "Lauren Granger",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/lrgranger",
                    "image": "Lauren.JPG",
                    "email": "Lr.granger21@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Lauren Granger was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 70,
                    "name": "Annalee Herrera",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/annalee-herrera-821aba14",
                    "image": "Annalee.JPG",
                    "email": "annaleeherrera@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Annalee Herrera was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 71,
                    "name": "Tamar Hershenbaum",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Tamar.JPG",
                    "email": "misstamar@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Tamar Hershenbaum was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 72,
                    "name": "Ricky Hougland",
                    "cohort": 4,
                    "twitter": "@houglande",
                    "linked_in": "https://www.linkedin.com/in/ricky-hougland-368ab372",
                    "image": "Ricky.JPG",
                    "email": "houglande@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Ricky Hougland was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 73,
                    "name": "Amy Hunter",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/amyrhunter",
                    "image": "Amy.JPG",
                    "email": "amyrhunter@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Amy Hunter was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 74,
                    "name": "Sarah Kane",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "SarahK.JPG",
                    "email": "sarahkane682@yahoo.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Sarah Kane was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 75,
                    "name": "Brittany Kohler",
                    "cohort": 4,
                    "twitter": "@B_rittK",
                    "linked_in": "https://www.linkedin.com/in/brittanykohler",
                    "image": "brittany_kohler.png",
                    "email": "brittanykohler@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Brittany Kohler was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 76,
                    "name": "Logan McDonald",
                    "cohort": 4,
                    "twitter": "@loganmeetsworld",
                    "linked_in": "https://www.linkedin.com/in/mcdonaldlogan",
                    "image": "Logan.JPG",
                    "email": "loganmcdona11@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Logan McDonald was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 77,
                    "name": "Jenna Nichols",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/jenna-nichols-280a4816",
                    "image": "Jenna.JPG",
                    "email": "jennic@utexas.edu",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Jenna Nichols was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 78,
                    "name": "Jessica Noglows",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/jessicanoglows",
                    "image": "Jessica.JPG",
                    "email": "jessica.noglows@outlook.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Jessica Noglows was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 79,
                    "name": "Desiree Poland",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Desiree.JPG",
                    "email": "desireepoland@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Desiree Poland was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 80,
                    "name": "Meighan Rasley",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Meighan.JPG",
                    "email": "meighanr@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Meighan Rasley was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 81,
                    "name": "Claire Schechter",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "",
                    "image": "Claire.JPG",
                    "email": "ClaireS29@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Claire Schechter was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 82,
                    "name": "Riley Spicer",
                    "cohort": 4,
                    "twitter": "@rileyrileyrose",
                    "linked_in": "https://www.linkedin.com/in/rileyspicer",
                    "image": "Riley.JPG",
                    "email": "blankpagesandcoffeestains@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Riley Spicer was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 83,
                    "name": "Rebecca Tolmach",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/rebecca-tolmach-7409a295",
                    "image": "Rebecca.JPG",
                    "email": "rmtolmach@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Rebecca Tolmach was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 84,
                    "name": "Sarah Trowbridge",
                    "cohort": 4,
                    "twitter": "",
                    "linked_in": "https://www.linkedin.com/in/sarahatrowbridge",
                    "image": "SarahT.JPG",
                    "email": "trowbrsa@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Sarah Trowbridge was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                },
                {
                    "id": 85,
                    "name": "Hailey Willis",
                    "cohort": 4,
                    "twitter": "@weswilliscodes",
                    "linked_in": "",
                    "image": "Hailey.JPG",
                    "email": "haileyw@gmail.com",
                    "current_employer": null,
                    "intern_company_id": null,
                    "bio": "Hailey Willis was a student in Ada Developers Academy cohort 4. She is now has a job doing some sort of programming and is doing amazing things."
                }
            ];
        }
    }
});
//# sourceMappingURL=adie-list.component.js.map