const mongoose=require('mongoose')

var User=mongoose.model(
    'users',
    new mongoose.Schema({
        name:String,
        surname:String,
        email:String,
        telephone:String,
        password:String,
        address:String,
        country:String,
        city:String,
        _created: Date,
        _modified: Date
    })
)
const createUser=(data)=>{
    return new Promise((success,fail)=>{
        var user=new User (data)
        user.save(err=>{
            if(err){
                return fail(err)
            }
            return success()
        })
    })
}
const getUserPasswordByEmail=(email)=>{
    return new Promise((success,fail)=>{
        User.find({email:email}, (err,data)=>{
            if(err){
                return fail (err)
            }
            return success(data[0])
        })
    })
}
module.exports={
    createUser,
    getUserPasswordByEmail
}