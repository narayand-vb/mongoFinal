
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";

// Data to insert
const data = [
   {
name:"Kids Wear",
slug:"kids-wear",
image: "...",
description: "This is a good product"
},
   {
name:"Man's Wear",
slug:"mans-wear",
image: "...",
description: "Here you will see all the products of Man"
},
   {
name:"Samsung Mobile",
slug:"samsung-mobile",
image: "...",
description: "All the mobiles are of Samsung"
},
]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("Categories").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("Categories").find().toArray();
console.log(printData);

// Update 
query = { name: "Samsung Mobile" };
const updatequery = { $set: { name: "Apple Mobile" } };
const updateUser = await db.collection("Categories").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { name : "Man's Wear" };
const deleteUser = await db.collection("Categories").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());


