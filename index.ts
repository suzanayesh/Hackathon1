import "reflect-metadata";
import db from './db/index.js';
import AWS from 'aws-sdk';
import fs from 'fs';
import express from 'express';
import multer from 'multer';
import { Photo} from './db/entity/photo.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

// Initialize the AWS SDK
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: 'AKIA3SQWPZW4XJEIRHVV',
    secretAccessKey: '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'
});

// Use Rekognition
const rekognition = new AWS.Rekognition();

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({
    storage
});


app.post('/upload', upload.single('image'), (req, res) => {
    
    if (req.file){

    
    const filePath =  req.file.path;  // Adjust this to your image's path
    const imageBytes = fs.readFileSync(filePath);
  
 const params = {
     Image: {
         Bytes: imageBytes
     },
     Attributes: ['ALL']
 };
 const newPhoto=new Photo();
 rekognition.detectFaces(params, function(err, data) {
    if (err) {
        console.error("Error:", err, err.stack);
    } else {
        console.log("Rekognition Result:", data);
        
        newPhoto.path =filePath ;
        newPhoto.json = JSON.stringify(data);
        
    }

    

    newPhoto.save().then((response) => {
        res.status(201).send('user created')
    }).catch(err => {console.log(err);
    
    res.status(400).send("error")
    })

});

}
    
});

app.post('/upload1', upload.single('image'), (req , res) => {
    res.send("upload")

    if (req.file){

        const filePath =  req.file.path;  // Adjust this to your image's path
   const imageBytes = fs.readFileSync(filePath);
 
const params = {
    Image: {
        Bytes: imageBytes
    }
};

rekognition.recognizeCelebrities(params, function(err, data) {
    if (err) {
        console.error("Error:", err, err.stack);
    } else {
        console.log("Rekognition Result:", data);
    }
}); 


    }
    
    
 });





app.post('/upload2', upload.single('image'), (req, res) => {
    if(req.file){
    res.send("upload")
    const filePath =  req.file.path;  // Adjust this to your image's path
   const imageBytes = fs.readFileSync(filePath);
 
const params = {
    Image: {
        Bytes: imageBytes
    }
};

rekognition.detectText(params, function(err:any, data:any) {
    if (err) {
        console.error("Error:", err, err.stack);
    } else {
        console.log("Rekognition Result:", data. TextDetections);
    }
}); 
}
    
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    db.initialize();
});

// // Load local image
// const filePath = 'img\\a.JPG';  // Adjust this to your image's path
// const imageBytes = fs.readFileSync(filePath);

// const params = {
//     Image: {
//         Bytes: imageBytes
//     },
//     Attributes: ['ALL']
// };

// rekognition.detectFaces(params, function(err, data) {
//     if (err) {
//         console.error("Error:", err, err.stack);
//     } else {
//         console.log("Rekognition Result:", data);
//     }
// });