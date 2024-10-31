/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Item from './Item';

export class Items extends Component {
    render() {
        return (
            <main className="main">
                {this.props.items.map((element) => (
                    <Link to={`/game/${element.id}`} key={element.id}>
                        <Item item={element} />
                    </Link>
                ))}
            </main>
        );
    }
}

export default Items;
