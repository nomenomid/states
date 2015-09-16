/* globals readFile */

var fsp = require("./lib/fs.promise.js");
var express = require("express");
var app = express();
var dataFile = "./data/states.json";
var port = process.env.PORT || 5000;

app.use(express.static("site"));

app.get("/states", function(request, response) {
    fsp.readFile(dataFile)
        .then(JSON.parse)
        .then(response.send.bind(response));
});

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);    
});