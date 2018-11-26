var express = require('express');
var userModel = require('../models/user')
var router = express.Router();

router.post('/',(req,res)=>{
	var {username,password,mobile} = req.body;
	userModel({
		username,
		password,
		mobile
	}).save((err,info)=>{
		console.log(info)
		if(info){
			console.log(true);
			res.send(true);
			return;
		}
		console.log(true);
		res.send(false);
	})
});
module.exports = router;


