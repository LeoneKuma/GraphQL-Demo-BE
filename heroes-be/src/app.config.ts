import {Hero} from './api-gql/hero/models/hero'
const config={
    db: {
        type: "mysql" as "mysql",
        host: "localhost",
        port: 3306,
        username: "leone",
        password: "123456",
        database: "Hero",
        entities: [Hero],
        synchronize: false, // 开发环境同步数据库
        logging: true
      }
}
export const appConfig=config;