const mongoose=require('mongoose')
const Furniture=mongoose.model(
    'furnitures',
    new mongoose.Schema(
        {
            name:String,
            code:String,
            dimension:String,
            description:String,
            price:String,
            filename:Array,
            sold:String,
            user_id:String,
            
        }
    )
)

const getAll = (q,sort)=>{
    return new Promise((success,fail)=>{
        Furniture.find(q,{},{sort:sort},(err,data)=>{
            if(err){
                return fail(err)
            }
            return success(data)
        })
    })
}
const getOne = (id, userID) => {
    return new Promise((success, fail) => {
        Furniture.findById({ _id: id, user_id: userID }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};


const save=(data)=>{
    return new Promise ((success,fail)=>{
        var f=new Furniture(data)
        f.save(data,err=>{
            if(err){
                return fail(err)
            }
            return success()
        })
    })
}

const replace=(id,data)=>{
    return new Promise((success,fail)=>{
        Furniture.findByIdAndUpdate({_id:id},data,err =>{
            if(err){
                return fail (err)
            }
            return success()
        }
        
        )
    })
}
const update=(id,data)=>{
    return new Promise((success,fail)=>{
        Furniture.findByIdAndUpdate(id,{$set:{data}},err =>{
            if (err){
                return fail (err)
            }
        })
    })
}

const remove=(id)=>{
    return new Promise((success,fail)=>{
        Furniture.findByIdAndRemove({_id:id},err =>{
            if(err){
                return fail (err)
            }
            return success()
        })
    })
}

module.exports={
    getOne,
    getAll,
   
    save,
    replace,
    remove,
    update
}


