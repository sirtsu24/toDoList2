//pane failinimeks see, mis andeid haldad

const date = require('../generateDate.js');
const Task = require('../models/task');

let toDoList = []; //loome massiivi, kuhu salvestada andmed. Kui see deklareerida posti sees, siis posti lõppedes tehakse see tühjaks. seepärast deklareerime selle väljaspool posti

/*
app.get("/about",(req, res)=>{
   res.render("about.ejs");
});*/

exports.getMainPage = (req, res) =>{

    
    let weekday = date.getDate();

    const itemList = Task.fetchTasks();
    
   // let weekday = date.getWeekDay();

    /*Serveri poole peal ei tohiks seda kirjas olla. teeme uue faili generateDate.js, kus loome need
    let today = new Date();

    //objekt, kus määrame ära, mis kujul kuupäeva kuvada. Tulevad dokumentatsioonist
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    //kuvame kuupäeva
    let day = today.toLocaleDateString("en-US", options); */
   // console.log(day);

    res.render("index.ejs", {date: weekday, toDoItems: itemList});

};

exports.postNewItem = (req, res)=>{
    const item = new Task(req.body.newTask);
    item.saveTask();
    /*
    let newTask = req.body.newTask;
    toDoList.push(newTask); //lisame elemendi massiivi sisse. JS massiivid on dünaamilised, suurus ei ole fikseeritud
    */
    res.redirect("/"); //suunab tagasi pealehele
};