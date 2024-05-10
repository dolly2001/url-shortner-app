import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("DATABASE CONNECTED SUCCESSFULLY",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.log("Error -->", error)
    }
}

export default connectDB