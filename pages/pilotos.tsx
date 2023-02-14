import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";

import { DriversList } from "@/components/DriversList";
import { drivers } from "../hooks/useDrivers";

function Pilotos({
  pageTitle,
  description,
  title,
  drivers,
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
          <DriversList drivers={drivers} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Pilotos - Brasil Virtual Racing";
  const title = "Estatísticas de Pilotos";
  const description = "Lista de pilotos e suas estatísticas na Liga BVR.";

  return {
    props: {
      pageTitle,
      description,
      title,
      drivers: drivers,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Pilotos;
