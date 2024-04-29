import { text } from "express";
import mongoose, { Schema } from "mongoose";

const qpSchema = new mongoose.Schema({
    Animal:{type:String , require:true},
    Eid:{type:String , require:true},
    number:{type:Number , require:true},
    Address:{type:String , require:true},
    qpdetail:{type:String , require:true},
    quantity:{type:Number , require:true},
    totalPrice:{type:Number , require:true},
});

const qpModel = mongoose.model("qp",qpSchema);

export default qpModel;