var express = require('express');
var userModel = require('../models/user')
var router = express.Router();

router.post('/',(req,res)=>{
	req.session.destroy(()=>{
		res.send(false);
	})
});
module.exports = router;


