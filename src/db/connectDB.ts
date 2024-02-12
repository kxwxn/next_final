import { MongoClient } from "mongodb";

const url: string | undefined = process.env.MONGODB_URI as string;

let connectDB: Promise<MongoClient>;

declare global {
  interface Global {
    _mongo: MongoClient | undefined;
  }
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

export default connectDB;
