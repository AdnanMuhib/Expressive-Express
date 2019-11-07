let createError = require("http-errors");
let models = require("../models");
let sessions = require("express-session");
exports.isLoggedIn = function(req, res, next) {
  if (req.user) {
    next();
  } else {
    next(createError(404, "Page Does Not Exist"));
  }
};

exports.hasAuth = function(req, res, next) {
  if (req.user && req.user.is_admin == true) {
    next();
  } else {
    next(createError(404, "Page Does Not Exist"));
  }
};
