import express from "express";
const jobRouter = express.Router();
import { addJob ,getJobs } from "../controllers/JobController.js";

jobRouter.post("/jobs", addJob);
jobRouter.get("/jobs",getJobs)

export default jobRouter;