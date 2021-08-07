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

// setup route
router.get('/setup', (req, res) => {
    res.render('setup.html', { title: 'My setup - anbecodes web'});
})

// blog route
router.get('/blog', (req, res) => {
    res.render('blog.html', { title: 'Blog - anbecodes web'})
})

module.exports = router;