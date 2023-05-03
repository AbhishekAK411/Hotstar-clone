
window.onload = function(){
    var hotstar_currentUser = JSON.parse(localStorage.getItem("hotstar_current_user"));
    
    if(!!hotstar_currentUser){
        var user_switch = document.getElementById("current_user_switch");
        var logoutDiv = document.getElementById("logout");
        // console.log(user_switch);
        const removeData = document.getElementById("remove_data");
        removeData.remove();

        var p = document.createElement("p");
        p.innerText = hotstar_currentUser.hotUserName;
        user_switch.append(p);

        var button = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,128l-40,40V88Z" opacity="0.2"></path><path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-82.34-40,40A8,8,0,0,1,168,168V136H104a8,8,0,0,1,0-16h64V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,221.66,133.66Zm-17-5.66L184,107.31v41.38Z"></path></svg><p><button class="logout-class" onclick="logout()">Logout</button></p>`;
        logoutDiv.innerHTML = button;
        
    } else {
        alert("current user is absent");
    }
}

function logout(){
    // alert("function Called");
    localStorage.removeItem("hotstar_current_user");
    window.location.reload();
}