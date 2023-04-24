import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import { Page } from "components/Page";
import { Content } from "components/Content";

import {
  Box,
  Flex,
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";

function EstatisticasPiloto({
  pageTitle,
  description,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { asPath } = useRouter();

  const positionsData = {
    labels: [
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "P6",
      "P7",
      "P8",
      "P9",
      "P10",
      "P11",
      "P12",
      "P13",
      "P14",
      "DNF",
      "DNS",
      "DNQ",
      "NP",
    ],
    datasets: [
      {
        label: "Positions",
        borderRadius: 0,
        data: [0, 1, 1, 5, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        backgroundColor: "rgba(214,20,0,1)",
        barThickness: 10,
      },
    ],
  };

  const optionsBar: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "TESTE",
      },
    },
  };

  const racesData = {
    labels: [
      "Autodromo Monza",
      "La Sarthe",
      "Mount Panorama",
      "Kyoto",
      "Saint Croix A",
      "Spa-francorchamps",
    ],
    datasets: [
      {
        data: [28, 19, 28, 25, 31, 0],
      },
    ],
  };

  const racesData2 = {
    labels: [
      "Laguna Seca",
      "Autopolis Int.",
      "Mount Panorama",
      "Autodromo Monza S/C",
      "Blue Moon Speedway",
      "Autódromo de Interlagos",
      "Nürburgring 24h",
      "Spa-francorchamps",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 18, 0, 9, 0],
      },
    ],
  };

  const optionsLinear = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill: "start",
        backgroundColor: "rgba(47,97,68,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name={pageTitle} content={description} />
      </Head>

      <Page title={pageTitle} description={description}>
        <Content></Content>
      </Page>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageTitle = "Estatísticas de Piloto X - Brasil Virtual Racing";
  const title = "Estatísticas de Pilotos";
  const description = "Todas as estatísticas do piloto desde a temporada 2021.";

  return {
    props: {
      pageTitle,
      description,
      title,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default EstatisticasPiloto;

/*
<Flex align={"center"} mb={2} bg={"rgba(18, 18, 18, 0.7)"}>
            <Image alt="foto do piloto" src="/drivers/p_0001.png" w="100px" />
            <Flex direction={"column"} px={2}>
              <Text color="#fff">1º no Ranking</Text>
              <Text color="#fff" fontWeight={"semibold"} fontSize={"lg"}>
                Leonardo Guain
              </Text>
              <Text color="#fff">leoguain</Text>
            </Flex>
            <Flex direction={"column"} px={2}>
              <Text color="#fff">Nacionalidade:</Text>
              <Text color="#fff" fontWeight={"semibold"} fontSize={"lg"}>
                Brasil
              </Text>
              <Text color="#fff">São Paulo</Text>
            </Flex>
            <Flex direction={"column"} px={2}>
              <Text color="#fff">Redes sociais:</Text>
              <Text color="#fff" fontWeight={"semibold"}>
                Instagram: @leoguain
              </Text>
              <Text color="#fff" fontWeight={"semibold"}>
                Twitter: -
              </Text>
            </Flex>
          </Flex>

          <Flex direction={"column"}>
            <Flex
              flexFlow={"wrap row"}
              gap={6}
              justifyContent="center"
              p={2}
              bg={"rgba(18, 18, 18, 0.4)"}
            >
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">anos</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  34
                </Text>
              </Flex>

              <Flex direction={"column"} justifyContent="center" align="center">
                <Text color="#fff">Equipe</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  BVR
                </Text>
              </Flex>
              <Flex direction={"column"} justifyContent="center" align="center">
                <Text color="#fff">Carteira</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  SS
                </Text>
              </Flex>
            </Flex>

            <Flex flexFlow={"wrap row"} gap={2} justifyContent="center" p={2}>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Campeonatos participados</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  2
                </Text>
              </Flex>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Campeonatos vencidos</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  0
                </Text>
              </Flex>
            </Flex>
            <Flex flexFlow={"wrap row"} gap={2} justifyContent="center" p={2}>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Pontos</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  500
                </Text>
              </Flex>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Corridas</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  50
                </Text>
              </Flex>

              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Vitórias</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  10
                </Text>
              </Flex>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">Poles</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  5
                </Text>
              </Flex>
              <Flex
                direction={"column-reverse"}
                justifyContent="center"
                align="center"
              >
                <Text color="#fff">VMR</Text>
                <Text color="#fff" fontWeight={"semibold"}>
                  2
                </Text>
              </Flex>
            </Flex>

            <Flex direction={"column"} my={4}>
              <Text color="#fff">Campeonatos em que participou:</Text>
              <Flex direction={"column"} gap={4} maxW="xl">
                <Flex direction={"column"}>
                  <Text color="#fff" fontSize={"lg"}>
                    REDWARE GT500 Advanced - 2021
                  </Text>

                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton bg={"rgba(18, 18, 18, 0.7)"}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color={"#fff"}
                          >
                            Progresso no campeonato
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} bg={"rgba(18, 18, 18, 0.7)"}>
                        <Line
                          data={racesData}
                          width={500}
                          height={300}
                          options={optionsLinear}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Flex>

                <Flex direction={"column"}>
                  <Text color="#fff" fontSize={"lg"}>
                    GT3 Cup - 2022
                  </Text>

                  <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                      <h2>
                        <AccordionButton bg={"rgba(18, 18, 18, 0.7)"}>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            color={"#fff"}
                          >
                            Progresso no campeonato
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} bg={"rgba(18, 18, 18, 0.7)"}>
                        <Line
                          data={racesData2}
                          width={500}
                          height={300}
                          options={optionsLinear}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Flex>
              </Flex>
            </Flex>

            <Flex gap={4}>
              <Flex direction={"column"} my={4}>
                <Text color="#fff">
                  Nº de vezes que terminou em cada posição:
                </Text>
                <Flex gap={4}>
                  <Text color="#fff">P01</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P02</Text>
                  <Text color="#fff">1</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P03</Text>
                  <Text color="#fff">1</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P04</Text>
                  <Text color="#fff">5</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P05</Text>
                  <Text color="#fff">2</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P06</Text>
                  <Text color="#fff">3</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P07</Text>
                  <Text color="#fff">3</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P08</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P09</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P10</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P11</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P12</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P13</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">P14</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">DNF</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">DNS</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">DNQ</Text>
                  <Text color="#fff">0</Text>
                </Flex>
                <Flex gap={4}>
                  <Text color="#fff">NP</Text>
                  <Text color="#fff">1</Text>
                </Flex>
              </Flex>

              <Flex bg={"rgba(18, 18, 18, 0.7)"}>
                <Bar
                  data={positionsData}
                  width={500}
                  height={300}
                  options={optionsBar}
                />
              </Flex>
            </Flex>

            <Flex gap={4}>
              <Flex direction={"column"} my={4}>
                <Text color="#fff">Recordes</Text>
                <Text color="#fff">P01</Text>
              </Flex>
            </Flex>
          </Flex>

*/
