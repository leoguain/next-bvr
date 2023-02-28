export type AllNewsProps = {
  type: string;
  news: NewsProps[];
};

export type NewsProps = {
  id: string;
  title: string;
  date: string;
  text: string;
  image: string;
  url: string;
};
