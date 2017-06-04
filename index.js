var express = require('express');
var path = require('path');

var app = express();

console.log(path.join(__dirname,'assets/index.html'));

app.use(express.static(path.join(__dirname,'assets')));

app.get('/',function(res,req){
    req.sendfile(path.join(__dirname,'assets/index.html'));
})

app.listen(process.env.PORT || 8001, function(){

});
