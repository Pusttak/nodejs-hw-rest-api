const login = require("./login");
const signup = require("./signup");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const emailVerification = require("./emailVerification");
const resendEmail = require("./resendEmail");

module.exports = {
  login,
  signup,
  logout,
  getCurrent,
  subscription,
  updateAvatar,
  emailVerification,
  resendEmail,
};
