import { DataSource }  from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();

export const appDataSource = new DataSource({
    type: 'postgres',
    database: process.env.DATABASE,
    host: process.env.HOST,
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
    synchronize: false,
    logging: true,
    entities:['src/entities/*.ts'],
});
