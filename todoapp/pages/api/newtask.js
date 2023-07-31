import { connectDB } from "../../utils/features"
import { Task } from "../../models/task"
import { errorHandler } from "@/middlewares/error";


const handler = async (req, res) => {

    if (req.method !== "POST") {
        return errorHandler(res, 400, "Only Post Method is allowed")
    }

    await connectDB();

    const { title, description } = req.body;

    await Task.create({
        title,
        description,
        user: "dkkdfkdskwmdjsdjm",
    });

    res.json({
        success: true,
        message: "task Created",
    });
};

export default handler;