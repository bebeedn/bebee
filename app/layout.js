import "./globals.css";
import Providers from './components/Providers';

export const metadata = {
  title: "BE-BEE School - Приватна школа",
  description: "BE-BEE School - освітній комплекс з якісною академічною освітою, розвитком здібностей та продуманим режимом дня.",
  keywords: "приватна школа, школа, початкова школа",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
