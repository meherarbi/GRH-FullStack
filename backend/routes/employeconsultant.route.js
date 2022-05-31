const express = require("express");
const app = express();

const ConsultantRoute = express.Router();
let Consultant = require("../models/Consultant");

// Add Consultant
ConsultantRoute.route("/add-Consultant").post((req, res, next) => {
  Consultant.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Consultant
ConsultantRoute.route("/").get((req, res) => {
  Consultant.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Consultant
ConsultantRoute.route("/read-Consultant/:id").get((req, res) => {
  Consultant.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Consultant
ConsultantRoute.route("/update-Consultant/:id").put((req, res, next) => {
  Consultant.findByIdAndUpdate(
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
        console.log("Consultant updated successfully!");
      }
    }
  );
});

// Delete Consultant
ConsultantRoute.route("/delete-Consultant/:id").delete((req, res, next) => {
  Consultant.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = ConsultantRoute;
