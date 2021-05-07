require('./dist');

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
const migrationsDir = `src/db/migrations/${year}/${month}`;
require('fs').mkdirSync(migrationsDir, { recursive: true });

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 18432,
  username: 'bildoj',
  password: process.env.BILDOJ_DB_PASSWORD,
  database: 'bildoj',
  entities: ['dist/db/entities/*.js'],
  cli: {
    migrationsDir,
  },
  logging: 'all',
};
