import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const checkValidationErrors = (req: Request, res: Response, next: NextFunction) =>{
    const isError = validationResult(req);
    if(!isError.isEmpty()){
        const errors = isError.array().map(error=>{
            return error.msg;
        })
        return res.status(422).json({message: "Errors found", errors: errors})
    }
    next();
}

export default checkValidationErrors;