import Job from "../models/JobModel.js";

export const addJob = async (req, res) => {
  const { title, company, type, location, description } = req.body;
  if (!title || !company || !type || !location || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newJob = new Job({ title, company, type, location, description });
    await newJob.save();
    res.status(201).json({
      success: true,
      message: "Job added successfully",
      newJob,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ],
      };
    }
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
