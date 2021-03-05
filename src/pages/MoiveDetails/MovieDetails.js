import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/api";
import "./style.css";

function InfoItem({ title, data }) {
  return (
    <div>
      <div className="info-title">{title}: </div>
      <p className="movie-plot">{data}</p>
    </div>
  );
}
export default function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(async () => {
    console.log("param =>", id);
    const res = await getMovieById(id);
    console.log("res =>", res);

    setDetails(res.data);
  }, []);
  return (
    <div className="details-wrapper">
      <div className="movie-title-container">
        <p className="movie-title">{details.Title}</p>
      </div>

      <div className="movie-details-container">
        <div className="details-info-column left-column">
          <span className="img-container">
            <img src={details.Poster} alt="" className="details-poster-img" />
          </span>
          <div className="main-info">
            <div className="info-column first-column">
              <span className="main-info-name-item">Year: </span>
              <span className="main-info-name-item">Rated: </span>
              <span className="main-info-name-item">Genre: </span>
              <span className="main-info-name-item">Runtime: </span>
              <span className="main-info-name-item">Language: </span>
              <span className="main-info-name-item">Country: </span>
            </div>
            <div className="info-column">
              <span className="main-info-value-item">{details.Year} </span>
              <span className="main-info-value-item">{details.Rated} </span>
              <span className="main-info-value-item">{details.Genre} </span>
              <span className="main-info-value-item">{details.Runtime}</span>
              <span className="main-info-value-item">{details.Language}</span>
              <span className="main-info-value-item">{details.Country}</span>
            </div>
          </div>
        </div>
        <div className="details-info-column right-column">
          <InfoItem title="Plot" data={details.Plot} />
          <InfoItem title="Actors" data={details.Actors} />
          <InfoItem title="Director" data={details.Director} />
          <InfoItem title="Writer" data={details.Writer} />

          {/* <div className="info-title">Plot: </div>
          <p className="movie-plot">{details.Plot}</p>

          <div className="info-title">Actors: </div>
          <p className="movie-actors">{details.Actors}</p>

          <div className="info-title">Director: </div>
          <p className="movie-actors">{details.Actors}</p>

          <div className="info-title">Writer: </div>
          <p className="movie-actors">{details.Actors}</p> */}
        </div>
      </div>
    </div>
  );
}
