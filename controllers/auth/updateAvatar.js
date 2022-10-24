const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');

const { User } = require('../../models/user');

const { RequestError } = require('../../helpers');

const avatarDir = path.resolve('public/avatars');

const updateAvatar = async (req, res) => {
  if (!req.file) {
    throw RequestError(400, 'File not found');
  }
  const { _id } = req.user;
  const { path: tempUpload } = req.file;
  const extention = path.extname(tempUpload);
  const fileName = `${_id}${extention}`;
  const resultUpload = path.join(avatarDir, fileName);

  const avatarEdit = await Jimp.read(tempUpload);
  avatarEdit.cover(250, 250);
  avatarEdit.write(tempUpload);

  await fs.rename(tempUpload, resultUpload);
  const avatarUrl = path.join('avatars', fileName);
  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.status(200).json({ avatarUrl: avatarDir });
};

module.exports = updateAvatar;
