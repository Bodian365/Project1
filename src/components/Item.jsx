import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img}/>
        <h3>{this.props.item.title}</h3>
        <b>від {this.props.item.price}₴/день</b>
      </div>
    )
  }
}

export default Item