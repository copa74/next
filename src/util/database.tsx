import { MongoClient } from "mongodb";
const url = "mongodb+srv://copa3033:a1065218@cluster0.4ksgsda.mongodb.net/";
const options: any = { useNewUrlParser: true };
let connectDB: any;

connectDB = new MongoClient(url, options).connect();

export default connectDB;
