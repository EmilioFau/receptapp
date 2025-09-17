import { Recipe } from "../types/Recipe";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Pasta Carbonara",
    shortDescription: "Krämig pasta med bacon och parmesan.",
    description:
      "Pasta Carbonara är en klassisk italiensk pastarätt som är älskad över hela världen. Denna rätt kombinerar krämig sås gjord på ägg och parmesanost med knaperstekt bacon och nykokt pasta. Resultatet blir en smakrik och mättande måltid som passar både till vardag och fest. För bästa resultat, använd färsk parmesan och nymalen svartpeppar. Servera gärna med ett gott bröd och en fräsch sallad vid sidan om. Carbonara är enkel att laga och tar bara cirka 30 minuter från start till servering, vilket gör den perfekt för stressiga vardagskvällar eller när du vill bjuda på något extra gott utan att spendera timmar i köket.",
    imageUrl:
      "https://img.koket.se/square-medium/spaghetti-carbonara-5.jpg.webp",
    time: "30 minuter",
    ingredients: ["Pasta", "Bacon", "Parmesan", "Ägg", "Grädde"],
  },
  {
    id: 2,
    name: "Kycklinggryta",
    shortDescription: "Mustig gryta med kyckling, ris och curry.",
    imageUrl:
      "https://img.koket.se/square-medium/kycklinggryta-med-curry-ny.jpg.webp",
    description:
      "Denna kycklinggryta är en värmande och smakrik rätt som passar perfekt till både vardag och helg. Kycklingen tillagas långsamt tillsammans med curry, lök och grädde, vilket ger en mustig och krämig gryta. Servera med nykokt ris för en komplett måltid. Rätten är enkel att laga och kan varieras med olika grönsaker efter smak. Perfekt när du vill bjuda familjen på något gott och mättande.",
    time: "45 minuter",
    ingredients: ["Kyckling", "Ris", "Curry", "Lök", "Grädde"],
  },
  {
    id: 3,
    name: "Smoothie Bowl",
    shortDescription: "Fräsch smoothie med bär och banan.",
    imageUrl:
      "https://img.koket.se/square-medium/barig-smoothie-bowl-med-kokoschiapudding.jpg.webp",
    description:
      "Smoothie Bowl är en fräsch och färgglad frukost eller mellanmål som är full av vitaminer och energi. Den mixas av bär, banan och yoghurt och toppas med honung och nötter för extra crunch och sötma. Perfekt för dig som vill starta dagen med något nyttigt och gott. Dekorera gärna med dina favoritfrukter och frön för en extra vacker servering.",
    time: "15 minuter",
    ingredients: ["Bär", "Banan", "Yoghurt", "Honung", "Nötter"],
  },
  {
    id: 4,
    name: "Köttbullar med potatismos",
    shortDescription:
      "Klassiska köttbullar med krämigt potatismos och lingonsylt.",
    imageUrl:
      "https://img.koket.se/square-medium/kottbullar-med-potatismos-och-graddig-loksas.jpg.webp",
    description:
      "Köttbullar med potatismos är en riktig svensk klassiker som älskas av både stora och små. De saftiga köttbullarna serveras med ett krämigt potatismos och söt lingonsylt, vilket ger en perfekt balans mellan sälta och sötma. Rätten passar lika bra till vardags som till fest och är ett måste på det svenska julbordet.",
    time: "40 minuter",
    ingredients: ["Köttfärs", "Potatis", "Mjölk", "Smör", "Lingonsylt"],
  },
  {
    id: 5,
    name: "Lax i ugn",
    shortDescription: "Ugnsbakad lax med citron och dill.",
    imageUrl:
      "https://img.koket.se/square-medium/lax-i-ugn-med-krispigt-orttacke-och-potatismos-ny.png.webp",
    description:
      "Lax i ugn är en enkel och god rätt som passar perfekt till både lunch och middag. Laxen bakas i ugnen tillsammans med citron och dill, vilket ger en frisk och aromatisk smak. Servera med kokt potatis och en klick gräddfil för en komplett måltid. Rätten är både nyttig och mättande och uppskattas av hela familjen.",
    time: "35 minuter",
    ingredients: ["Lax", "Citron", "Dill", "Potatis", "Grädde"],
  },
  {
    id: 6,
    name: "Vegetarisk lasagne",
    shortDescription: "Lasagne med spenat, zucchini och ricotta.",
    imageUrl:
      "https://img.koket.se/square-medium/dantes-vegetariska-lasagne.png.webp",
    description:
      "Vegetarisk lasagne är ett utmärkt alternativ för dig som vill äta mer grönt. Denna lasagne är fylld med spenat, zucchini och ricotta, vilket ger en krämig och smakrik rätt. Tomatsåsen binder ihop smakerna och gör lasagnen extra saftig. Servera gärna med en fräsch sallad vid sidan om.",
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
    shortDescription: "Gratinerad fisk med potatismos och dill.",
    imageUrl:
      "https://img.koket.se/square-medium/abba-lyxig-laxgratang.jpg.webp",
    description:
      "Fiskgratäng är en klassisk rätt där fiskfilé gratineras tillsammans med potatismos, dill och ost. Den krämiga gratängen är både mättande och smakrik och passar perfekt till både vardag och helg. Servera gärna med en grönsallad för en komplett måltid.",
    time: "45 minuter",
    ingredients: ["Fiskfilé", "Potatis", "Dill", "Grädde", "Ost"],
  },
  {
    id: 8,
    name: "Raggmunk med fläsk",
    shortDescription: "Stekta raggmunkar med knaperstekt fläsk och lingon.",
    imageUrl:
      "https://img.koket.se/square-medium/raggmunk-med-flask-och-lingonsylt.jpg.webp",
    description:
      "Raggmunk med fläsk är en klassisk svensk husmanskost. De frasiga potatisplättarna steks gyllene och serveras med knaperstekt fläsk och lingon. Kombinationen av sälta och sötma gör rätten till en favorit hos många. Perfekt som lunch eller middag under årets kallare månader.",
    time: "30 minuter",
    ingredients: ["Potatis", "Mjöl", "Ägg", "Fläsk", "Lingon"],
  },
  {
    id: 9,
    name: "Tacos",
    shortDescription: "Klassiska tacos med köttfärs, grönsaker och salsa.",
    imageUrl: "https://img.koket.se/cinema-mega/koreanska-tacos.png.webp",
    description:
      "Tacos är en populär rätt som går hem hos både barn och vuxna. Fyll tortillabröd med köttfärs, sallad, tomat och salsa för en smakrik och festlig måltid. Tacos är perfekt för fredagsmyset och kan enkelt anpassas efter egna önskemål och smaker.",
    time: "25 minuter",
    ingredients: ["Tortilla", "Köttfärs", "Sallad", "Tomat", "Salsa"],
  },
  {
    id: 10,
    name: "Korv stroganoff",
    shortDescription: "Korv stroganoff med ris och persilja.",
    imageUrl:
      "https://img.koket.se/square-medium/snabbt-och-enkelt-till-vardags.jpg.webp",
    description:
      "Korv stroganoff är en snabblagad och god vardagsrätt som uppskattas av hela familjen. Den krämiga såsen med falukorv, lök och tomatpuré serveras med ris och färsk persilja. En klassiker som går hem hos både stora och små.",
    time: "30 minuter",
    ingredients: ["Falukorv", "Lök", "Tomatpuré", "Grädde", "Ris"],
  },
  {
    id: 11,
    name: "Pannkakor",
    shortDescription: "Tunna pannkakor med sylt och grädde.",
    imageUrl: "https://img.koket.se/square-medium/pannkaka-ny.jpg.webp",
    description:
      "Pannkakor är en älskad klassiker som passar lika bra till frukost som till efterrätt. Servera de tunna pannkakorna med sylt och grädde för en riktigt god och lyxig måltid. Perfekt att laga tillsammans med barnen på helgen.",
    time: "20 minuter",
    ingredients: ["Mjöl", "Ägg", "Mjölk", "Smör", "Sylt"],
  },
  {
    id: 12,
    name: "Grönsakssoppa",
    shortDescription: "Värmande soppa med blandade grönsaker.",
    imageUrl: "https://img.koket.se/square-medium/gronsakssoppa.jpg.webp",
    description:
      "Grönsakssoppa är en värmande och nyttig rätt som passar perfekt under årets kallare månader. Soppan är fylld med blandade grönsaker och smaksatt med buljong. Servera gärna med ett gott bröd vid sidan om för en komplett måltid.",
    time: "35 minuter",
    ingredients: ["Morot", "Potatis", "Lök", "Selleri", "Buljong"],
  },
  {
    id: 13,
    name: "Caesarsallad",
    shortDescription: "Sallad med kyckling, krutonger och caesardressing.",
    imageUrl:
      "https://img.koket.se/square-medium/caesarsallad-med-rakor-och-krispiga-krutonger.png.webp",
    description:
      "Caesarsallad är en fräsch och matig sallad som kombinerar saftig kyckling, krispiga krutonger och en krämig caesardressing. Perfekt som lunch eller lättare middag, och kan enkelt varieras med olika grönsaker eller protein. Toppa med rikligt med parmesan för extra smak.",
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
    shortDescription: "Vegetarisk gryta med kikärtor och kokosmjölk.",
    imageUrl:
      "https://img.koket.se/square-medium/chorizo-och-kikartsgryta.jpg.webp",
    description:
      "Kikärtsgryta är en mustig och vegetarisk rätt som är full av smak och näring. Kikärtor kokas tillsammans med kokosmjölk, tomat och kryddor för en krämig och värmande gryta. Servera med ris eller bröd för en komplett måltid.",
    time: "40 minuter",
    ingredients: ["Kikärtor", "Kokosmjölk", "Tomat", "Lök", "Spiskummin"],
  },
  {
    id: 15,
    name: "Silltallrik",
    shortDescription: "Klassisk silltallrik med potatis och gräddfil.",
    imageUrl:
      "https://img.koket.se/square-medium/midsommarkrans-med-matjessill.png.webp",
    description:
      "Silltallrik är en klassisk svensk rätt som ofta serveras vid högtider som midsommar och jul. Den består av inlagd sill, kokt potatis, gräddfil och gräslök, samt kokt ägg. En fräsch och traditionell rätt som passar perfekt på buffébordet.",
    time: "20 minuter",
    ingredients: ["Sill", "Potatis", "Gräddfil", "Gräslök", "Ägg"],
  },
  {
    id: 16,
    name: "Våfflor",
    shortDescription: "Frasiga våfflor med sylt och grädde.",
    imageUrl:
      "https://img.koket.se/square-medium/glutenfria-vafflor-med-mandelmjol.jpg.webp",
    description:
      "Våfflor är en älskad klassiker som passar lika bra till frukost som till fika. De frasiga våfflorna serveras traditionellt med sylt och grädde, men kan även toppas med färska bär eller glass. Perfekt att laga tillsammans med familj och vänner.",
    time: "25 minuter",
    ingredients: ["Mjöl", "Mjölk", "Smör", "Ägg", "Sylt"],
  },
  {
    id: 17,
    name: "Biff med lök",
    shortDescription: "Stekt biff med karamelliserad lök och potatis.",
    imageUrl: "https://img.koket.se/square-medium/biff-med-lok.jpg.webp",
    description:
      "Biff med lök är en klassisk husmanskost där stekt biff serveras med karamelliserad lök och potatis. Denna rätt är både mättande och smakrik, och passar perfekt som en rejäl middag. Servera gärna med inlagd gurka och brunsås för extra smak.",
    time: "35 minuter",
    ingredients: ["Nötkött", "Lök", "Potatis", "Smör", "Salt"],
  },
  {
    id: 18,
    name: "Risgrynsgröt",
    shortDescription: "Klassisk risgrynsgröt med kanel och socker.",
    imageUrl: "https://img.koket.se/square-medium/tomtegrot-ny.png.webp",
    description:
      "Risgrynsgröt är en traditionell svensk frukosträtt, särskilt populär under vinterhalvåret och till jul. Gröten kokas långsamt för att bli riktigt krämig och serveras med kanel och socker. Perfekt att njuta av en kall morgon.",
    time: "40 minuter",
    ingredients: ["Risgryn", "Mjölk", "Salt", "Kanel", "Socker"],
  },
  {
    id: 19,
    name: "Falukorv i ugn",
    shortDescription: "Falukorv i ugn med tomat och ost.",
    imageUrl:
      "https://img.koket.se/square-medium/halloumibakad-falukorv-2.jpg.webp",
    description:
      "Falukorv i ugn är en enkel och god vardagsrätt där falukorv gratineras med tomat och ost. Servera med kokt potatis och en klick senap för en klassisk svensk måltid som går hem hos både stora och små.",
    time: "30 minuter",
    ingredients: ["Falukorv", "Tomat", "Ost", "Senap", "Potatis"],
  },
  {
    id: 20,
    name: "Tomatsoppa",
    shortDescription: "Krämig tomatsoppa med basilika och grädde.",
    imageUrl:
      "https://img.koket.se/square-medium/planti-snabb-och-kramig-tomatsoppa.png.webp",
    description:
      "Tomatsoppa är en krämig och smakrik soppa som passar perfekt som lunch eller lättare middag. Den är enkel att laga och får extra smak av basilika och grädde. Servera gärna med ett gott bröd vid sidan om.",
    time: "30 minuter",
    ingredients: ["Tomat", "Lök", "Grädde", "Basilika", "Buljong"],
  },
  {
    id: 21,
    name: "Omelett med svamp",
    shortDescription: "Luftig omelett med stekt svamp och persilja.",
    imageUrl: "https://img.koket.se/square-medium/omelett-med-svamp.jpg.webp",
    description:
      "Omelett med svamp är en snabb och enkel rätt som passar perfekt till frukost, lunch eller middag. Den luftiga omeletten fylls med stekt svamp och persilja för extra smak. Servera gärna med en fräsch sallad vid sidan om.",
    time: "15 minuter",
    ingredients: ["Ägg", "Svamp", "Mjölk", "Smör", "Persilja"],
  },
  {
    id: 22,
    name: "Kall pastasallad",
    shortDescription: "Pastasallad med grönsaker och fetaost.",
    imageUrl:
      "https://img.koket.se/square-medium/italiensk-pastasallad-med-soltorkade-tomater.jpg.webp",
    description:
      "Kall pastasallad är en fräsch och mättande rätt som passar perfekt till picknick eller sommarbuffé. Salladen innehåller pasta, grönsaker och fetaost och kan enkelt varieras efter smak. Ringla över lite olivolja för extra smak.",
    time: "20 minuter",
    ingredients: ["Pasta", "Paprika", "Gurka", "Fetaost", "Olivolja"],
  },
  {
    id: 23,
    name: "Räksmörgås",
    shortDescription: "Smörgås med handskalade räkor och majonnäs.",
    imageUrl:
      "https://img.koket.se/square-medium/catarinas-lyxiga-rakmacka.png.webp",
    description:
      "Räksmörgås är en lyxig och klassisk svensk smörgås som toppas med handskalade räkor, majonnäs, citron och dill. Perfekt som lunch eller på en festlig buffé. Servera gärna med ett glas kallt vitt vin.",
    time: "15 minuter",
    ingredients: ["Räkor", "Bröd", "Majonnäs", "Citron", "Dill"],
  },
  {
    id: 24,
    name: "Pulled pork",
    shortDescription: "Långkokt pulled pork med BBQ-sås och coleslaw.",
    imageUrl: "https://img.koket.se/square-medium/pulled-pork.jpg.webp",
    description:
      "Pulled pork är en långkokt rätt där fläskkarré tillagas långsamt tills köttet blir riktigt mört och lätt kan dras isär. Servera med BBQ-sås, coleslaw och bröd för en smakrik och mättande måltid som passar perfekt till större sällskap.",
    time: "6 timmar",
    ingredients: ["Fläskkarré", "BBQ-sås", "Coleslaw", "Bröd", "Lök"],
  },
  {
    id: 25,
    name: "Vegetarisk currygryta",
    shortDescription: "Kryddig currygryta med grönsaker och kokosmjölk.",
    imageUrl:
      "https://img.koket.se/square-medium/vegetarisk-currygryta-med-paprika.jpg.webp",
    description:
      "Vegetarisk currygryta är en smakrik och färgstark rätt fylld med grönsaker och kryddor. Blomkål, morot och lök kokas tillsammans med kokosmjölk och curry för en krämig och värmande gryta. Servera med ris eller naanbröd.",
    time: "40 minuter",
    ingredients: ["Blomkål", "Kokosmjölk", "Curry", "Morot", "Lök"],
  },
];
