const express = require(`express`);
const app = express();

require(`./routes/routes`)(app, express, __dirname);

app.listen(8080, () => {
    console.log(`server is running`);
})