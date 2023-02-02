const express = require('express');
const app = express();
const port = 3000;
const os = require('os');

app.get('/', (req, res) => {
  console.log(process.env);
  res.send(`Hello Hcode. ${os.type()} ${os.release()} ${os.platform()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
