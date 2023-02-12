export type CalendarProps = {
  events: EventProps[];
};

export type EventProps = {
  id: number;
  date: string;
  start: string;
  title: string;
  text: string;
  icon: string;
};
