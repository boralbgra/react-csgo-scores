const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const mainRouter = require('./routes/hltv.routes');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', mainRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
})

module.exports = app;