/**
 * Created by Nealyang on 17/2/25.
 */
const express = require('express');

module.exports = function () {
    var router = express.Router();
    router.use(function (req,res,next) {
        // res.end();
        if(!req.session['user_id'] && req.url != '/login'){
            // res.statusCode = 302;
            res.CacheControl = "no-cache"
            // res.setHeader('Location','/admin/login');//重定向到首页
            // //一次请求对应一次相应，要加response.end();
            // res.end();
            res.redirect('/admin/login');
        }else{
            next();
        }
        console.log('%s %s %s', req.method, req.url, req.path);
    });
    router.use('/login',require('./login')());
    router.use('/yiqing',require('./yiqing')());
    router.use('/fuwu',require('./fuwu.js')());
    
    router.use('/shouye',require('./shouye')());

    router.use('/tupu',require('./tupu')());
    router.get('/',function (req,res) {
        // res.statusCode = 302;
        res.render('admin/index.ejs');
    });
    return router;
};

