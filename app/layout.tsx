import "./globals.css";
import { ReactNode } from "react";

const TITLE = "Hello from Agentic App";
const DESCRIPTION = "Interactive greeting experience generated autonomously.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
