// Assignment Code


function generate() {
    //var generateBtn = document.querySelector("#generate");
    // list of possible values
    var password_array = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    var password = "";

    //set minimum steps (temporary) this will be changed from outside;
    var k = 6;

    // This loop is for taking  random element from password_array and attaching together  
    for (var i = 0; i < k; i++) {
        password = password + password_array.charAt(Math.floor(Math.random() * Math.floor(password_array.length - 1)));
    }
    //sending password to textarea in html
    document.getElementById("password").value = password;
}