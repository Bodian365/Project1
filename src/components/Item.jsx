import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Item extends Component {
    render() {
        const { item } = this.props;

        return (
            <div className="item">
                {item ? (
                    <>
                        <img src={`./img/${item.img}`} alt={item.name} />
                        <h3>{item.name}</h3>
                        <b>від {item.price}₴/день</b>
                        <p>{item.title}</p>
                    </>
                ) : (
                    <p>Завантаження...</p>
                )}
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string,
    }).isRequired,
};

export default Item;
