export type CurrentRankingsBoxProps = {
  rankingType: string;
  ranking: RankingProps[];
};

export type CurrentRankingProps = {
  ranking: RankingProps[];
};

export type RankingHeaderProps = {
  titleCup: string;
  logoCup: string;
  typeRace: string;
};

export type StatusRankingProps = {
  status: string;
  date: string;
};

export type RankingProps = {
  championship: string;
  year: string;
  logo: string;
  colors: ChampColorsProps;
  geral: ResultsProps[];
  principal: ResultsProps[];
  sprint: ResultsProps[];
  status: string;
  date: string;
  numberRace: string;
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
  team: string;
  penal: number;
  total: number;
};

export type GS_CRProps = {
  pos: number | undefined;
  driver: string | undefined;
  id: string | undefined;
  penalTotal: number | undefined;
  totalPoints: number | undefined;
  posMain: number | string | undefined;
  penalMain: string | undefined;
  pointsMain: number | undefined;
  posSprint: number | string | undefined;
  penalSprint: string | undefined;
  pointsSprint: number | undefined;
};
