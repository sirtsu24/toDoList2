const express = require('express');
const router =  express.Router(); //salvestab koodi, mis haldab kasutajate päringut, kasutajte suunamist. kuhu kasutaja suunatakse ja mis funktsionaalsus pannakse käima

router.get('*',(req, res) =>{  //* - tähendab ükskõik mis päring. app ei halda päringuid vaid router haldab päringuid
    res.status(404).render('404.ejs');
}); 

module.exports = router;