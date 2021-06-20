const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

//routes
const indexRouter = require('./routes/indexRoute');
const synonymRouter = require('./routes/synonymRoute');

app.use(cors());
app.use(express.json({ extended: false }));
app.use('/', indexRouter);
app.use('/synonym', synonymRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
