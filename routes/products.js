import express from "express";
import productController from "../controllers/products.js";
const router = express.Router();

router
	.route("/")
	.get(productController.getProducts)
	.post(productController.createProduct);
router
	.route("/:id")
	.get(productController.getSingleProduct)
	.patch(productController.updateProduct)
	.delete(productController.deleteProduct);
router.route("/health").get(productController.checkHealth);

export default router;
