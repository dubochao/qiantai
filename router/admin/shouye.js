/**
 * Created by Nealyang on 17/2/25.
 */
 const express = require('express');

 module.exports = function () {
     var router = express.Router();
     router.get('/',function (req,res) {
         // res.statusCode = 302;
         res.render('admin/shouye.ejs');
     });
     return router;
 };
 
 