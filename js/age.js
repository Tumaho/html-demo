var date = new Date();
var m = date.getMonth();
var y = date.getFullYear();
var name = prompt("what is your name?");
var year = prompt("what is your year?");
if (year > 1940 && year <=2020) {
    var age1= y-year;
    var month = prompt("what is your month?");
    if(month >1 && month <=12 ){
        var age2= m-month;
        Math.abs(age2);
        document.write('<h3>'+"OK"+name+" your age is"+age1+"years, And"+age2+"months"+'</h3>')

    }
    else{
        document.write('<h3>'+"This month is not valid!"+'</h3>')
    }

    
} else {
    document.write('<h3>'+"This year is not valid!"+'</h3>')
}





 

