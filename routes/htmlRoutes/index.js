const path = require('path');
const router = require('express').Router();

/* front end routes */
router.get('/', (req, res) => {
    // method that uses fs module to locate, read, then send back to client
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// wildcard route (any route not defined will receive the homepage as response)
// always comes last to prevent precedence over named routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;