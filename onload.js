
window.onload = function(){
    var hotstar_currentUser = JSON.parse(localStorage.getItem("hotstar_current_user"));
    
    if(!!hotstar_currentUser){
        var user_switch = document.getElementById("current_user_switch");
        // console.log(user_switch);
        const removeData = document.getElementById("remove_data");
        removeData.remove();

        var p = document.createElement("p");
        p.innerText = hotstar_currentUser.hotUserName;
        user_switch.append(p);
        
    } else {
        alert("current user is absent");
    }
}