const index = (req, res) => {
    const pageTitle = process.env.MY_TITLE; // Process title from package.json into tab title 
    res.render('index', {title: 'Travlr Getaways'});
};

module.exports = {
    index
};