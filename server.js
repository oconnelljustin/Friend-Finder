var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080;

//json parser

//var jsonParser = bodyParser.json()

//create form-urlencoded parser

app.use(bodyParser.urlencoded({extended: true}));

//parse various custom JSON types as JSON

app.use(bodyParser.json({type: 'application/++json'}))

//parse custom thing into a Buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

//parse an HTML body into a string
app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/api-routes.js") (app);
require("./app/routing/html-routes.js") (app);

require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});