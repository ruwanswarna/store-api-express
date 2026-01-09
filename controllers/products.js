const getAllProducts = async (req, res) => {
	//throw new Error("my error----------------------------");
	res.status(200).json({ msg: "product testing route" });
};
const checkHealth = async (req, res) => {
	res.status(200).json({ msg: "route is ok" });
};

export { getAllProducts, checkHealth };
