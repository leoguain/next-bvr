export type AllNewsProps = {
  news: NewsProps[];
};

export type NewsProps = {
  id: string;
  title: string;
  data: string;
  texto: string;
  image?: string;
  url: string;
};

export type NewsContainerProps = {
  type: string;
};
