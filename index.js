var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.get('/',function(res,req){
    req.sendfile('index.html');
})

app.listen(process.env.PORT || 8001, function(){

});
