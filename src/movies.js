
// Iteration 1: All directors? - Get the array of all directors.



function getAllDirectors(moviesArr) {
   
const directors = moviesArr.map(movie => movie.director);
    return directors;

}





// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) { 
    const stevenDrama = moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return stevenDrama.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    if (!moviesArr.length) {
        return 0;
    }
    const sumRates = moviesArr.reduce(function(acc, element) {
    return acc + element.rate;
    }, 0);
    

    const avgRate = sumRates / moviesArr.length;
    return parseFloat(avgRate.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) { 
    const dramas = moviesArr.filter(movie => movie.genre.includes('Drama'));

    if (!dramas.length) {
        return 0;
    }
    const dramasSum = dramas.reduce(function(acc, element) {
        return acc + element.rate;
    }, 0);
    const avgDrama = dramasSum/dramas.length;
    return parseFloat(avgDrama.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr){
    const copyArr = [...moviesArr];
  
    copyArr.sort((a,b) => {
    if(a.year < b.year)  return -1;
    if(a.year > b.year) return 1;
    if(a.year === b.year) {
      if (a.title < b.title){
        return -1;
      }
      if(a.title > b.title){
        return 1;
      };
      return 0;
    } 
    });
  
    return copyArr;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    const copyAlphaarr = [...moviesArr];
  
    const title = copyAlphaarr.map(element => {
        return element["title"];
    })
    const ordered = title.sort();
    const first20 = ordered.slice(0, 20);
    return first20;
}  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
