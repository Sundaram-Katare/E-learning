import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["pdffree", "videofree", "pdfpaid", "videopaid"],
      default: "pdffree",
    },
    price: {
      usd: { type: Number, default: 0 },
      inr: { type: Number, default: 0 },
    },
    domain: { type: String, required: true },
    duration: { type: String, required: true },
    thumbnail: { type: String, required: true },
    addedBy: { type: String, required: true },

    pdfs: [{ type: String }], // only for pdf categories
    videos: [{ type: String }], // only for video categories

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
