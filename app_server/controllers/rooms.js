/* GET rooms view */
const rooms = (req, res) => {
    const pageTitle = process.env.MY_TITLE + ' | Rooms';
    res.render('rooms', { title: pageTitle });
};

module.exports = {
    rooms
};