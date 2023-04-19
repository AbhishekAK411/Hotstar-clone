function hotstar_login(event){
    event.preventDefault();
    
    var hotstar_email = document.getElementById("hotstarLoginEmail").value;
    // console.log(hotstar_email);
    var hotstar_password = document.getElementById("hotstarLoginPassword").value;
    // console.log(hotstar_password);

    if(hotstar_email && hotstar_password){
        var hotstar_storage = JSON.parse(localStorage.getItem("hotstar_users"));
        var flagForCheck = false;
        var hotstarCurrentUser = {};
        for(var i=0;i<hotstar_storage.length;i++){
            if(hotstar_storage[i].hotUserEmail == hotstar_email && hotstar_storage[i].hotUserPassword == hotstar_password){
                flagForCheck = true;
                hotstarCurrentUser = hotstar_storage[i];
            }
        }

        if(flagForCheck){
            localStorage.setItem("hotstar_current_user", JSON.stringify(hotstarCurrentUser));
            window.location.href = "./home.html";
        } else {
            alert("Please Check Your Credentials");
        }
    } else {
        alert("All Fields are Mandatory");
    }







}