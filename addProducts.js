function movie_data(event){
    event.preventDefault();

    var movie_name = document.getElementById("hotstar_movie_name").value;
    var movie_link = document.getElementById("hotstar_movie_link").value;
    
    if(movie_name && movie_link){
        var movies = {movie_name, movie_link};
        var movie_storage = JSON.parse(localStorage.getItem("HotstarMovieData")) || [];
        movie_storage.push(movies);
        localStorage.setItem("HotstarMovieData", JSON.stringify(movie_storage));
        alert("Movie added successfully");
        document.getElementById("hotstar_movie_name").value = "";
        document.getElementById("hotstar_movie_link").value = "";
    } else {
        alert("All fields are mandatory");
    }



}