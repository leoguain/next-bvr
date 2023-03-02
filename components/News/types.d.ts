export type AllNewsProps = {
  type: string;
  news: NewsProps[];
};

export type NewsProps = {
  id: string | undefined;
  title: string | undefined;
  date: string | undefined;
  text: string | undefined;
  image: string | undefined;
  url: string | undefined;
};
