const utils = require('../utils/writer.js');
const Pet = require('../service/PetService');

module.exports.addPet = function addPet(req, res, next) {
  const body = req.swagger.params.body.value;
  Pet.addPet(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet(req, res, next) {
  const petId = req.swagger.params.petId.value;
  const apiKey = req.swagger.params.api_key.value;
  Pet.deletePet(petId, apiKey)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByStatus = function findPetsByStatus(req, res, next) {
  const status = req.swagger.params.status.value;
  Pet.findPetsByStatus(status)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByTags = function findPetsByTags(req, res, next) {
  const tags = req.swagger.params.tags.value;
  Pet.findPetsByTags(tags)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById(req, res, next) {
  const petId = req.swagger.params.petId.value;
  Pet.getPetById(petId)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet(req, res, next) {
  const body = req.swagger.params.body.value;
  Pet.updatePet(body)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.updatePetWithForm = function updatePetWithForm(req, res, next) {
  const petId = req.swagger.params.petId.value;
  const name = req.swagger.params.name.value;
  const status = req.swagger.params.status.value;
  Pet.updatePetWithForm(petId, name, status)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile(req, res, next) {
  const petId = req.swagger.params.petId.value;
  const additionalMetadata = req.swagger.params.additionalMetadata.value;
  const file = req.swagger.params.file.value;
  Pet.uploadFile(petId, additionalMetadata, file)
    .then((response) => {
      utils.writeJson(res, response);
    })
    .catch((response) => {
      utils.writeJson(res, response);
    });
};
