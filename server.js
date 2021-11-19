var express = require("express");
var app = express();

var server = app.listen(8080);

var io = require("socket.io")(server);

// -------------------------------

app.use(express.static(__dirname +"/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// --------------------------------

io.on("connection", function(socket){

    console.log("Someone just connected");
    socket.on("new_count", function (number) {
        io.sockets.emit('count', number);
    });

});

// -----------------------------------
app.get("/", function(request, response){
    console.log("Home");
    response.render("index");
});


