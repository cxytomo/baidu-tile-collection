// 创建目录
const fs = require('fs');
const axios = require('axios');

const request = require('request');
const path = require('path');

const imgArr = require('./data.js');

const newArr = new Set(imgArr); // 去重
const finalArr = Array.from(newArr); // 浅拷贝

const hostdir = "./";
function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}
let n = 0;
for (const item of finalArr) {
  const last = item.name.lastIndexOf('/')
  if (last > 0) {
    const name = item.name.substr(last + 1)
    const dir = item.name.substr(0, last)
    const dstpath = hostdir + dir + '/' + name
    if (name.length && dir.length && !fs.existsSync(dstpath)) {
      if (mkdirSync(hostdir + dir)) {
        ++n;
        request(item.url).pipe(fs.createWriteStream(dstpath))
      }
    }
  }
}
