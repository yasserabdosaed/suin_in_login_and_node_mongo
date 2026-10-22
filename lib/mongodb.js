
import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("يرجى إضافة MONGODB_URI إلى ملف .env.local");
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

export default clientPromise;
