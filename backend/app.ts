import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user';

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);

mongoose.connect("mongodb+srv://jorge20080:Ab..121212@cluster0.22wonz3.mongodb.net/resumeBuilderApp?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(3000);
    console.log("You are connected to http://localhost:3000");
})