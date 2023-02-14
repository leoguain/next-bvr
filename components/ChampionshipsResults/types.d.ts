export type ChampionshipsProps = {
  championships: ChampionshipProps[];
};

export type DataHeaderProps = {
  titleCup: string;
  logoCup: string;
};

export type ChampionshipProps = {
  id: string;
  title: string;
  logo: string;
  colors: ChampColorsProps;
  tracks: ChampTracksProps[];
  results: ChampResultsProps[];
};

export type ChampColorsProps = {
  bkg: string;
  head: string;
  row: string;
  txt: string;
};

export type ChampTracksProps = {
  race: string;
  name: string;
  url: string;
};

export type ChampResultsProps = {
  pos: string;
  driver: string;
  idPsn: string;
  penal: string;
  discard: string;
  total: string;
  points: ChampPointsProps[];
};

export type ChampPointsProps = {
  et: string;
  pt: string;
};
