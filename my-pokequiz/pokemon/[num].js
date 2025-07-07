// /pages/pokemon/[num].js
export default function PokemonQuizPage({ imgUrl, num }) {
  return (
    <>
      <h1>포켓몬 퀴즈 #{num}</h1>
      <img src={imgUrl} alt={`포켓몬 #${num}`} />
    </>
  );
}

export async function getServerSideProps(context) {
  const num = context.params.num;
  // 포켓몬 번호 4자리 + 01 붙이기
  const numStr = num.padStart(4, '0');
  const imgUrl = `https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${numStr}01.png`;
  return {
    props: {
      imgUrl,
      num,
    },
  };
}

export const config = {
  runtime: 'experimental-edge', // Vercel 배포시 빠름 (optional)
};

export async function getServerSideProps(context) {
  const num = context.params.num;
  const numStr = num.toString().padStart(4, "0");
  const imgUrl = `https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/${numStr}01.png`;
  return {
    props: { imgUrl, num },
  };
}

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
