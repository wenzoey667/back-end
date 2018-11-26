var express = require('express');
var userModel = require('../models/user')
var router = express.Router();
router.get('/',(req,res)=>{

	console.log(req.session.userInfo)
	if(req.session.userInfo){
		res.send(true);
		return; 
	}
	res.send(false);
});
module.exports = router;