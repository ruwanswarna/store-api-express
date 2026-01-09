import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, "product name should be provided"] },
		price: { type: Number, required: [true, "price should be provided"] },
		featured: { type: Boolean, default: false },
		rating: { type: Number, default: 4.5 },
		company: {
			type: String,
			enum: {
				values: ["ikea", "liddy", "caressa", "marcos"],
				message: "{VALUE} is not supported", //user provided VALUE
			},
            //enum: ["ikea", "liddy", "caressa", "marcos"]
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Product", productSchema);
