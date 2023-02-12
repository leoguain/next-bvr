export type RecordListProps = {
  tracks: TrackProps[];
};

export type TrackProps = {
  idRecord: number;
  track: string;
  records: RecordProps[];
};

export type RecordProps = {
  championship: string;
  year: string;
  platform: string;
  category: string;
  date: string;
  idDriverPole: string;
  driverPole: string;
  timePole: string;
  idDriverVMR: string;
  driverVMR: string;
  timeVMR: string;
};
