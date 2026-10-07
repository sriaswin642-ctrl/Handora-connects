import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handora Connects",
  description: "Connect customers and creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
