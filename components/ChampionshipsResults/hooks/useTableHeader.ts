import { useMemo } from "react";

export const useTableHeader = () => {
  const header = useMemo(
    () => [
      {
        id: "1",
        name: "Pos.",
        mWidth: "45px",
        width: "45px",
      },
      {
        id: "2",
        name: "Piloto (IdPsn)",
        mWidth: "140px",
        width: "150px",
      },
      {
        id: "3",
        name: "Penal",
        mWidth: "55px",
        width: "60px",
      },
      {
        id: "4",
        name: "Descarte",
        mWidth: "75px",
        width: "75px",
      },
      {
        id: "5",
        name: "Total",
        mWidth: "55px",
        width: "60px",
      },
    ],
    []
  );

  return {
    header,
  };
};
