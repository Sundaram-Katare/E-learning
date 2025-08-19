import express from "express";
import { addCourse, getCourses, getCourseById, countCoursesByUser } from "../controllers/courseController.js";
import upload from "../middlewares/multer.js";
import {authMiddleware} from "../middlewares/authMiddleware.js";

const router = express.Router();

const courseUpload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "pdfs", maxCount: 10 },
  { name: "videos", maxCount: 5 },
]);

router.post("/add", courseUpload, addCourse);
router.get("/", getCourses);
router.get("/count", authMiddleware, countCoursesByUser);
router.get("/:id", getCourseById);
// router.get("/pdf/:filename", getPdf);

export default router;
