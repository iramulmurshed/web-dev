var database = [
    {
        username: "jim",
        password: "pam"
    },
    {
        username:"scot",
        password:"jane"
    },
    {
        username:"dwight",
        password:"angela"
    }

];

var newsfeed = [
    {
        username: "jim",
        timeline: "I don't know! you tell me"
    },
    {
        username: "pam",
        timeline: "hey, jim"

    },
    {
        username: "dwight",
        timeline: "I am not a security threat"
    }
];

var userNamePrompt = prompt("what's your username");
var passwordPrompt = prompt("what's your password");
var databaseLength = database.length;

function isUserValid(user,pass){
    for (var i = 0; i < databaseLength; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    return false;

}


function signIn(user, pass) {
    if (isUserValid(user,pass)) {
        console.log(newsfeed)
    }
    else{
        alert("sorry try again")
    }
}
signIn(userNamePrompt, passwordPrompt);