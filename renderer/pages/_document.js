import Document, { Head, Main, NextScript } from "next/document";
import React from "react";
import GoogleFonts from "next-google-fonts";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Head>
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
