import {createConnection, Connection} from "typeorm";


export let connect = async () => {
        const connection = await createConnection({
            "type": "mongodb",
            "database": "lend_book",
            "host": "localhost",
            "name": 'default',
            "port": 27017,
            "synchronize": false,
            "logging": true,
            "migrationsTableName": "custom_migration_table",
            "entities": [
                __dirname + '/models/*.js'
            ],
            "migrations": [
                __dirname + '/migrations/*.js'
            ],
            "cli": {
                entitiesDir: __dirname + "/models/",
                migrationsDir: __dirname + '/migrations/'
            }
        });
    };

