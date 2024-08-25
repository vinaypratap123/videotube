import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
/// connect db function
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // console.log(connectionInstance)
        console.log(`mongodb connected and db host: ${connectionInstance.connection.host}`);

    }
    catch (error) {
        console.log(`Mongodb connection error:${error}`);
        process.exit(1);
    }
}
export default connectDB;