
import PropTypes from 'prop-types'; 
import React, { Component } from 'react';

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt={this.props.item.title} />
        <h3>{this.props.item.title}</h3>
        <b>від {this.props.item.price}₴/день</b>
      </div>
    );
  }
}


Item.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired, 
    price: PropTypes.string.isRequired, 
  }).isRequired, 
};

export default Item;
