// modules
const express = require('express');
const timeStamp = require('./lib/modules/timestamp.js');

const PORT = process.env.PORT || 3000;

const app = express()

app.get('*', function (req, res) {
  const url = decodeURIComponent(req.url);
  const timeStampObject = timeStamp.parseURL(url)
  res.send(timeStampObject);
});

app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}!`);
})