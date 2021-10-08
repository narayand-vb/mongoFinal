const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";

// Data to insert
const data = [
   {
name:"Foot Wear",
slug:"foot-wear"
},
   {
name:"Men Fashion",
slug:"men-fashion"
},
   {
name:"Women Fashion",
slug:"women-fashion"
},
   {
name:"Kids Fashion",
slug:"kids-fashion"
},
   {
name:"Samsung Mobiles",
slug:"samsung-mobiles"
},
]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("tags").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("tags").find().toArray();
console.log(printData);

// Update 
query = { name: "Samsung Mobiles" };
const updatequery = { $set: { name: "Samsung Buds" } };
const updateUser = await db.collection("tags").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { name : "Kids Fashion" };
const deleteUser = await db.collection("tags").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());


