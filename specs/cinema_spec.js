const assert = require('assert');
const Film = require('../models/films.js');
const Cinema = require('../models/cinema.js');

describe('Cinema', function() {

  let cinema;
  let film1;
  let film2;



  beforeEach(function () {
    cinema= new Cinema()
    film1 = new Film("Joker", "Action", 2019, 122)
    film2 = new Film("Godfather", "Crime", 1972, 177)
  });

  it('should have films', function () {
    cinema.addFilms(film2);
    assert.deepStrictEqual(cinema.films,[film2]);
  });

  it('should get a list of film titles',function(){
    cinema.addFilms(film1)
    cinema.addFilms(film2)
    const actual = cinema.getListOfFilmNames()
    assert.deepStrictEqual(actual,[film1.title,film2.title])
  });

  it('should find film by titles',function(){
    cinema.addFilms(film1)
    cinema.addFilms(film2)
    const actual = cinema.findFilmByTitle("Godfather")
    assert.StrictEqual(actual,film2)
  });


});
