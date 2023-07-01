import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;


// CSS
.pageNotFound {
    height: 700px;
    padding-top: 200px;
    .contentWrapper {
        text-align: center;
        color: var(--black-light);
        display: flex;
        flex-direction: column;
        .bigText {
            font-size: 150px;
            font-weight: 700;
        }
        .smallText {
            font-size: 44px;
        }
    }
}

