function hotstar_register(event){
    event.preventDefault();

    var hotstar_name = document.getElementById("hotstarUserName").value;
    // console.log(hotstar_name);
    var hotstar_email = document.getElementById("hotstarUserEmail").value;
    // console.log(hotstar_email);
    var hotstar_password = document.getElementById("hotstarUserPassword").value;
    // console.log(hotstar_password);
    var hotstar_confirm_password = document.getElementById("hotstarUserConfirmPassword").value;
    // console.log(hotstar_confirm_password);

    

    if(hotstar_name && hotstar_email && hotstar_password && hotstar_confirm_password){
        if(hotstar_password.length >=8 && hotstar_confirm_password.length >=8){
            if(hotstar_password == hotstar_confirm_password){
                var hotstar_storage = JSON.parse(localStorage.getItem("hotstar_users")) || [];
                flag = false;
                for(var i=0;i<hotstar_storage.length;i++){
                    if(hotstar_storage[i].hotUserEmail == hotstar_email){
                        flag=true;
                    }
                }
                if(!flag){
                    var hotstar_data = {hotUserName: hotstar_name, hotUserEmail: hotstar_email, hotUserPassword: hotstar_password, hotUserConfirmPassword: hotstar_confirm_password};
                    hotstar_storage.push(hotstar_data);
                    alert("Registration Successful");
                    localStorage.setItem("hotstar_users", JSON.stringify(hotstar_storage));
                    window.location.href = `./login.html`;
                } else {
                    alert("Email is already registered. Proceed to Login.");
                    window.location.href = `./login.html`;
                }
            } else {
                alert("Passwords Do Not Match");
            }
        } else {
            alert("Password should be 8 or more characters.")
        }
    } else {
        alert("All Fields are Mandatory.");
    }
}


function redirectToRegister(){
    window.location.href = `./register.html`;
}