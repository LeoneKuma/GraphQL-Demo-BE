import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription, Info, Context, CONTEXT } from '@nestjs/graphql';
import { Hero } from './models/hero'
import { HeroService } from './hero.service'
import { Arg, Int, ID } from 'type-graphql';
import { HeroDetailInput } from './dto/hero.input';
import { GetHeroArgs, DeleteHeroArgs, AddHeroArgs } from './dto/hero.args';
import { Double } from 'typeorm';

@Resolver()
export class HeroResolver {
    constructor(
        private readonly heroService: HeroService
    ) { }
    @Query(returns => Hero, { description: '查询一个英雄' })
    async getHero(
        @Args() { id }: GetHeroArgs
    ): Promise<Hero> {
        var hero = await this.heroService.findHero(id);
        return hero;
    }
    @Query(returns => [Hero], { description: '查询所有英雄' })
    async getHeroes(
    ): Promise<Hero[]> {
        await this.heroService.createMockData();

        const heroes = await this.heroService.getHeroes();
        return heroes
    }

    @Mutation(returns => Hero, { description: '增加一个英雄' })
    async addHero(
        @Args('') { name }: AddHeroArgs
    ): Promise<Hero> {
        var hero = await this.heroService.createHero(name)
        return hero;
    }
    @Mutation(returns => Hero, { description: '修改英雄信息' })
    async updateHero(
        @Args('heroDetail') heroDetail: HeroDetailInput
    ): Promise<Hero> {
        console.log(heroDetail);
        var hero = await this.heroService.updateHero(heroDetail)
        return hero;
    }
    @Mutation(returns => Boolean, { description: '删除一位英雄' })
    async deleteHero(@Args() { id }: DeleteHeroArgs)
        : Promise<boolean> {
        return await this.heroService.deleteHero(id);
    }
}
