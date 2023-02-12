import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

import { Box } from "@chakra-ui/react";
import { ChampionshipResults } from "@/components/ChampionshipsResults";

function Campeonatos({
  pageTitle,
  description,
  texts,
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
        <Box
          mx="auto"
          backgroundImage={"/bkg/bkg_02.jpg"}
          backgroundSize="cover"
          backgroundPosition={"center"}
          backgroundRepeat={[
            "repeat-y",
            "repeat-y",
            "repeat-y",
            "repeat-y",
            "no-repeat",
          ]}
          height={"100%"}
        >
          <Content>
            <PageTitle pageTitle={title} pageUrl={asPath} />
            <ChampionshipResults />
          </Content>
        </Box>
      </Page>
    </React.Fragment>
  );
}

//<PageConstructor text={texts} />

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Campeonatos - Brasil Virtual Racing";
  const title = "Campeonatos 2021/2023";
  const description =
    "Confira todos os campeonatos das temporadas 2023/2022/2021";
  const texts = [
    {
      id: "news_01",
      type: "news",
      text: "",
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      texts,
      title,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Campeonatos;
