
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";
const Double = require("mongodb").Double;

// Data to insert
const data = [
{
product:"Iphone 12",
user:"Praveen Rai",
product_qty: Double(1.00),
base_price : Double(79000.00),
sell_price: Double(80999.00),
total_price: Double(159999.00)
},
   {
product:"Samsung A20",
user:"Shubham Pandey",
product_qty: Double(1.00),
base_price : Double(12000.00),
sell_price: Double(12999.00),
total_price: Double(24999.00)
},
   {
product:"Boat wireless Earphone",
user:"Deepmalya",
product_qty: Double(2.00),
base_price : Double(900.00),
sell_price: Double(999.00),
total_price: Double(1899.00)
},
   {
product:"Fastrack Watch",
user:"Sumbul Afreen",
product_qty: Double(1.00),
base_price : Double(1500.00),
sell_price: Double(1699.00),
total_price: Double(3199.00)
},
   {
product:"Fastrack Watch",
user:"Meghna Sarkar",
product_qty: Double(1.00),
base_price : Double(1500.00),
sell_price: Double(1699.00),
total_price: Double(3199.00)
},


]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("Carts").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("Carts").find().toArray();
console.log(printData);

// Update 
query = { user:"Sumbul Afreen" };
const updatequery = { $set: { user:"Meghna Sarkar" } };
const updateUser = await db.collection("Carts").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { user:"Deepmalya" };
const deleteUser = await db.collection("Carts").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());



