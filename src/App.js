import React from 'react'
import Games from './components/Games'
import './App.css'





function  App() {
  return (
    <div className="App">
      <nav>
      </nav>
      <section className="intro">
        <article className="introCard">
          <h1>Desde a década de 80 os vídeo games no Brasil vêm se tornando popular! Inicialmente os famosos fliperamas que ficavam em salões de jogos, foram os responsáveis por iniciar essa cultura. ... Os gêneros que os gamers casuais jogam variam, já que eles não possuem um console específico para jogar os seus jogos.</h1> 
          <p>Nesse projeto trouxe algumas das categorias de jogos masi conhecidas e alguns dos jogos <a href="https://blueedtech.com.br/" target="_blank">Blue edtech</a></p>
        </article>
        <article className="imgCard">
          <img src="https://www.maxpixel.net/static/photo/1x/Gaming-Video-Game-Gamer-Play-Man-Computer-Games-6086682.png" alt="bolota" />
        </article>
      </section>
    </div>
  );
}

export default App;
