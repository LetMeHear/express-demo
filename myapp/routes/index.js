module.exports = function(app) {
app.get('/', function(req, res) {
    res.send('index');
});
app.get('/index', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});
app.get('/login', function(req, res) {
    res.send('Please log in');
});
};
