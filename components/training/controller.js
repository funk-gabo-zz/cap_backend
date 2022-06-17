const store = require("./store");

function addTrain(
  client,
  date,
  platform,
  time,
  mode,
  assistance,
  serviceType,
  contactEmail = 'N/A',
  contactName = 'N/A',
  contactPhone = '9999',
  status,
  tkt,
  observations
) {
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

function updateTrain(id, status) {
  return new Promise(async (resolve, reject) => {
    if (!id || !status) {
      console.log(id, status)
      reject("invalid data");
      return false;
    }
    const result = await store.update(id, status);

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
