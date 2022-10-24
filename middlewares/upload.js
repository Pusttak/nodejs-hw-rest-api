const path = require('path');
const multer = require('multer');

const tempDir = path.resolve('temp');

const multerStorage = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: multerStorage });

module.exports = upload;
