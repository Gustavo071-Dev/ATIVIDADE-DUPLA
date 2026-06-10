import React, { useState } from 'react';
import './style.css'

export default function Cristiano() {
  // Lista de imagens para a galeria de fotos do topo
  // Dica: Substitua os links pelas fotos que vocês salvarem no projeto
  const fotosGaleria = [
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800", // Foto 1
    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800", // Foto 2
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800"  // Foto 3
  ];

  const [fotoAtual, setFotoAtual] = useState(0);

  const proximaFoto = () => {
    setFotoAtual((prev) => (prev === fotosGaleria.length - 1 ? 0 : prev + 1));
  };

  const fotoAnterior = () => {
    setFotoAtual((prev) => (prev === 0 ? fotosGaleria.length - 1 : prev - 1));
  };

  return (
    <div className={styles.container}>
      {/* Header / Navbar */}
      <header className={styles.header}>
        <div className={styles.logo}>Trio <span className={styles.mcn}>MCN</span></div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/messi">Messi</a>
          <a href="#" className={styles.active}>Cristiano</a>
          <a href="/neymar">Neymar</a>
        </nav>
      </header>

      {/* Título Principal */}
      <main className={styles.content}>
        <h1 className={styles.mainTitle}>CRISTIANO RONALDO</h1>

        {/* Galeria de Fotos com Setinhas */}
        <section className={styles.galeriaContainer}>
          <button className={`${styles.seta} ${styles.setaEsquerda}`} onClick={fotoAnterior}>
            &#10094;
          </button>
          <div className={styles.slide}>
            <img 
              src={fotosGaleria[fotoAtual]} 
              alt={`Cristiano Ronaldo - Foto ${fotoAtual + 1}`} 
              className={styles.imagemGaleria}
            />
          </div>
          <button className={`${styles.seta} ${styles.setaDireita}`} onClick={proximaFoto}>
            &#10095;
          </button>
        </section>

        {/* Trajetória dos Times (Ordem Cronológica) */}
        <section className={styles.trajetoriaSection}>
          
          {/* 1. Sporting CP */}
          <div className={styles.timeCard}>
            <h2>Sporting CP</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Sporting+CP" alt="Cristiano Ronaldo no Sporting" />
            </div>
            <p className={styles.textoTime}>
              Onde tudo começou. Revelado nas categorias de base do Sporting em Portugal, o jovem magro e extremamente habilidoso impressionou o mundo logo nos seus primeiros jogos profissionais, chamando a atenção de Sir Alex Ferguson em um amistoso histórico.
            </p>
          </div>

          {/* 2. Manchester United */}
          <div className={styles.timeCard}>
            <h2>Manchester United</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Manchester+United" alt="Cristiano Ronaldo no Manchester United" />
            </div>
            <p className={styles.textoTime}>
              Na Inglaterra, sob a batuta de Ferguson, CR7 se transformou de uma promessa a uma realidade avassaladora. Herdando a mítica camisa 7, ele conquistou seus primeiros títulos da Premier League, sua primeira Champions League e sua primeira Bola de Ouro em 2008.
            </p>
          </div>

          {/* 3. Real Madrid */}
          <div className={styles.timeCard}>
            <h2>Real Madrid</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Real+Madrid" alt="Cristiano Ronaldo no Real Madrid" />
            </div>
            <p className={styles.textoTime}>
              O ápice do "Robozão". No clube merengue, Cristiano quebrou todos os recordes possíveis, alcançando uma média inacreditável de mais de um gol por partida. Foram 4 títulos de Champions League, 4 Bolas de Ouro e a consolidação definitiva como um dos maiores da história.
            </p>
          </div>

          {/* 4. Juventus */}
          <div className={styles.timeCard}>
            <h2>Juventus</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Juventus" alt="Cristiano Ronaldo na Juventus" />
            </div>
            <p className={styles.textoTime}>
              Buscando novos desafios, transferiu-se para a Itália. Na Velha Senhora, continuou sua dinastia de títulos conquistando o Campeonato Italiano por duas vezes e quebrando recordes de gols em mais uma grande liga europeia.
            </p>
          </div>

          {/* 5. Retorno ao Manchester United */}
          <div className={styles.timeCard}>
            <h2>Manchester United (O Retorno)</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Retorno+United" alt="Cristiano Ronaldo no retorno ao United" />
            </div>
            <p className={styles.textoTime}>
              Um retorno romântico e muito festejado pela torcida em Old Trafford. Apesar do momento turbulento que o clube inglês vivia internamente, Cristiano ainda entregou muitos gols decisivos, especialmente na Champions League.
            </p>
          </div>

          {/* 6. Al-Nassr */}
          <div className={styles.timeCard}>
            <h2>Al-Nassr</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Al+Nassr" alt="Cristiano Ronaldo no Al-Nassr" />
            </div>
            <p className={styles.textoTime}>
              Expandindo as fronteiras do futebol, CR7 mudou-se para a Arábia Saudita, transformando a liga local em um polo de atenção mundial. Mesmo veterano, continuou empilhando gols absurdos e liderando a artilharia mundial de anos civis recentes.
            </p>
          </div>

          {/* 7. Portugal */}
          <div className={styles.timeCard}>
            <h2>Seleção de Portugal</h2>
            <div className={styles.fotoTime}>
              <img src="https://via.placeholder.com/600x350?text=Portugal" alt="Cristiano Ronaldo em Portugal" />
            </div>
            <p className={styles.textoTime}>
              O maior símbolo da história do futebol português. O capitão e líder levou seu país à glória eterna com a conquista inédita da Eurocopa em 2016 e da Nations League. É o maior artilheiro por seleções na história do esporte.
            </p>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Projeto MCN - Trajetória CR7.</p>
      </footer>
    </div>
  );
}