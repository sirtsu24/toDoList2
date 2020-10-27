
exports.getDate = function(){ // anonüümne funktsiooon
    
    let today = new Date();

//objekt, kus määrame ära, mis kujul kuupäeva kuvada. Tulevad dokumentatsioonist
let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
//kuvame kuupäeva
let day = today.toLocaleDateString("en-US", options);

return day;
}


exports.getWeekDay = function(){  //anonüümne funktsioon
    let today = new Date();

//objekt, kus määrame ära, mis kujul kuupäeva kuvada. Tulevad dokumentatsioonist
let options = {
    weekday: "long"
}
//kuvame kuupäeva
let day = today.toLocaleDateString("en-US", options);

return day;
}



