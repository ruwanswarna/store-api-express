import express from "express";
import { getProducts, checkHealth } from "../controllers/products.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/health").get(checkHealth);


export default router; 