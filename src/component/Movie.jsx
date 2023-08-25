import React from "react";
import Table from 'react-bootstrap/Table';

class Movie extends React.Component {

  render () {
    // console.log('movieData: ', this.props.movieData)
    // console.log(this.props.movieCounter)
    const movieData = this.props.movieData;
    const movieCounter = this.props.movieCounter;

    return (
      <>
        <tr>
          <td><img src={movieData.image_url} /></td>
          <td>
            <strong>#{movieCounter}: </strong>  {movieData.title}         <br /> 
            <strong>Overview: </strong>         {movieData.overview}      <br /> 
            <strong>Overage Votes: </strong>    {movieData.averageVotes}  <br /> 
            <strong>Total Votes: </strong>      {movieData.totalVotes}    <br /> 
            <strong>Popularity: </strong>       {movieData.popularity}    <br /> 
            <strong>Released: </strong>         {movieData.released_on}   <br /> 
          </td>
        </tr>
      </>
    )
  }
}

export default Movie;