export type DocumentsProps = {
  documents: DocumentProps[];
};

export type DocumentProps = {
  idDoc: number;
  title: string;
  type: string;
  logo: string;
  url: string;
};
