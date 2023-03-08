import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";

import { Registrations } from "@/components/Registrations";
import { registrations } from "../hooks/useRegistrations";

function Inscricoes({
  pageTitle,
  description,
  title,
  registrations,
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
          <Registrations registrations={registrations} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Inscrições - Brasil Virtual Racing";
  const title = "Inscrições disponíveis";
  const description =
    "Veja os campeonatos disponíveis para inscrição na Liga BVR.";

  return {
    props: {
      pageTitle,
      description,
      title,
      registrations: registrations,
    },
    revalidate: 60 * 60,
  };
};

export default Inscricoes;
