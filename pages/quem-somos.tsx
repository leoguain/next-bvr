import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";
import { PageTitle } from "components/PageTitle";
import { PageConstructor } from "components/PageConstructor";

function About({
  pageTitle,
  title,
  description,
  texts,
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
          <Flex
            direction={"column"}
            bg={"rgba(18, 18, 18, 0.7)"}
            gap={4}
            mt={2}
            p={8}
          >
            <PageConstructor text={texts} />
          </Flex>
        </Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "A BVR - Brasil Virtual Racing";
  const title = "A Liga BVR";
  const description =
    "Saiba mais sobre a Brasil Virtual Racing, seus valores e objetivos.";

  const texts = [
    {
      id: "paragraph_01",
      type: "paragraph",
      text: "A Liga Brasil Virtual Racing surgiu em 2016, criada por pilotos virtuais que atuavam em campeonatos online, mas que não conseguiam encontrar um ambiente perfeito para a competição. A experiência exigia um lugar onde pudesse houver uma competição equilibrada entre os pilotos, com regras claras, e organização transparente, além de um modo de análise de penalizações que fosse composto por mais de uma visão, e que realmente fosse imparcial.",
    },
    {
      id: "paragraph_02",
      type: "paragraph",
      text: "Assim nasceu a BVR, começando com uma simples competição de arrancada no Gran Turismo 6 (ps3), e já conseguindo mais de 40 pilotos no seu segundo campeonato (GT500), divididos em três grupos.",
    },
    {
      id: "paragraph_03",
      type: "paragraph",
      text: "De lá para cá foram dezenas de campeonatos: Gran Turismo 6, Project Cars 1 e 2, Gran Turismo Sport, e agora Gran Turismo 7. Sempre quisemos fazer eventos com carros dos mais diversos tipos, desde modelos stock, preparados ou não, até carros de alta categoria, como os GT500.",
    },
    {
      id: "paragraph_04",
      type: "paragraph",
      text: "O foco no aprendizado e no aumento de qualidade sempre serão primordiais. Cada evento possui um desafio, um algo a mais que tire os pilotos da zona de conforto. Isso, somado à troca de experiência dos envolvidos, sempre colabora no aumento de nível de todos os pilotos como um todo. Aqueles que entendem isso, e estão dispostos a se superar, serão sempre bem-vindos.",
    },
  ];

  return {
    props: {
      pageTitle,
      title,
      description,
      texts,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default About;
