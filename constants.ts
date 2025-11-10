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
  },
   {
    id: "podere-la-chiusella",
    title: "Podere La Chiusella",
    location: "Toscana",
    imageSrc: "https://cf.bstatic.com/xdata/images/hotel/max300/4536919.jpg?k=78df0e55a9782629b87b06272766457b211089e5f7db086cb0f505059a6a2fd9&o=",
    details: [
      "xxx",
      "xxx",
      "xxx",
      
      ,
    ],
    costs: [
      { label: "Costo totale casa", value: "€ xxx" },
      { label: "Ingresso terme Vip (tutto il giorno incluso kit spa)", value: "€ xx" },
    ],
    availability: "febbraio - marzo",
    websiteUrl: "https://www.booking.com/hotel/it/podere-la-chiusella.it.html?aid=1595955&label=viam%7Csearch_extension%7Cit%7Citinerary.search%7Cdesktop%7C%7CRoma%7C%7C%7COff%7C%7C%7C%7C%7C%7C%7C1762609581979%7Citinerary_edit%7C&sid=d8dbf878e24471869f09c3d8f48b42d7&all_sr_blocks=23699107_326133259_4_0_0%2C23699105_326133259_3_0_0%2C23699110_326133259_7_0_0&checkin=2026-03-14&checkout=2026-03-15&dest_id=-126112&dest_type=city&dist=0&group_adults=14&group_children=0&hapos=2&highlighted_blocks=23699107_326133259_4_0_0%2C23699105_326133259_3_0_0%2C23699110_326133259_7_0_0&hpos=2&matching_block_id=23699107_326133259_4_0_0&no_rooms=1&req_adults=14&req_children=0&room1=A%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=23699107_326133259_4_0_0__20031%2C23699105_326133259_3_0_0__15563%2C23699110_326133259_7_0_0__40420&srepoch=1762806608&srpvid=725b8fa535b40222&type=total&ucfs=1&#hotelTmpl",
    distanceFromRome: "~2h 10min"
  }
];