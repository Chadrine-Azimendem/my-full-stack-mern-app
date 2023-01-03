import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>
      <img
        //display Poster url if Posters value is not equal to N/A else display https://via.placeholder.com/400
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
