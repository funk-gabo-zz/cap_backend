const store = require("./store");

function addTrain(
  client,
  date,
  platform,
  time,
  mode,
  assistance,
  serviceType,
  contactEmail,
  contactName,
  contactPhone,
  status,
  tkt,
  observations
) {
  console.log(client, observations );
  if (
    !client ||
    !date ||
    !platform ||
    !time ||
    !mode ||
    !assistance ||
    !serviceType ||
    !contactEmail ||
    !contactName ||
    !contactPhone ||
    !status ||
    !tkt ||
    !observations
  ) {
    return Promise.reject("invalid parameters");
  }
  const train = {
    client,
    date,
    platform,
    time,
    mode,
    assistance,
    serviceType,
    contactEmail,
    contactName,
    contactPhone,
    status,
    tkt,
    observations,
  };
  return store.add(train);
}

function getTrains() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function updateTrain(id, train) {
  return new Promise(async (resolve, reject) => {
    if (!id || !train) {
      reject("invalid data");
      return false;
    }
    const result = await store.update(id, train);

    resolve(result);
  });
}

function deleteTrain(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id inválido");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}
module.exports = {
  addTrain,
  getTrains,
  updateTrain,
  deleteTrain,
};
