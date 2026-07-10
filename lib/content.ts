export type NavItem = {
  label: string;
  href: string;
  hash: string;
};

export const nav: NavItem[] = [
  { label: "O mnie", href: "#o-mnie", hash: "0x02" },
  { label: "Stack", href: "#stack", hash: "0x03" },
  { label: "Usługi", href: "#uslugi", hash: "0x04" },
  { label: "Proces", href: "#proces", hash: "0x05" },
  { label: "Portfolio", href: "#portfolio", hash: "0x06" },
  { label: "FAQ", href: "#faq", hash: "0x07" },
  { label: "Kontakt", href: "#kontakt", hash: "0x08" },
];

export const railSections = [
  { id: "hero", hash: "0x01", label: "Start" },
  ...nav.map((item) => ({
    id: item.href.replace("#", ""),
    hash: item.hash,
    label: item.label,
  })),
];

export const siteConfig = {
  name: "Dawid Bubernak",
  role: "Fullstack Developer — AI & Blockchain",
  location: "Katowice, Polska",
  email: "dawid.bubernak@gmail.com",
  phone: null as string | null,
  yearsExperience: 7,
  domain: "dawidbubernak.pl",
  social: {
    github: "https://github.com/BuberDev",
    linkedin: "https://de.linkedin.com/in/dawid-bubernak-90554220a/en",
    x: "https://x.com/DBubernak",
  },
};

export const hero = {
  eyebrow: "Fullstack · AI · Blockchain",
  headlineLead: "Buduję produkty na pograniczu ",
  headlineHighlight: "sztucznej inteligencji i Web3.",
  subheadline:
    "Od siedmiu lat projektuję i wdrażam aplikacje webowe, systemy AI oraz rozwiązania blockchain — od pierwszej linii kodu po produkcyjne wdrożenie.",
  primaryCta: { label: "Napisz do mnie", href: "#kontakt" },
  secondaryCta: { label: "Zobacz portfolio", href: "#portfolio" },
  stats: [
    { value: "7", suffix: "+", label: "lat doświadczenia" },
    { value: "25", suffix: "+", label: "zrealizowanych projektów" },
    { value: "2", suffix: "", label: "specjalizacje: AI i Blockchain" },
  ],
};

export const about = {
  heading: "O mnie",
  paragraphs: [
    "Nazywam się Dawid Bubernak i od siedmiu lat pracuję jako fullstack developer. Specjalizuję się w dwóch obszarach, które rzadko spotyka się u jednej osoby: wdrożeniach sztucznej inteligencji oraz technologii blockchain — a przy okazji projektuję i buduję strony internetowe dla firm z bardzo różnych branż.",
    "Pracuję z klientami na każdym etapie — od konsultacji technologicznej, przez architekturę systemu, po wdrożenie i wsparcie po starcie produkcyjnym. Zależy mi na rozwiązaniach, które działają w praktyce, są mierzalne i przynoszą realną wartość biznesową, a nie tylko dobrze wyglądają na slajdzie.",
    "Mieszkam i pracuję z Katowic, współpracując zdalnie z klientami w Polsce i za granicą.",
  ],
  facts: [
    { label: "Lokalizacja", value: "Katowice, Polska" },
    { label: "Doświadczenie", value: "7 lat w branży" },
    { label: "Specjalizacje", value: "AI · Blockchain · Web" },
    { label: "Tryb pracy", value: "Zdalnie / hybrydowo" },
  ],
};

export type SkillGroup = {
  category: string;
  hash: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    hash: "0x01",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    hash: "0x02",
    skills: ["Node.js", "Python", "PostgreSQL", "REST / GraphQL"],
  },
  {
    category: "AI / ML",
    hash: "0x03",
    skills: ["Integracje LLM", "LangChain", "OpenAI API", "Automatyzacje AI"],
  },
  {
    category: "Blockchain",
    hash: "0x04",
    skills: ["Solidity", "Ethereum / EVM", "Ethers.js", "Smart kontrakty"],
  },
  {
    category: "DevOps / Cloud",
    hash: "0x05",
    skills: ["Vercel", "Docker", "AWS", "CI/CD"],
  },
];

export type Service = {
  title: string;
  hash: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    title: "Strony i aplikacje internetowe",
    hash: "0x01",
    description:
      "Nowoczesne, szybkie i responsywne strony oraz aplikacje webowe budowane w Next.js — od wizytówki po rozbudowany system webowy.",
    points: [
      "Strony firmowe i wizytówki",
      "Sklepy i aplikacje webowe",
      "Optymalizacja pod SEO i wydajność",
    ],
  },
  {
    title: "Wdrożenia AI i automatyzacje",
    hash: "0x02",
    description:
      "Integracja modeli językowych i automatyzacja procesów biznesowych — od chatbotów po analizę i przetwarzanie danych.",
    points: [
      "Integracje z modelami LLM",
      "Automatyzacja procesów biznesowych",
      "Chatboty i asystenci AI",
    ],
  },
  {
    title: "Blockchain i smart kontrakty",
    hash: "0x03",
    description:
      "Projektowanie i wdrażanie smart kontraktów oraz integracja aplikacji z sieciami blockchain.",
    points: [
      "Smart kontrakty (Solidity)",
      "Integracje Web3 z aplikacją",
      "Tokenizacja i mechanizmy on-chain",
    ],
  },
  {
    title: "Konsulting techniczny",
    hash: "0x04",
    description:
      "Wsparcie w wyborze technologii, architekturze systemu i przeglądzie istniejącego kodu.",
    points: [
      "Architektura i dobór technologii",
      "Code review i audyt techniczny",
      "Wsparcie zespołów deweloperskich",
    ],
  },
];

