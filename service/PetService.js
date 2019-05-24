'use strict';
const MongoClient = require('mongodb').MongoClient;
let db = null;
let uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
let client = null;

async function connection() {
  try{
    client = new MongoClient(uri,{ useNewUrlParser: true });
    await client.connect();
    db = client.db(process.env.DB_NAME);
  }catch(ex){
    throw ex;
  }
}

/**
 * Add a new pet to the store
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPet = async function (body) {
  await connection();
  return db.collection('pet').insertOne(body);
}


/**
 * Deletes a pet
 *
 * petId Long Pet id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = async function (petId, api_key) {
  await connection();
  return db.collection('pet').deleteOne({ id: petId });
}


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = async function (status) {
  await connection();
  return db.collection('pet').findOne({ status: status });
}


/**
 * Finds Pets by tags
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findPetsByTags = async function (tags) {
  await connection();
  return db.collection('pet').aggregate([{
    $match: { tags: { $in: tags } }
  }]);
}


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 **/
exports.getPetById = async function (petId) {
  await connection();
  return db.collection('pet').findOne({ id: petId });
}


/**
 * Update an existing pet
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = async function (body) {
  await connection();
  db.collection('pet').findOneAndUpdate({ id: body.id }, { $set: body });
}


/**
 * Updates a pet in the store with form data
 *
 * petId Long ID of pet that needs to be updated
 * name String  (optional)
 * status String  (optional)
 * no response value expected for this operation
 **/
exports.updatePetWithForm = async function (petId, name, status) {
  await connection();
  db.collection('pet').findOneAndUpdate({ id: petId }, { $set: { name: body.name, status: body.status } });
}


/**
 * uploads an image
 *
 * petId Long ID of pet to update
 * additionalMetadata String  (optional)
 * file byte[]  (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function (petId, additionalMetadata, file) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

