import mongoose from "mongoose";
import Company from "../models/Company";
import express from "express";
const createCompany = async (req: express.Request, res: express.Response) => {
  try {
    const { name, description, owner } = req.body;
    const newCompany = new Company({
      name,
      description,
      owner: mongoose.Types.ObjectId(owner),
    });
    const savedCompany = await newCompany.save();
    const finalCompany = savedCompany.populate("owner")
    return res.status(201).send(finalCompany);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

const getAllCompanies = async(req: express.Request, res: express.Response) => {
  try {
    const comps = await Company.find({}); 
    return res.status(200).send(comps)
  } catch (error) {
    return res.status(502).send({ error });
  }
}

const getSingleCompany = async (req: express.Request, res: express.Response) => {
  try {
    const company = await Company.findById(req.params.id); 
    return res.status(200).send(company); 
  } catch (error) {
    return res.status(502).send({ error });
  } 
}

const deleteCompany = async (req: express.Request, res: express.Response) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    return res.status(201).send({ status: "success" });
  } catch (error) {
    return res.status(502).send({ error });
  }
};

export default { createCompany, deleteCompany, getSingleCompany, getAllCompanies };
