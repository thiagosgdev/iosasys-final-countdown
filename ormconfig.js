import 'dotenv/config';

export const type = 'postgres';
export const host = process.env.DB_HOST;
export const port = parseInt(process.env.DB_PORT, 5432);
export const username = process.env.DB_USERNAME;
export const password = process.env.DB_PASSWORD;
export const database = process.env.DB_DATABASE_NAME;
export const synchronize = false;
export const logging = false;
export const entities = ['src/shared/entities/*.entity.ts'];
export const migrations = ['infra/typeorm/migrations/*.ts'];
export const cli = {
    entitiesDir: 'src/shared/entities/',
    migrationsDir: 'infra/typeorm/migrations',
};
