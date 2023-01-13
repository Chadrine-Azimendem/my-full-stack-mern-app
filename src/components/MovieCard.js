import React from "react";
import "../style/movieCard.css";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
	return (
		<div className="movie" key={imdbID}>
			<img
				//display Poster url if Posters value is not equal to N/A else display https://via.placeholder.com/400
				src={
					Poster !== "N/A"
						? Poster
						: "https://via.placeholder.com/400"
				}
				alt={Title}
			/>
			<div>
				<h3>{Title}</h3>
				<p>{Year}</p>
			</div>
		</div>
	);
};

export default MovieCard;
