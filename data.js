// var a = "";
var a = "127.0.0.1/public/images/tiles/9/96/26.png 127.0.0.1/public/images/tiles/9/96/25.png"; // 每次手动替换a的值为需要的图片路径
var reg1 = /tiles\/\w+\/\w+\/\w+\.png/ig;
var result = a.match(reg1);
var tils = [];
for(var i = 0; i< result.length; i++) {
    var o = {};
    o.name = result[i];
    var dataArr = result[i].split('.')[0].split('/');
    var x = dataArr[2];
    var y = dataArr[3];
    var z = dataArr[1];
    o.url = 'http://online0.map.bdimg.com/tile/?qt=vtile&x='+ x + '&y=' + y + '&z=' + z + '&styles=pl&scaler=1&p=1';
    tils.push(o);
}
module.exports = tils;
