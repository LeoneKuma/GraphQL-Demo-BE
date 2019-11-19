import { Hero } from './models/hero';
import { HeroService } from './hero.service';
import { HeroDetailInput } from './dto/hero.input';
import { GetHeroArgs, DeleteHeroArgs, AddHeroArgs } from './dto/hero.args';
export declare class HeroResolver {
    private readonly heroService;
    constructor(heroService: HeroService);
    getHero({ id }: GetHeroArgs): Promise<Hero>;
    getHeroes(): Promise<Hero[]>;
    addHero({ name }: AddHeroArgs): Promise<Hero>;
    updateHero(heroDetail: HeroDetailInput): Promise<Hero>;
    deleteHero({ id }: DeleteHeroArgs): Promise<boolean>;
}
