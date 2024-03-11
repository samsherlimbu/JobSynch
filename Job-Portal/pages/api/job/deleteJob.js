import Job from "@/models/Job";
import ConnectDB from "@/DB/connectDB";

export default async (req, res) => {
  await ConnectDB();
  console.log(req.body, "abc");
  const id = req.body;
  try {
    const deletedJob = await Job.findByIdAndRemove(id);
    if (deletedJob) {
      res.status(204).send("Job deleted succesfully!");
    } else {
      res.status(404).send("Job not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
