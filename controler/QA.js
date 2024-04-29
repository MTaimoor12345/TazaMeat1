import express from "express";
import qpModel from "../models/QP.js";
import fs from 'fs/promises';
import path from 'path';

class QAcontroler {

    static createDoc =async(req,res)=>{
            try {
                const {Animal,Eid,CNIC,number,Address,qpdetail,quantity,totalPrice}=req.body;
                const doc =new qpModel({
                    Animal:Animal,
                    Eid:Eid,
                    CNIC:CNIC,
                    number:number,
                    Address:Address,
                    qpdetail:qpdetail,
                    quantity:quantity,
                    totalPrice:totalPrice
                  
                });
                const result=await doc.save();
                res.redirect("/submit")
                console.log(result)
                
            } catch (error) {
                console.log(error)
            }
        }



    static getAll =(req,res)=>{
        res.render("QA");
    }

}


export default QAcontroler;