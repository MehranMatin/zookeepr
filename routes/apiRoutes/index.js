const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

// middleware
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;