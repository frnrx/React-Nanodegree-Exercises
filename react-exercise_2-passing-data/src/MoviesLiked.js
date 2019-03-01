import React, { Component } from 'react';

class MoviesLiked extends Component {
  render() {
    const {movies, profiles, users} = this.props;
    
    return (
      <div>
	    </div>
    );
  }

  wichLikes (){
    const {movies, profiles, users} = this.props;
    likes =[];
    for (let i = 1; i < movies.length; i++) {
      likes[i].movie = movies[i].name;
    
      profiles.map(() =>  {
        if(profile.favoriteMovieID === movies[i].id){
          likes[i].likedBy.push(users[profiles.id]);
        }
      })
    }

  }
}

export default MoviesLiked;

