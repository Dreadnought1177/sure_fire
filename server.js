"use strict";

var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    session = require('express-session'),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


require('colors');

var sessionConfig = {
    secret:'CookieMonster',
    resave:false,
    saveUninitialized: true,
    name:'myCookie',
    cookie: {
        secure: false,
        httpOnly:false,
        maxAge: 3600000
    }
};

// app.use( express.static( path.join( root, 'bower_components' )));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json({extended: true}));
app.use( express.static( path.join( root, 'client')));
app.use(session(sessionConfig));

require("./server/config/mongoose.js");

require("./server/config/routes.js")(app);



app.listen( 8000, function() {
    console.log( `server running on port 8000`.cyan );
});


