const router = require('express').Router();
const {getLogo, updateLogo, saveLogo} = require('../controlers/home-logo')

router.get('/', getLogo)

router.post('/', saveLogo)

router.patch('/:id', updateLogo)

module.exports = router