// Multer configration present
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({  //multer inform that upload a file in disk/folder
    destination: (req,file,cb)=>{
        cb(null,'upload/') //err-null, file save kaha -upload/
    } ,
    
    // file NAME ?? UPLOAD FILE GIVE UNIQU NAME
    filename :(req,file,cb)=>{
        const uniqueName = file.fieldname+ '_' + Date.now()+ path.extname(file.originalname);//file ka extension find. like-jpg,png..
        cb(null,uniqueName); //Multer ko bolta hai:File ko is naam se save karo.
    }
}) ;

const fileFilter = (req,file,cb)=>{
    // imges type
    const allowedTypes =['image/jpeg','image/png','image/gif','image/webp']

    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    } else{
        cb(new Error('Only image file are allowed in (jpeg,png,gif,webp)'))
    }
};

// Uplload middleware
const upload = multer({
    storage: storage,//to say multer file which storage configuration according to save it. like= uploads/ folder to save it . we define it previous
    fileFilter:fileFilter,
    limits:{
        fileSize: 5*1024*1024 //5MB
    }
})


// router.post('/upload-photo', upload.single('photo'), controller.uploadPhoto);


// single() = ek hi file upload
// multiple files ke liye upload.array('photos', 5) use karo  

module.exports = upload 