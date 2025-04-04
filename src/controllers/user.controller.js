import { asyncHandler } from "../utils/asyncHandler.js";
import mongoose from "mongoose";


const registerUser = asyncHandler( async (req, res) => {
    return res.status(200).json({
        message:"Backend-code"
    })
} )


export {registerUser}