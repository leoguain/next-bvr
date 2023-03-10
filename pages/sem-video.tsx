import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";

import { YoutubePlaylist } from "@/components/YoutubePlaylist";

function Recordes({
  pageTitle,
  description,
  title,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  console.log(data);

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content>
          <PageTitle pageTitle={title} pageUrl={asPath} />
          <YoutubePlaylist data={data} />
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Sem vídeo disponível - Brasil Virtual Racing";
  const title = "Corrida sem vídeo disponível";
  const description = "Essa corrida ainda não foi transmitida :(.";

  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLSwFu7MJQiVewPBXY1h6Q9q5qe7LeE5JR&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();

  return {
    props: {
      pageTitle,
      description,
      title,
      data,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Recordes;
