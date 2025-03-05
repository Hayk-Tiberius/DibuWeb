import React from "react";
import "../tools/Menu.scss";
import logo from "../img/logo/2.svg";

const Menu = ({ isVisible }) => {
    return (
        <nav className={`menu ${isVisible ? "visible" : ""}`}>
            <img src={logo} className="logo" alt="" />
            <ul className="menu__list">
                <a href="#self__section"><li>Про себя</li></a>
                <a href="#visit__card"><li>Визитка</li></a>
                <a href="#reviews"><li>Отзывы</li></a>
                <a href="#application"><li>Напиши мне</li></a>
            </ul>
        </nav>
    );
};

export default Menu;
