import { Hero } from './models/hero';
import { Repository } from "typeorm";
import { HeroDetailInput } from './dto/hero.input';
export declare class HeroService {
    private readonly heroRepository;
    constructor(heroRepository: Repository<Hero>);
    findHero(id: number): Promise<Hero>;
    getHeroes(): Promise<Hero[]>;
    createHero(heroName: string): Promise<Hero>;
    updateHero(heroDetail: HeroDetailInput): Promise<Hero>;
    deleteHero(id: number): Promise<boolean>;
    createMockData(): Promise<boolean>;
}
