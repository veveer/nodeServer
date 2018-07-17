var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUserAction', function(req, res, next) {
  userDao.addUserAction(req,res,next)
});
router.get('/userlist', function(req, res, next) {
  userDao.getUserListAction(req,res,next)
});
router.get('/toUserUpdatePage', function(req, res, next) {
  userDao.toUserUpdatePage(req,res,next)
});
router.post('/updateUserAction', function(req, res, next) {
  userDao.updateUserAction(req,res,next)
});

module.exports = router;
