const express=require('express')
const Furniture=require('../models/Furniture.js')

const getAll=(req,res)=>{
    Furniture.getAll()
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

const getOne=(req,res)=>{
    Furniture.getOne(req.params.id,req.user.id)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}

const save=(req,res)=>{
    var data=req.body;
    let er=0;
    if(data.name == undefined || data.name.length == 0) {er ++}
    if(data.code == undefined || data.code.length == 0) {er ++}
    if(data.dimension == undefined || data.dimension.length == 0) {er ++}
    if(data.description == undefined || data.description.length == 0) {er ++}
    if(data.price == undefined || data.price.length == 0) {er ++}
    if(data.sold == undefined || data.sold.length == 0) {er ++}
    if(data.filename == undefined || data.filename.length == 0) {er ++}
if (er ==0){
    Furniture.save({...data,user_id:req.user_id})
    .then(()=>{
        res.status(201).send ('Created')
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
    else{
        res.status(400).send('Bad request')
    }
}

const replace=(req,res)=>{
    var data=req.body;
    let er=0;
    if(data.name == undefined || data.name.length == 0) {er ++}
    if(data.code == undefined || data.code.length == 0) {er ++}
    if(data.dimension == undefined || data.dimension.length == 0) {er ++}
    if(data.description == undefined || data.description.length == 0) {er ++}
    if(data.price == undefined || data.price.length == 0) {er ++}
    if(data.sold == undefined || data.sold.length == 0) {er ++}
    if(data.filename == undefined || data.filename.length == 0) {er ++}

    if(er == 0){
        Furniture.replace(req.params.id, data)
        .then(()=>{
            res.status(204).send()
        })
        .catch(err=>{
            res.status(500).send(err)
        })
    }else {
        res.status(400).send('Bad request')
    }
}

const update=(req,res)=>{
    var data=req.body;
    Furniture.replace(req.params.id, data)
    .then(()=>{
        res.status(204).send()
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
const remove=(req,res)=>{
    Furniture.remove(req.params.id)
    .then(()=>{
        res.status(204).send()
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
   
module.exports={
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}





