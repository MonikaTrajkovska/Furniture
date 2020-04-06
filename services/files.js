const express = require('express');
const config = require('../config/index.js');
const files = require('../handlers/files');
const fileupload = require('express-fileupload');
const jwt = require('express-jwt');
const cors=require ('cors')

var api = express();
api.use(cors())
 api.use(function (req, res, next) {
         res.header("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
     next();
});
api.use(
    jwt(
        {secret: config.getConfig('jwt').key}
    )
);

api.use(fileupload({
    limits: {fileSize: 50 * 1024 * 1024},
}));

api.post('/api/v1/files/upload', files.UploadFile);
api.get('/api/v1/files/upload/:filename', files.DownloadFile);

api.listen(8002, err => {
    if(err){
        console.log('Could not start server');
        console.log(err);
        return;
    }
    console.log('Server successfully started on port 8002');
});
