const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
  res.send('Hello  configure github within ci jenkins on 2025/02/04');
});

app.listen(port, () => {
  console.log(`Express system listening at http://localhost:${port}`);
});