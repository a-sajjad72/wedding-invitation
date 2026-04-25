import "./globals.css";

export const metadata = {
  title: "Wedding Invitation",
  description: "Wedding invitation hosted via Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
