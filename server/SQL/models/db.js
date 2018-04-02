const pgp = require('pg-promise');

const db = pgp('postgre://Darrick:noreturn1@localhost:5555/data');

db.one('SELECT $1 AS value', 123)
  .then(data => console.log('data: ', data))
  .catch(err => console.log('err: ', err));

