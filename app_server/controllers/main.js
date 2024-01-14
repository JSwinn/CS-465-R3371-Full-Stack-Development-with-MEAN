const index = (req, res) => {
    res.resnder('index', {title: 'Travlr Getawats'});
};

module.exports = {
    index
}