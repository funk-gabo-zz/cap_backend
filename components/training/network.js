const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getTrains()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Internal Error", 500, err);
    });
});

router.patch("/:id", function (req, res) {
  controller
    .updateTrain(req.params.id, req.body.name)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addTrain(
      req.body.client,
      req.body.date,
      req.body.platform,
      req.body.time,
      req.body.mode,
      req.body.assistance,
      req.body.serviceType,
      req.body.contactEmail,
      req.body.contactName,
      req.body.contactPhone,
      req.body.status,
      req.body.tkt,
      req.body.observations
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteTrain(req.params.id)
    .then(() => {
      response.success(req, res, `Plataforma ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});
module.exports = router;
