import './MainMenu.css'

import React from 'react'
import { Link } from 'react-router-dom';

import Items from '../Items'

class MainMenu extends React.Component{
  constructor(properties){
    super(properties)
    this.state = {
        items:[
            {
                id:1,
                title: 'PlayStation 5',
                img: 'PlayStation5.jpg',
                desc: 'lorem',
                category: 'consoles',
                price: '299'
            },
            {
                id:2,
                title: 'PlayStation 4',
                img: 'PlayStation4.jpg',
                desc: 'lorem',
                category: 'consoles',
                price: '199'
            },
            {
                id:3,
                title: 'Xbox One S',
                img: 'XboxOneS.jpg',
                desc: 'lorem',
                category: 'consoles',
                price: '199'
            },
            {
                id:4,
                title: 'Xbox Series X',
                img: 'XboxSeriesX.jpg',
                desc: 'lorem',
                category: 'consoles',
                price: '299'
            },
            {
                id:5,
                title: 'Xbox Series S',
                img: 'XboxSeriesS.jpg',
                desc: 'lorem',
                category: 'consoles',
                price: '299'
            },  
            {
                id:6,
                title: 'Assassins Creed Odyssey',
                img: 'Assassins-Creed-Odyssey.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:7,
                title: 'Call of Duty 2',
                img: 'Call-of-Duty2.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:8,
                title: 'Dead Rising 4',
                img: 'Dead-Rising4.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:9,
                title: 'Detroit',
                img: 'Detroit.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:10,
                title: 'FarCry6',
                img: 'Farcry6.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:11,
                title: 'FC 24',
                img: 'FC-24.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:12,
                title: 'Forza Horizon 5',
                img: 'Forza-Horizon5.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:13,
                title: 'God of War',
                img: 'God-of-War.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:14,
                title: 'Gran Turismo 7',
                img: 'Gran-Turismo7.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:15,
                title: 'Grand Theft Auto V',
                img: 'Grand-Theft-Auto5.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:16,
                title: 'Hogwarts Legacy',
                img: 'Hogwarts-Legacy.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:17,
                title: 'Mafia 3',
                img: 'Mafia3.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:18,
                title: 'Overwatch',
                img: 'Overwatch.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:19,
                title: 'Red Dead Redemption 2',
                img: 'Red-Dead-Redemption2.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:20,
                title: 'Sekiro',
                img: 'Sekiro.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:21,
                title: 'Spider Man 2',
                img: 'Spider-Man2.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:22,
                title: 'Tekken 8',
                img: 'Tekken8.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:23,
                title: 'The Last of Us pt.1',
                img: 'The-Last-of-us.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:24,
                title: 'The Sims 4',
                img: 'The-Sims4.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
            {
                id:25,
                title: 'UFC 5',
                img: 'UFC5.jpg',
                desc: 'lorem ipsum',
                category: 'Games',
                price: '149'
            },  
                      
        ],
      
    };
  }
  render(){
    
    return (
        <div>
            <div className='wrapper'>
                <div className="presentation"></div>
            </div>
        
            <h1 className='rentItem'>Оренда консолей</h1>
            <div className='mainmenu-console-items'>
            <Items items={this.state.items.slice(0, 5)} />
            </div>
            <h1 className='rentItem'>Оренда ігор</h1>
            <span className='rentGamesMore'><Link className='links' to='/games'>Більше</Link></span>
            <div className='mainmenu-console-items'>
            <Items items={this.state.items.filter(item => [10, 11, 12, 13, 14].includes(item.id))} />
            </div>
        </div>
    )
  }
}

export default MainMenu;

