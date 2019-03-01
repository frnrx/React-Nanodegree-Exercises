import React, { Component } from 'react';

class ListMovies extends Component {
  render() {
    let users = this.props.users;
    let profiles = this.props.profiles;
    let movies = this.props.movies;
    const list = profiles.map((profile, i) => {
                  return (
                    `${users[profile.userID].name}'s favorite movie is ${movies[profile.favoriteMovieID].name}`
                  );
                })
    console.log(list);
    return (
      <ul>
        {
          profiles.map((profile, i) => {
            return (
              <li>{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}</li>
            );
          })
          
        }
      </ul>
    );
  }


}

export default ListMovies;

