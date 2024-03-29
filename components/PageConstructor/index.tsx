import React from "react";
import NextLink from "next/link";

import { When } from "../../components/shared/When";

import { Box, Text, Image, Link, AspectRatio, Button } from "@chakra-ui/react";

import { TextsProps } from "./types";

import { AccordionMenu } from "./components/Accordion";
import { Columns } from "./components/Columns";
import { CompoundParagraph } from "./components/CompoundParagraph";
import { LinkBox } from "./components/LinkBox";
import { IconTextList } from "./components/IconTextList";
import { TextList } from "./components/TextList";

import { News } from "../News";
import { CurrentRanking } from "../CurrentRanking";
import { Calendar } from "../Calendar";

import { CardBvg } from "../CardBvg";
import { CardInscricao } from "../CardInscricao";

export const PageConstructor = ({ text }: TextsProps) => {
  return (
    <Box my={2}>
      {text.map(({ id, type, text, texts, path }) => (
        <React.Fragment key={id}>
          {/*- TEXTOS -----------------------------------------------*/}
          <When value={type === "cParagraph"}>
            <CompoundParagraph paragraphs={texts} />
          </When>

          <When value={type === "link"}>
            <Link color="secondary.500" fontWeight="normal" href={path}>
              {text}
            </Link>
          </When>

          <When value={type === "linkEx"}>
            <Link
              color="secondary.500"
              fontWeight="normal"
              href={path}
              isExternal
            >
              {text}
            </Link>
          </When>

          <When value={type === "noteC"}>
            <Text color={"#fff"} fontSize={["sm"]} textAlign="center" my={4}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraph"}>
            <Text color={"#fff"} fontSize={["md"]} textAlign="justify" my={4}>
              {text}
            </Text>
          </When>

          <When value={type === "paragraphN"}>
            <Text
              color={"#fff"}
              fontSize={["md"]}
              fontWeight="bold"
              textAlign="justify"
              my={4}
            >
              {text}
            </Text>
          </When>

          <When value={type === "subtitle"}>
            <Text color={"#fff"} fontSize={["xl", "2xl"]} mb={2} mt={4}>
              {text}
            </Text>
          </When>

          <When value={type === "subtitle2"}>
            <Text color={"#fff"} fontSize={["xl"]} mb={2}>
              {text}
            </Text>
          </When>

          <When value={type === "title"}>
            <Text color={"#fff"} fontSize={["2l", "3xl"]} my={4} mt={8}>
              {text}
            </Text>
          </When>

          {/*- COMPONENTES --------------------------------------------*/}
          <When value={type === "accordion"}>
            <AccordionMenu items={texts} />
          </When>

          <When value={type === "button"}>
            <Button
              as={NextLink}
              href={path}
              bg="secondary.500"
              color="#fff"
              borderRadius="3xl"
              fontSize="sm"
            >
              {text}
            </Button>
          </When>

          <When value={type === "calendar"}>
            <Calendar calendar={texts} />
          </When>

          <When value={type === "cardBvg"}>
            <CardBvg />
          </When>

          <When value={type === "cardInscricao"}>
            <CardInscricao />
          </When>

          <When value={type === "columns"}>
            <Columns columns={texts} />
          </When>

          <When value={type === "currentRanking"}>
            <CurrentRanking ranking={texts} />
          </When>

          <When value={type === "linkbox"}>
            <LinkBox links={texts} />
          </When>

          <When value={type === "list"}>
            <TextList list={texts} />
          </When>

          <When value={type === "news"}>
            <News type="Box" news={texts} />
          </When>

          <When value={type === "iconlist"}>
            <IconTextList list={texts} />
          </When>

          {/*- MÍDIAS ----------------------------------------------*/}
          <When value={type === "imageC"}>
            <Box display="flex" justifyContent="center">
              <Image src={path} alt={text} objectFit="cover" mt={2} />
            </Box>
          </When>

          <When value={type === "video"}>
            <AspectRatio ratio={16 / 9}>
              <iframe src={path} allowFullScreen title={text} />
            </AspectRatio>
          </When>
        </React.Fragment>
      ))}
    </Box>
  );
};
