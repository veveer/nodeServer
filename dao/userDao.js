var db = require('../common/basicConnection');
var $sqlCommands = require('../common/sqlCommands');

/**
 * 增加用户Action
 */
function addUserAction(req, res, next){
    // 获取前台页面传过来的参数
    var param = req.query || req.params;
    // 执行Query
    db.queryArgs($sqlCommands.user_status.insertOne, 
        [param.username,param.password,param.qrcode], 
        function(err, result) {
            if(!err){
                result = {
                    code: 200,
                    msg:'successful'
                }; 
            }
            // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);
        }
    );
}

function getUserListAction(req,res,next){
    db.queryArgs($sqlCommands.user_status.userList,[],function(err,result){
       db.doReturn(res, result);     
    });
}

function toUserUpdatePage(req,res,next){
    var param = req.query || req.params;
    db.queryArgs($sqlCommands.user_status.oneUserDetail,[param.userID],function(err,result){
       // db.doReturn(res, result); 
       var user = JSON.parse(JSON.stringify(result[0]));
       if(!err){
            res.render('userform',{
                user:user,
                title:'successful',
                content:'你妹！'
            });
       }
              
    });
}

function updateUserAction(req,res,next){
    console.log(req);
    var param = req.body;
    console.log("**************************");
    console.log(param);
    console.log("**************************");
    db.queryArgs($sqlCommands.user_status.updateOne,[param.username,param.password,param.qrcode,param.userID],function(err,result){
        console.log("changedRows = "+result.changedRows);
        if(!err){
           // 以json形式，把操作结果返回给前台页面
            db.doReturn(res, result);  
        }else{
            db.doReturn(res, {
                result:"failed"
            }); 
        }
           
    });
}

// exports
module.exports = {
    addUserAction: addUserAction,
    getUserListAction : getUserListAction,
    toUserUpdatePage : toUserUpdatePage,
    updateUserAction : updateUserAction
};