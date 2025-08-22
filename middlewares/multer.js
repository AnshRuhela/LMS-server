import multer from "multer";
import { v4 as uuid } from "uuid";
// below code is used to upload files like images, videos, etc. using multer middleware in Node.js.
// yha humne do cheeje kari hai ek storage define kiya hai jisme humne file ko store karne ka path define kiya hai aur dusra filename define kiya hai jisme humne file ka naam set kiya hai.
// hum bina multer.diskStorage ke bhi file upload kar sakte hai lekin usme file ka naam same hoga har baar. isliye humne multer.diskStorage ka use kiya hai jisse har file ka naam alag hoga.
// multer.diskStorage ka use karke hum file ka naam aur path set karte hai jisse file upload hone par wo specific folder me save ho sake aur uska naam bhi unique ho. uska naam ab humne uuid se generate kiya hai jisse har file ka naam alag hoga.
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads"); // callback function. joki file ko "uploads" folder me store karega. jusme null ka matlab hai ki koi error nahi hai.
  },
  filename(req, file, cb) { 
    const id = uuid(); // generates a random id so that our every video or image get different id.

    const extName = file.originalname.split(".").pop(); // gets the extension of the file. like .mp4, .jpg, etc.

    const fileName = `${id}.${extName}`;

    cb(null, fileName); // callback function. joki file ka naam set karega. null ka matlab hai ki koi error nahi hai.
    // fileName is the name of the file that will be saved in the uploads folder.
  },
});

export const uploadFiles = multer({ storage }).single("file"); // single("file") means we are uploading a single file with the field name "file".

/*
Multer kya hai?
Multer ek Node.js middleware hai jo aapke server ko file uploads (jaise image, PDF, etc.) ko handle karne mein madad karta hai.

🔸 Example se samjho:
Maan lo tum ek form bna rahe ho jisme user photo upload kare. Jab user "Submit" karega, wo photo server pe bheji jaayegi. Server ko ye samajhne ke liye ki file aa rahi hai, aur usse kahaan store karna hai — uske liye Multer ka use kiya jaata hai.

🔹 Kaise kaam karta hai?
HTML form se file bheji jaati hai (multipart/form-data format me).

Multer use format ko samajhta hai aur file ko extract karke server pe save karta hai (memory ya folder me).
*/