import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { News } from "@/components/News";

function Noticias({
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
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <News type="Page" />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Notícias - Brasil Virtual Racing";
  const title = "Notícias";
  const description = "Confira todas as notícias divulgadas aqui no site.";
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

export default Noticias;
