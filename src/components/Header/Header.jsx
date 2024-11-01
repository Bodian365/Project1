import './Header.css';

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Order from '../Order/Order';

const showOrders = (properties) => {
    let summa = 0;
    for (const element of properties.orders) summa += Number.parseFloat(element.price);
    return (
        <div>
            {properties.orders.map((element) => (
                <Order onDelete={properties.onDelete} key={element.id} item={element} />
            ))}
            <p className="summa"> Сума: {summa}₴</p>
        </div>
    );
};

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Корзина пуста</h2>
        </div>
    );
};

function Header(properties) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className="header-top">
                <ul className="header-top-ul">
                    <li>
                        <a href="https://t.me/Ivanynaaa">Група TG</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ivanyna_5/">
                            Наш Instagram <span className="header-link-item">|</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Viber +380987654321 <span className="header-link-item">|</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ivanyna.bohdan@student.uzhnu.edu.ua">
                            ivanyna.bohdan@student.uzhnu.edu.ua <span className="header-link-item">|</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="header-main">
                <span>
                    <Link className="logo" to="/Mainmenu">
                        Console Rent
                    </Link>
                </span>
                <div className="search-form">
                    <input className="search" type="text" placeholder="Пошук" />
                    <button type="submit" className="search-button">
                        <FaSearch />
                    </button>
                </div>
                <ul className="nav">
                    <li>
                        <Link className="nav-item" to="/profile">
                            <FaUser />
                        </Link>
                    </li>
                    <FaShoppingCart
                        onClick={() => setCartOpen((cartOpen = !cartOpen))}
                        className={`shop-cart-button ${cartOpen && 'active'}`}
                    />
                    {cartOpen && (
                        <div className="shop-cart">
                            {properties.orders.length > 0 ? showOrders(properties) : showNothing()}
                        </div>
                    )}
                </ul>
            </div>
        </header>
    );
}

export default Header;
