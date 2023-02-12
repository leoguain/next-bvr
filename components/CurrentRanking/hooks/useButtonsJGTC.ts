import { useMemo } from "react";

export const useButtonsJGTC = () => {
  const buttonsJGTC = useMemo(
    () => [
      {
        text: "Geral",
        bkgColor: "#bc0202",
        txtColor: "#fff",
      },
      {
        text: "Principal",
        bkgColor: "#bc0202",
        txtColor: "#fff",
      },
      {
        text: "Sprint",
        bkgColor: "#bc0202",
        txtColor: "#fff",
      },
    ],
    []
  );

  return {
    buttonsJGTC,
  };
};
