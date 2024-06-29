import { Request, Response } from "express";
import User from "../models/User";
import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';



export const postCreateUser = async(req: Request, res: Response) =>{
    const {givenName, lastName, email, password, phoneNumber, country, city} = req.body;
    const hashedPass = await bcryptjs.hash(password, 12);
    const foundUser = await User.findOne({email});

    if(foundUser){
        return res.status(403).json({message:"Email already exists"});
    }
    const user = new User({
        givenName: givenName,
        lastName: lastName,
        email: email,
        password: hashedPass,
        phoneNumber,
        country, 
        city
    })
    const createdUser = await user.save();
    if(createdUser){
        // transport.sendMail({a
        //     from: 'jolusarez@gmail.com',
        //     to: email,
        //     subject: 'hello world',
        //     html: '<h1>Hello world!</h1>'
        // });
        return res.json({message:"User Created Successfully", userId: createdUser._id})
    }
}

export const postLogin = async(req: Request, res: Response) =>{
    const {email, password} = req.body;
    const foundUser = await User.findOne({email})
    if(foundUser){
        const doMatch = await bcryptjs.compare(password, foundUser.password);
        if(!doMatch){
            return res.status(404).json({message: "Incorrect password"});
        }
        const token = jwt.sign({email, userId: foundUser._id}, "secret", {expiresIn: "1h"})
        return res.json({message:"User authenticated successfully", userId: foundUser._id, token})
    }
    return res.status(404).json({message: "Incorrect email"})
}