function playCraps(){

    //this is a 1 line comment 
    /*this is the function to play craps*/

    console.log("playCraps() started");
    //Rolls the first dice//
    var die1 = Math.floor(Math.random() * 6) +1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;
    //Rolls the second dice//
    var die2 = Math.floor(Math.random() * 6) +1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    //Adds die 1 and 2//
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;
    //looks for a lose condition (7 or 11)//
    if(sum == 7 || sum == 11 ){
    console.log("loss");
    document.getElementById("gameRes").innerHTML = "Beat it loser! You ain't worthy of being with Mr. GREEN";
    //looks for a win condition//    
    } else if(die1 == die2 && die1 % 2 == 0){
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You Won! Play again if you're feeling antsy!";
    }else{
    //doesnt see a win or loss//
    console.log("tie");
    document.getElementById("gameRes").innerHTML = "Come on, win or lose to impress me!";

    }
}

function checkCreds(){
    //input validation 
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerhtml = "Status of Login";

    //make variables
    var firstName;
    var lastName; 
    var zipCode;
    var fullName; 
    var fullNameLength
    var zipCodeNumb;

    //extracts variables (first name, last name, zip, etc)
    firstName = document.getElementById("fName").value; 
    console.log("the first name was entered as: " + firstName);
    
    lastName = document.getElementById("lName").value; 
    console.log("the last name was entered as: " + lastName);

    zipCode = document.getElementById("zipCode").value; 
    console.log("the zip code was entered as: " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("Their full name is " + fullName);

     fullNameLength = fullName.length; 
    console.log("The Variable fullName has " + fullNameLength +" characters");

    zipCodeNumb = parseInt(zipCode);
    console.log("The actual zip code number is " + zipCodeNumb);
    
    //testing for if the name and zip codes are valid 

    if(fullNameLength > 20 || fullNameLength < 2){
        console.log("Invalid Full Name"); 
        document.getElementById("loginStatus").innerHTML = "Full Name Invalid"

    } else if(zipCode.length != 5){
        console.log("Invalid Zip Code");
        document.getElementById("loginStatus").innerHTML = "Invalid Zip Code"
    } else {
        alert("User credentials verified, Access Granted, User: " + fullName);
        document.getElementById("loginStatus").innerHTML="Credentials Accepted"
    }
}

//For Assign 7, starts moving the image, enables stop button, disables start button
function startFun(){
    console.log("startFun() started");
    document.getElementById("startbutton").disabled = true; 
    document.getElementById("stopbutton").disabled = false;
    document.getElementById("myMarquee").start();
}

//has the image stop moving, enables start button, disables stop button
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;   
    document.getElementById("myMarquee").stop();  
}

function checkPalin(){
    console.log("checkPalin() started")

// record text, remove spaces, inputs array and reverses, converts to string
 var entStr 
 entStr = document.getElementById("palinInput").value;
 console.log("entStr is: " + entStr)

var entStrNoSpace;
 entStrNoSpace = entStr.split(" ").join("");
 console.log("entStr with no spaces is: " + entStrNoSpace);

var revStr;
const revArray =[];
var length = entStrNoSpace.length - 1; 
console.log("string length is " + length);

for(var i = length; i >= 0; i--){
    revArray.push(entStrNoSpace[i]);
}

revStr = revArray.join("");
console.log("reversed is " + revStr);

//compare rev to strong and write to status and write to palindrome status
var equal = 0; 
equal = (entStrNoSpace == revStr);
console.log("the entry and reversed being equal is " + equal);

if(equal == true){
    document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome."
} else {
    document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome"
}


}