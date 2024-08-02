import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
  name: String,
  lastname:String,
  
});

export const Employee = mongoose.model("Employee", EmpSchema);
