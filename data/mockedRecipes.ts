import { Recipe } from "../types/Recipe";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Pasta Carbonara",
    description: "Krämig pasta med bacon och parmesan.",
    imageUrl:
      "https://img.koket.se/square-medium/spaghetti-carbonara-5.jpg.webp",
    time: "30 minuter",
    ingredients: ["Pasta", "Bacon", "Parmesan", "Ägg", "Grädde"],
  },
  {
    id: 2,
    name: "Kycklinggryta",
    description: "Mustig gryta med kyckling, ris och curry.",
    imageUrl:
      "https://img.koket.se/square-medium/kycklinggryta-med-curry-ny.jpg.webp",
    time: "45 minuter",
    ingredients: ["Kyckling", "Ris", "Curry", "Lök", "Grädde"],
  },
  {
    id: 3,
    name: "Smoothie Bowl",
    description: "Fräsch smoothie med bär och banan.",
    imageUrl:
      "https://img.koket.se/square-medium/barig-smoothie-bowl-med-kokoschiapudding.jpg.webp",
    time: "15 minuter",
    ingredients: ["Bär", "Banan", "Yoghurt", "Honung", "Nötter"],
  },
  {
    id: 4,
    name: "Köttbullar med potatismos",
    description: "Klassiska köttbullar med krämigt potatismos och lingonsylt.",
    imageUrl:
      "https://img.koket.se/square-medium/kottbullar-med-potatismos-och-graddig-loksas.jpg.webp",
    time: "40 minuter",
    ingredients: ["Köttfärs", "Potatis", "Mjölk", "Smör", "Lingonsylt"],
  },
  {
    id: 5,
    name: "Lax i ugn",
    description: "Ugnsbakad lax med citron och dill.",
    imageUrl:
      "https://img.koket.se/square-medium/lax-i-ugn-med-krispigt-orttacke-och-potatismos-ny.png.webp",
    time: "35 minuter",
    ingredients: ["Lax", "Citron", "Dill", "Potatis", "Grädde"],
  },
  {
    id: 6,
    name: "Vegetarisk lasagne",
    description: "Lasagne med spenat, zucchini och ricotta.",
    imageUrl:
      "https://img.koket.se/square-medium/dantes-vegetariska-lasagne.png.webp",
    time: "50 minuter",
    ingredients: [
      "Lasagneplattor",
      "Spenat",
      "Zucchini",
      "Ricotta",
      "Tomatsås",
    ],
  },
  {
    id: 7,
    name: "Fiskgratäng",
    description: "Gratinerad fisk med potatismos och dill.",
    imageUrl:
      "https://img.koket.se/square-medium/abba-lyxig-laxgratang.jpg.webp",
    time: "45 minuter",
    ingredients: ["Fiskfilé", "Potatis", "Dill", "Grädde", "Ost"],
  },
  {
    id: 8,
    name: "Raggmunk med fläsk",
    description: "Stekta raggmunkar med knaperstekt fläsk och lingon.",
    imageUrl:
      "https://img.koket.se/square-medium/raggmunk-med-flask-och-lingonsylt.jpg.webp",
    time: "30 minuter",
    ingredients: ["Potatis", "Mjöl", "Ägg", "Fläsk", "Lingon"],
  },
  {
    id: 9,
    name: "Tacos",
    description: "Klassiska tacos med köttfärs, grönsaker och salsa.",
    imageUrl: "https://img.koket.se/cinema-mega/koreanska-tacos.png.webp",
    time: "25 minuter",
    ingredients: ["Tortilla", "Köttfärs", "Sallad", "Tomat", "Salsa"],
  },
  {
    id: 10,
    name: "Korv stroganoff",
    description: "Korv stroganoff med ris och persilja.",
    imageUrl:
      "https://img.koket.se/square-medium/snabbt-och-enkelt-till-vardags.jpg.webp",
    time: "30 minuter",
    ingredients: ["Falukorv", "Lök", "Tomatpuré", "Grädde", "Ris"],
  },
  {
    id: 11,
    name: "Pannkakor",
    description: "Tunna pannkakor med sylt och grädde.",
    imageUrl: "https://img.koket.se/square-medium/pannkaka-ny.jpg.webp",
    time: "20 minuter",
    ingredients: ["Mjöl", "Ägg", "Mjölk", "Smör", "Sylt"],
  },
  {
    id: 12,
    name: "Grönsakssoppa",
    description: "Värmande soppa med blandade grönsaker.",
    imageUrl: "https://img.koket.se/square-medium/gronsakssoppa.jpg.webp",
    time: "35 minuter",
    ingredients: ["Morot", "Potatis", "Lök", "Selleri", "Buljong"],
  },
  {
    id: 13,
    name: "Caesarsallad",
    description: "Sallad med kyckling, krutonger och caesardressing.",
    imageUrl:
      "https://img.koket.se/square-medium/caesarsallad-med-rakor-och-krispiga-krutonger.png.webp",
    time: "25 minuter",
    ingredients: [
      "Kyckling",
      "Romansallad",
      "Krutonger",
      "Parmesan",
      "Caesardressing",
    ],
  },
  {
    id: 14,
    name: "Kikärtsgryta",
    description: "Vegetarisk gryta med kikärtor och kokosmjölk.",
    imageUrl:
      "https://img.koket.se/square-medium/chorizo-och-kikartsgryta.jpg.webp",
    time: "40 minuter",
    ingredients: ["Kikärtor", "Kokosmjölk", "Tomat", "Lök", "Spiskummin"],
  },
  {
    id: 15,
    name: "Silltallrik",
    description: "Klassisk silltallrik med potatis och gräddfil.",
    imageUrl:
      "https://img.koket.se/square-medium/midsommarkrans-med-matjessill.png.webp",
    time: "20 minuter",
    ingredients: ["Sill", "Potatis", "Gräddfil", "Gräslök", "Ägg"],
  },
  {
    id: 16,
    name: "Våfflor",
    description: "Frasiga våfflor med sylt och grädde.",
    imageUrl:
      "https://img.koket.se/square-medium/glutenfria-vafflor-med-mandelmjol.jpg.webp",
    time: "25 minuter",
    ingredients: ["Mjöl", "Mjölk", "Smör", "Ägg", "Sylt"],
  },
  {
    id: 17,
    name: "Biff med lök",
    description: "Stekt biff med karamelliserad lök och potatis.",
    imageUrl: "https://img.koket.se/square-medium/biff-med-lok.jpg.webp",
    time: "35 minuter",
    ingredients: ["Nötkött", "Lök", "Potatis", "Smör", "Salt"],
  },
  {
    id: 18,
    name: "Risgrynsgröt",
    description: "Klassisk risgrynsgröt med kanel och socker.",
    imageUrl: "https://img.koket.se/square-medium/tomtegrot-ny.png.webp",
    time: "40 minuter",
    ingredients: ["Risgryn", "Mjölk", "Salt", "Kanel", "Socker"],
  },
  {
    id: 19,
    name: "Falukorv i ugn",
    description: "Falukorv i ugn med tomat och ost.",
    imageUrl:
      "https://img.koket.se/square-medium/halloumibakad-falukorv-2.jpg.webp",
    time: "30 minuter",
    ingredients: ["Falukorv", "Tomat", "Ost", "Senap", "Potatis"],
  },
  {
    id: 20,
    name: "Tomatsoppa",
    description: "Krämig tomatsoppa med basilika och grädde.",
    imageUrl:
      "https://img.koket.se/square-medium/planti-snabb-och-kramig-tomatsoppa.png.webp",
    time: "30 minuter",
    ingredients: ["Tomat", "Lök", "Grädde", "Basilika", "Buljong"],
  },
  {
    id: 21,
    name: "Omelett med svamp",
    description: "Luftig omelett med stekt svamp och persilja.",
    imageUrl: "https://img.koket.se/square-medium/omelett-med-svamp.jpg.webp",
    time: "15 minuter",
    ingredients: ["Ägg", "Svamp", "Mjölk", "Smör", "Persilja"],
  },
  {
    id: 22,
    name: "Kall pastasallad",
    description: "Pastasallad med grönsaker och fetaost.",
    imageUrl:
      "https://img.koket.se/square-medium/italiensk-pastasallad-med-soltorkade-tomater.jpg.webp",
    time: "20 minuter",
    ingredients: ["Pasta", "Paprika", "Gurka", "Fetaost", "Olivolja"],
  },
  {
    id: 23,
    name: "Räksmörgås",
    description: "Smörgås med handskalade räkor och majonnäs.",
    imageUrl:
      "https://img.koket.se/square-medium/catarinas-lyxiga-rakmacka.png.webp",
    time: "15 minuter",
    ingredients: ["Räkor", "Bröd", "Majonnäs", "Citron", "Dill"],
  },
  {
    id: 24,
    name: "Pulled pork",
    description: "Långkokt pulled pork med BBQ-sås och coleslaw.",
    imageUrl: "https://img.koket.se/square-medium/pulled-pork.jpg.webp",
    time: "6 timmar",
    ingredients: ["Fläskkarré", "BBQ-sås", "Coleslaw", "Bröd", "Lök"],
  },
  {
    id: 25,
    name: "Vegetarisk currygryta",
    description: "Kryddig currygryta med grönsaker och kokosmjölk.",
    imageUrl:
      "https://img.koket.se/square-medium/vegetarisk-currygryta-med-paprika.jpg.webp",
    time: "40 minuter",
    ingredients: ["Blomkål", "Kokosmjölk", "Curry", "Morot", "Lök"],
  },
];
