// Assignment Code

//adding variables that we will use
var value = document.querySelector(".slider");
var slide = document.querySelector(".slider").value;
var bar_lentgh = document.querySelector("#value");
bar_lentgh.textContent = "lentgh " + slide;

value.addEventListener("change", function() {
    slide = document.querySelector(".slider").value;
    bar_lentgh.textContent = "lentgh, " + slide;
})


function generate() {


    //create array of all possible values
    var password_array = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var range = document.getElementById("Range");
    //adding empty array 
    var password = "";

    // This loop is for taking  random elements from password_array and attaching together  
    for (var i = 0; i < slide; i++) {
        password = password + password_array.charAt(Math.floor(Math.random() * Math.floor(password_array.length - 1)));
    }
    //sending password to textarea in html
    document.getElementById("password").value = password;

    // just for show in console 
    console.log(password);
}