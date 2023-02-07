import { useMemo } from "react";

export const useChampionship = () => {
  const championships = useMemo(
    () => [
      {
        id: "jgtc23",
        title: "JGTC 90s 2023",
        logo: "/cupLogos/JGTClogo.png",
        colors: {
          bkg: "#000",
          head: "#bc0202",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Fuji Speedway",
            url: "https://www.youtube.com/watch?v=wurs3Bi_7N0",
          },
          { race: "2", name: "Nürburgring GP", url: "" },
          { race: "3", name: "Suzuka Circuit", url: "" },
          { race: "4", name: "Dragon Trail Jardins", url: "" },
          { race: "5", name: "Autopolis International", url: "" },
          { race: "6", name: "Red Bull Ring", url: "" },
          { race: "7", name: "Tokyo Exp. East", url: "" },
          { race: "8", name: "Spa", url: "" },
        ],
      },
      {
        id: "silvia22",
        title: "Nissan Silvia KUP 2022",
        logo: "/cupLogos/logoSilviaKupRed2022.png",
        colors: {
          bkg: "#e9e9e9",
          head: "#bc0202",
          row: "#5b5b5b",
          txt: "red",
        },
        tracks: [
          {
            race: "1",
            name: "Autódromo de Interlagos",
            url: "",
          },
          { race: "2", name: "Alsace - Vila", url: "" },
          { race: "3", name: "Tokyo Exp. Sul R", url: "" },
          { race: "4", name: "Mount Panorama", url: "" },
          { race: "5", name: "Deep Forest", url: "" },
          { race: "6", name: "Fuji Speedway", url: "" },
        ],
      },
      {
        id: "nascar22",
        title: "Nascar Series Cup 2022",
        logo: "/cupLogos/logoNascar2022.png",
        colors: {
          bkg: "black",
          head: "#0079c2",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Daytona Road",
            url: "",
          },
          { race: "2", name: "Blue Moon Speedway", url: "" },
          { race: "3", name: "Laguna Seca", url: "" },
          { race: "4", name: "Watkins Glen", url: "" },
          { race: "5", name: "High Speed Ring", url: "" },
          { race: "6", name: "Daytona Tri-Oval", url: "" },
        ],
      },
      {
        id: "mazda22",
        title: "Mazda Touring Cup 2022",
        logo: "/cupLogos/logoMazda2022.png",
        colors: {
          bkg: "#5b5b5b",
          head: "#0d91b0",
          row: "#312d4c",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Sardegna C",
            url: "",
          },
          { race: "2", name: "Horse Thief Mile", url: "" },
          { race: "3", name: "Trial Mountain", url: "" },
          { race: "4", name: "Tsukuba Circuit", url: "" },
        ],
      },
      {
        id: "gt322",
        title: "GT3 Cup 2022",
        logo: "/cupLogos/logoGT3B2022.png",
        colors: {
          bkg: "#1d1d1d",
          head: "#00bb1c",
          row: "#1d1d1d",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Laguna Seca",
            url: "",
          },
          { race: "2", name: "Autopolis Int.", url: "" },
          { race: "3", name: "Mount Panorama", url: "" },
          { race: "4", name: "Autodromo Monza S/C", url: "" },
          { race: "5", name: "Blue Moon Speedway", url: "" },
          { race: "6", name: "Autódromo de Intelagos", url: "" },
          { race: "7", name: "Nürburgring 24h", url: "" },
          { race: "8", name: "Spa", url: "" },
        ],
      },
      {
        id: "gr421",
        title: "Multi Gr.4 $tream 2021",
        logo: "/cupLogos/logoGr4B2021.png",
        colors: {
          bkg: "black",
          head: "#d19a00",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Red Bull Ring",
            url: "",
          },
          { race: "2", name: "Big Willow", url: "" },
          { race: "3", name: "Catalunha", url: "" },
          { race: "4", name: "Blue Moon Speedway A", url: "" },
          { race: "5", name: "Autodromo Monza", url: "" },
          { race: "6", name: "Autódromo de Interlagos", url: "" },
        ],
      },
      {
        id: "toyota21",
        title: "Toyota $tream Light 2021",
        logo: "/cupLogos/logoToyotaLightB2021.png",
        colors: {
          bkg: "black",
          head: "#d19a00",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "BB Raceway",
            url: "",
          },
          { race: "2", name: "Tsukuba Circuit", url: "" },
          { race: "3", name: "Autopolis Curta", url: "" },
          { race: "4", name: "Kyoto - Yamagiwa", url: "" },
          { race: "5", name: "Suzuka Circuit", url: "" },
          { race: "6", name: "Fuji - Curto", url: "" },
        ],
      },
      {
        id: "bmw21",
        title: "BMW $tream Challenge 2021",
        logo: "/cupLogos/logoBMWB2021.png",
        colors: {
          bkg: "black",
          head: "#d19a00",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Brands Hatch",
            url: "",
          },
          { race: "2", name: "Lago Maggiore O", url: "" },
          { race: "3", name: "Goodwood", url: "" },
          { race: "4", name: "Red Bull Ring Curta", url: "" },
          { race: "5", name: "Sardegna C II", url: "" },
          { race: "6", name: "Nürburgring GP", url: "" },
        ],
      },
      {
        id: "redware21",
        title: "Redware GT500 Advanced 2021",
        logo: "/cupLogos/logoRedware2021.png",
        colors: {
          bkg: "black",
          head: "red",
          row: "#5b5b5b",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Autodromo Monza",
            url: "",
          },
          { race: "2", name: "La Sarthe", url: "" },
          { race: "3", name: "Mount Panorama", url: "" },
          { race: "4", name: "Kyoto Miyabi + Yamagiwa", url: "" },
          { race: "5", name: "Saint Croix A", url: "" },
          { race: "6", name: "Spa", url: "" },
        ],
      },
      {
        id: "mazda21",
        title: "Mazda Touring Cup 2021",
        logo: "/cupLogos/logoMazda2021.png",
        colors: {
          bkg: "#312d4c",
          head: "#0d91b0",
          row: "#312d4c",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Kyoto Miyabi",
            url: "",
          },
          { race: "2", name: "Suzuka Leste", url: "" },
          { race: "3", name: "Laggo Maggiore C", url: "" },
          { race: "4", name: "Sardegna C", url: "" },
          { race: "5", name: "Autopolis Curta", url: "" },
          { race: "6", name: "Laguna Seca", url: "" },
        ],
      },

      {
        id: "porsche21",
        title: "Porsche Cup Gemignani 2021",
        logo: "/cupLogos/logoPorscheCup2021.png",
        colors: {
          bkg: "#1d1d1d",
          head: "#d97316",
          row: "#1d1d1d",
          txt: "white",
        },
        tracks: [
          {
            race: "1",
            name: "Autopolis Int.",
            url: "",
          },
          { race: "2", name: "Sardegna A II", url: "" },
          { race: "3", name: "Autodromo Monza", url: "" },
          { race: "4", name: "Mount Panorama", url: "" },
          { race: "5", name: "Lago Maggiore L", url: "" },
          { race: "6", name: "Fuji Speedway", url: "" },
          { race: "7", name: "Spa", url: "" },
          { race: "8", name: "Red Bull Ring", url: "" },
        ],
      },
    ],
    []
  );

  return {
    championships,
  };
};
