export type CurrentRankingProps = {
  ranking: RankingProps[];
};

export type RankingHeaderProps = {
  titleCup: string;
  logoCup: string;
  typeRace: string;
};

export type RankingProps = {
  championship: string;
  year: string;
  logo: string;
  colors: ChampColorsProps;
  geral: ResultsProps[];
  principal: ResultsProps[];
  sprint: ResultsProps[];
};

export type ChampColorsProps = {
  bkg: string;
  head: string;
  row: string;
  txt: string;
};

export type EventResultsProps = {
  results: ResultsProps[];
};

export type ResultsProps = {
  pos: string;
  driver: string;
  idPsn: string;
  total: number;
};

export type TypeProps = {
  rankingType: string;
};
