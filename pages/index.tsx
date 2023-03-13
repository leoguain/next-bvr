import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageConstructor } from "components/PageConstructor";

import { getNews } from "../lib/news";
import { getCalendar } from "../lib/calendar";
import { getCurrentRanking } from "../lib/currentRanking";

function Home({
  pageTitle,
  description,
  texts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageConstructor text={texts} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Liga BVR - Brasil Virtual Racing";
  const description = "Bem-vindo à Liga BVR.";

  const news = await getNews();
  const calendar = await getCalendar();
  const currentRanking = await getCurrentRanking();

  const texts = [
    {
      id: "columns_01",
      type: "columns",
      texts: [
        {
          id: "column_01",
          type: "column",
          texts: [
            {
              id: "news_01",
              type: "news",
              texts: news,
            },
            {
              id: "video_01",
              type: "video",
              text: "Última etapa JGTC",
              path: "https://www.youtube.com/embed/pc6qS2SPvJQ",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "calendar_01",
              type: "calendar",
              texts: calendar,
            },
            {
              id: "cardBvg_01",
              type: "cardInscricao",
              text: "",
            },
          ],
        },

        {
          id: "column_03",
          type: "column",
          texts: [
            {
              id: "cR_01",
              type: "currentRanking",
              texts: currentRanking,
            },
          ],
        },
      ],
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      texts,
    },
    revalidate: 60 * 60,
  };
};

export default Home;
