import express from "express";
import { getAllProducts, checkHealth } from "../controllers/products.js";
const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/health").get(checkHealth);


export default router;