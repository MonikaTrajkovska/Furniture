const express=require('express')
const bodyParser=require('body-parser')
const config=require('../config/index.js')
const DBCon=require('../db/connection')
const auth=require('../handlers/auth')
const jwt=require('express-jwt')
const cors = require('cors')

DBCon.init(config.getConfig('db'))

var api=express()
api.use(bodyParser.json())
api.use(cors())
api.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization,");
   next();
})

api.use(
    jwt({
        secret:config.getConfig('jwt').key
    })
    .unless({
        path:['/api/v1/auth/register','/api/v1/auth/login']
    })
)
api.post('/api/v1/auth/register',auth.register)
api.post('/api/v1/auth/login',auth.login)
api.get('/api/v1/auth/user/:email',auth.userInfo)
api.get('/api/v1/auth/renew',auth.renew)
api.post('/api/v1/auth/reset-link',auth.resetLink)
api.post('/api/v1/auth/reset-password',auth.resetPassword)
api.post('/api/v1/auth/change-password',auth.changePassword)
api.post('/api/v1/auth/user-info', auth.getUserInfo)
 api.put('/api/v1/auth/:id', auth.updateUserInfo)
api.post("/api/v1/auth/confirm/:confirm_hash", auth.confirm);
api.get("/api/v1/auth/:id", auth.getOne);
api.get("/api/v1/auth/", auth.getAll);
//  api.put("/api/v1/auth/:id", auth.replaceUser);
api.delete("/api/v1/auth/:id", auth.removeUser);

api.use(function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      res.status(401).send({ message: "Invalid token" });
    } else {
      next(err);
    }
  });


api.listen(8080,err=>{
    if(err){
        console.log('Could not start server')
        console.log(err)
        retun
    }
    console.log('Server has started on port 8080')
})









