let workList = [];

module.exports = class Task{
    constructor(work){
        this.description = work;
    }

    saveTask() {
        workList.push(this);
    }

    static fetchTasks(){
        return workList;
    }

}