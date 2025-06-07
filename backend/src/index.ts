import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
import userRouter from './routes/user';
import AdminRouter from './routes/admin';
app.use(express.json());
app.use(cors());

app.use("/api/v1/user" , userRouter);
app.use("/api/v1/admin" , AdminRouter)
async function main() {
    await mongoose.connect("mongodb://localhost:27017/LMS");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
    
}

main();