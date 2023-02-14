import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";

import { DocumentsList } from "@/components/DocumentsList";
import { documents } from "../hooks/useDocuments";

function Documentos({
  pageTitle,
  description,
  title,
  documents,
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
          <DocumentsList documents={documents} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Documentos - Brasil Virtual Racing";
  const title = "Estatutos e Regulamentos";
  const description =
    "Acesse o estatuto e todos os regulamentos da Liga BVR, desde a temporada 2021.";

  return {
    props: {
      pageTitle,
      description,
      title,
      documents: documents,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Documentos;
