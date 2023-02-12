export type AllNewsProps = {
  type: string;
  news: NewsProps[];
};

export type NewsProps = {
  id: string;
  title: string;
  data: string;
  texto: string;
  image: string;
  url: string;
};
