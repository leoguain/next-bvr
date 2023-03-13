export type DocumentsProps = {
  documents: DocumentProps[];
};

export type DocumentProps = {
  idDoc: number | undefined;
  title: string | undefined;
  type: string | undefined;
  logo: string | undefined;
  url: string | undefined;
};
