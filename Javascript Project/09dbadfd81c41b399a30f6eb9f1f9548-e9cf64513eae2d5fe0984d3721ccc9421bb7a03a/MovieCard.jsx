import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import PosterFallback from "../../assets/no-poster.png";

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path
        ? url.poster + data.poster_path
        : PosterFallback;
    return (
        <div
            className="movieCard"
            onClick={() =>
                navigate(`/${data.media_type || mediaType}/${data.id}`)
            }
        >
            <div className="posterBlock">
                <Img className="posterImg" src={posterUrl} />
                {!fromSearch && (
                    <React.Fragment>
                        <CircleRating rating={data.vote_average.toFixed(1)} />
                        <Genres data={data.genre_ids.slice(0, 2)} />
                    </React.Fragment>
                )}
            </div>
            <div className="textBlock">
                <span className="title">{data.title || data.name}</span>
                <span className="date">
                    {dayjs(data.release_date).format("MMM D, YYYY")}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;

// CSS
@import "../../mixins.scss";
.movieCard {
    width: calc(50% - 5px);
    margin-bottom: 25px;
    cursor: pointer;
    flex-shrink: 0;
    @include md {
        width: calc(25% - 15px);
    }
    @include lg {
        width: calc(20% - 16px);
    }
    .posterBlock {
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1.5;
        background-size: cover;
        background-position: center;
        margin-bottom: 30px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 10px;
        transition: all ease 0.5s;
        .lazy-load-image-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        .circleRating {
            width: 40px;
            height: 40px;
            position: relative;
            top: 30px;
            background-color: white;
            flex-shrink: 0;
            @include md {
                width: 50px;
                height: 50px;
            }
        }
        .genres {
            display: none;
            position: relative;
            @include md {
                display: flex;
                flex-flow: wrap;
                justify-content: flex-end;
            }
        }
    }
    .textBlock {
        color: white;
        display: flex;
        flex-direction: column;
        .title {
            font-size: 16px;
            margin-bottom: 10px;
            line-height: 24px;
            @include ellipsis(1);
            @include md {
                font-size: 20px;
            }
        }
        .date {
            font-size: 14px;
            opacity: 0.5;
        }
    }
    &:hover {
        .posterBlock {
            opacity: 0.5;
        }
    }
}

