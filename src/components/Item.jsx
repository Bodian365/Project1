import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={'./img/' + this.props.item.img} alt={this.props.item.name} />
                <h3>{this.props.item.name}</h3>
                <b>від {this.props.item.price}₴/день</b>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Item;
