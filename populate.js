import "dotenv/config";
import connectDB from "./db/connect.js";
import Product from "./models/product.js";
import jsonProducts from "./products.json" with { type: "json" };
//import jsonProducts from "./products.json" asserts { type: "json" };
(async()=>{try {

	await connectDB(process.env.MONGODB_URI);
    await Product.deleteMany(); 
    await Product.create(jsonProducts);
	console.log("Success.");
    process.exit(0);
} catch (error) {
	console.log(error);
    process.exit(1);
}})(); //immediately executed function
