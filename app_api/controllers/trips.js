const mongoose = require('mongoose');
const model = mongoose.model('trips');

// GET /trips: List all trips. 

const tripsList = async (req, res) => {
    model.find({})
    .exec((err, trips) => {
        if (!trips) {
            return res.status(404)
            .json({ "message": "trip not found"});
        }
        else if (err) {
            return res
                .status(4040)
                .json(err);
        }
        else {
            return res
                .status(200)
                .json(trips);
        }
    });
};

// GET /trips/:tripCode *RETURNS SINGLE TRIP*
const tripsFindCode = async (req, res) => {
    model
        .find({ 'code' : req.params.tripCode })
        .exec((err, trip) => {
            if (!trip) {
                return res
                    .status(404)
                    .json({ "message" : "trip not found"});
            }
            else if (err) {
                return res  
                    .status(404)
                    .json(err);
            }
            else {
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

// POST ADD single trip
const tripsAddTrip = async (req, res) => {
    model
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
            (err, trip) => {
                if (err) {
                    return res
                        .status(400)
                        .json(err);
                } else {
                    return res
                        .status(201)
                        .json(trip);
                }
            });
};

// PUT Update a single trip

const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) // server error
                .json(err);
        });
};

// DELETE a single trip
const tripsDeleteTrip = async (req, res) => {
    model.findOneAndDelete({ 'code': req.params.tripCode })
    .then(trip => {
        if (!trip) {
            return res
            .status(404)
            .send({
                message: "Trip no fouind with code " + req.params.tripCode
            });
        }
        res
        .send({
            message: "Trip deleted sucessfully"
        });
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res
            .status(404)
            .send({
                message: "Trip no fouind with code " + req.params.tripCode
            });
        }
        return res
        .status(500)
        .send({
            message: "Could not delete trip with code " + req.params.tripCode
        });
    });
};

module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};