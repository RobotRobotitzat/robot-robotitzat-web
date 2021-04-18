const express = require('express');
const router = express.Router();

// home route
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Robot Robotitzat'});
});

// about route
router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About Me - Robot Robotitzat'});
})

module.exports = router;