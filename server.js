const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Mongoose Connected...'))
  .catch((err) => console.log(err));

const Customer = require('./models/Customer');

const multer = require('multer');
const upload = multer({ dest: './upload' });

// 고객 API
// app.use('/api/customers', require('./routes/customers'));

app.use('/image', express.static('./upload'));

app.get('/api/customers/list', (req, res) => {
  Customer.findAll()
    .then((customers) => {
      if (!customers.length) return res.status(404).send({ err: 'Project not found' });
      res.send(customers);
    })
    .catch((err) => res.status(500).send(err));
});

app.post('/api/customers/add', upload.single('image'), (req, res) => {
  Customer.findAll().then((customers) => {
    req.body._id = parseInt(customers[customers.length - 1].id + 1);
    req.body.id = parseInt(customers[customers.length - 1].id + 1);
    req.body.image = '/image/' + req.file.filename;
    req.body.birthday = parseInt(req.body.birthday);
    let params = { ...req.body };
    console.log(params);
    Customer.create(params)
      .then((customer) => res.send(customer))
      .catch((err) => res.status(500).send(err));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