export type ProcessStep = {
  hash: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    hash: "0x01",
    title: "Konsultacja",
    description:
      "Rozmawiamy o Twoim projekcie, celach biznesowych i ograniczeniach technicznych.",
  },
  {
    hash: "0x02",
    title: "Wycena i plan",
    description:
      "Przygotowuję zakres prac, harmonogram i wycenę dopasowaną do budżetu i priorytetów.",
  },
  {
    hash: "0x03",
    title: "Realizacja",
    description:
      "Buduję rozwiązanie iteracyjnie, z regularnymi checkpointami i możliwością wglądu w postęp prac.",
  },
  {
    hash: "0x04",
    title: "Wdrożenie",
    description:
      "Uruchamiam produkt na produkcji — z testami, monitoringiem i dokumentacją.",
  },
  {
    hash: "0x05",
    title: "Wsparcie",
    description:
      "Zostaję przy projekcie po starcie — poprawki, rozwój funkcji i wsparcie techniczne.",
  },
];

export type PortfolioProject = {
  name: string;
  hash: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

export const portfolio: PortfolioProject[] = [
  {
    name: "Tensor Deep",
    hash: "0x01",
    category: "AI / Automatyzacja",
    description:
      "Strona usługowa firmy wdrażającej rozwiązania AI i machine learning dla biznesu.",
    tags: ["Next.js", "AI", "Automatyzacja"],
    image: "/portfolio/tensordeep.jpg",
    url: "https://tensordeep.pl",
  },
  {
    name: "Mint Write",
    hash: "0x02",
    category: "Web3 / Blockchain",
    description:
      "Platforma treści technicznych dla projektów Web3 — dokumentacja, tokenomika i komunikacja produktowa.",
    tags: ["Next.js", "Web3", "Blockchain"],
    image: "/portfolio/mintwrite.jpg",
    url: "https://mintwrite.com",
  },
  {
    name: "Security Mood",
    hash: "0x03",
    category: "E-commerce",
    description:
      "Sklep z wyposażeniem do zabezpieczeń i przygotowania kryzysowego, z animowaną wizualizacją 3D w hero.",
    tags: ["Next.js", "E-commerce", "3D"],
    image: "/portfolio/securitymood.jpg",
    url: "https://securitymood.pl",
  },
  {
    name: "Adamo Media",
    hash: "0x04",
    category: "Marketing / Media",
    description:
      "Strona agencji pomagającej twórcom zamienić social media w dochodowy biznes.",
    tags: ["Next.js", "Marketing", "Branding"],
    image: "/portfolio/adamomedia.jpg",
    url: "https://adamomedia.pl",
  },
  {
    name: "Lux Aura Care",
    hash: "0x05",
    category: "E-commerce / Beauty",
    description:
      "Redakcyjno-sklepowa strona kosmetyczna z animowaną prezentacją produktów na ciemnym tle.",
    tags: ["Next.js", "E-commerce", "Beauty"],
    image: "/portfolio/luxauracare.jpg",
    url: "https://luxauracare.pl",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Jak wygląda proces współpracy?",
    answer:
      "Zaczynamy od konsultacji i ustalenia zakresu, następnie przygotowuję wycenę i plan działania. Pracuję iteracyjnie, więc na bieżąco widzisz postęp i możesz zgłaszać uwagi.",
  },
  {
    question: "Ile trwa realizacja projektu?",
    answer:
      "To zależy od zakresu — prosta strona wizytówkowa to zwykle 1-2 tygodnie, a rozbudowana aplikacja z integracją AI lub blockchain może zająć od kilku do kilkunastu tygodni. Dokładny czas ustalamy po konsultacji.",
  },
  {
    question: "Czy pracujesz zdalnie?",
    answer:
      "Tak, pracuję zdalnie z Katowic i współpracuję z klientami z całej Polski oraz zagranicy. Komunikacja odbywa się przez e-mail, wideorozmowy i narzędzia do zarządzania projektem.",
  },
  {
    question: "Jakich technologii używasz?",
    answer:
      "Głównie Next.js, React i TypeScript na froncie, Node.js i Python na backendzie, a przy projektach AI i blockchain — integracje z modelami LLM oraz Solidity i sieci EVM. Pełną listę znajdziesz w sekcji Stack.",
  },
  {
    question: "Czy zajmujesz się też utrzymaniem po wdrożeniu?",
    answer:
      "Tak — po wdrożeniu zostaję przy projekcie: poprawki, rozwój nowych funkcji i wsparcie techniczne w razie problemów.",
  },
  {
    question: "Jak wygląda wycena?",
    answer:
      "Wycena zależy od zakresu i złożoności projektu. Po konsultacji przygotowuję konkretną ofertę — bez ukrytych kosztów.",
  },
];

export const contact = {
  heading: "Porozmawiajmy o Twoim projekcie",
  description:
    "Napisz, czym się zajmujesz i z jakim wyzwaniem się mierzysz — odezwę się z konkretną propozycją współpracy.",
};
