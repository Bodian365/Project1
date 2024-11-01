/* eslint-disable react/prop-types */
import './Game.css';

import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';

class Game extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            item: undefined,
        };
    }

    componentDidMount() {
        const { items, elementId } = this.props;

        if (items && Array.isArray(items)) {
            const item = items.find((p) => p.id === elementId);
            if (item) {
                this.setState({ item });
            }
        }
    }

    GameDescription({ title }) {
        return (
            <div>
                {title.split('\n\n').map((title, index) => (
                    <p className="about-game-title" key={index}>
                        {title}
                    </p>
                ))}
            </div>
        );
    }

    render() {
        const { item } = this.state;

        if (!item) {
            return <p>Продукт не знайдено або список ігор недоступний.</p>;
        }

        return (
            <div>
                <h1>{item.category}</h1>

                <div className="game-container">
                    <div className="product-details">
                        <img className="game-img" src={`./img/${item.img}`} alt={item.name} />

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
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={() => this.props.onAdd(this.state.item)}
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-game">{this.GameDescription({ title: item.title })}</div>
                </div>
            </div>
        );
    }
}

export default Game;
