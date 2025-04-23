import express from "express";
const jobRouter = express.Router();
import { addJob ,getJobs ,getJobById} from "../controllers/JobController.js";

jobRouter.post("/jobs", addJob);
jobRouter.get("/jobs",getJobs)
jobRouter.get("/jobs/:id",getJobById)
export default jobRouter;