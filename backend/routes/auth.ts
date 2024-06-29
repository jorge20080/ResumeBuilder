import { Router } from "express";
import { postLogin, postCreateUser } from "../controller/auth";
import { body } from "express-validator";
import checkValidationErrors from "../middlewares/check-validator-error";

const authRouter = Router();

authRouter.post(
    "/",

    body(['givenName', 'lastName', 'country', 'city'])
    .isLength({min:2})
    .withMessage('Names must have at least 2 characters'),

    body('email')
    .isEmail()
    .withMessage("Invalid email"),

    body('password')
    .isLength({min: 8}),

    body('confirmPassword')
    .custom((value, {req})=>{
        if(value!== req.body.password) throw Error('Passwords do not match');
        return true;
    }),

    body('phoneNumber')
    .isLength({min: 10, max: 10}),

    checkValidationErrors,
    postCreateUser
);

authRouter.post(
    "/login",

    body('email')
    .isEmail()
    .withMessage("Invalid email"),

    body('password')
    .isLength({min: 8}),

    checkValidationErrors,
    postLogin

);

export default authRouter;