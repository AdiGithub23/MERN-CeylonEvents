import mongoose from 'mongoose';

export const dbConnection = () => {
    const URI = process.env.MONGO_URI;

    mongoose
        .connect(URI, {dbName: "MERN_Ceylon_Events"})
        .then(()=>{
            console.log("Connected to Database !!!");
        })
        .catch((err)=>{
            console.log("Error while connecting to Database: ",err)
        })
}
