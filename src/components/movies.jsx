import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";
import Like from './Like';



class Movies extends Component {

    state = { 
        movies: getMovies(),
     }


    render() { 

      const { length: count} = this.state.movies;
      const { currentPage, pageSize, movies} = this.state;


      if (count === 0)
        return (<div> There are no movies in the database </div>)

        return (<div> 
           <h3>Showing { count } movies in the data base </h3> 
           <table className="table my-4">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    { this.getListMovies(movies) }
  </tbody>
</table>
  
        </div>

            )
    }

    getListMovies = (movies) => {
      console.log(movies);
        return (movies.map( (movie) => (
          <tr key={movie.id} >
             <td>{movie.title}</td>
             <td>{movie.genre.name}</td>
             <td>{movie.numberInStock}</td>
             <td>{movie.dailyRentalRate}</td>
             <td> <Like liked={movie.liked} 
             onChange={ () => this.handleLike(movie)}  /></td>
             <td><button className='btn btn-danger' 
             onClick= {() => this.deleteMovie(movie)}>Delete</button></td>
             
          </tr>)
        )
     )}

     handleLike = (movie) => {
       const movies = [...this.state.movies];
       movies.map(mov => {
         if (mov.id === movie.id)
              mov.liked = !mov.liked;
         
         return mov;
       })
       this.setState({ movies : movies })
       console.log('like clicked');
     }


     deleteMovie = (movie) => {
         const movies = this.state.movies.filter( m => m.id !== movie.id);
         this.setState( {movies: movies});
     }

}
 
export default Movies;