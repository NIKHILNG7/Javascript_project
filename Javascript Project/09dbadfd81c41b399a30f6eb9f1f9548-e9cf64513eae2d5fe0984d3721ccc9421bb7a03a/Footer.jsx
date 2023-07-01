import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;


// CSS
@import "../../mixins.scss";
.footer {
    background-color: var(--black3);
    padding: 50px 0;
    color: white;
    position: relative;
    .contentWrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .menuItems {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-bottom: 20px;
        @include md {
            margin-bottom: 30px;
            gap: 30px;
        }
        .menuItem {
            transition: all ease 0.3s;
            cursor: pointer;
            font-size: 12px;
            @include md {
                font-size: 16px;
            }
            &:hover {
                color: var(--pink);
            }
        }
    }
    .infoText {
        font-size: 12px;
        line-height: 20px;
        opacity: 0.5;
        text-align: center;
        max-width: 800px;
        margin-bottom: 20px;
        @include md {
            font-size: 14px;
            margin-bottom: 30px;
        }
    }
    .socialIcons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        .icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all ease 0.3s;
            &:hover {
                box-shadow: 0 0 0.625em var(--pink);
                color: var(--pink);
            }
        }
    }
}

