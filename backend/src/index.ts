import express from 'express';
import mongoose from 'mongoose';
const app = express();
;
async function main() {
    await mongoose.connect("mongodb://localhost:27017/LMS");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
    
}

main();