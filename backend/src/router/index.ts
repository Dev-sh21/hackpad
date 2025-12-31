import { Router } from "express";
import authRoutes from "./auth";
import projectRoutes from "./projects";

const router = Router();

router.use("/auth", authRoutes);
router.use("/project", projectRoutes);

export default router;