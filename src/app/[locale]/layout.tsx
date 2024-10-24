import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { ANTDProvider } from "../../providers/antd";

export const metadata: Metadata = {
  title: { template: "%s | Blog", default: "Home | Blog" },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ANTDProvider>{children}</ANTDProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
