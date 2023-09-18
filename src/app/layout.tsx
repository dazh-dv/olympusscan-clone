import "./globals.css";
import { Poppins, Cabin_Condensed } from "next/font/google";
import Provider from "./provider";

const poppins = Poppins({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-poppins",
});

const cabin_condensed = Cabin_Condensed({
  display: "swap",
  style: "normal",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-cabin",
});

async function getAuth(){
  return undefined
}

export default async function RootLayout({ children }:{ children: React.ReactNode }) {

  const auth = await getAuth()

  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${cabin_condensed.variable}`}
      >
        <Provider auth={auth}>
          <div className="bg-gray-900 min-h-screen">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}