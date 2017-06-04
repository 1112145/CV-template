var express = require('express');
var path = require('path');

var app = express();


app.use(express.static(__dirname));

app.get('/',function(res,req){
    req.sendfile(path.join(__dirname,'index.html'));
})

app.listen(process.env.PORT || 8001, function(){

});
