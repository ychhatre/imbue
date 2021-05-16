import express from "express";
import controller from "../controllers/company.controller";

const companyRouter: express.Router = express.Router();

companyRouter.post("/", controller.createCompany);
companyRouter.get("/", controller.getAllCompanies); 
companyRouter.get("/:id", controller.getSingleCompany); 
companyRouter.delete("/:id", controller.deleteCompany); 

export default companyRouter; 