const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

require('./app/routes/codigo.routes')(app);

app.listen(process.env.PORT || 3000, () => { });
