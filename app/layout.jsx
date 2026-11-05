import "./globals.css";

export const metadata = {
  title: {
    default: "Clérvis — Créez vos devis professionnels simplement",
    template: "%s | Clérvis",
  },
  description:
    "Créez, partagez et suivez vos devis simplement avec Clérvis, la solution pensée pour les indépendants et les PME.",
  applicationName: "Clérvis",
  openGraph: {
    title: "Clérvis — Créez vos devis professionnels simplement",
    description:
      "Gagnez du temps et simplifiez la gestion de vos devis avec Clérvis.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#172348",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
