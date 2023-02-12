import { useMemo } from "react";

export const useTableHeader = () => {
  const header = useMemo(
    () => [
      {
        id: "1",
        name: "Pos.",
        width: "45px",
      },
      {
        id: "2",
        name: "Piloto (IdPsn)",
        width: "150px",
      },
      {
        id: "3",
        name: "Penal",
        width: "60px",
      },
      {
        id: "4",
        name: "Descarte",
        width: "75px",
      },
      {
        id: "5",
        name: "Total",
        width: "60px",
      },
    ],
    []
  );

  return {
    header,
  };
};
