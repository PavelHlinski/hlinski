const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', (_, res) => res.json({"current date": moment().format('MMMM Do YYYY, h:mm:ss a')}))

app.listen(80, () => {
  console.log('App started' );
})
git
