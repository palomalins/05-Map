import React, {  Component } from 'react';
import "./App.css";

class App extends Component {
  state = {
    animes:[
      {
        nome:"Dragon Ball",
        protagonista: "Son Goku"
      },

      {
        nome:"Naruto",
        protagonista: " Uzumaki Naruto"
      },

      {
        nome:"One Piece",
        protagonista: "Monkey D. Luffy"
      },

      {
        nome:"Demon Slayer",
        protagonista: "Kamado Tanjiro"
      },

      {
        nome:"Shingeki no Kyojin",
        protagonista: "Yeager Eren"
      },

      {
        nome:"Mairimashita Iruma-kun",
        protagonista: "Suzuki Iruma"
      },

      {
        nome:"Tokyo Revengers",
        protagonista: "Hanagaki Takemichi"
      },
    ]
  }
  render(){
    return(
      <div className='container'>
        <h1>Desafio 5</h1>
        <h3>{this.state.animes.map((item) => (
          <ul>
            <li>
               Anime : {item.nome}
            </li>
            <li>Protagonista: {item.protagonista}</li>
          </ul>
        ))}</h3>
      </div>
    )
  }
  
}

export default App;
