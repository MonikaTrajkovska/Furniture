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
        shippingAddress:String,
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
const getAll = (q,sort)=>{
  return new Promise((success,fail)=>{
      User.find(q,{},{sort:sort},(err,data)=>{
          if(err){
              return fail(err)
          }
          return success(data)
      })
  })
}
// const getUserPasswordByEmail=(email)=>{
//     return new Promise((success,fail)=>{
//         User.find({email:email}, (err,data)=>{
//             if(err){
//                 return fail (err)
//             }
//             return success(data[0])
//         })
//     })
// }
const getUserPasswordByEmail = email => {
  return new Promise((success, fail) => {
    // 1 ili 0 - true ili false//
    User.find(
      { email: email },
      { password: 1, email: 1, name: 1, surname: 1 },
      (err, data) => {
        if (err) {
          return fail(err);
        }
        return success(data[0]); //celiot "Prv" objekt od baza//
      }
    );
  });
};
const getOne = (_id ) => {
    return new Promise((success, fail) => {
      User.findById({ _id: _id}, (err, data) => {
        if (err) {
          return fail(err);
        }
        return success(data);
      });
    });
  };
  
  const replaceUser = (id, data) => {
    return new Promise((success, fail) => {
      User.findByIdAndUpdate(id, data, err => {
        console.log(" User models - row 71", id);
        if (err) {
          return fail(err);
        }
        return success();
      });
    });
  };
  
  const remove = id => {
    return new Promise((success, fail) => {
      User.findByIdAndRemove(id, err => {
        if (err) {
          return fail(err);
        }
        return success();
      });
    });
  };
  
  const confirmUserAccount = hash => {
    return new Promise((success, fail) => {
      User.update({ confirm_hash: hash }, { confirmed: true }, err => {
        if (err) {
          return fail(err);
        }
        return success();
      });
    });
  };
const getUser = (email) => {
    return new Promise ((success, fail) => {
        User.find({email: email}, (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(data)
        })
    })
}

const updateUser = (id, data) => {
    return new Promise((success, fail) => {
        User.updateOne({ _id: id }, data, err => {
            if (err) {
                return fail(err)
            }
            return success(data)
        })
    })
}
module.exports={
    createUser,
    getUserPasswordByEmail,
    getOne,
    replaceUser,
    remove,
    confirmUserAccount,
    getAll,
    getUser,
    updateUser
}