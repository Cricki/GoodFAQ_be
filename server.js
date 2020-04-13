const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const errorMiddleware = require('./middleware/error-middleware');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get('/', (req, res) => {
  res.json({
    message: '🐺🙈🙉🙊',
  });
});

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.errorHandler);

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
