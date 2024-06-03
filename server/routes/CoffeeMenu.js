const express = require ('express')
const {
    createCoffee, getCoffee, getCoffees, deleteCoffee, updateCoffee

} = require ('../controllers/coffeeController')
const requireAuth = require ('../middleware/requireAuth')

const router = express.Router()


router.use (requireAuth)
// get coffee items
router.get('/', getCoffees )

// get single coffee item
router.get('/:id', getCoffee)

// post a new coffee
router.post ('/', createCoffee)

// delete a new coffee
router.delete ('/:id', deleteCoffee)

// update a new coffee
router.patch ('/:id', updateCoffee)

module.exports = router