/*
 * GET home page.
 */

var config = require('../config');
var path = require('path');
exports.index = function (req, res) {

//    var jarrick = new Users({name:'Jarrick' + Math.random() * 1000, sex:'0', phone:'12345678901',
//        address:{city:'dalian', 'street':'xigang', test:'test'}});
//    jarrick.save(function (data) {
//        console.log(data);
//    });

//    Users.getById('51037e2a8a75b31c53000001');
//    Users.getByName('Jarrick678.9289640728384');

    var html = path.normalize(__dirname + '/../views/'+config.webConfig.dir+'/index.html');
    res.sendfile(html);
//    res.render('index', { title:'NJBlog.' });
};

exports.timeline=function(req,res){
    var html = path.normalize(__dirname + '/../views/'+config.webConfig.dir+'/timeline.html');
    res.sendfile(html);
}
exports.getLoginUser = function (req, res) {
    res.json(req.session["user"] || {});
};
