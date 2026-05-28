

import "./globals.css";
import barra from "./barra.module.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <header>
          <nav>
                <ul className={barra.barra}>
                  <li>Valor</li>
                  <li>Vendas</li>
                  <li>Balanço</li>
                  <li>Lucro</li>
                </ul>
          </nav>

      </header>
      <main>
      </main>

      {children}
      </body>
    </html>
  );
}
