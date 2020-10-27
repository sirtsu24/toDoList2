const express =require("express");
const bodyParser = require ("body-parser");
const ejs = require ("ejs");
const date = require(__dirname+"/generateDate.js"); // kuna kirjutasime mooduli ise käsitsi, siis tuleb näitdata, kust seda faili võtta
const getError = require('./routes/404');
const about = require('./routes/about');

const mainPage = require('./routes/main');
const workPage = require('./routes/work');

const app = express();
app.set("vied engine", ejs); //vaja, et kuvada otseselt oma objekti html sees ja saata html'i
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // näidata, mis faili kasutada, et väljastada lisafaile

app.use(mainPage);
app.use(workPage);
//app.use(about);


//error routerit tuleb kasutada kõige viimasena!
app.use(getError);

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});