const express = require("express");
const app = express();

const periodeabsenceRoute = express.Router();
let periodeabsence = require("../models/periodeabsence");

// Add periodeabsence
periodeabsenceRoute.route("/add-periodeabsence").post((req, res, next) => {
  periodeabsence.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all periodeabsence
periodeabsenceRoute.route("/").get((req, res) => {
  periodeabsence.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get periodeabsence
periodeabsenceRoute.route("/read-periodeabsence/:id").get((req, res) => {
  periodeabsence.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update periodeabsence
periodeabsenceRoute.route("/update-periodeabsence/:id").put((req, res, next) => {
  periodeabsence.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("periodeabsence updated successfully!");
      }
    }
  );
});

// Delete periodeabsence
periodeabsenceRoute.route("/delete-periodeabsence/:id").delete((req, res, next) => {
  periodeabsence.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = periodeabsenceRoute;
