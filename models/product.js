import { Schema, Types, model } from "mongoose";

const productSchema = new Schema(
	{
		name: { type: String, required: [true, "product name shoud be provided"] },
		price: { type: Number, required: [true, "price shoud be provided"] },
		featured: { type: Boolean, default: false },
		rating: { type: Number, default: 4.5 },
		company: {
			type: String,
			enum: {
				values: ["ikea", "liddy", "caressa", "marcos"],
				message: "{VALUE} is not supported",
			},
		},
	},
	{ timestamps: true }
);

export default model("Product", productSchema);
