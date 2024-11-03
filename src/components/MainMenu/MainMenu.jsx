import './MainMenu.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Items from '../Items';

class MainMenu extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            items: [
                {
                    id: 1,
                    name: 'PlayStation 5',
                    img: 'PlayStation5.jpg',
                    desc: 'lorem',
                    category: 'consoles',
                    price: 299,
                },
                {
                    id: 2,
                    name: 'PlayStation 4',
                    img: 'PlayStation4.jpg',
                    desc: 'lorem',
                    category: 'consoles',
                    price: 199,
                },
                {
                    id: 3,
                    name: 'Xbox One S',
                    img: 'XboxOneS.jpg',
                    desc: 'lorem',
                    category: 'consoles',
                    price: 199,
                },
                {
                    id: 4,
                    name: 'Xbox Series X',
                    img: 'XboxSeriesX.jpg',
                    desc: 'lorem',
                    category: 'consoles',
                    price: 299,
                },
                {
                    id: 5,
                    name: 'Xbox Series S',
                    img: 'XboxSeriesS.jpg',
                    desc: 'lorem',
                    category: 'consoles',
                    price: 299,
                },
                {
                    id: 6,
                    name: 'Assassins Creed Odyssey',
                    img: 'Assassins-Creed-Odyssey.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 7,
                    name: 'Call of Duty 2',
                    img: 'Call-of-Duty2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 8,
                    name: 'Dead Rising 4',
                    img: 'Dead-Rising4.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 9,
                    name: 'Detroit',
                    img: 'Detroit.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 10,
                    name: 'FarCry6',
                    img: 'Farcry6.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 11,
                    name: 'FC 24',
                    img: 'FC-24.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 12,
                    name: 'Forza Horizon 5',
                    img: 'Forza-Horizon5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 13,
                    name: 'God of War',
                    img: 'God-of-War.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 14,
                    name: 'Gran Turismo 7',
                    img: 'Gran-Turismo7.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 15,
                    name: 'Grand Theft Auto V',
                    img: 'Grand-Theft-Auto5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 16,
                    name: 'Hogwarts Legacy',
                    img: 'Hogwarts-Legacy.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 17,
                    name: 'Mafia 3',
                    img: 'Mafia3.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 18,
                    name: 'Overwatch',
                    img: 'Overwatch.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 19,
                    name: 'Red Dead Redemption 2',
                    img: 'Red-Dead-Redemption2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 20,
                    name: 'Sekiro',
                    img: 'Sekiro.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 21,
                    name: 'Spider Man 2',
                    img: 'Spider-Man2.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 22,
                    name: 'Tekken 8',
                    img: 'Tekken8.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 23,
                    name: 'The Last of Us pt.1',
                    img: 'The-Last-of-us.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 24,
                    name: 'The Sims 4',
                    img: 'The-Sims4.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
                {
                    id: 25,
                    name: 'UFC 5',
                    img: 'UFC5.jpg',
                    desc: 'lorem ipsum',
                    category: 'Games',
                    price: 149,
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="presentation"></div>
                </div>

                <h1 className="rentItem">Оренда консолей</h1>

                <div className="mainmenu-console-section">
                    <Items items={this.state.items.slice(0, 5)} />
                </div>
                <h1 className="rentItem">Оренда ігор</h1>
                <span className="rentGamesMore">
                    <Link className="links" to="/games">
                        Більше
                    </Link>
                </span>
                <div className="mainmenu-game-section">
                    <Items items={this.state.items.filter((item) => [10, 11, 12, 13, 14].includes(item.id))} />
                </div>
            </div>
        );
    }
}

export default MainMenu;
