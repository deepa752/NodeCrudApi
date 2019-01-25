const knex = require( 'knex' )( {

    client: 'mysql',
    debug: false,
    connection: {

        host: 'localhost',

        user: 'root',
        password: 'navgurukul',
        database: 'user',
        charset: 'utf8',


    }

} );
module.exports = knex

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
