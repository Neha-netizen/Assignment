const mongoConnect = require("./core/dbConnection");
const indexRouter = require("./routers/allRoutes");
const routerConfig=require("./src/login/routersConfig")
const path = require("path");
const cookieParser = require("cookie-parser");

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/login', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
app.use(bodyParser.xml());

app.use("/", routerConfig);

const start = async () => {
    try {
        mongoConnect.connectToServer("mongodb://127.0.0.1:27017");
        app.listen("3000", () =>
        console.log(`adminServices started and listening on port 3000!`));
    } catch (error) { console.log("--------Error in starting the application+error" + error + "--------") }
}; start();


module.exports = app;