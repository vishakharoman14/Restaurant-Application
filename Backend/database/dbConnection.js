import mongoose from "mongoose";

export const dbConnection = () =>{
mongoose.connect(process.env.MONGO_URI,{
    dbName : "RESTAURANT"
}).then(()=>{
    console.log("Connected to DB Sucessfully!!")
}).catch(err =>{
    console.log(`Some Error Occured wile connecting to database. ${err}`)
})
};
