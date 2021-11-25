document.getElementById("submit-button").addEventListener("click",function(){
    const inputEmail = document.getElementById("input-email");
    const inputEmailValue =inputEmail.value;

    const inputPassword = document.getElementById("input-password");
    const inputPasswordValue = inputPassword.value;
    if(inputEmailValue == "sontan@baap.com" && inputPasswordValue == "sontan123"){
        window.location.href="bank.html"
    }
    else{
        alert("Please Enter Valid Email & Password")
    }
})