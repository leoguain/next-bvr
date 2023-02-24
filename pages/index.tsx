import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageConstructor } from "components/PageConstructor";

import { calendar } from "../hooks/useCalendar";
import { currentRanking } from "@/hooks/useCurrentRanking";

import { news } from "../hooks/useNews";

function Home({
  pageTitle,
  description,
  texts,
  sheetdata,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(sheetdata);

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
  //const req = await fetch("http://localhost:3000/api/news");
  //const res = await req.json();

  const pageTitle = "Liga BVR - Brasil Virtual Racing";
  const description = "Bem-vindo à Liga BVR.";
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
              path: "https://www.youtube.com/embed/ZprGS-StpLM",
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
              type: "cardBvg",
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
    revalidate: 60 * 60 * 24,
  };
};

export default Home;
