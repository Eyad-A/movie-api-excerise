const axios = require('axios');

const getMovies = async (year) => {
  try {
    return await axios.get(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
  } catch (error) {
    console.error(error)
  }
}

const listAllMovies = async (year) => {
  const movies = await getMovies(year);

  if (movies.data.data) {
    let movieList = [];
    for (let entry in movies.data.data) {
      let title = movies.data.data[entry]['Title'];
      movieList.push(title);
    }
    return movieList;
  }
}

listAllMovies(2015);