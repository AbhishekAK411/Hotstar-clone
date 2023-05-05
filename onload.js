
window.onload = function(){
    var hotstar_currentUser = JSON.parse(localStorage.getItem("hotstar_current_user"));

    var movie_storage = JSON.parse(localStorage.getItem("HotstarMovieData"));
    var hotData = "";
    var divToInsertImage = document.getElementById("trending-movie-list1");

    for(var i=0;i<movie_storage.length;i++){
        hotData += `<div onclick='hotstar_redirect(${JSON.stringify(movie_storage[i])})' class="movie-list-image"><img src="${movie_storage[i].movie_link}" alt="" /></div>`;
        divToInsertImage.innerHTML = hotData;
    }

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
        console.log("current user is absent");
        var logindiv = document.getElementById("login");
        
        var button = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ededed" viewBox="0 0 256 256"><path d="M136,128,96,168V88Z" opacity="0.2"></path><path d="M141.66,122.34l-40-40A8,8,0,0,0,88,88v32H24a8,8,0,0,0,0,16H88v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,141.66,122.34ZM104,148.69V107.31L124.69,128ZM208,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h56V48H136a8,8,0,0,1,0-16h56A16,16,0,0,1,208,48Z"></path></svg>
        <button class="login_class" onclick="login()">
            <p>Login</p>
        </button>`;
        logindiv.innerHTML = button;
    }
}

function hotstar_redirect(hotstar_product){
    var hotstar_singleProduct = JSON.stringify(hotstar_product);
    
    localStorage.setItem("current-product", hotstar_singleProduct);
    window.location.href = `./singleproduct.html`;
}

function logout(){
    // alert("function Called");
    localStorage.removeItem("hotstar_current_user");
    window.location.reload();
}

function login(){
    window.location.href = `./login.html`;
}