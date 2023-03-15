import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";

import { ChampionsList } from "@/components/ChampionsList";
import { getChampions } from "../lib/champions";

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
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <ChampionsList champions={champions} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Hall da Fama - Brasil Virtual Racing";
  const title = "Hall da Fama";
  const description = "Bem-vindo à Liga BVR.";

  const champions = await getChampions();

  return {
    props: {
      pageTitle,
      description,
      title,
      champions,
    },
    revalidate: 60 * 60,
  };
};

export default Documentos;
