const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";

const data = [{
first_name: "Shubham",
last_name: "Pandey",
email: "shubham.pandey123@gmail.com",
profile_pic : "...",
role : "client"
},{
first_name: "Nitish",
last_name: "Pandey",
email: "nitish.pandey13@gmail.com",
profile_pic : "...",
role : "client"
},{
first_name: "Shubham",
last_name: "Kumar",
email: "shubham.kumar1@gmail.com",
profile_pic : "...",
role : "client"
},{
first_name: "Sumbul",
last_name: "Afreen",
email: "sumbul.afreen@gmail.com",
profile_pic : "...",
role : "client"
},{
first_name: "Deepmalya",
last_name: "Sarkar",
email: "deepmalya.sarkar90@gmail.com",
profile_pic : "...",
role : "client"
},{
first_name: "Praveen",
last_name: "Rai",
email: "praveen.rai56@gmail.com",
profile_pic : "...",
role : "client"
}];

async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert
const insertData = await db.collection("Users").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print
const printData = await db.collection("Users").find().toArray();
console.log(printData);

// Update
query = { first_name: "Deepmalya" };
const updatequery = { $set: { last_name: "Chakrborty" } };
const updateUser = await db.collection("Users").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { first_name: "Nitish" };
const deleteUser = await db.collection("Users").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());

