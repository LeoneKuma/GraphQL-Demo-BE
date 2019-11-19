"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hero_resolver_1 = require("./hero.resolver");
const hero_service_1 = require("./hero.service");
const typeorm_1 = require("@nestjs/typeorm");
const hero_1 = require("./models/hero");
let HeroModule = class HeroModule {
};
HeroModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([hero_1.Hero])
        ],
        providers: [hero_resolver_1.HeroResolver, hero_service_1.HeroService]
    })
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map