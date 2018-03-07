let express         = require("express");
let bodyParser      = require("body-parser");
let mongoose        = require("mongoose");
let cookie          = require("cookie");
let path            = require("path");
let app             = express();
let session         = require('express-session');
let port            = 8000;

app.use(express.static(path.join(__dirname,'/client/q-a/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'thisissecret', resave: false, saveUninitialized: true}));

app.listen(port, function() {
    console.log("listening on port "+port);
});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);
