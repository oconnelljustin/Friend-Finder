var express = require('express')
var app = express()

var PORT = process.env.PORT || 8080;

//json parser

var jsonParser = bodyParser.json()

//create form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({extended: false})

//parse various custom JSON types as JSON

app.use(bodyParser.json({type: 'application/++json'}))

//parse custom thing into a Buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

//parse an HTML body into a string
app.use(bodyParser.text({type: 'text/html'}))

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});