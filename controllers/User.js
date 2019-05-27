const utils = require('../utils/writer.js');
const User = require('../service/UserService');

module.exports.createUser = function createUser(req, res, next) {
  const body = req.swagger.params.body.value;
  User.createUser(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput(req, res, next) {
  const body = req.swagger.params.body.value;
  User.createUsersWithArrayInput(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.createUsersWithListInput = function createUsersWithListInput(req, res, next) {
  const body = req.swagger.params.body.value;
  User.createUsersWithListInput(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUser = function deleteUser(req, res, next) {
  const username = req.swagger.params.username.value;
  User.deleteUser(username)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getUserByName = function getUserByName(req, res, next) {
  const username = req.swagger.params.username.value;
  User.getUserByName(username)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser(req, res, next) {
  const username = req.swagger.params.username.value;
  const password = req.swagger.params.password.value;
  User.loginUser(username, password)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.logoutUser = function logoutUser(req, res, next) {
  User.logoutUser()
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser(req, res, next) {
  const body = req.swagger.params.body.value;
  const username = req.swagger.params.username.value;
  User.updateUser(body, username)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
