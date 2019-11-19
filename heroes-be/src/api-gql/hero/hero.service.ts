import { Injectable } from '@nestjs/common';
import { Hero } from './models/hero';
import { Observable, of } from 'rxjs';
import { resolve, promises } from 'dns';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, Like } from "typeorm";
import { HeroDetailInput } from './dto/hero.input'
import { HEROES } from './hero.mockdata'
const heros = [];
@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(Hero)
        private readonly heroRepository: Repository<Hero>
    ) { }

    async findHero(id: number): Promise<Hero> {

        var hero = await this.heroRepository.findOne(id);
        return hero;
    }
    async getHeroes(): Promise<Hero[]> {
        return await this.heroRepository.find();
    }
    async createHero(heroName: string): Promise<Hero> {
        var hero = new Hero();
        hero.name = heroName;
        return await this.heroRepository.save(hero);
    }
    async updateHero(heroDetail: HeroDetailInput): Promise<Hero> {
        console.log(heroDetail);
        var hero = await this.heroRepository.findOne({ id: heroDetail.id })
        if(hero!=undefined){
            hero.name=heroDetail.name;
            hero.description=heroDetail.description;
            this.heroRepository.save(hero);
            return hero;
        }
        else{
            return new Hero();
        }
    }
    async deleteHero(id: number): Promise<boolean> {
        var hero = await this.heroRepository.findOne({ id: id })
        if (hero.id != undefined) {
            await this.heroRepository.remove(hero)
            return true;
        } else {
            return false;
        }
    }
    async createMockData()
        : Promise<boolean> {
        if (0 == await this.heroRepository.count()) {
            await this.heroRepository.save(HEROES)
            return true;
        } else {
            return false;
        }
    }
}
