var database=[
    {
        username:"jim",
         password:"pam"
     }

];

var newsfeed=[
    {
        username:"jim",
        timeline:"I don't know! you tell me"
    },
    {
        username:"pam",
        timeline:"hey, jim"
       
    },
    {
        username:"dwight",
        timeline:"I am not a security threat"
    }
];

var userNamePrompt=prompt("what's your username");
var passwordPrompt=prompt("what's your password");

function signIn(user,pass){
    if(user===database[0].username && pass===database[0].password)
    {
        console.log(newsfeed);
    }
    else{
        alert("sorry wrong username or password")
    }
}
signIn(userNamePrompt,passwordPrompt);