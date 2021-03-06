//
let mysql = require("mysql");

//Connection via Heroku App Deployment

var connection;
if (process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "abc123",
        database: "burger_db",
    });
};

module.exports = connection;