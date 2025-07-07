import Head from 'next/head';

export default function PokeQuiz({ pokeId, imgUrl }) {
  return (
    <>
      <Head>
        <title>포켓몬 퀴즈 - {pokeId}</title>
        <meta property="og:title" content={`포켓몬 퀴즈! #${pokeId}`} />
        <meta property="og:description" content="이 포켓몬의 이름은?" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://YOUR-VERCEL-DOMAIN.vercel.app/poke/${pokeId}`} />
      </Head>
      <main style={{ textAlign: "center", marginTop: 40 }}>
        <h1>포켓몬 퀴즈 #{pokeId}</h1>
        <img src={imgUrl} alt="포켓몬 이미지" style={{ maxWidth: 300, borderRadius: 16 }} />
        <p style={{ fontSize: 20, marginTop: 12 }}>이 포켓몬의 이름은?</p>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const pokeId = params.id.padStart(4, "0");
  const imgUrl = `https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${pokeId}01.png`;
  return { props: { pokeId, imgUrl } };
}
