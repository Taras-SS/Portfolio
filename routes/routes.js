
module.exports = (app, express, serv_dirname) => {
    app.set(`view engine`, `ejs`);

    app.get(`/`, (req, res) => {
        app.use(`/mainPage`, express.static(serv_dirname + `/src/mainPage`));
        app.use(`/vendor`, express.static(serv_dirname + `/vendor`));
        res.render(`../views/main`);
    })

}