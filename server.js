let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");

let port = 3000;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
let routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);