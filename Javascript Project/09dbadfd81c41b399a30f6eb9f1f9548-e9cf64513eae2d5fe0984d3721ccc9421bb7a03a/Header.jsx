import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>Header</div>
    );
};

export default Header;

// CSS
@import "../../mixins.scss";

.header {
    position: fixed;
    transform: translateY(0);
    width: 100%;
    height: 60px;
    z-index: 1;
    display: flex;
    align-items: center;
    transition: all ease 0.5s;
    z-index: 2;
    &.top {
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(3.5px);
        -webkit-backdrop-filter: blur(3.5px);
    }
    &.show {
        background-color: var(--black3);
    }
    &.hide {
        transform: translateY(-60px);
    }

    .contentWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        cursor: pointer;
        img {
            height: 50px;
        }
    }
    .menuItems {
        list-style-type: none;
        display: none;
        align-items: center;
        @include md {
            display: flex;
        }
        .menuItem {
            height: 60px;
            display: flex;
            align-items: center;
            margin: 0 15px;
            color: white;
            font-weight: 500;
            position: relative;
            &.searchIcon {
                margin-right: 0;
            }
            svg {
                font-size: 18px;
            }
            cursor: pointer;
            &:hover {
                color: var(--pink);
            }
        }
    }

    .mobileMenuItems {
        display: flex;
        align-items: center;
        gap: 20px;
        @include md {
            display: none;
        }
        svg {
            font-size: 18px;
            color: white;
        }
    }

    &.mobileView {
        background: var(--black3);
        .menuItems {
            display: flex;
            position: absolute;
            top: 60px;
            left: 0;
            background: var(--black3);
            flex-direction: column;
            width: 100%;
            padding: 20px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            animation: mobileMenu 0.3s ease forwards;
            .menuItem {
                font-size: 20px;
                width: 100%;
                height: auto;
                padding: 15px 20px;
                margin: 0;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                &:last-child {
                    display: none;
                }
            }
        }
    }

    .searchBar {
        width: 100%;
        height: 60px;
        background-color: white;
        position: absolute;
        top: 60px;
        animation: mobileMenu 0.3s ease forwards;
        .searchInput {
            display: flex;
            align-items: center;
            height: 40px;
            margin-top: 10px;
            width: 100%;
            svg {
                font-size: 20px;
                flex-shrink: 0;
                margin-left: 10px;
                cursor: pointer;
            }
            input {
                width: 100%;
                height: 50px;
                background-color: white;
                outline: 0;
                border: 0;
                border-radius: 30px 0 0 30px;
                padding: 0 15px;
                font-size: 14px;
                @include md {
                    height: 60px;
                    font-size: 20px;
                    padding: 0 30px;
                }
            }
        }
    }
}

@keyframes mobileMenu {
    0% {
        transform: translateY(-130%);
    }
    100% {
        transform: translateY(0);
    }
}


