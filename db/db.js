const pgp = require('pg-promise');

const db = pgp('postgre://darrick:123@host:port/database');

db.one('SELECT $1 AS value', 123)
  .then(data => console.log('data: ', data))
  .catch(err => console.log('err: ', err));

