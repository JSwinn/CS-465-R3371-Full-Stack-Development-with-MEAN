/* GET travel view */
const travel = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Travel';
    res.render('travel', { title: pageTitle });
};

module.exports = {
    travel
};