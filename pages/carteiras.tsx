import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";

import { LicensesList } from "@/components/LicensesList";
import { licenses } from "../hooks/useLicenses";

import { getLicenses } from "../lib/licenses";

function Carteiras({
  pageTitle,
  description,
  licenses,
  title,
  licenses2,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  console.log(licenses2);

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <LicensesList licenses={licenses} />
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

  const licenses2 = await getLicenses();

  return {
    props: {
      pageTitle,
      description,
      licenses: licenses,
      title,
      licenses2,
    },
    revalidate: 60 * 60,
  };
};

export default Carteiras;
