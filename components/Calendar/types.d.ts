export type CalendarProps = {
  calendar: EventProps[];
};

export type EventProps = {
  id: number | undefined;
  date: string | undefined;
  start: string | undefined;
  title: string | undefined;
  text: string | undefined;
  icon: string | undefined;
  status: string | undefined;
};
