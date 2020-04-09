const express=require('express')
const Furniture=require('../models/Furniture.js')

const getAll = (req, res) => {
    console.log(req.query)
    let q = {}
    let sort = {}
    if (req.query.name != undefined) {
    q.name = req.query.name 
     }
    // if (req.query.godina_from != undefined) {
    //     if (q.godina == undefined) {
    //         q.godina = {}
    //     }
    //     q.godina.$gte = new Date(Number(req.query.godina_from))

    // }
    // if (req.query.godina_to != undefined) {
    //     if (q.godina == undefined) {
    //         q.godina = {}
    //     }
    //     q.godina.$lt = new Date(Number(req.query.godina_to))

    // }
    // if (req.query.sort != undefined) {
    //     let sortable = ["name"]
    //     let sq = req.query.sort.split(":")
    //     if (sortable.indexOf(sq[0]) > -1) {         //vraka na koja pozicija se naoga                                                     soritiraniot element
    //         sort[sq[0]] = sq[1] == 'name' ? -1 : 1
    //     }

    // }

    Furniture.getAll(q, sort)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}
//   const getAll=(req,res)=>{
//       name=req.params.name
//       console.log(name)
//      Furniture.getAll((name))
//     .then(data=>{
//          res.status(200).send(data)
//     })
//      .catch(err=>{
//          res.status(500).send(err)
//     })
//  }

const getOne = (req, res) => {
    Furniture.getOne(req.params.id, req.user.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        });
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





