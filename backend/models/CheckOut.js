import mongoose, { mongo } from "mongoose";
const checkOutItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const checkOutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkOutItems: [checkOutItemSchema],
    shippingAddress: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    paymentSatus: {
      type: String,
      default: "pending",
    },
    paymentDetails: {
      type: mongoose.Schema.Types.Mixed,
      //stored payment related data
    },
    isFinalised: {
      type: Boolean,
      default: false,
    },
    isFinalisedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);
export default mongoose.model("CheckOut", checkOutSchema);
