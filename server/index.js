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

app.get('/api/jeopartytest', (req, res) => {
  // axios.get(`https://developer.nps.gov/api/v1/parks?limit=271&q=hiking&api_key=${API_KEY_NP}`)
  // axios.get(`https://restcountries.com/v3.1/all?fields=name,flags`)
  // axios.get(`https://cluebase.io/api/categories?&count=1'`)
  axios.get(`http://cluebase.lukelav.in/clues/random`)
  .then((results) => {
      console.log(results)
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

