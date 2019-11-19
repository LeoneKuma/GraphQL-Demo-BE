import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HeroModule } from './api-gql/hero/hero.module';
import {appConfig} from './app.config'
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    HeroModule,
    GraphQLModule.forRoot({
      playground: true,  // 是否开启GraphQL IDE图形界面
      autoSchemaFile: 'schema.gql',//自动生成的gql文件的路径和文件名
    }),
    TypeOrmModule.forRoot(appConfig.db)
  ],
})
export class AppModule {}
