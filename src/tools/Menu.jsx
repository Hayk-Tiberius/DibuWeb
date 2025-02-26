import React from "react";
import "../tools/Menu.scss";
import logo from "../img/logo/2.svg";

const Menu = ({ isVisible }) => {
    return (
        <nav className={`menu ${isVisible ? "visible" : ""}`}>
            <img src={logo} className="logo" alt="" />
            <ul className="menu__list">
                <li>Про себя</li>
                <li>Визитка</li>
                <li>Отзывы</li>
                <li>Напиши мне</li>
            </ul>
        </nav>
    );
};

export default Menu;
