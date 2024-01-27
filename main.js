const login =()=>{
    if(userNameInput.value =="" || userEmail.value =="" || mobileInput.value ==""){
        alert("Please fill the form completely")
    }else{
        //local storage
        user = userNameInput.value
        localStorage.setItem("user",user)
        //redirection
        window.location= "dashboard.html"
    }
}