/* GET about view */
const about = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | About';
    res.render('about', { title: pageTitle });
};

module.exports = {
    about
};