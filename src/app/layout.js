import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "Criando um app next",
  description: "Descrição do meu app next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
