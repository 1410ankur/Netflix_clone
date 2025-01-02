import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect("mongodb+srv://ankurrao381:ByvWDF3HQFMbeRB0@cluster0.etb8hc8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
,{
        useNewUrlParser: true,
  useUnifiedTopology: true,
    }).then(()=>{
        
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.error('Error connecting to MongoDB:', error);
    })
};
export default databaseConnection;
