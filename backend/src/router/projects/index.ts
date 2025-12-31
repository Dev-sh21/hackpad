import { Router } from "express";
import * as controller from "../../controller/project";
import authenticated from "../../middleware/authenticated";

const router = Router();

router.post("/", authenticated, controller.createProject);
router.get("/", authenticated, controller.getAllProjects);
router.get("/:id", authenticated, controller.getProject);
router.put("/:id", authenticated, controller.updateProject);
router.delete("/:id", authenticated, controller.deleteProject);

export default router;