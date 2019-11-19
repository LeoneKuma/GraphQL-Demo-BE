import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int, } from 'type-graphql';

@ArgsType()
export class GetHeroArgs{
    @Field(type=>Int,{description:'要获取的英雄的id'})
    id!:number;
}

@ArgsType()
export class DeleteHeroArgs{
    @Field(type=>Int,{description:'要删除的英雄的id'})
    id?:number
}
@ArgsType()
export class AddHeroArgs{
    @Field(type=>String,{description:'要增加的英雄的name'})
    name!:string
}