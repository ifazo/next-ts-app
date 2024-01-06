import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const database = client.db("next_ts");
const userCollection = database.collection("users");
const productCollection = database.collection("products");
const categoryCollection = database.collection("categories");
const reviewCollection = database.collection("reviews");
const wishlistCollection = database.collection("wishlists");
const cartCollection = database.collection("cart");
const orderCollection = database.collection("orders");

export const db = {
  client,
  database,
  userCollection,
  productCollection,
  categoryCollection,
  reviewCollection,
  wishlistCollection,
  cartCollection,
  orderCollection,
};
