const express = require('express');
const router = express.Router();

// home route
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Home - anbecodes web'});
});

// about route
router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About Me - anbecodes web'});
})

module.exports = router;