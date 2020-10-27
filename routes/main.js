const express = require('express');
const itemsController =  require('../controllers/items'); // .. (kaks punkti) tähendab kaks sammu tagasi
const router = express.Router();

router.get('/', itemsController.getMainPage); //kutsume getMainPage funktsiooni välja items.js failist
router.post('/', itemsController.postNewItem); //kutsume postNewItem funktsiooni välja item.js failist. sulgusid ei pane lõppu, et ei pandaks kohe koodi käima

module.exports = router;