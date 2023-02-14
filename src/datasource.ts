import { DataSource } from 'typeorm';
import { Beer } from './entities/beer-entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Beer],
  subscribers: [],
  migrations: [],
});
