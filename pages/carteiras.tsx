import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";

import { LicensesList_GSData } from "@/components/LicensesList_GSData";
import { getLicenses } from "../lib/licenses";

function Carteiras({
  pageTitle,
  description,
  licenses,
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
          <LicensesList_GSData licenses={licenses} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Carteiras - Brasil Virtual Racing";
  const title = "Carteiras";
  const description =
    "Acompanhe o nível de carteira de cada piloto na Liga BVR.";

  const licenses = await getLicenses();

  return {
    props: {
      pageTitle,
      description,
      title,
      licenses,
    },
    revalidate: 60 * 60,
  };
};

export default Carteiras;
