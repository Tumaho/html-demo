var date = new Date();

var m = date.getMonth()+1;
var y = date.getFullYear();
var final = calAge(y,m);
document.write(final);
loops();

function calAge(a,b){
var fname = prompt("what is your first name?");
var lname = prompt("what is your last name?");
var year = prompt("what year were you born?");

if (year > 1940 && year <=2020) {
    var age1= a-year;
    var month = prompt("what month were you born?");
    if(month >=1 && month <=12 ){

        if (month >b) {
            age1=age1-1;
        }
        
        // return ('<h3>'+"OK "+fname+" "+lname+"  your age is  "+age1+" years"+'</h3>');
        return('<h3>'+"OK ".concat(fname,' ',lname,'  your age is ',age1,'years' )+'</h3>');

    }
    else{
        document.write('<h3>'+"This month is not valid!"+'</h3>')
    }

    
} else {
     document.write('<h3>'+"This year is not valid!"+'</h3>')
    
}}





function loops(){
    var star = prompt("Choose an operator to see the loop (*/+)");
    
    while (star !== '*' && star !=='+') {
         star = prompt("Choose an operator to see the loop (*/+)");
    }
    var num = prompt("How many lines do you want?");
    if(star === '*'){
    for (var i=0 ; i<num;i++){
        document.write('<h3>'+"***************************"+'</h3>')
        
    }
    var image = '<img src="starss.png">';
    document.write('<h3>'+image+'</h3>');
    }
    else if(star === '+'){
    for (var i=0 ; i<num;i++){
        document.write('<h3>'+"+++++++++++++++++++++++++++++"+'</h3>')
        
    }
    var image = '<img src="pluss.jpg">';
    document.write('<h3>'+image+'</h3>');
    }
    else{
        document.write('<h3>'+"The OPERATOR is not valid!"+'</h3>')
    }
}


var date = new Date();

var m = date.getMonth()+1;
var y = date.getFullYear();
var final = calAge(y,m);s
document.write(final);
loops();


//var s = '<img src="anythin.png">';






 

