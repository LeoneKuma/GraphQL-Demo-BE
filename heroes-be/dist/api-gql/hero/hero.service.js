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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const hero_1 = require("./models/hero");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const hero_mockdata_1 = require("./hero.mockdata");
const heros = [];
let HeroService = class HeroService {
    constructor(heroRepository) {
        this.heroRepository = heroRepository;
    }
    async findHero(id) {
        var hero = await this.heroRepository.findOne(id);
        return hero;
    }
    async getHeroes() {
        return await this.heroRepository.find();
    }
    async createHero(heroName) {
        var hero = new hero_1.Hero();
        hero.name = heroName;
        return await this.heroRepository.save(hero);
    }
    async updateHero(heroDetail) {
        console.log(heroDetail);
        var hero = await this.heroRepository.findOne({ id: heroDetail.id });
        if (hero != undefined) {
            hero.name = heroDetail.name;
            hero.description = heroDetail.description;
            this.heroRepository.save(hero);
            return hero;
        }
        else {
            return new hero_1.Hero();
        }
    }
    async deleteHero(id) {
        var hero = await this.heroRepository.findOne({ id: id });
        if (hero.id != undefined) {
            await this.heroRepository.remove(hero);
            return true;
        }
        else {
            return false;
        }
    }
    async createMockData() {
        if (0 == await this.heroRepository.count()) {
            await this.heroRepository.save(hero_mockdata_1.HEROES);
            return true;
        }
        else {
            return false;
        }
    }
};
HeroService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(hero_1.Hero)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map