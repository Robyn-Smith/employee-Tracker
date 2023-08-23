const mysql = require('mysql2');

class dataBase {
    constructor (options) {
        this.options = options
        this.data = null
    }

    validate () {

        const { host, user, password, database} = this.options;
        id (!host || !user || !password || ! database)
        throw new Error('Database config is invalid.');

        return;
    }

    connect () {
        //validate configuration
        this.validate();
        //Descructure configuration
        const { host, user, password, database} = this.options;
        // Connect to database =jsn
        this.data = mysql.createConnection(
            {
                host: host,
                user: user,
                password: password,
                database: database
            },
            console.log(`Successfully connected to the employee database.`)
        );
    }
    disconnect() {
        this.data.disconnect();
    }
}

module.exports = DataBase;