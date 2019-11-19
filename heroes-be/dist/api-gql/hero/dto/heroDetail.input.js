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
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let HeroDetailInput = class HeroDetailInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true, description: '英雄id' }),
    class_validator_1.Min(0),
    __metadata("design:type", Number)
], HeroDetailInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: false, description: "英雄名称" }),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], HeroDetailInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true, defaultValue: '这是一位英雄的简介', description: '英雄的简介' }),
    class_validator_1.Length(10, 200),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], HeroDetailInput.prototype, "description", void 0);
HeroDetailInput = __decorate([
    type_graphql_1.InputType()
], HeroDetailInput);
exports.HeroDetailInput = HeroDetailInput;
//# sourceMappingURL=heroDetail.input.js.map