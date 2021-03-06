import { UserController } from "./controllers/UserController";
import { SurveysController } from "./controllers/SurveysController";

import { Router } from "express";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

export { router };
