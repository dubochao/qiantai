/**
 * Created by Nealyang on 17/2/24.
 */
const express = require('express');
const mysql = require('mysql');
const common = require('../../lib/common');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port:"3306",
    password: '123456',
    database: 'blog',
    multipleStatements: true
});

module.exports = function () {
    var router = express.Router();

    router.get('/',function (req,res) {
       res.render('admin/login.ejs');
        console.log('连接成功');
    });
    router.post('/',function (req,res) {

        var username = req.body.username;
        // console.log(username);
        var password = req.body.password;
        // console.log('SELECT * FROM admin_table WHERE username="'+username+'" and password="'+password+'";');
        if(username && password){
            db.query('SELECT * FROM admin_table WHERE username="'+username+'" and password="'+password+'";' ,function (err,userData) {
                if(err){
                    console.error(err);
                    res.status(500).send({code:500,data:[],msg:'database error'});
                }else if(userData.length == 0){
                    res.status(400).send({code:400,data:[],msg:'parameters error'});
                }else{
                    if(userData[0].password != password){
                        res.status(400).send({code:400,data:[],msg:'username or password error'});
                    }else{
                        req.session['user_id'] = userData[0].ID;//注意这里是在req上面
                        res.status(200).send({code:200,data:[],msg:'success'});
                        console.log('登录成功');
                    }
                }
            })
        }else{
            res.status(400).send({code:400,data:[],msg:'parameters error'});
        }
    });
    return router;
};
