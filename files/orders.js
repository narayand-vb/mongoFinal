
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";

// Data to insert
const data = [
        {
         users_id : "12pr",
         total_items : 2,
         products : ["Iphone 12", "Boat Earphone"],
         billing_address : "Ram Chaok, Buxar, Bihar (896547)",
         shipping_address : "Uttam Nagar , Delhi (112365)",
         transaction_status : "failed"
 },
        {
         users_id : "14np",
         total_items : 1,
         products : ["Samsung A20"],
         billing_address : "AIIMS, Patna,Bihar (801232)",
         shipping_address : "Kolkata, WB (334589)",
         transaction_status : "success"
 },
        {
         users_id : "03ds",
         total_items : 1,
         products : ["Boat Earphone"],
         billing_address : "Asansol, WB (458975)",
         shipping_address : "Banglore,Karnatka",
         transaction_status : "success"
 },
        {
         users_id : "65sa",
         total_items : 2,
         products : ["Fastrack Watch","Fastrack Watch"],
         billing_address : "Asansol,WB(458975)",
         shipping_address : "New Delhi(112565)",
         transaction_status : "success"
 },
        {
         users_id : "56ms",
         total_items : 1,
         products : ["Fastrack Watch"],
         billing_address : "Chitranjan, WB(835689)",
         shipping_address : "New Delhi(112565)",
         transaction_status : "failed"
 },
    
 ]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("Orders").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("Orders").find().toArray();
console.log(printData);

// Update 
query = { users_id : "56ms" };
const updatequery = { $set: { users_id : "56fw" } };
const updateUser = await db.collection("Orders").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { users_id : "65sa" };
const deleteUser = await db.collection("Orders").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());


