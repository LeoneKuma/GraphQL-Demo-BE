import { Field, ID, ObjectType, Int } from 'type-graphql';

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional } from 'class-validator';
import { type } from 'os';

@ObjectType()
@Entity()
export class Hero{
    @Field(type=>Int,{description:"英雄的id"})
    @PrimaryGeneratedColumn({type:"bigint",comment: "主键，英雄的id" })
    id:number;

    @Field(type=>String,{description:'英雄的名字'})
    @Column({nullable:false,comment:'英雄的名字'})
    name:string;

    @Field(type=>String,{description:'英雄的简介'})
    @IsOptional()
    @Column({nullable:true,comment:'英雄的简介',default:'这是英雄的简介'})
    description:string;
}
