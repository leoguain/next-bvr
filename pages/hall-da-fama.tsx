import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";

import { Box } from "@chakra-ui/react";
import { ChampionsList } from "@/components/ChampionsList";

function Documentos({
  pageTitle,
  description,
  title,
  champions,
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
            <ChampionsList champions={champions} />
          </Content>
        </Box>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Hall da Fama - Brasil Virtual Racing";
  const title = "Hall da Fama";
  const description = "Bem-vindo à Liga BVR.";
  const champions = [
    {
      idUrl: 1,
      url: "/champions/campSilvia22.jpg",
    },
    {
      idUrl: 2,
      url: "/champions/campNascar22.jpg",
    },
    {
      idUrl: 3,
      url: "/champions/campMazda22.jpg",
    },

    {
      idUrl: 4,
      url: "/champions/campGT3.jpg",
    },
    {
      idUrl: 5,
      url: "/champions/campGR4.jpg",
    },
    {
      idUrl: 6,
      url: "/champions/campToyota.jpg",
    },
    {
      idUrl: 7,
      url: "/champions/campBMW.jpg",
    },
    {
      idUrl: 8,
      url: "/champions/campGT500.jpg",
    },
    {
      idUrl: 9,
      url: "/champions/campMazda21.jpg",
    },
    {
      idUrl: 10,
      url: "/champions/campPorsche21.jpg",
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      title,
      champions,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Documentos;
