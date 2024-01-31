import { MongoClient } from "mongodb";

declare global {
  interface Global {
    _mongo: any;
  }
}

const uri: string | undefined = process.env.MONGODB_URI;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(uri).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(uri).connect();
}
export { connectDB };
