/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export class Order extends Component {
    render() {
        return (
            <div className="shop-cart-item">
                <img src={'./img/' + this.props.item.img} alt={this.props.item.name} />
                <h3>{this.props.item.name}</h3>
                <b>{this.props.item.price}₴/день</b>
                <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        );
    }
}

Order.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        title: PropTypes.string,
    }).isRequired,
};

export default Order;
