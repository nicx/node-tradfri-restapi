'use strict';

var config = require("config");

var express = require("express"),
    app = express(),
    port = process.env.PORT || config.port || 3000;

app.listen(port);

var routes = require("./api/routes.js");
routes(app);


console.log("tradfri restful API listens on port: "+port);
