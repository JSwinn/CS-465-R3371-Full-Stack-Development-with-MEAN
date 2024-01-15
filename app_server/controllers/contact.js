/* GET contact view */
const contact = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Contact';
    res.render('contact', { title: pageTitle });
};

module.exports = {
    contact
};