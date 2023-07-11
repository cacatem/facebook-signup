/* MAKING HIDE PASSWORD SCRIPT */
function hidePass() {
    var x = document.getElementById("password");
    if (x.type == "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}