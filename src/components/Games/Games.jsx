import React from 'react'

import Items from '../Items';

class Games extends React.Component{
  constructor(properties){
    super(properties)
    this.state = {
      items: [
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
                img: 'The-Sims4.png',
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
      ]
    }
  }
  render() {
    
  
      return (
          <div>
              <h1>Всі ігри</h1>
            <div className='Games_style'>
                <Items items={this.state.items.slice(5, 10)} />
                <Items items={this.state.items.slice(10, 15)} />
                <Items items={this.state.items.slice(15, 20)} />
                <Items items={this.state.items.slice(20, 25)} />
            </div>
        </div>
    )
  }
}

export default Games;