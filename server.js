var express = require("express");
var path = require("path");

var app = express();
var table = [];
var tableWait = [];
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req,res){
res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req,res){
res.sendFile(path.join(__dirname, "table.html"));
});

app.post("/api/tables", function(req,res){
    var newTable = req.body
    console.log(newTable);
    if(table.length < 5){
        table.push(newTable)
    }else{
        tableWait.push(newTable);
    }
    res.json(newTable);
})

app.get("/api/tables", (req,res) => {
res.json(table);
})

app.get("/api/reservations", function(req, res){
    res.json(tableWait);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
