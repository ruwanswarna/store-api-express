import productService from "../services/products.js";
const getProducts = async (req, res) => {
	//throw new Error("testing async errors!!!!");
	const { featured, company, name, sort, fields, numericFilters } = req.query;
	const filters = {};
	if (featured === "true") {
		filters.featured = true;
	}
	if (featured === "false") {
		filters.featured = false;
	}
	if (company) {
		filters.company = company;
	}
	if (name) {
		filters.name = { $regex: name, $options: "i" };
	}
	if (numericFilters) {
		const operatorMap = {
			">": "$gt",
			"<": "$lt",
			"=": "$eq",
			">=": "$gte",
			"<=": "$lte",
		};

		const regEx = /\b(<=|>=|=|<|>)\b/g;
		let _filters = numericFilters.replace(regEx, (match) => {
			return `-${operatorMap[match]}-`;
		});
		const options = ["price", "rating"];
		_filters.split(",").forEach((item) => {
			const [field, operator, value] = item.split("-");
			if (options.includes(field)) {
				if (filters[field]) {
					filters[field] = {
						...filters[field],
						[operator]: Number(value),
					};
				} else {
					filters[field] = { [operator]: Number(value) };
				}
				// if(!queryObject[field]){
				//     queryObject[field]={}
				// }
				// queryObject[field][operator] = Number(value);
				// If there is no shelf create the shelf first, then add stuff to the shelf
			}
		});
	}

	const sortList = sort ? sort.split(",").join(" ") : "";
	const fieldList = fields ? fields.split(",").join(" ") : "";

	const page = Number(req.query.page) || 1;
	const limit = Number(req.query.limit) || 10;
	const skip = (page - 1) * limit;

	const products = await productService.getProducts(
		filters,
		sortList,
		fieldList,
		skip,
		limit,
	);
	res
		.status(200)
		.json({ success: true, data: { products, nbHits: products.length } });
};

const getSingleProduct = async (req, res) => {
	const { id } = req.params;
	const product = await productService.getSingleProduct(id);
	if(!product){

	}
	res.status(200).json({ success: true, data: product });
};
const createProduct = async (req, res) => {
	
	res.status(200).json({ success: true });
};
const updateProduct = async (req, res) => {
	res.status(200).json({ success: true });
};
const deleteProduct = async (req, res) => {
	res.status(200).json({ success: true });
};
const checkHealth = async (req, res) => {
	res.status(200).json({ msg: "route is ok" });
};

export default {
	getProducts,
	getSingleProduct,
	createProduct,
	updateProduct,
	deleteProduct,
	checkHealth,
};
