const { route } = require('express/lib/application');

const router = require('express').Router();

router.use(require('./apiroutes'));
route.use(requre('./htmlroutes'));

module.exports = router;