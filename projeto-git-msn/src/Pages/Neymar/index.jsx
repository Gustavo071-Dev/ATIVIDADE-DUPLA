import './style.css'

export default function Neymar() {
  return (
    <div className='page-neymar'>
      {/* Banner Principal */}
      <header className="neymar-hero">
        <div className="hero-content">
          <span className="jersey-number">Neymar Jr #10</span>
          <h1>O Menino que Encantou o Mundo</h1>
          <p>Ousadia, alegria e a essência do futebol arte brasileiro.</p>
        </div>
      </header>

      {/* Trajetória por Clubes */}
      <main className="timeline-container">
        <h2>A Trajetória do Craque</h2>
        
        <div className="timeline">
          
          {/* Santos */}
          <section className="timeline-item santos">
            <div className="timeline-img">
              {/* Você pode colocar a imagem na pasta assets e importar aqui */}
              <img src="/src/assets/neymar-santos.jpg" alt="Neymar no Santos" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Santos FC (2009 - 2013)</h3>
              <p>
                Onde tudo começou. Menino da Vila legítimo, Neymar surgiu como um raio, trazendo de volta os dribles desconcertantes, o futebol moleque e conquistando a histórica Copa Libertadores de 2011, além da Copa do Brasil e do Tri-Campeonato Paulista.
              </p>
            </div>
          </section>

          {/* Barcelona */}
          <section className="timeline-item barcelona">
            <div className="timeline-img">
              <img src="/src/assets/neymar-barca.jpg" alt="Neymar no Barcelona" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>FC Barcelona (2013 - 2017)</h3>
              <p>
                A conquista da Europa. Formando o lendário e avassalador trio **MSN** ao lado de Messi e Luis Suárez, Neymar alcançou o topo do mundo. Conquistou a Champions League (2014-15) marcando gol na final, o Mundial de Clubes e encantou o continente com exibições inesquecíveis, como a virada histórica contra o PSG.
              </p>
            </div>
          </section>

          {/* PSG */}
          <section className="timeline-item psg">
            <div className="timeline-img">
              <img src="/src/assets/neymar-psg.jpg" alt="Neymar no PSG" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Paris Saint-Germain (2017 - 2023)</h3>
              <p>
                A transferência mais cara da história do futebol. Em Paris, Neymar assumiu o protagonismo absoluto da equipe. Colecionou títulos nacionais (várias Ligue 1) e liderou o clube francês até a sua primeira final inédita de Champions League em 2020.
              </p>
            </div>
          </section>

          {/* Al-Hilal */}
          <section className="timeline-item alhilal">
            <div className="timeline-img">
              <img src="/src/assets/neymar-hilal.jpg" alt="Neymar no Al-Hilal" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Al-Hilal (2023 - Presente)</h3>
              <p>
                O novo desafio no Oriente Médio. Integrando o ambicioso projeto da Saudi Pro League, o craque brasileiro se transferiu para o maior clube da Ásia com o objetivo de deixar sua marca também no futebol árabe.
              </p>
            </div>
          </section>

          {/* Seleção Brasileira */}
          <section className="timeline-item selecao">
            <div className="timeline-img">
              <img src="/src/assets/neymar-selecao.jpg" alt="Neymar na Seleção Brasileira" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Seleção Brasileira 🇧🇷</h3>
              <p>
                O dono da camisa 10 da Amarelinha. Neymar gravou seu nome na eternidade ao ultrapassar Pelé e se tornar o **maior artilheiro da história da Seleção Brasileira** em jogos oficiais. Conquistou a inédita Medalha de Ouro nas Olimpíadas do Rio 2016 e a Copa das Confederações em 2013.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}