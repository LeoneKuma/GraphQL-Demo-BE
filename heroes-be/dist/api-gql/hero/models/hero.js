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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Hero = class Hero {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { description: "英雄的id" }),
    typeorm_1.PrimaryGeneratedColumn({ type: "bigint", comment: "主键，英雄的id" }),
    __metadata("design:type", Number)
], Hero.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => String, { description: '英雄的名字' }),
    typeorm_1.Column({ nullable: false, comment: '英雄的名字' }),
    __metadata("design:type", String)
], Hero.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { description: '英雄的简介' }),
    class_validator_1.IsOptional(),
    typeorm_1.Column({ nullable: true, comment: '英雄的简介', default: '这是英雄的简介' }),
    __metadata("design:type", String)
], Hero.prototype, "description", void 0);
Hero = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Hero);
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map