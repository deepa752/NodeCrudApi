module.exports = {

    development: {

        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },

        client: 'mysql',
        connection: {

            host: 'localhost',

            user: 'root',
            password: 'navgurukul',

            database: 'info',
            charset: 'utf8',


        }

    }
};