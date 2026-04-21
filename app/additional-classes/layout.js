// Серверный компонент с мета-тегами для SEO
export const metadata = {
  title: "Додаткові заняття для дітей у Дніпрі | Гурткова робота BeBee",
  description: "Додаткові заняття та гуртки для дітей у BeBee: малювання, таеквон-до, джиу-джитсу, шиття, вокал, барабани, фортепіано, гітара, англійська мова, логопед, швидкочитання. Групові та індивідуальні заняття. Запис відкрито!",
  keywords: "додаткові заняття для дітей Дніпро, гуртки для дітей, малювання, таеквон-до, джиу-джитсу, вокал, музика для дітей, англійська мова, логопед, BeBee",
  openGraph: {
    title: "Додаткові заняття для дітей у Дніпрі | BeBee",
    description: "Гуртки та додаткові заняття: малювання, спорт, музика, мови. Запис відкрито!",
    url: 'https://bebee.dp.ua/additional-classes',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bebee.dp.ua/additional-classes',
  },
};

export default function AdditionalClassesLayout({ children }) {
  return children;
}
