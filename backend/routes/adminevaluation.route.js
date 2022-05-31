const express = require("express");
const app = express();

const evaluationRoute = express.Router();
let evaluation = require("../models/evaluation");

// Add evaluation
evaluationRoute.route("/add-evaluation").post((req, res, next) => {
  evaluation.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all evaluation
evaluationRoute.route("/").get((req, res) => {
  evaluation.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get evaluation
evaluationRoute.route("/read-evaluation/:id").get((req, res) => {
  evaluation.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update evaluation
evaluationRoute.route("/update-evaluation/:id").put((req, res, next) => {
  evaluation.findByIdAndUpdate(
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
        console.log("evaluation updated successfully!");
      }
    }
  );
});

// Delete evaluation
evaluationRoute.route("/delete-evaluation/:id").delete((req, res, next) => {
  evaluation.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = evaluationRoute;
