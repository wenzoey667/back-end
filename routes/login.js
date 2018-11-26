var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

router.post('/',(req,res)=>{
	var {username,password} = req.body;
	console.log(req.body);
	userModel.find({
		username,
		password
	}).then(info=>{
		console.log(info);
		if(info.length){
			
			console.log(true);
			req.session.userInfo = info[0];
			console.log("1111",req.session.userInfo)
			res.send(true);
			return
		}
		res.send(false);
		console.log(false)
	})
});
module.exports = router;