/**
 * Created by Nealyang on 17/2/25.
 */

const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser');
const multer = require('multer');
const multerObj = multer({ dest: './static/upload' });
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const ejs = require('ejs');

//创建服务器
var server = express();
server.listen(8235);

//解析请求数据

server.use(bodyParser.urlencoded({
    extended: false
}));
server.use(multerObj.any());

//设置cookie，session
server.use(cookieParser('Neal_signed'));
(function () {
    var arr = [];
    var exp = new Date();  
    for (let i = 0; i < 10000; i++) {
        arr.push('keys_' + Math.random());
    }
    server.use(cookieSession({
        name: 'session_id',
        keys: arr,
        maxAge: exp.getTime() + 3 * 24 * 60 * 60 * 1000//一般我会设置20分钟，这里是为了感受session过期~~带来的快感~?(●´∀｀●)ﾉ
    }))
})();
//http://127.0.0.1:8081/admin/login
//设置模板
server.set('view engine', 'html');
server.set('views', './views');
server.engine('html', consolidate.ejs);
//设置路由
server.use('/admin', require('./router/admin/index')());
server.use('/', require('./router/web/index')());
// require('./router/tupu/server.js');

//静态文件的请求
server.use('/files', expressStatic('./static'));

