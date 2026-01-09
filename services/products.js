import Product from "../models/product.js";
const getProducts = async (queryObj) => {
	return Product.find(queryObj);
};

export default { getProducts };
 