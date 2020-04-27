const mUsers=require('../models/User')
const vUsers=require('../validators/users')
const validator=require('node-input-validator')
var bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
const config=require('../config/index.js')

const register=(req,res)=>{
    var v=new validator.Validator(req.body,vUsers.createUser)
    v.check()
    .then(matched=>{
        if(matched){
            bcrypt.genSalt(10,function(err,salt){
                if(err){
                    throw new Error(err);
                    return
                }
                bcrypt.hash(req.body.password,salt,function(err,hash){
                    if(err){
                        throw new Error(err)
                        return
                    }
                    return mUsers.createUser({...req.body,password:hash})
                })
            })
        } else{
            throw new Error ('Validation failed')

        }
    })
    .then(()=>{
        return res.status(201).send('ok')
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).send(v.errors)
    })
}

const login=(req,res)=>{
    mUsers.getUserPasswordByEmail(req.body.email)
    .then((data)=>{
        bcrypt.compare(req.body.password,data.password,(err,result)=>{
            if(err){
                return res.status(500).send('Could not compare passwords')
            }
            if(result){
                var tokenData={
                    id:data._id,
                    full_name:`${data.name} ${data.surname}`,
                    email:data.email
                }
                var token=jwt.sign(tokenData,config.getConfig('jwt').key)
                return res.status(200).send({jwt:token,
                  name:data.name,
                  surname:data.surname,
                  email: data.email,
                  id: data._id
                })

            }
            return res.status(400).send('not found')
        })
    })
    .catch(err=>{
        return res.status(500).send('Could not get user')
    })
}
   const getAll=(req,res)=>{
  data=req.params.data
//       console.log(name)
      mUsers.getAll((data))
     .then(data=>{
         res.status(200).send(data)
     })
      .catch(err=>{
         res.status(500).send(err)
    })
  }
const userInfo=(req,res)=>{
    mUsers.getUserPasswordByEmail(req.params.email)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
const renew= (req,res)=>{
    return res.status(200).send('ok')
}

const resetLink= (req,res)=>{
    return res.status(200).send('ok')
}
const resetPassword= (req,res)=>{
    return res.status(200).send('ok')
}
const changePassword= (req,res)=>{
    return res.status(200).send('ok')
}
const confirm = (req, res) => {
    var hash = req.params.confirm_hash;
    mUsers
      .confirmUserAccount(hash)
      .then(() => {
        return res.status(200).send("ok");
      })
      .catch(err => {
        return res.status(500).send("internal Server Error");
      });
  };
  
  const getOne = (req, res) => {
    mUsers.getOne(req.params._id)
      .then(data => {
        res.status(200).send(data);
         console.log(data);
        console.log("User-getOne - req.params._id", req.params._id);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  };
  
  const replaceUser = (req, res) => {
    var data = req.body;
    let er = 0;
    if (data.name == undefined || data.name.length == 0) {
      er++;
    }
    if (data.surname == undefined || data.surname.length == 0) {
      er++;
    }
    if (data.email == undefined || data.email.length == 0) {
      er++;
    }
    if (data.telephone == undefined || data.telephone.length == 0) {
      er++;
    }
    if (data.country == undefined || data.country.length == 0) {
      er++;
    }
    if (data.city == undefined || data.city.length == 0) {
      er++;
    }
     if (data.address== undefined || data.address.length == 0) {
       er++;
}
   
   
   
    // if (data.password == undefined || data.password.length == 0) {
    //   er++;
    // }
  
    if (er == 0) {

      mUsers
        .replaceUser(req.params.id, data)
        .then(() => {

         
          res.status(204).send();
          console.log("User-req.params.id", req.params.id);
          console.log(data);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    } else {
      res.status(400).send("Replace - Bad request");
    }
  };
  
  const removeUser = (req, res) => {
    mUsers
      .remove(req.params.id)
      .then(() => {
        res.status(204).send();
      })
      .catch(err => {
        res.status(500).send(err);
      });
  };
const getUserInfo = (req,res) => {
    mUsers.getUser(req.body.email)
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

const updateUserInfo = (req, res) => {
        mUsers.updateUser(req.params.id, req.body)
        .then(() => {
            res.status(201).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
    
}
module.exports={
    register,
    login,
    renew,
    resetLink,
    resetPassword,
    changePassword,
     userInfo,
     confirm,
     getOne,
     replaceUser,
     removeUser,
     getAll,
     getUserInfo,
     updateUserInfo,
}

