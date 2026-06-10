
import React from 'react';
import './style.css';
export default function Cristiano() {
  return (
    <div className='page-cristiano'>
      {/* Banner Principal */}
      <header className="cristiano-hero">
        <div className="hero-content">
          <span className="jersey-number">Cristiano Ronaldo #7</span>
          <h1>O Robozão Implacável</h1>
          <p>Trabalho duro, foco obsessivo e a máquina definitiva de fazer gols.</p>
        </div>
      </header>

      {/* Trajetória por Clubes */}
      <main className="timeline-container">
        <h2>A Trajetória do Craque</h2>
        
        <div className="timeline">
          
          {/* Sporting */}
          <section className="timeline-item sporting">
            <div className="timeline-img">
              <img src="/src/assets/cr7-sporting.jpg" alt="Cristiano Ronaldo no Sporting" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Sporting CP (2002 - 2003)</h3>
              <p>
                Onde tudo começou. Criado nas categorias de base do Sporting em Portugal, o jovem franzino e cheio de firulas rapidamente subiu aos profissionais. Sua atuação genial num amistoso contra o Manchester United convenceu Sir Alex Ferguson a levá-lo imediatamente para a Inglaterra.
              </p>
            </div>
          </section>

          {/* Manchester United - Primeira Passagem */}
          <section className="timeline-item united-one">
            <div className="timeline-img">
              <img src="/src/assets/cr7-united1.jpg" alt="Cristiano Ronaldo no Manchester United" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Manchester United (2003 - 2009)</h3>
              <p>
                A transformação em um monstro. Sob a asa de Ferguson, assumiu a histórica camisa 7. Desenvolveu seu faro artilheiro, conquistou o Tri da Premier League, a Champions League (2007-08) e ganhou sua primeira Bola de Ouro, tornando-se o melhor jogador do planeta.
              </p>
            </div>
          </section>

          {/* Real Madrid */}
          <section className="timeline-item realmadrid">
            <div className="timeline-img">
              <img src="/src/assets/cr7-real.jpg" alt="Cristiano Ronaldo no Real Madrid" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Real Madrid (2009 - 2018)</h3>
              <p>
                O ápice histórico. No Santiago Bernabéu, ele destruiu todas as estatísticas possíveis: marcou 450 gols em 438 jogos oficiais. Conquistou 4 títulos de Champions League (sendo 3 seguidas) e mais 4 Bolas de Ouro, virando a maior lenda moderna do clube merengue.
              </p>
            </div>
          </section>

          {/* Juventus */}
          <section className="timeline-item juventus">
            <div className="timeline-img">
              <img src="/src/assets/cr7-juventus.jpg" alt="Cristiano Ronaldo na Juventus" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Juventus (2018 - 2021)</h3>
              <p>
                Dominando a Itália. Desembarcou em Turim com o status de rei e faturou o bicampeonato da Série A. Provou que seu instinto goleador e sua mentalidade cirúrgica funcionavam perfeitamente no tático e difícil futebol italiano.
              </p>
            </div>
          </section>

          {/* Manchester United - O Retorno */}
          <section className="timeline-item united-two">
            <div className="timeline-img">
              <img src="/src/assets/cr7-united2.jpg" alt="Cristiano Ronaldo no retorno ao United" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Manchester United (2021 - 2022)</h3>
              <p>
                O "Last Dance" em Old Trafford. O bom filho a casa torna em um retorno apoteótico. Apesar do elenco passar por um momento coletivo muito conturbado, individualmente Cristiano foi o artilheiro do time na temporada, salvando a equipe com vários gols decisivos nos acréscimos.
              </p>
            </div>
          </section>

          {/* Al-Nassr */}
          <section className="timeline-item alnassr">
            <div className="timeline-img">
              <img src="/src/assets/cr7-alnassr.jpg" alt="Cristiano Ronaldo no Al-Nassr" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Al-Nassr (2023 - Presente)</h3>
              <p>
                Pioneirismo na Ásia. Ao fechar com o clube saudita, Cristiano mudou os rumos do futebol mundial, abrindo as portas para que dezenas de astros europeus migrassem para o Oriente Médio. Segue quebrando recordes de gols mesmo jogando em alto nível como veterano.
              </p>
            </div>
          </section>

          {/* Seleção de Portugal */}
          <section className="timeline-item portugal">
            <div className="timeline-img">
              <img src="/src/assets/cr7-portugal.jpg" alt="Cristiano Ronaldo na Seleção de Portugal" onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="timeline-text">
              <h3>Seleção de Portugal 🇵🇹</h3>
              <p>
                O herói de uma nação. Maior artilheiro da história do futebol de seleções. Comandou Portugal na conquista histórica da Eurocopa em 2016 e da primeira Nations League em 2019, eternizando de vez seu nome como o maior ícone do esporte português.
              </p>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

