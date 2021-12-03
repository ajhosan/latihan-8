const router = require('express').Router()
const controller = require('../controllers')


router.get('/', controller.home)

router.use(controller.notFound)
router.use(controller.exception)

module.exports = router