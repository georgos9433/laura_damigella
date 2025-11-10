import type { BacheloretteOption } from './types';

export const BRIDE_NAME: string = "Eleonora"; // <-- CAMBIA QUI IL NOME DELLA SPOSA

export const PARTY_OPTIONS: BacheloretteOption[] = [
  {
    id: "torre-del-nera",
    title: "Torre del Nera",
    location: "Umbria",
    imageSrc: "https://www.torredelnera.it/wp-content/uploads/2022/11/hotel-diffuso-spa-torre-del-nera-scheggino-umbria-valnerina.jpg",
    details: [
      "Camere distribuite nel borgo medievale",
      "Pernotto e prima colazione inclusi",
      "Ristorante tipico",
      "Centro benessere (2.5 ore a €35/persona)",
    ],
    costs: [
      { label: "Costo medio", value: "€85 /notte" },
    ],
    availability: "Febbraio / Marzo",
    websiteUrl: "https://www.torredelnera.it/",
    specialNote: "Possibilità di regalare un massaggio alla sposa",
    distanceFromRome: "~1h 45min"
  },
  {
    id: "orto-delle-terme",
    title: "Orto delle Terme",
    location: "Toscana",
    imageSrc: "https://www.albergoleterme.it/uploads/ortodelleterme_007.jpg",
    details: [
      "Camere eleganti con colazione",
      "Accesso illimitato al centro benessere",
    ],
    costs: [
      { label: "Opzione A", value: "€155 (notte, colazione, spa)" },
      { label: "Opzione B", value: "€200 (notte, colazione, cena, spa)" }
    ],
    availability: "Febbraio / Marzo (escluso 14/02)",
    websiteUrl: "https://www.albergoleterme.it/bnb-orto-delle-terme",
    distanceFromRome: "~2h 10min"
  },
  {
    id: "castel-petroso",
    title: "Castel Petroso",
    location: "Molise",
    imageSrc: "https://fontedelbenessereresort.it/img/config/sections/2/castelpetroso.jpeg",
    details: [
      "5 suite disponibili (ognuna per 3 persone)",
      "Colazione inclusa nel prezzo",
      "Accesso alla SPA compreso",
    ],
    costs: [
      { label: "Costo suite", value: "€430 (€143/persona)" },
      { label: "Cena Gourmet (opzionale)", value: "€50/persona (bevande escluse)" },
      { label: "Light Lunch (opzionale)", value: "€25/persona (bevande escluse)" }
    ],
    availability: "Febbraio / Marzo",
    websiteUrl: "https://www.fontedelbenessereresort.it/",
    isBestValue: true,
    distanceFromRome: "~2h 10min"
  },
  {
    id: "borgo-tufi",
    title: "Borgo Tufi",
    location: "Molise",
    imageSrc: "https://www.borgotufi.it/images/borgotufi.jpg",
    details: [
      "3 casette per 3 persone e 3 camere da 2.",
      "Colazione inclusa",
      "Svariate attività: trekking, ciaspolate, apicoltura.",
    ],
    costs: [
      { label: "Costo a persona", value: "€72" },
      { label: "Accesso SPA (2 ore)", value: "€40 a persona" },
      { label: "Totale alloggio (15p)", value: "€1089" },
    ],
    availability: "28/02 - 01/03",
    websiteUrl: "https://www.borgotufi.it/",
    distanceFromRome: "~2h 30min"
  },
  {
    id: "villa-della-luce-dorata",
    title: "Villa della luce dorata",
    location: "Toscana",
    imageSrc: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-942620410116084756/original/d99dfda1-1f1d-455c-8aa1-0cb344153c51.jpeg?im_w=960",
    details: [
      "Casa intera per 15 persone",
      "Colazione inclusa",
      "Possibilità di pranzo e cena",
      "Vicino alle Terme di Rapolano"
      ,
    ],
    costs: [
      { label: "Costo totale casa", value: "€ 1280" },
      { label: "Ingresso terme Vip (tutto il giorno incluso kit spa)", value: "€ 65" },
    ],
    availability: "febbraio - marzo",
    websiteUrl: "https://www.airbnb.it/rooms/942620410116084756?adults=15&check_in=2026-02-14&check_out=2026-02-15&search_mode=regular_search&source_impression_id=p3_1762804975_P3xw3yK8uxdJK1J9&previous_page_section_name=1000&federated_search_id=d51808f2-19b4-4de2-b86b-d799d2f233e7",
    distanceFromRome: "~2h 10min"
  }
];