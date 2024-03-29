export const frontObj1 = {
  id: "about",
  dark: true,
  darkText: false,
  topLine: "Kim jesteśmy?",
  headline: "O nas",
  SubtitleDark: "false",
  description:
    " Jesteśmy grupą studentów zainteresowanych bezpieczeństwem systemów i sieci komputerowych, testami penetracyjnymi, ochroną tożsamości i bezpieczeństwem informacji. Działamy na Politechnice Rzeszowskiej od 2012 roku. Jeśli interesujesz się cyberbezpieczeństwem i chcesz poszerzyć swoją wiedzę oraz nabyć nowe umiejętności - dołącz do nas! Corocznie w siedzibie Politechniki prowadzimy konferencję na którą zapraszamy prelegentów ze świata bezpieczeństwa IT. ",
  buttonText: "Konferencja",
  imgStart: false,
  src: "/img/about-us.png",
  alt: "O nas grafika osoby",
  primary: true,
  to: "conference",
  btnHidden: true,
};

export const frontObj2 = {
  id: "conference",
  dark: false,
  darkText: true,
  topLine: "Coroczny event",
  headline: "Konferencja",
  SubtitleDark: "false",
  description:
    "Założeniem konferencji jest zaprezentowanie wyników prac badawczych realizowanych przez doktorantów i studentów polskich uczelni oraz przedstawienie najnowszych trendów dotyczących cyberbezpieczeństwa przez ekspertów z branży informatycznej. Jednocześnie jej celem jest wymiana doświadczeń w zakresie bezpieczeństwa: aplikacji, informacji, systemów informatycznych oraz sieci komputerowych, a także zwiększanie świadomości społecznej dotyczącej zagrożeń cybernetycznych. ",
  buttonText: "Konferencja",
  imgStart: true,
  src: "/img/conference.svg",
  alt: "Konferencja osoba",
  primary: true,
  to: "projects",
  btnLink: "https://konf.sasit.prz.edu.pl/", //doesn't work, idk why, i'll set it statically in index.js
};
