const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";

// Data to insert
const data = [
   {
name:"Software Engineer",
slug:"software-engineer"
},
   {
name:"Sales Expert",
slug:"sales-expert"
},
   {
name:"Marketing Expert",
slug:"marketing expert"
},
   {
name:"web developer",
slug:"web-developer"
},
   {
name:"System Engineer",
slug:"system-engineer"
},
]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("Roles").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("Roles").find().toArray();
console.log(printData);

// Update 
query = { name: "web developer" };
const updatequery = { $set: { name: "web designer" } };
const updateUser = await db.collection("Roles").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { name : "System Engineer" };
const deleteUser = await db.collection("Roles").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());


