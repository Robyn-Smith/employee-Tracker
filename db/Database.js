const mysql = require('mysql2');

class dataBase {
    constructor (options) {
        this.options = options
        this.data = null
    }

    validate () {

        const { host, user, password, database} = this.options;
        id (!host || !user || ! database)
        throw new Error('Database config is invalid.');

        return;
    }

    connect () {

        this.validate();

        const { host, user, password, database} = this.options;

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

module.exports = dataBase;