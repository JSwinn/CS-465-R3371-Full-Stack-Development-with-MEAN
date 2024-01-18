var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Travel';
    res.render('travel', { title: pageTitle, trips });
};

module.exports = {
    travel
};