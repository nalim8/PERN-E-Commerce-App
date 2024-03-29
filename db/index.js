const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  connect: () => {
    return pool.connect().then(() => {
      console.log('Database connected!');
    });
  },
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
