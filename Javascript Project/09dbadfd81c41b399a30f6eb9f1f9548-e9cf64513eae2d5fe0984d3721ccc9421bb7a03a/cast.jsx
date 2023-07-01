import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };
    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="listItems">
                        Cast Data....
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;

// CSS
@import "../../../mixins.scss";
.castSection {
    position: relative;
    margin-bottom: 50px;
    .sectionHeading {
        font-size: 24px;
        color: white;
        margin-bottom: 25px;
    }
    .listItems {
        display: flex;
        gap: 20px;
        overflow-y: hidden;
        margin-right: -20px;
        margin-left: -20px;
        padding: 0 20px;
        @include md {
            margin: 0;
            padding: 0;
        }
        .listItem {
            text-align: center;
            color: white;
            .profileImg {
                width: 125px;
                height: 125px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 15px;
                @include md {
                    width: 175px;
                    height: 175px;
                    margin-bottom: 25px;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                    display: block;
                }
            }
            .name {
                font-size: 14px;
                line-height: 20px;
                font-weight: 600;
                @include md {
                    font-size: 18px;
                    line-height: 24px;
                }
            }
            .character {
                font-size: 14px;
                line-height: 20px;
                opacity: 0.5;
                @include md {
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        }
    }

    .castSkeleton {
        display: flex;
        gap: 20px;
        overflow-y: hidden;
        margin-right: -20px;
        margin-left: -20px;
        padding: 0 20px;
        @include md {
            margin: 0;
            padding: 0;
        }
        .skItem {
            .circle {
                width: 125px;
                height: 125px;
                border-radius: 50%;
                margin-bottom: 15px;
                @include md {
                    width: 175px;
                    height: 175px;
                    margin-bottom: 25px;
                }
            }
            .row {
                width: 100%;
                height: 20px;
                border-radius: 10px;
                margin-bottom: 10px;
            }
            .row2 {
                width: 75%;
                height: 20px;
                border-radius: 10px;
                margin: 0 auto;
            }
        }
    }
}

