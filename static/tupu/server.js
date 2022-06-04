
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: "3306",
    password: '123456',
    database: 'jiaoda',
    multipleStatements: true
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});
const express = require("express");
const app = express();
// module.exports = function () {
app.all('/subject', (req, res) => {
// req收到  res 发送 post 接收数据req.on('data'
    //设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*")
    // req.query    ==?后面数据
    let str='"'+req.query['subjectName']+'"'
    let k={};
    const Sql1 = 'select * from subject where subjectName='+`${str}`;
    console.log(Sql1);
    connection.query(Sql1, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        const dataString = JSON.stringify(result);
        const data = JSON.parse(dataString);
        k['data']=data
        res.send(k);
        // console.log(typeof data)

    });

    // console.log('-----------------------------------------------------------------\n\n');
});
app.listen(8001, () => {
    console.log("服务已启动")
})
// };