  
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'First Website Node' });
});

router.get('/contac', (req, res) => {
  res.render('contac.html', { title: 'Contact Page' });
});


module.exports = router;