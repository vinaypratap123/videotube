import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
/// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
/// uploadOnCloudinary funtion
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        const uploadResult = await cloudinary.uploader
            .upload(
                localFilePath, {
                resource_type: "auto"
            }
            )
        console.log(`file uploade on cloudinary: ${uploadResult}`)
        console.log(`file uploade on cloudinary: ${uploadResult.url}`)
        // if (localFilePath) {
        //     fs.unlinkSync(localFilePath)
        // }
        return uploadResult


    }
    catch (error) {
        if (localFilePath) {

            fs.unlinkSync(localFilePath)
        }
        return null
    }
}

export { uploadOnCloudinary }