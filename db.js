const dotenv = require('dotenv');

dotenv.config();

var knex = require('knex')({
	client: 'pg',
	connection: {
		// connectionString: process.env.DATABASE_URL,
		host: process.env.DB_HOST || '127.0.0.1',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || 'pass',
		database: process.env.DB_NAME || 'cs_student',
		ssl: {
			rejectUnauthorized: false
		}
	},
	pool: {
		afterCreate: function (conn, done) {
			// in this example we use pg driver's connection API
			conn.query('SET timezone="UTC+5";', function (err) {
				if (err) {
					// first query failed, return error and don't try to make next query
					done(err, conn);
				} else {
					// do the second query...
					conn.query('SELECT NOW();', function (err) {
						// if err is not falsy, connection is discarded from pool
						// if connection aquire was triggered by a query the error is passed to query promise
						done(err, conn);
					});
				}
			});
		}
	}
});

module.exports = knex;
