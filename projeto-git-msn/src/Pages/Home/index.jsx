import './style.css'

export default function Home() {
  return (
    <div className='page-home'>
      <header className="home-header">
        <h1>O Lendário Trio MCN ⚽</h1>
        <p className="subtitle">
          Explore a história, as estatísticas e a genialidade de três dos maiores camisas 10 e 7 que o futebol já viu: Messi, Cristiano Ronaldo e Neymar.
        </p>
      </header>

      <main className="players-container">
        {/* Card do Messi */}
        <section className="player-card messi">
          <div className="card-badge">ARG</div>
          <h2>Lionel Messi</h2>
          <p>
            A genialidade pura em forma de futebol. Conhecido por sua genialidade, dribles curtos milimétricos e uma coleção incomparável de Bolas de Ouro.
          </p>
          <button className="card-btn">Ver Detalhes</button>
        </section>

        {/* Card do CR7 */}
        <section className="player-card cristiano">
          <div className="card-badge">POR</div>
          <h2>Cristiano Ronaldo</h2>
          <p>
            A máquina de gols e o sinônimo de obstinação. O maior artilheiro da história da Champions League, movido a recordes e alta performance.
          </p>
          <button className="card-btn">Ver Detalhes</button>
        </section>

        {/* Card do Neymar */}
        <section className="player-card neymar">
          <div className="card-badge">BRA</div>
          <h2>Neymar Jr</h2>
          <p>
            A alegria do futebol brasileiro e o auge do Joga Bonito. Ousadia, improviso e uma habilidade única de transformar o campo em um espetáculo.
          </p>
          <button className="card-btn">Ver Detalhes</button>
        </section>
      </main>
    </div>
  )
}