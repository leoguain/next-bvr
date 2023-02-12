import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "@/components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

import { Box } from "@chakra-ui/react";
import { DocumentsList } from "@/components/DocumentsList";

function Documentos({
  pageTitle,
  description,
  title,
  documentos,
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
            <DocumentsList documents={documentos} />
          </Content>
        </Box>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Documentos - Brasil Virtual Racing";
  const title = "Estatutos e Regulamentos";
  const description =
    "Acesse o estatuto e todos os regulamentos da Liga BVR, desde a temporada 2021.";
  const documentos = [
    {
      idDoc: 1,
      title: "BVR 2021 v1.1",
      type: "Estatuto",
      logo: "/liga_bvr_gt_branco.png",
      url: "https://drive.google.com/file/d/1mpBPqT022kLSk1nTewAZ6Yaz047VfW0W/view?usp=sharing",
    },
    {
      idDoc: 13,
      title: "JGTC 90s - 2023",
      type: "Regulamento",
      logo: "/cupLogos/JGTClogo.png",
      url: "https://drive.google.com/file/d/1f_n2rtPE-QxvDbeuK2NhCqqBKL4pClLB/view?usp=sharing",
    },
    {
      idDoc: 12,
      title: "Nissan Silvia KUP 2022",
      type: "Regulamento",
      logo: "/cupLogos/logoSilviaKupRed2022.png",
      url: "https://drive.google.com/file/d/1sxD-eMbZ8YXRIb4eUtrP1k79klxQPKDH/view?usp=share_link",
    },
    {
      idDoc: 11,
      title: "NASCAR Series Cup 2022",
      type: "Regulamento",
      logo: "/cupLogos/logoNascar2022.png",
      url: "https://drive.google.com/file/d/1l2PsM6rhZB6itC9NfiS1JV_MGd7CEH-X/view?usp=share_link",
    },
    {
      idDoc: 10,
      title: "Mazda Touring Mini Cup 2022",
      type: "Regulamento",
      logo: "/cupLogos/logoMazda2022.png",
      url: "https://drive.google.com/file/d/1CHyc1YDDmTy0RP1Z-YIseGzBjOtxJNeZ/view?usp=share_link",
    },
    {
      idDoc: 9,
      title: "GT3 Cup 2022 v1.1",
      type: "Regulamento",
      logo: "/cupLogos/logoGT3B2022.png",
      url: "https://drive.google.com/file/d/1kNCfS9hGPcBfYHGGggznpTtTjYk9YChy/view?usp=share_link",
    },
    {
      idDoc: 8,
      title: "Multi $tream Gr.4",
      type: "Regulamento",
      logo: "/cupLogos/logoGr4B2021.png",
      url: "https://drive.google.com/file/d/1W1J4N9AqoCfPdKqIr2E-nKaH3Z78U5EX/view?usp=share_link",
    },
    {
      idDoc: 7,
      title: "Toyota $tream Light",
      type: "Regulamento",
      logo: "/cupLogos/logoToyotaLightB2021.png",
      url: "https://drive.google.com/file/d/1QZGSh5dWXk21My_e5iGdiMboSrwbpFHr/view?usp=share_link",
    },
    {
      idDoc: 6,
      title: "BMW M3 $tream Challenge",
      type: "Regulamento",
      logo: "/cupLogos/logoBMWB2021.png",
      url: "https://drive.google.com/file/d/11TWozlluacbrh7Zm4yb0UjYyKqkELxHy/view?usp=share_link",
    },
    {
      idDoc: 5,
      title: "REDWARE GT500 Advanced",
      type: "Regulamento",
      logo: "/cupLogos/logoRedware2021.png",
      url: "https://drive.google.com/file/d/1CIwsjtT8iH6px4RxC7uWzAS8DU4f-gg8/view?usp=share_link",
    },
    {
      idDoc: 4,
      title: "Minicup World$tream Marcas e Pilotos",
      type: "Regulamento",
      logo: "/liga_bvr_gt_branco.png",
      url: "https://drive.google.com/file/d/1gtjVUYJNJsBUB9-WqriAVnFdbEFXDCR8/view?usp=share_link",
    },
    {
      idDoc: 3,
      title: "Mazda Touring Cup 2021",
      type: "Regulamento",
      logo: "/cupLogos/logoMazda2021.png",
      url: "https://drive.google.com/file/d/165bz-JzSAdShYl7yFY0i7Lsfj6_NzHQn/view?usp=share_link",
    },
    {
      idDoc: 2,
      title: "Porsche Cup Gemignani 2021",
      type: "Regulamento",
      logo: "/cupLogos/logoPorscheCup2021.png",
      url: "https://drive.google.com/file/d/1NZqHZvRuN8wQH6Sb1DUvZSJXmRuQHrRP/view?usp=sharing",
    },
  ];

  return {
    props: {
      pageTitle,
      description,
      title,
      documentos,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default Documentos;
