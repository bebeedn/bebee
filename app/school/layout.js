// Серверный компонент с мета-тегами для SEO
export const metadata = {
  title: "BeBee School - Приватна початкова школа у Дніпрі (1-4 класи) | НУШ",
  description: "Приватна початкова школа BeBee у Дніпрі. Навчання за програмою НУШ, малочисельні класи до 15 учнів, англійська мова, антигаджетна школа. Повний день з 8:30 до 18:00. Запис у 1, 2, 3, 4 класи відкрито!",
  keywords: "приватна школа Дніпро, початкова школа, НУШ, 1 клас, 2 клас, 3 клас, 4 клас, англійська мова, малочисельні класи, антигаджетна школа, BeBee School",
  openGraph: {
    title: "BeBee School - Приватна початкова школа у Дніпрі",
    description: "Навчання за програмою НУШ, малочисельні класи до 15 учнів, англійська мова. Запис відкрито!",
    url: 'https://bebee.dp.ua/school',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bebee.dp.ua/school',
  },
};

export default function SchoolLayout({ children }) {
  return children;
}
