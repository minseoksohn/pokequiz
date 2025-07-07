// pages/pokemon/[num].js
import Head from 'next/head';

export default function PokemonQuizPage({ imgUrl, num }) {
  return (
    <>
      <Head>
        <title>포켓몬 퀴즈 #{num}</title>
        <meta property="og:title" content={`포켓몬 퀴즈 #${num}`} />
        <meta property="og:description" content="이 포켓몬은 누구일까요?" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pokequiz-l39b.vercel.app/pokemon/${num}`} />
      </Head>
      <h1>포켓몬 퀴즈 #{num}</h1>
      <img src={imgUrl} alt={`포켓몬 #${num}`} style={{ width: 240, height: 240 }} />
    </>
  );
}

export async function getServerSideProps(context) {
  const num = context.params.num;
  if (isNaN(Number(num)) || Number(num) < 1 || Number(num) > 1025) {
    return { notFound: true };
  }
  const numStr = num.toString().padStart(4, "0");
  const imgUrl = `https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${numStr}01.png`;
  return {
    props: { imgUrl, num },
  };
}
