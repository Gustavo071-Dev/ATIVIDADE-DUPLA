
import './style.css'

export default function Home() {
  // Lista de imagens para a galeria de fotos do topo (salve na pasta assets)
  const fotosGaleria = [gi
    "/src/assets/cr7-galeria1.jpg",
    "/src/assets/cr7-galeria2.jpg",
    "/src/assets/cr7-galeria3.jpg"
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

        {/* Trajetória dos Times (Ordem Cronológica Exata) */}
        <section className={styles.trajetoriaSection}>
          
          {/* 1. Sporting CP */}
          <div className={styles.timeCard}>
            <h2>Sporting CP</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-sporting.jpg" alt="Cristiano Ronaldo no Sporting" />
            </div>
            <p className={styles.textoTime}>
              Onde tudo começou. Revelado nas categorias de base do Sporting em Portugal, o jovem extremamente habilidoso impressionou o mundo logo nos seus primeiros jogos profissionais. Sua atuação em um amistoso contra o Manchester United em 2003 foi tão avassaladora que os próprios jogadores ingleses pediram sua contratação a Sir Alex Ferguson.
            </p>
          </div>

          {/* 2. Manchester United */}
          <div className={styles.timeCard}>
            <h2>Manchester United</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-united1.jpg" alt="Cristiano Ronaldo no Manchester United" />
            </div>
            <p className={styles.textoTime}>
              Na Inglaterra, sob a batuta de Ferguson, CR7 se transformou de uma promessa a uma realidade implacável. Herdando a mítica camisa 7, ele desenvolveu seu físico, sua liderança e conquistou três Premier Leagues consecutivas, sua primeira Champions League e sua primeira Bola de Ouro em 2008.
            </p>
          </div>

          {/* 3. Real Madrid */}
          <div className={styles.timeCard}>
            <h2>Real Madrid</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-real.jpg" alt="Cristiano Ronaldo no Real Madrid" />
            </div>
            <p className={styles.textoTime}>
              O ápice da máquina. No clube merengue, Cristiano quebrou todos os recordes possíveis do futebol moderno, alcançando a histórica média de mais de um gol por partida (450 gols em 438 jogos). Foram 4 títulos de Champions League (sendo 3 seguidas), 4 Bolas de Ouro e noites mágicas que o consolidaram como o maior artilheiro da história do clube.
            </p>
          </div>

          {/* 4. Juventus */}
          <div className={styles.timeCard}>
            <h2>Juventus</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-juventus.jpg" alt="Cristiano Ronaldo na Juventus" />
            </div>
            <p className={styles.textoTime}>
              Buscando novos desafios, transferiu-se para a Itália. Na Velha Senhora, continuou sua dinastia de títulos conquistando o Campeonato Italiano por duas vezes e quebrando recordes de gols rápidos no país, provando que sua mentalidade vencedora funcionava em qualquer liga do mundo.
            </p>
          </div>

          {/* 5. Retorno ao Manchester United */}
          <div className={styles.timeCard}>
            <h2>Manchester United (O Retorno)</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-united2.jpg" alt="Cristiano Ronaldo no retorno ao United" />
            </div>
            <p className={styles.textoTime}>
              Um retorno emocionante e muito festejado pela torcida em Old Trafford em 2021. Apesar do momento turbulento e de reconstrução que o clube inglês vivia internamente, Cristiano ainda entregou atuações espetaculares e muitos gols decisivos na Champions League e na Premier League.
            </p>
          </div>

          {/* 6. Al-Nassr */}
          <div className={styles.timeCard}>
            <h2>Al-Nassr</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-alnassr.jpg" alt="Cristiano Ronaldo no Al-Nassr" />
            </div>
            <p className={styles.textoTime}>
              Expandindo as fronteiras do esporte, CR7 mudou-se para a Arábia Saudita, transformando a liga local em um polo de atenção mundial e atraindo dezenas de craques europeus. Mesmo como veterano, seguiu quebrando recordes de gols e liderando o projeto do clube.
            </p>
          </div>

          {/* 7. Seleção de Portugal */}
          <div className={styles.timeCard}>
            <h2>Seleção de Portugal</h2>
            <div className={styles.fotoTime}>
              <img src="/src/assets/cr7-portugal.jpg" alt="Cristiano Ronaldo em Portugal" />
            </div>
            <p className={styles.textoTime}>
              O maior símbolo e capitão da história do futebol português. Cristiano levou seu país ao topo do continente com a conquista inédita da Eurocopa em 2016 e da Nations League em 2019. É o maior artilheiro isolado da história do futebol de seleções, carregando o orgulho de sua nação por mais de duas décadas.
            </p>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} - O Legado de Cristiano Ronaldo.</p>
      </footer>
    </div>
  );
}

