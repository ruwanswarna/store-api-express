import { CustomAPIError } from "../errors/custom-errors.js";
const errorHandlerMiddleware = async (err, req, res, next) => {
	console.log(err);
	if (err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	res.status(500).json({ msg: "Something went wrong, please try again" });
};

export default errorHandlerMiddleware;
