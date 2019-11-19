import { Module } from '@nestjs/common';
import {HeroResolver} from './hero.resolver';
import {HeroService} from './hero.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import {Hero} from './models/hero'

@Module({
    imports:[
        TypeOrmModule.forFeature([Hero])
    ],
    providers:[HeroResolver,HeroService]
})
export class HeroModule {}
