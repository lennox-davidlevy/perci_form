const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res) => {
  res.send('server working');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
