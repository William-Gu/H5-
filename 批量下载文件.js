var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){}).listen(50082);
console.log("http start");

var array =require('./pushImg').array;

var reg= /([\w\.\/\-\:]*)\s?1080w$/gi;
var imgArray=[];
for(var i=0;i<array.length;i++){
    var url=reg.exec(array[i])[1].replace("https","http")
    downloadImg(url,i)
    reg.lastIndex=0
}
function downloadImg(url,i){
    var url = url;
    http.get(url, function(res){
        var imgData = "";

        res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开


        res.on("data", function(chunk){
            imgData+=chunk;
        });

        res.on("end", function(){
            fs.writeFile("./"+i+".png", imgData, "binary", function(err){
                if(err){
                    console.log("down fail");
                }
                console.log("down success");
            });
        });
    });
}
