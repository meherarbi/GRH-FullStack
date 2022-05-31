

const express = require('express');
const app = express();

const CandidatRoute = express.Router();
let Candidat = require('../models/Candidat');

// Add Candidat
CandidatRoute.route('/add-Candidat').post((req, res, next) => {
    Candidat.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Candidat
CandidatRoute.route('/').get((req, res) => {
    Candidat.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Candidat
CandidatRoute.route('/read-Candidat/:id').get((req, res) => {
    Candidat.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Candidat
CandidatRoute.route('/update-Candidat/:id').put((req, res, next) => {
    Candidat.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Candidat updated successfully!')
    }
  })
})

// Delete Candidat
CandidatRoute.route('/delete-Candidat/:id').delete((req, res, next) => {
    Candidat.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = CandidatRoute;