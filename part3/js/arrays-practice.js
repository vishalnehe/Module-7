/*eslint-env browser*/
/*jslint-env browser*/

//STEP 1
var favMovies = ["Batman", "Oceans 11", "Avengers", "October Sky", "WallE"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";

movies.splice(2,0,"Shawshank Redemption");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";

delete movies[0];
window.console.log(movies);

//STEP 5
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

for(var i = 0; i < movies.length; i++){
    window.console.log(movies[i]);
}

//STEP 6
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";
for(index in movies){
    window.console.log(movies[index]);
}

//STEP 7
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";
movies.sort();
for(index in movies){
    window.console.log(movies[index]);
}

//STEP 8
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var leastFavMovies = [];
leastFavMovies[0] = "The Wolfman";
leastFavMovies[1] = "Skyline";
leastFavMovies[2] = "The Last Airbender";
var str = "";
str += ("Movies I like:" + "\n" + "\n");
for(var i = 0; i < movies.length; i++){
    str += (movies[i] + "\n");
}

str += ("..." + "\n\n");
str += ("Movies I regret watching:" + "\n" + "\n");
for(var i = 0; i < leastFavMovies.length; i++){
    str += (leastFavMovies[i] + "\n");
}

str += "...";

window.console.log(str);

//STEP 9
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var leastFavMovies = [];
leastFavMovies[0] = "The Wolfman";
leastFavMovies[1] = "Skyline";
leastFavMovies[2] = "The Last Airbender";

var movies = movies.concat(leastFavMovies);
(movies.sort()).reverse();
window.console.log(movies);

//STEP 10
var movies = [];
movies[0] = "Batman";
movies[1] = "Oceans 11";
movies[2] = "Avengers";
movies[3] = "October Sky";
movies[4] = "WallE";
movies[5] = "Shawshank Redemption";
movies[6] = "The Wolf of Wall Street";

var leastFavMovies = [];
leastFavMovies[0] = "The Wolfman";
leastFavMovies[1] = "Skyline";
leastFavMovies[2] = "The Last Airbender";

var movies = movies.concat(leastFavMovies);
(movies.sort()).reverse();
window.console.log(movies.pop());

