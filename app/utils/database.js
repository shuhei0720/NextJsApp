// app/utils/database.js

import mongoose from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://shuhei0720:s07200270@cluster0.oxx8nhe.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=next-market")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB