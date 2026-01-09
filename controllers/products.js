import productService from "../services/products.js";
const getProducts = async (req, res) => {
	//throw new Error("testing async errors!!!!");
	const { featured, company , name } = req.query;
	const queryObj = {};
	if (featured === "true") {
		queryObj.featured = true;
	}
	if (featured === "false") {
		queryObj.featured = false;
	}
    if(company){
        queryObj.company = company; 
    }
    if(name){
        queryObj.name = name; 
    }
	const products = await productService.getProducts(queryObj);
	res
		.status(200)
		.json({ success: true, data: { products, nbHits: products.length } });
};
const checkHealth = async (req, res) => {
	res.status(200).json({ msg: "route is ok" });
};

export { getProducts, checkHealth };
