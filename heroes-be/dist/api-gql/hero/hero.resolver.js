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
const graphql_1 = require("@nestjs/graphql");
const hero_1 = require("./models/hero");
const hero_service_1 = require("./hero.service");
const hero_input_1 = require("./dto/hero.input");
const hero_args_1 = require("./dto/hero.args");
let HeroResolver = class HeroResolver {
    constructor(heroService) {
        this.heroService = heroService;
    }
    async getHero({ id }) {
        var hero = await this.heroService.findHero(id);
        return hero;
    }
    async getHeroes() {
        await this.heroService.createMockData();
        const heroes = await this.heroService.getHeroes();
        console.log(heroes);
        return heroes;
    }
    async addHero({ name }) {
        var hero = await this.heroService.createHero(name);
        return hero;
    }
    async updateHero(heroDetail) {
        console.log(heroDetail);
        var hero = await this.heroService.updateHero(heroDetail);
        return hero;
    }
    async deleteHero({ id }) {
        return await this.heroService.deleteHero(id);
    }
};
__decorate([
    graphql_1.Query(returns => hero_1.Hero, { description: '查询一个英雄' }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hero_args_1.GetHeroArgs]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "getHero", null);
__decorate([
    graphql_1.Query(returns => [hero_1.Hero], { description: '查询所有英雄' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "getHeroes", null);
__decorate([
    graphql_1.Mutation(returns => hero_1.Hero, { description: '增加一个英雄' }),
    __param(0, graphql_1.Args('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hero_args_1.AddHeroArgs]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "addHero", null);
__decorate([
    graphql_1.Mutation(returns => hero_1.Hero, { description: '修改英雄信息' }),
    __param(0, graphql_1.Args('heroDetail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hero_input_1.HeroDetailInput]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "updateHero", null);
__decorate([
    graphql_1.Mutation(returns => Boolean, { description: '删除一位英雄' }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hero_args_1.DeleteHeroArgs]),
    __metadata("design:returntype", Promise)
], HeroResolver.prototype, "deleteHero", null);
HeroResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroResolver);
exports.HeroResolver = HeroResolver;
//# sourceMappingURL=hero.resolver.js.map