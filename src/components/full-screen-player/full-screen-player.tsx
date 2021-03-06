import * as React from "react";
import {Link} from "react-router-dom";

import {formatDurationToTime} from "../../utils/utils";
import {AppRoute} from "../../consts";

import {Film} from "../../types";

interface Props {
  film: Film;
  progress: number;
  duration: number;
  isPlaying: boolean;
  playbackToggle: () => void;
  onFullScreenClick: () => void;
  children: React.ReactNode;
}

const FullScreenPlayer: React.FunctionComponent = (props: Props) => {
  const {
    film,
    progress,
    duration,
    playbackToggle,
    isPlaying,
    onFullScreenClick,
    children
  } = props;


  return (
    <div className="player">
      {children}
      <Link
        to={AppRoute.ROOT}
        type="button"
        className="player__exit"
      >
        Exit
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max={duration}>
            </progress>
            <div
              className="player__toggler"
              style={{left: ((progress * 100) / duration) + `%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatDurationToTime(duration - progress)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={playbackToggle}
          >
            {
              isPlaying ?
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"/>
                  </svg>
                  <span>Pause</span>
                </>
                :
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </>
            }
          </button>

          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
