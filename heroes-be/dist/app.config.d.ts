import { Hero } from './api-gql/hero/models/hero';
export declare const appConfig: {
    db: {
        type: "mysql";
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: (typeof Hero)[];
        synchronize: boolean;
        logging: boolean;
    };
};
