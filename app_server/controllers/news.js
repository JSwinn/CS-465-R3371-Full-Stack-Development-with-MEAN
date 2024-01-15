/* GET news view */
const news = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | News';
    res.render('news', { title: pageTitle });
};

module.exports = {
    news
};