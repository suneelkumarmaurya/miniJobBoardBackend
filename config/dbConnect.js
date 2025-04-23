import mongoose from "mongoose";

export  const connectDB = async () => {
    console.log('process.env.MONGO_URI==>, , ', process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log(`MongoDB connected: ${conn.connection.host}`);
        }
    } catch (error) {
        console.log(error)
    }
}