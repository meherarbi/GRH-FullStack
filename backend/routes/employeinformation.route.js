const express = require("express");
const app = express();

const informationRoute = express.Router();
let information = require("../models/information");

// Add information
informationRoute.route("/add-information").post((req, res, next) => {
  information.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all information
informationRoute.route("/").get((req, res) => {
  information.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get information
informationRoute.route("/read-information/:id").get((req, res) => {
  information.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update information
informationRoute.route("/update-information/:id").put((req, res, next) => {
  information.findByIdAndUpdate(
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
        console.log("information updated successfully!");
      }
    }
  );
});

// Delete information
informationRoute.route("/delete-information/:id").delete((req, res, next) => {
  information.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = informationRoute;
