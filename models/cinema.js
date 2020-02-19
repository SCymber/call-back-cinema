const Cinema = function (){
  this.films = [];


};

Cinema.prototype.addFilms = function(addMovie) {
  this.films.push(addMovie);
}

Cinema.prototype.getListOfFilmNames = function () {
  const filmNames=[]
  this.films.forEach((film) => {
    filmNames.push(film.title);
  });

  return filmNames
}

Cinema.prototype.findFilmByTitle = function (title) {
  const found = this.films.find(title => this.films)
console.log(found)};

module.exports = Cinema;
