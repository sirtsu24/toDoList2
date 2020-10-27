const date = require('../generateDate.js');
const workTask = require('../models/workTask');

let workList = []; 

exports.getWorkPage = (req, res) =>{

    let weekday = date.getDate();

    const workItemList = workTask.fetchTasks();
   /* let weekday = date.getWeekDay();
    console.log(day);*/

    res.render("work.ejs", {date: weekday, workItems: workItemList});

};

exports.postWorkItem = (req, res)=>{
    const work = new workTask(req.body.newTask);
    work.saveTask();
    /*
    let newTask = req.body.newTask;
    workList.push(newTask); */
    res.redirect("/work"); 
};