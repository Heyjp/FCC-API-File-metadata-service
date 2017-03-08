var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: './uploads/'});
var app = express()

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// accept one file where the name of the form field is named photho
app.post('/index.html', upload.single('test'), function(req, res){
    console.log(req.file) // form files
    res.json(req.file.size); 
});

app.listen(3000, function (){
  console.log("connected on port 3000");
});
