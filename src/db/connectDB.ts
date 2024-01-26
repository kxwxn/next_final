import { MongoClient } from "mongodb";

declare global {
  interface Global {
    _mongo: any;
  }
}

const uri: string | undefined = process.env.MONGODB_URI;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };

