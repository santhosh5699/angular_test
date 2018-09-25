var express=require('express');
var app=express();

app.use('/Users/Santhosh/Desktop/angular_test',express.static(__dirname));

/*app.get('/Users/Santhosh/Desktop/angular_test',function(req,res){
	res.sendfile(__dirname+ '/test.html')
})*/

app.listen(80,function(){
	console.log("server is listening to port 80");
})