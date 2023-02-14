export type DriverListProps = {
  drivers: DriverProps[];
};

export type DriverProps = {
  idDriver: number;
  driver: string;
  idPsn: string;
  team: string;
  birthDate: string;
  email: string;
  instagram: string;
  license: string;
  image: string;
  countChampionships: number;
  countRaces: number;
  totalPoints: number;
  countPenals: number;
  totalPenals: number;
  validPoints: number;
  countP1: number;
  countP2: number;
  countP3: number;
  countP4: number;
  countP5: number;
  countP6: number;
  countP7: number;
  countP8: number;
  countP9: number;
  countP10: number;
  countP11: number;
  countP12: number;
  countP13: number;
  countP14: number;
  countPoles: number;
  countVMR: number;
  index: number;
};

export type DriverBoxProps = {
  idDriver: number;
  driver: string;
  idPsn: string;
  team: string;
  birthDate: string;
  license: string;
  image: string;
  countRaces: number;
  validPoints: number;
  countP1: number;
  countPoles: number;
  countVMR: number;
  index: number;
};

export type DriverFieldProps = {
  label: string;
  value: number | string;
  size: string;
  reverse?: boolean;
};
