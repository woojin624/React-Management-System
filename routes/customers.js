const express = require('express');
const router = express.Router();

const Customer = require('../models/Customer');

const multer = require('multer');
const upload = multer({ dest: './upload' });

// get - Find All
router.get('/list', (req, res) => {
  Customer.findAll()
    .then((customers) => {
      if (!customers.length) return res.status(404).send({ err: 'Project not found' });
      res.send(customers);
    })
    .catch((err) => res.status(500).send(err));
});

// post - Create new project document
router.post('/api/customers/add', upload.single('image'), (req, res) => {
  Customer.findAll().then((customers) => {
    let _id = parseInt(customers[customers.length - 1].id + 1);
    let id = parseInt(customers[customers.length - 1].id + 1);
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = parseInt(req.body.birthday);
    let gender = req.body.gender;
    let job = req.body.job;
    let params = { _id: _id, id: id, image: image, name: name, birthday: birthday, gender: gender, job: job };

    console.log(params);
    Customer.create(params)
      .then((customer) => res.send(customer))
      .catch((err) => res.status(500).send(err));
  });
});

// router.post('/add', (req, res) => {
//   Customer.findAll().then((customers) => {
//     req.body.id = parseInt(customers[customers.length - 1].id + 1);
//     Customer.create(req.body)
//       .then((customer) => res.send(customer))
//       .catch((err) => res.status(500).send(err));
//   });
// });

// delete - Delete by projectid
router.delete('/delete/:id', (req, res) => {
  Customer.deleteByProjectid(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
