"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = require("./api-gql/hero/models/hero");
const config = {
    db: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "leone",
        password: "123456",
        database: "Hero",
        entities: [hero_1.Hero],
        synchronize: false,
        logging: true
    }
};
exports.appConfig = config;
//# sourceMappingURL=app.config.js.map