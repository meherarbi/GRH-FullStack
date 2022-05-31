const express = require("express");
const app = express();

const feuilletempRoute = express.Router();
let feuilletemp = require("../models/feuilletemp");

// Add feuilletemp
feuilletempRoute.route("/add-feuilletemp").post((req, res, next) => {
  feuilletemp.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all feuilletemp
feuilletempRoute.route("/").get((req, res) => {
  feuilletemp.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get feuilletemp
feuilletempRoute.route("/read-feuilletemp/:id").get((req, res) => {
  feuilletemp.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update feuilletemp
feuilletempRoute.route("/update-feuilletemp/:id").put((req, res, next) => {
  feuilletemp.findByIdAndUpdate(
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
        console.log("feuilletemp updated successfully!");
      }
    }
  );
});

// Delete feuilletemp
feuilletempRoute.route("/delete-feuilletemp/:id").delete((req, res, next) => {
  feuilletemp.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = feuilletempRoute;
