import express from "express";
import "dotenv/config";
import "express-async-errors"; //added to top of the file before any routers are imported
import ProductRouter from "./routes/products.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";

const PORT = process.env.PORT || 5000;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/v1", (req, res) => {
	res.status(200).send("<h1>api/v1</h1><a href='api/v1/products'>Products</a>");
});

//router middleware
app.use("/api/v1/products", ProductRouter);

//404 not found
app.use(notFoundMiddleware);
//error
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		//connect db
		await connectDB(process.env.MONGODB_URI);
		app.listen(PORT, () => {
			console.log("Server is running");
		});
	} catch (error) {
		console.log(error);
	}
};
start();
