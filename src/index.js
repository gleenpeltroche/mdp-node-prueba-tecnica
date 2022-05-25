import app from './app.js';;
import {sequelize} from './database/db.js';

async function main(){
    try {
        await sequelize.sync();
        app.listen(8000);
        console.log("Server is listening on port", 8000);
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
}

main();
