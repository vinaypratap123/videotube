import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import {ApiResponse} from "../utils/apiResponse.js"
import { User } from "../models/user.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({msg:"ok"})
    // const { username, fullname, email, password } = req.body
    // console.log(email);
    // if (
    //     [username, fullname, email, password].some((field) => field?.trim() === "")
    // ) {
    //     throw new ApiError(400, "all fields are required")
    // }
    // const isUserExist = await User.findOne(
    //     {
    //         $or: [{ username }, { email }]
    //     }
    // )
    // if (isUserExist) {
    //     throw new ApiError(409, "user is alreday exist with email or username")
    // }
    // const avatarLocatPath = req.files?.avatar[0]?.path
    // const coverImageLocalPath = req.files?.coverImage[0]?.path
    // if (!avatarLocatPath) {
    //     throw new ApiError(400, "avatar is required")
    // }
    // const avatar = await uploadOnCloudinary(avatarLocatPath)
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    // if (!avatar) {
    //     throw new ApiError(400, "avatar is required")
    // }
    // const user = await User.create({
    //     fullname,
    //     email,
    //     password,
    //     username: username.toLowerCase(),
    //     avatar: avatar.url,
    //     coverImage: coverImage?.url || ""


    // })
    // console.log("here------------")
    // console.log(`user : ${user}`)
    // const createdUser = await User.findById(user._id).select("-password -refreshToken")
    // console.log(createdUser)
    // if(!createdUser){
    //     throw new ApiError(500,"something went wrong while creating the user")
    // }
    //  return res.status(201).json(
    //     new ApiResponse(200,createdUser,"User registered successfully")
    //  )
})
export { registerUser }