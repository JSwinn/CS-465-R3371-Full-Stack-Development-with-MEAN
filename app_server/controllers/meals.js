/* GET meals view */
const meals = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Meals';
    res.render('meals', { title: pageTitle });
};

module.exports = {
    meals
};