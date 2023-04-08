const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

app.get('/api/jeopartyTest', (req, res) => {
  axios.get(`http://cluebase.lukelav.in/clues/random`)
  .then((results) => {
      console.log('results.data.data: ', results.data.data)
      res.send(results.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

