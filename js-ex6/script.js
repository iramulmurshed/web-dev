function checkDriverAge(){
var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge()


var checkDriverAge2s=function checkDriverAge2(age){
   var age;
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off2");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!2");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!2");
    }
    }

var check2=checkDriverAge2s(92)