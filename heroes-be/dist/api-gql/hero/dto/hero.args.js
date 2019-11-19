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
let GetHeroArgs = class GetHeroArgs {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { description: '要获取的英雄的id' }),
    __metadata("design:type", Number)
], GetHeroArgs.prototype, "id", void 0);
GetHeroArgs = __decorate([
    type_graphql_1.ArgsType()
], GetHeroArgs);
exports.GetHeroArgs = GetHeroArgs;
let DeleteHeroArgs = class DeleteHeroArgs {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { description: '要删除的英雄的id' }),
    __metadata("design:type", Number)
], DeleteHeroArgs.prototype, "id", void 0);
DeleteHeroArgs = __decorate([
    type_graphql_1.ArgsType()
], DeleteHeroArgs);
exports.DeleteHeroArgs = DeleteHeroArgs;
let AddHeroArgs = class AddHeroArgs {
};
__decorate([
    type_graphql_1.Field(type => String, { description: '要增加的英雄的name' }),
    __metadata("design:type", String)
], AddHeroArgs.prototype, "name", void 0);
AddHeroArgs = __decorate([
    type_graphql_1.ArgsType()
], AddHeroArgs);
exports.AddHeroArgs = AddHeroArgs;
//# sourceMappingURL=hero.args.js.map