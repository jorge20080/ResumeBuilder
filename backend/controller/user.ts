import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from 'bcryptjs';

export const postCreateUser = (req: Request, res: Response) =>{
    User.findOne({email: req.body.email})
    .then(user=>{
        if(user){
            return res.status(409).json({message:"user exists already"});
        }
        bcrypt.hash(req.body.password, 12)
        .then(hashedPass=>{
            console.log(hashedPass)
            const user = new User({...req.body, password: hashedPass});
            return user.save();
        })
        .then(createdUser=>{
            return res.json(createdUser);
        })
    })
}

export const postLogin = (req: Request, res: Response) =>{
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password)
            .then((doMatch)=>{
                if(doMatch){
                    return res.json({message: "Successfully Logged", authenticated: true})
                }
                return res.status(404).json({message: "Failed to Login", authenticated: false})
            })
        } else{
            return res.json({message: "Invalid Email", authenticated: false})
        }
    })
}