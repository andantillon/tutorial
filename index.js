const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/tutorial.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})