import express from "express";

import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router();

router.use("/user", userRoutes); //api/users

router.use("/task", taskRoutes); //api/tasks

export default router;
