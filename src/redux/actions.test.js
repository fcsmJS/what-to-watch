import {Action, changeView, filterFilms, renderFilms} from "./actions.js";

const film = {
  id: `lKFDHkhaeud`,
  background: `bg-the-grand-budapest-hotel.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Drama`,
  releaseDate: 2020,
  bigPoster: `the-grand-budapest-hotel-poster.jpg`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 8.9,
  level: `Very Good`,
  totalRatings: 240,
  director: `Wes Andreson`,
  starring: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`
  ]
};

describe(`Action creators work correctly`, () => {
  it(`Action creator for "change view" should work properly`, () => {
    expect(changeView(film)).toEqual({
      type: Action.CHANGE_VIEW,
      payload: film,
    });
  });

  it(`Action creator for "filterFilms" shoul work properly`, () => {
    expect(filterFilms(`Comedy`)).toEqual({
      type: Action.CHANGE_FILTER,
      payload: `Comedy`,
    });
  });
  it(`Action creator for "renderFilms" should work properly`, () => {
    expect(renderFilms()).toEqual({
      type: Action.RENDER_FILMS
    });
  });
});