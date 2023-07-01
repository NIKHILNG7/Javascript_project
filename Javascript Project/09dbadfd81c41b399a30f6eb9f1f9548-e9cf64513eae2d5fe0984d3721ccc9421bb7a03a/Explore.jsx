import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";

let filters = {};

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    {
        value: "primary_release_date.desc",
        label: "Release Date Descending",
    },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType } = useParams();

    const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/discover/${mediaType}`, filters).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        });
    };

    const fetchNextPageData = () => {
        fetchDataFromApi(
            `/discover/${mediaType}?page=${pageNum}`,
            filters
        ).then((res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res.results],
                });
            } else {
                setData(res);
            }
            setPageNum((prev) => prev + 1);
        });
    };

    useEffect(() => {
        filters = {};
        setData(null);
        setPageNum(1);
        setSortby(null);
        setGenre(null);
        fetchInitialData();
    }, [mediaType]);

    const onChange = (selectedItems, action) => {
        if (action.name === "sortby") {
            setSortby(selectedItems);
            if (action.action !== "clear") {
                filters.sort_by = selectedItems.value;
            } else {
                delete filters.sort_by;
            }
        }

        if (action.name === "genres") {
            setGenre(selectedItems);
            if (action.action !== "clear") {
                let genreId = selectedItems.map((g) => g.id);
                genreId = JSON.stringify(genreId).slice(1, -1);
                filters.with_genres = genreId;
            } else {
                delete filters.with_genres;
            }
        }

        setPageNum(1);
        fetchInitialData();
    };

    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                    <div className="pageTitle">
                        {mediaType === "tv"
                            ? "Explore TV Shows"
                            : "Explore Movies"}
                    </div>
                    <div className="filters">
                        <Select
                            isMulti
                            name="genres"
                            value={genre}
                            closeMenuOnSelect={false}
                            options={genresData?.genres}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            onChange={onChange}
                            placeholder="Select genres"
                            className="react-select-container genresDD"
                            classNamePrefix="react-select"
                        />
                        <Select
                            name="sortby"
                            value={sortby}
                            options={sortbyData}
                            onChange={onChange}
                            isClearable={true}
                            placeholder="Sort by"
                            className="react-select-container sortbyDD"
                            classNamePrefix="react-select"
                        />
                    </div>
                </div>
                {loading && <Spinner initial={true} />}
                {!loading && (
                    <>
                        {data?.results?.length > 0 ? (
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >
                                {data?.results?.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            mediaType={mediaType}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        ) : (
                            <span className="resultNotFound">
                                Sorry, Results not found!
                            </span>
                        )}
                    </>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Explore;


// CSS
@import "../../mixins.scss";
.explorePage {
    min-height: 700px;
    padding-top: 100px;
    .resultNotFound {
        font-size: 24px;
        color: var(--black-light);
    }
    .pageHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        flex-direction: column;
        @include md {
            flex-direction: row;
        }
    }
    .pageTitle {
        font-size: 24px;
        line-height: 34px;
        color: white;
        margin-bottom: 20px;
        @include md {
            margin-bottom: 0;
        }
    }
    .filters {
        display: flex;
        gap: 10px;
        flex-direction: column;
        @include md {
            flex-direction: row;
        }
        .react-select-container {
            &.genresDD {
                width: 100%;
                @include md {
                    max-width: 500px;
                    min-width: 250px;
                }
            }
            &.sortbyDD {
                width: 100%;
                flex-shrink: 0;
                @include md {
                    width: 250px;
                }
            }
            .react-select__control {
                border: 0;
                outline: 0;
                box-shadow: none;
                background-color: var(--black-light);
                border-radius: 20px;
                .react-select__value-container {
                    .react-select__placeholder,
                    .react-select__input-container {
                        color: white;
                        margin: 0 10px;
                    }
                }
                .react-select__single-value {
                    color: white;
                }
                .react-select__multi-value {
                    background-color: var(--black3);
                    border-radius: 10px;
                    .react-select__multi-value__label {
                        color: white;
                    }
                    .react-select__multi-value__remove {
                        background-color: transparent;
                        color: white;
                        cursor: pointer;
                        &:hover {
                            color: var(--black-lighter);
                        }
                    }
                }
            }
            .react-select__menu {
                top: 40px;
                margin: 0;
                padding: 0;
            }
        }
    }
    .content {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        margin-bottom: 50px;
        @include md {
            gap: 20px;
        }
        .movieCard {
            .posterBlock {
                margin-bottom: 30px;
            }
        }
    }
}
