import Course from "../models/courseModel.js";
import cloudinary from "../config/cloudinary.js";
import path from "path";

export const addCourse = async (req, res) => {
  try {
    const {
      title,
      description,
      domain,
      duration,
      pdfUrls,
      addedBy,
      // videoUrls,
    } = req.body;

    let thumbnailUrl = "";
    if (req.files && req.files.thumbnail) {
      const result = await cloudinary.uploader.upload(
        req.files.thumbnail[0].path,
        { folder: "courses/thumbnails" }
      );
      thumbnailUrl = result.secure_url;
    } else {
      return res.status(400).json({ success: false, message: "Thumbnail required" });
    }

    let pdfs = [];
    // let videos = [];

    // if (category === "pdffree" || category === "pdfpaid") {
    //   if (pdfUrls && Array.isArray(JSON.parse(pdfUrls))) {
    //     pdfs = JSON.parse(pdfUrls);
    //   } else if (req.files && req.files.pdfs) {
    //     for (let file of req.files.pdfs) {
    //       const result = await cloudinary.uploader.upload(file.path, {
    //         folder: "courses/pdfs",
    //         resource_type: "auto",
    //       });
    //       console.log( result);
    //       console.log("PDF uploaded:", result.secure_url);
    //       pdfs.push(result.secure_url);
    //     }
    //   } else {
    //     return res.status(400).json({
    //       success: false,
    //       message: "You must provide PDFs (either URLs or files)",
    //     });
    //   }
    // }

      if (pdfUrls && Array.isArray(JSON.parse(pdfUrls))) {
        pdfs = JSON.parse(pdfUrls);
      } else if (req.files && req.files.pdfs) {
        for (let file of req.files.pdfs) {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "courses/pdfs",
            resource_type: "auto",
          });
          console.log( result);
          console.log("PDF uploaded:", result.secure_url);
          pdfs.push(result.secure_url);
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "You must provide PDFs (either URLs or files)",
        });
      }

      // if (videoUrls && Array.isArray(JSON.parse(videoUrls))) {
      //   videos = JSON.parse(videoUrls);
      // } else if (req.files && req.files.videos) {
      //   for (let file of req.files.videos) {
      //     const result = await cloudinary.uploader.upload(file.path, {
      //       folder: "courses/videos",
      //       resource_type: "auto",
      //     });
      //     console.log("Video uploaded:", result.secure_url);
      //     console.log("Video uploaded:", result);
      //     videos.push(result.secure_url);
      //   }
      // } else {
      //   return res.status(400).json({
      //     success: false,
      //     message: "You must provide Videos (either URLs or files)",
      //   });
      // }

    const newCourse = new Course({
      title,
      description,
      domain,
      duration,
      thumbnail: thumbnailUrl,
      addedBy,
      pdfs,
      // videos,
      createdBy: req.user?._id,
    });

    await newCourse.save();
    res.status(201).json({ success: true, course: newCourse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error adding course" });
  }
};
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("createdBy", "name email");
    res.status(200).json({ success: true, courses });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching courses" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("createdBy", "name email");
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }
    res.status(200).json({ success: true, course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching course" });
  }
};

// export const getPdf = async (req, res) => {
//   try {
//     const filepath = path.join(__dirname, "uploads", req.params.filename);

//     res.setHeader("Content-Type", "application/pdf");
//   res.sendFile(filePath, (err) => {
//     if (err) {
//       console.error("Error sending file:", err);
//       res.status(404).send("File not found!");
//     }
//   });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Error fetching PDF" });
//   }
// }

export const countCoursesByUser = async (req, res) => {
  try {
    const userId = req.user?._id;
    const courseCount = await Course.countDocuments({ createdBy: userId });
    res.status(200).json({ success: true, courseCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error counting courses" });
  }
};

