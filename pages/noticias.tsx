import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { News } from "components/News";

function Noticias({
  pageTitle,
  description,
  news,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <News type="Page" news={news} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Notícias - Brasil Virtual Racing";
  const title = "Notícias";
  const description = "Confira todas as notícias divulgadas aqui no site.";

  const news = [
    {
      id: "12",
      title: "Bem-vindo ao site 2.0",
      data: "12/02/2023",
      texto:
        "Depois da estréia do site da Liga BVR em janeiro, já tivemos nossa primeira atualização, e a mudança foi grande! Confira o novo layout do site, além das novas informações, como o calendário na tela inicial, ou o link para os vídeos de cada corrida, na tela dos campeonatos!",
      image: "",
      url: "/",
    },
    {
      id: "11",
      title: "Resultados da segunda etapa do JGTC 90s",
      data: "12/02/2023",
      texto:
        "A etapa de Nürburgring não teve chuva e acabou sendo bem mais tranquila do que a primeira etapa. Tranquila, mas ainda assim repleta de disputas do começo ao fim da prova, com direito a briga por posição na linha de chegada! Confira o resultado aqui:",
      image: "",
      url: "/campeonatos",
    },
    {
      id: "10",
      title: "Resultados da primeira etapa do JGTC 90s",
      data: "05/02/2023",
      texto:
        "Primeira etapa cheia de reviravoltas em Fuji! Veja o resultado geral da corrida que tivemos quinta-feira, onde a chuva mudou o rumo da corrida. Veja a corrida no nosso canal no Youtube!",
      image: "",
      url: "/campeonatos",
    },
    {
      id: "9",
      title: "É hoje o grande dia!",
      data: "02/02/2023",
      texto:
        "Hoje começa o JGTC 90s da BVR. O primeiro desafio será em Fuji Speedway, com fortes chances de chuva, o que exigirá ainda mais da técnica dos pilotos. A etapa tem início previsto para às 21h, caso não haja imprevistos no jogo.",
      image: "",
      url: "https://youtube.com.br/c/bvgtv",
    },
    {
      id: "8",
      title: "Inscrições abertas para o JGTC 90s!",
      data: "06/01/2023",
      texto:
        "Estão abertas as inscrições para o primeiro campeonato da Liga BVR em 2023: o  JGTC 90s! Este campeonato será composto por 8 etapas semanais. O regulamento já está online, clique abaixo e veja ele no nosso setor de Documentos",
      image: "",
      url: "https://ligabvr.com.br/documentos",
    },
    {
      id: "7",
      title: "Liga BVR começando 2023 com força!",
      data: "06/01/2023",
      texto:
        "Seja bem-vindo ao novo site da Liga BVR! Aqui você acompanhará os resultados de todos os campeonatos desde a temporada 2021, incluindo estatísticas de pilotos, e os recordes de volta por categoria! Isso além de novas features que estão por vir. Teremos muitas atualizações durante o ano! Que tal começar o tour vendo os resultados de campeonatos? Clique abaixo:",
      image: "",
      url: "https://ligabvr.com.br/campeonatos",
    },
    {
      id: "6",
      title: "Novas silhuetas de carros anunciadas!",
      data: "10/12/2022",
      texto:
        "Como de costume, Kazunori Yamauchi postou ontem a noite em seu twitter mais uma imagem com as silhuetas dos carros que virão no próximo update.",
      image: "",
      url: "https://www.instagram.com/p/Cl_Z-sjusWo/",
    },
    {
      id: "5",
      title: "Atualização 1.26 chega recheada de conteúdo!",
      data: "24/11/2022",
      texto:
        "Carros novos, pista nova, enquete cheia de prêmios, atualização do modo online! Essas são algumas das novidades da nova atualização do Gran Turismo 7. Lançada hoje, a atualização de aniversário da franquia rendeu um vídeo com muitas coisas novas. ",
      image: "",
      url: "https://www.youtube.com/watch?v=93uchaHAbWE",
    },
    {
      id: "4",
      title: "Gustavo Viaro campeão do Nissan Silvia Kup!",
      data: "21/11/2022",
      texto:
        "Mesmo não vencendo a última etapa, Gustavo Viaro da CCGTBR se consagrou campeão do Nissan Silvia Kup. É o quinto título do gaúcho na Liga BVR.",
      image: "",
      url: "https://www.instagram.com/p/ClOm4JUu9D4/",
    },
    {
      id: "3",
      title: "Fabiano Furini vence em Suzuka!",
      data: "19/11/2022",
      texto:
        "Fabiano Furini da SpeedBr vence a última etapa do Nissan Silvia Kup. Com o resultado, o gaúcho se projeta para a terceira posição no ranking geral. Os resultados serão confirmados oficialmente na próxima segunda-feira.",
      image: "/liga_bvr_gt_branco.png",
      url: "https://www.youtube.com/watch?v=CM1qkWd0t3M",
    },
    {
      id: "2",
      title: "Exploit de teleport em Lago Maggiore!",
      data: "18/11/2022",
      texto:
        "Está difícil vencer a última missão de Endurance em Lago Maggiore? Seus problemas acabaram!! Confira este exploit que está salvando a vida de muita gente.",
      image: "/liga_bvr_gt_branco.png",
      url: "https://www.youtube.com/watch?v=dX-8hJhSd8g&t=14s",
    },
    {
      id: "1",
      title: "Atualização nova no GT7!",
      data: "20/10/2022",
      texto:
        "Hoje tivemos a atualização 1.25 no Gran Turismo 7. A atualização conta com a inclusão de 3 novos carros, além de alguns novos eventos e pequenas correções.",
      image: "/liga_bvr_gt_branco.png",
      url: "https://www.youtube.com/watch?v=TYG3lfU5EoY",
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      title,
      news,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Noticias;
