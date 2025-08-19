import multer from "multer";

const storage = multer.diskStorage({}); // just keep in memory, we’ll upload to cloudinary
const upload = multer({ storage });

export default upload;

