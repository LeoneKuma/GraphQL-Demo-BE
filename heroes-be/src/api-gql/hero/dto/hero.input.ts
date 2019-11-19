import { IsOptional, Length, MaxLength, Min, Max } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';
import M = require('_@types_minimatch@3.0.3@@types/minimatch');

@InputType()
export class HeroDetailInput{
    @Field(type=>Int,{nullable:true,description:'英雄id'})
    @Min(0)
    id:number;

    @Field(type=>String,{nullable:false,description:"英雄名称"})
    @MaxLength(20)
    name:string;

    @Field(type=>String,{nullable:true,defaultValue:'这是一位英雄的简介',description:'英雄的简介'})
    @Length(10,200)
    @IsOptional()
    description:string;
}

