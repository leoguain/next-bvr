export type TextsProps = {
  text: itemsProps[];
};

export type TextProps = {
  id: string;
  type: string;
  text?: string;
  texts?: ListItemProps[];
  path?: string;

  content?: TextProps[];
};

export type ListProps = {
  list: CPsProps[];
};

export type ListItemProps = {
  id: string;
  type: string;
  text?: string;
  texts?: ParagraphProps[];
};

export type ColumnsProps = {
  columns: ColumnProps[];
};

export type ColumnProps = {
  id: string;
  type: string;
  texts: TextProps[];
};

export type LinkBoxProps = {
  links: LinkProps[];
};

export type LinkProps = {
  id: string;
  type: string;
  text: string;
  path: string;
};

export type AccordionProps = {
  items: AccordionItemProps[];
};

export type AccordionItemProps = {
  id: string;
  type: string;
  text: string;
  content: TextProps[];
};

export type CPsProps = {
  id: string;
  type: string;
  text?: string;
  texts: ParagraphProps[];
};

export type CPProps = {
  paragraphs: ParagraphProps[];
};

export type ParagraphProps = {
  id: string;
  type: string;
  text?: string;
  path?: string;
};
