import mongoose from "mongoose";

const connectDB = async() => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_CONNECTION_URL}/userdata`);

       console.log('\n Connected to Mongodb database!! Db host: ', connectionInstance.connection.host);

    } catch (error) {
        res.status(500).send("Error connecting to databse");
        throw error;
    }
}

export default connectDB;