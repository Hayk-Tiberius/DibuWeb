import React from "react";
import "../tools/Menu.scss"

const Menu = () => {
    return (
        <nav>
        <ul className="menu__list">
            <li>Главная</li>
            <li>Про себя</li>
            <li>Промо</li>
            <li>Гайд для невест</li>
            <li>Отзывы</li>
            <li>Напиши мне</li>
        </ul>
        </nav>
    );
} 

export default Menu