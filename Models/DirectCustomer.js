
import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
  customerName: { type: String, required: true },
  emailId: { type: String, required: true },
  mobile: { type: Number, required: true },
  projectName: { type: String, required: true },
  projectLoc: { type: String, required: true },

});

export const Customer = mongoose.model("Customer", customerSchema);
