import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("next_js");
const userCollection = database.collection("users");
const productCollection = database.collection("products");
const categoryCollection = database.collection("categories");
const reviewCollection = database.collection("reviews");

export const db = {
  userCollection,
  productCollection,
  categoryCollection,
  reviewCollection,
};
