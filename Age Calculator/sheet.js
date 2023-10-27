// (12/09/23) in this session we are going to create Age Calculator by using the html,css & javscript.
let userDate = document.getElementById("date");
userDate.max = new Date().toISOString().split("T")[0];// we are writing a code to display the date on calendar till today.
let result = document.getElementById("result");

function calculateAge(){
    let birthDay = new Date(userDate.value);
    let birthDate = birthDay.getDate();
    let birthMonth = birthDay.getMonth() + 1;// here month start from 0 hence to avoid this confusion we need to add 1 so that proper counting can be performed on that month like 1 for january,2 for february.
    let birthYear = birthDay.getFullYear();

    let todayDay = new Date();
    let todayDate = todayDay.getDate();
    let todayMonth = todayDay.getMonth() + 1; // here month start from 0 hence to avoid this confusion we need to add 1 so that proper counting can be performed on that month like 1 for january,2 for february.
    let todayYear = todayDay.getFullYear();

    let diffDate, diffMonth ,diffYear;
    diffYear = todayYear - birthYear;

    if(todayMonth >= birthMonth){
        diffMonth = todayMonth - birthMonth;
    }else{
        diffYear--;
        diffMonth = 12 + todayMonth - birthMonth;
    }
    
    if(todayDate>=birthDate){
        diffDate = todayDate - birthDate;
    }else{
        diffMonth--;
        diffDate = getDaysInMonth(birthYear,birthMonth) + todayDate - birthDate;
    }
    if(diffMonth<0){
        diffMonth = 11;
        diffYear--;
    }
    result.innerHTML = `You are <span>${ diffYear }</span> years, <span>${ diffMonth }</span> months and <span>${ diffDate }</span> days old`;
}
function getDaysInMonth(year,month){ // this will give no. of days in a month in a given year.
    return new Date(year,month,0).getDate();
}  