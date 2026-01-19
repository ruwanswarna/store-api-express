import Product from "../models/product.js";
const getProducts = async (filters, sort, select, skip, limit) => {
	//return Product.find(filters).sort(sort || "createdAt").select(select);
	let query = Product.find(filters).sort(sort || "createdAt");
	if (select) {
		query = query.select(select);
	}
	if (skip) {
		query = query.skip(skip);
	}
	if (limit) {
		query = query.limit(limit);
	}

	return query; //return await query;
};
const getSingleProduct = async (productId) => {
	const product = await Product.findOne({ _id: productId });
	return product;
};
const createProduct = async (productData) => {
	const product = await Product.create(productData);
	return product;
};
const updateProduct = async (productId, productData) => {
	const product = await Product.findByIdAndUpdate(productId,productData, {
		new: true,
		runValidators: true,
	});
	return product;
};
const deleteProduct = async (productId) => {
	const product = await Product.findOneAndDelete({ _id: productId });
	return product;
};

export default {
	getProducts,
	getSingleProduct,
	createProduct,
	updateProduct,
	deleteProduct,
};

// let result = Product.find(filters);
// if(sort){
//     result = result.sort(sort);
// }
// if(select){
//     result = result.select(select);
// }
// if(skip){
//     result = result.skip(skip);
// }
// if(select){
//     result = result.limit(limit);
// }
// const products =await result;
