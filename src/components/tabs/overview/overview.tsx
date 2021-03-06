import * as React from "react";

import {getLevel} from "../../../utils/utils";

import {Film} from "../../../types";

interface Props {
  film: Film;
}

const Overview: React.FunctionComponent<Props> = (props: Props) => {
  const {film} = props;

  const {
    description,
    rating,
    director,
    starring,
    scoresCount,
  } = film;

  return (
    <React.Fragment>


      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getLevel(rating)}</span>
          <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.map((star) => star).join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
};

export default Overview;
