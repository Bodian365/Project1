/* eslint-disable react/prop-types */
import './Game.css';

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Game = ({ items }) => {
    // eslint-disable-next-line react/prop-types
    const GameDescription = ({ title }) => (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <div>
            {title.split('\n\n').map((paragraph, index) => (
                <p className="about-game-title" key={index}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
    const { elementId } = useParams();

    if (!items || !Array.isArray(items)) {
        return <p>Список ігор не доступний.</p>;
    }

    // eslint-disable-next-line react/prop-types
    const item = items.find((p) => p.id === Number.parseInt(elementId));

    if (!item) {
        return <p>Продукт не знайдено</p>;
    }

    return (
        <div>
            <h1>{item.category}</h1>

            <div className="game-container">
                <div className="product-details">
                    <img className="game-img" src={`./img/` + item.img} alt={item.name} />

                    <div className="product-info">
                        <h3 className="game-name">{item.name}</h3>
                        <div className="feedback">
                            <FaStar className="stars" />
                            <FaStar className="stars" />
                            <FaStar className="stars" />
                            <FaStar className="stars" />
                            <FaStar className="stars" />
                            <span className="feedback-item">5+ відгуків</span>
                        </div>
                        <div className="availability">Є в наявності</div>
                        <label htmlFor="rental-days">Кількість днів оренди:</label>
                        <input type="number" id="rental-days" name="rental-days" min="1" defaultValue="1" />

                        <div className="price-box">
                            <span className="game-price">{item.price} грн/день</span>
                            <div>
                                <button className="add-to-cart-btn">B корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-game">
                    <GameDescription title={item.title} />
                </div>
            </div>
        </div>
    );
};

export default Game;
