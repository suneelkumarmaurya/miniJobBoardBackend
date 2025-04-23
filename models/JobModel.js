import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    type: String,
    location: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
  });
  
  const Job = mongoose.model("Job", jobSchema);
  
  export default Job;