export type RecordListProps = {
  tracks: TrackProps[];
};

export type TrackProps = {
  idRecord: number;
  track: string;
  records: RecordProps[];
};

export type UniqueRecordProps = {
  record: RecordProps;
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

export type RecordFieldProps = {
  topLabel: string;
  title: number | string;
  bottomLabel: string;
  type: string;
  darken?: boolean;
};

export type GS_Props = {
  idRecord: number | undefined;
  track: string | undefined;
  championship: string | undefined;
  year: string | undefined;
  platform: string | undefined;
  category: string | undefined;
  date: string | undefined;
  idDriverPole: string | undefined;
  driverPole: string | undefined;
  timePole: string | undefined;
  idDriverVMR: string | undefined;
  driverVMR: string | undefined;
  timeVMR: string | undefined;
};
