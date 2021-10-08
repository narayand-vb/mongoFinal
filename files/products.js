
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "ecommerce";
let Double = require("mongodb").Double;

// Data to insert
const data = [
   {
name:"Samsung A20",
thumbnail : "image.png",
product_gallery : ["image1.jpg","image2.jpg","image3.jpg","image4.jpg"],
description : "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB16.26 cm (6.4 inch) HD+ Display | 13MP + 5MP | 8MP Front Camera | 4000 mAh Lithium-ion Battery | Exynos 7884B Processor",
base_price : Double(12000.00),
sell_price : Double(12990.00),

},
   {
name:"Iphone 12",
thumbnail : "iphone_thumbnail",
product_gallery : ["iphone-img1","iphone-img2","iphone-img3","iphone-img4"],
description : "64 GB ROM | 15.49 cm (6.1 inch) Super Retina XDR Display | 12MP + 12MP | 12MP Front Camera | A14 Bionic Chip with Next Generation Neural Engine Processor | Ceramic Shield  | Industry-leading IP68 Water Resistance | All Screen OLED Display | 12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording",
base_price : Double(50000.00),
sell_price : Double(52999.00),

},
   {
name:"Fastrack Watch",
thumbnail : "watch-thumbnail",
product_gallery : ["watch-img1","watch-img2","watch-img3","watch-img4",],
description : "This is a very good watch.",
base_price : Double(1400.50),
sell_price : Double(1599.50),

},
   {
name:"Boat Earphone",
thumbnail : "earphone-thumbnail",
product_gallery : ["boat-img1.jpg","boat-img2.jpg","boat-img3.jpg","boat-img4.jpg",],
description : "Sound Quality is very good.",
base_price : Double(900.00),
sell_price : Double(999.00),

},
   {
name:"HP wireless Mouse",
thumbnail : "mouse-thumbnail",
product_gallery : ["mouse-pic1.jpg","mouse-pic2.jpg","mouse-pic3.jpg","mouse-pic4.jpg",],
description : "This is very good product by HP. It will provide you range of 10m",
base_price : Double(500.00),
sell_price : Double(599.00),

},

]
async function main() {
let query;
await client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);

// Insert Data
const insertData = await db.collection("products").insertMany(data);
console.log(insertData.insertedCount + "record inserted");

// Print Data
const printData = await db.collection("products").find().toArray();
console.log(printData);

// Update 
query = { name: "Samsung A20" };
const updatequery = { $set: { name: "Samsung A30" } };
const updateUser = await db.collection("products").updateMany(query, updatequery);
console.log(updateUser.modifiedCount + " record updated");

// Delete
query = { name : "Boat Earphone" };
const deleteUser = await db.collection("products").deleteMany(query);
console.log(deleteUser.deletedCount + " record deleted");
}
main()
  .catch(console.error)
  .finally(() => client.close());


