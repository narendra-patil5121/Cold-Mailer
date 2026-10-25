import mongoose from 'mongoose'
const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongodb connected")

    }
    catch(e){
        console.log(e.message)

    }
}

export default connectDB