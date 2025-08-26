
import { useState } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import axios from "axios";
import gif from "../assets/gif.gif";

const NewCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    domain: "",
    duration: "",
    addedBy: "",
  });

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [mediaType, setMediaType] = useState("url");
  const [mediaCount, setMediaCount] = useState(1);
  const [pdfUrls, setPdfUrls] = useState([""]);
  const [pdfFiles, setPdfFiles] = useState([null]);

  const API_URL = import.meta.env.VITE_API_URL || "https://server-production-2084.up.railway.app";

  // Handle simple fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleThumbnailFileChange = (e) => {
    setThumbnailFile(e.target.files[0]);
    setThumbnailUrl(""); // clear URL if file chosen
  };
  const handleThumbnailUrlChange = (e) => {
    setThumbnailUrl(e.target.value);
    setThumbnailFile(null); // clear file if url chosen
  };

  const handleMediaCountChange = (e) => {
    const count = Math.max(1, Number(e.target.value));
    setMediaCount(count);
    setPdfUrls((prev) => Array.from({ length: count }, (_, i) => prev[i] || ""));
    setPdfFiles((prev) => Array.from({ length: count }, (_, i) => prev[i] || null));
  };

  // Handle PDF URLs
  const handlePdfUrlChange = (e, idx) => {
    const urls = [...pdfUrls];
    urls[idx] = e.target.value;
    setPdfUrls(urls);
  };

  // Handle PDF file
  const handlePdfFileChange = (e, idx) => {
    const files = [...pdfFiles];
    files[idx] = e.target.files[0];
    setPdfFiles(files);
  };

  // On submit, create FormData and send
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    // Add basic fields
    Object.entries(formData).forEach(([key, val]) => data.append(key, val));

    // Handle thumbnail -- backend expects req.files.thumbnail (File) OR req.body.thumbnailUrl (String)
    if (thumbnailFile) {
      data.append("thumbnail", thumbnailFile);
    } else if (thumbnailUrl) {
      data.append("thumbnailUrl", thumbnailUrl);
    } else {
      alert("Please add a thumbnail (file or URL).");
      return;
    }

    // Handle PDF materials
    if (mediaType === "url") {
      const cleanUrls = pdfUrls.filter((url) => url && url.trim() !== "");
      if (!cleanUrls.length) {
        alert("Please provide at least one PDF URL.");
        return;
      }
      data.append("pdfUrls", JSON.stringify(cleanUrls));
    } else {
      const files = pdfFiles.filter((file) => !!file);
      if (!files.length) {
        alert("Please upload at least one PDF file.");
        return;
      }
      files.forEach((file) => {
        data.append("pdfs", file);
      });
    }

    try {
      await axios.post(`${API_URL}/api/courses/add`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Course Created Successfully!");
      // Reset
      setFormData({ title: "", description: "", domain: "", duration: "", addedBy: "" });
      setThumbnailFile(null);
      setThumbnailUrl("");
      setMediaType("url");
      setMediaCount(1);
      setPdfUrls([""]);
      setPdfFiles([null]);
    } catch (error) {
      alert("Error creating course!");
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full px-4 md:px-8 py-8 max-w-7xl mx-auto transition-colors rounded-2xl duration-300 dark:bg-gray-700 bg-gray-100">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Form */}
          <motion.div
            className="flex flex-col justify-center w-full max-w-xl p-5 md:p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-purple-700">
              Upload a New Docs
            </h1>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <TextField
                label="Course Title"
                variant="outlined"
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                name="description"
                placeholder="Enter Docs Description. Include details about the content."
                value={formData.description}
                onChange={handleChange}
              />
              <TextField
                label="Domain"
                variant="outlined"
                fullWidth
                name="domain"
                placeholder="e.g. Design, DSA, Development, etc."
                value={formData.domain}
                onChange={handleChange}
              />
              <TextField
                label="Duration (in hours)"
                variant="outlined"
                fullWidth
                name="duration"
                placeholder="e.g. 5 hours"
                value={formData.duration}
                onChange={handleChange}
              />

              <TextField
                label="Added By"
                variant="outlined"
                fullWidth
                name="addedBy"
                placeholder="e.g. John Doe, your name"
                value={formData.addedBy}
                onChange={handleChange}
              />

              {/* Thumbnail */}
              <div>
                <label className="block mb-1 text-sm dark:text-gray-400 text-gray-700">
                  Thumbnail
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mb-2"
                  onChange={handleThumbnailFileChange}
                />
                {/* <p className="text-xs mb-1 dark:text-gray-400 text-gray-600">Or paste URL:</p>
                <TextField
                  variant="outlined"
                  fullWidth
                  value={thumbnailUrl}
                  onChange={handleThumbnailUrlChange}
                  placeholder="https://example.com/image.jpg"
                /> */}
              </div>

              {/* PDFs */}
              <div className="mt-4">
                <h2 className="mb-2 font-medium dark:text-blue-600 text-purple-700">
                  PDF Materials
                </h2>
                <TextField
                  select
                  label="Provide as"
                  fullWidth
                  value={mediaType}
                  onChange={(e) => setMediaType(e.target.value)}
                  className="mb-3"
                  placeholder="Select media type"
                >
                  {/* <MenuItem value="url">URLs</MenuItem> */}
                  <MenuItem value="upload" placeholder="Upload Files">Upload Files</MenuItem>
                </TextField>
                <TextField
                  label="How many?"
                  type="number"
                  variant="outlined"
                  fullWidth
                  value={mediaCount}
                  className="mb-2"
                  onChange={handleMediaCountChange}
                  inputProps={{ min: 1 }}
                />
                {mediaType === "url"
                  ? Array.from({ length: mediaCount }).map((_, i) => (
                    <TextField
                      key={i}
                      label={`PDF URL ${i + 1}`}
                      variant="outlined"
                      fullWidth
                      className="mb-2"
                      value={pdfUrls[i] || ""}
                      onChange={(e) => handlePdfUrlChange(e, i)}
                    />
                  ))
                  : Array.from({ length: mediaCount }).map((_, i) => (
                    <input
                      key={i}
                      type="file"
                      accept="application/pdf"
                      className="mb-2"
                      onChange={(e) => handlePdfFileChange(e, i)}
                    />
                  ))}
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="mt-2"
                sx={{
                  backgroundColor: "#6C63FF",
                  color: "#fff",
                  '&:hover': { backgroundColor: "#574fd6" }
                }}
              >
                Submit
              </Button>
              <p className="text-center ">It will take 5-10 seconds to upload, please be patient.</p>
            </form>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div className="flex flex-col justify-center items-center px-4 py-8">
            <h2 className="mb-6 text-xl md:text-2xl font-semibold dark:text-blue-300 text-purple-700">
              Sharing is Caring
            </h2>
            <img
              src={gif}
              alt=""
              className="rounded-2xl w-full md:w-96 max-w-lg object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NewCourse;
