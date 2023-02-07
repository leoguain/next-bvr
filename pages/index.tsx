import React from "react";
import Head from "next/head";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageConstructor } from "components/PageConstructor";

import { Box } from "@chakra-ui/react";

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
        <Box
          mx="auto"
          backgroundImage={"/bkg/bkg_01.jpg"}
          backgroundSize="cover"
          backgroundPosition={"bottom"}
        >
          <Content>
            <PageConstructor text={texts} />
          </Content>
        </Box>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
              id: "paragraph_01",
              type: "paragraph",
              text: "Teste",
            },
          ],
        },
        {
          id: "column_03",
          type: "column",
          texts: [
            {
              id: "paragraph_04",
              type: "paragraph",
              text: "Teste",
            },
          ],
        },
        {
          id: "column_02",
          type: "column",
          texts: [
            {
              id: "news_01",
              type: "news",
              text: "",
            },
            {
              id: "video_01",
              type: "video",
              text: "ARSO",
              path: "https://www.youtube.com/embed/W2KIYr2pk7I",
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
