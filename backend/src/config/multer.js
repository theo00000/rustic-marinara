import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "public/uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const productName = req.body.name || "product";

    const safeName = productName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

    cb(null, `${safeName}-${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

export default upload;
