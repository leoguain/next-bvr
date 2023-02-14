import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";

import { RecordsList } from "@/components/RecordsList";
import { records } from "../hooks/useRecords";

function Recordes({
  pageTitle,
  description,
  records,
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
          <RecordsList tracks={records} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Recordes - Brasil Virtual Racing";
  const title = "Recordes";
  const description =
    "Confira os recordes de pole position e VMR dos nossos campeonatos.";

  return {
    props: {
      pageTitle,
      description,
      records: records,
      title,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Recordes;
