import './Games.css';

import React from 'react';

import Items from '../Items';

class Games extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            items: [
                {
                    id: 6,
                    name: 'Assassins Creed Odyssey',
                    img: 'Assassins-Creed-Odyssey.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 7,
                    name: 'Call of Duty 2',
                    img: 'Call-of-Duty2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 8,
                    name: 'Dead Rising 4',
                    img: 'Dead-Rising4.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 9,
                    name: 'Detroit',
                    img: 'Detroit.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 10,
                    name: 'FarCry6',
                    img: 'Farcry6.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 11,
                    name: 'FC 24',
                    img: 'FC-24.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 12,
                    name: 'Forza Horizon 5',
                    img: 'Forza-Horizon5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 13,
                    name: 'God of War',
                    img: 'God-of-War.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 14,
                    name: 'Gran Turismo 7',
                    img: 'Gran-Turismo7.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 15,
                    name: 'Grand Theft Auto V',
                    img: 'Grand-Theft-Auto5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 16,
                    name: 'Hogwarts Legacy',
                    img: 'Hogwarts-Legacy.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 17,
                    name: 'Mafia 3',
                    img: 'Mafia3.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 18,
                    name: 'Overwatch',
                    img: 'Overwatch.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 19,
                    name: 'Red Dead Redemption 2',
                    img: 'Red-Dead-Redemption2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 20,
                    name: 'Sekiro',
                    img: 'Sekiro.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 21,
                    name: 'Spider Man 2',
                    img: 'Spider-Man2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 22,
                    name: 'Tekken 8',
                    img: 'Tekken8.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 23,
                    name: 'The Last of Us pt.1',
                    img: 'The-Last-of-us.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 24,
                    name: 'The Sims 4',
                    img: 'The-Sims4.png',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
                {
                    id: 25,
                    name: 'UFC 5',
                    img: 'UFC5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: '149',
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <h1>Всі ігри</h1>
                <div className="games-style">
                    <Items className="games-item" items={this.state.items.slice(0, 5)} />
                    <Items className="games-item" items={this.state.items.slice(5, 10)} />
                    <Items className="games-item" items={this.state.items.slice(10, 15)} />
                    <Items className="games-item" items={this.state.items.slice(15, 20)} />
                </div>
            </div>
        );
    }
}

export default Games;
