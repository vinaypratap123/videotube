import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { User } from "../models/user.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"


/// register user function 
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: "ok" })
    const { userName, fullName, email, password } = req.body
    console.log(`email: ${email}`);
    /// check if any field is missing can be check every thing here all validation is possible
    if (
        [userName, fullName, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "all fields are required")
    }

    // check is user is already exist
    const isUserExist = await User.findOne(
        {
            $or: [{ userName }, { email }]
        }
    )
    if (isUserExist) {
        throw new ApiError(409, "user is alreday exist with email or username")
    }
    // geting local image path
    const avatarLocatPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    ///check if avatar is not empty
    if (!avatarLocatPath) {
        throw new ApiError(400, "avatar is required")
    }
    /// upload avatar to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocatPath)
    /// check avatar is not empty
    if (!avatar) {
        throw new ApiError(400, "avatar is required")
    }
    /// upload coverImage to cloudinary
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    ///create user 
    const user = await User.create({
        fullName,
        email,
        password,
        userName: userName.toLowerCase(),
        avatar: avatar.url,
        coverImage: coverImage?.url || ""
    })


    console.log(`user created: ${user}`)

    // remore password and refreshtoken form response
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    console.log(`createdUser:${createdUser}`)

    // check if user is created or not
    if (!createdUser) {
        throw new ApiError(500, "something went wrong while creating the user")
    }
    // return the response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )
})
export { registerUser }