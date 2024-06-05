import React from "react";
import "./globals.css";
import Header from "./components/Header";
import Providers from "./Providers";
import Tabs from "./components/Tabs";
export const metadata = {
  title: "MovieApp",
  description: "film project movie app",
};

const Layout = ({ children }) => {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <Header />
          <Tabs/>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
