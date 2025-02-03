const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello nginx to configure Express!');
});

app.listen(port, () => {
  console.log(`Express system listening at http://localhost:${port}`);
});