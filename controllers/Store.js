const utils = require('../utils/writer.js');
const Store = require('../service/StoreService');

module.exports.deleteOrder = function deleteOrder(req, res, next) {
  const orderId = req.swagger.params.order_id.value;
  Store.deleteOrder(orderId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getInventory = function getInventory(req, res, next) {
  Store.getInventory()
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById(req, res, next) {
  const orderId = req.swagger.params.order_id.value;
  Store.getOrderById(orderId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.placeOrder = function placeOrder(req, res, next) {
  const body = req.swagger.params.body.value;
  Store.placeOrder(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
