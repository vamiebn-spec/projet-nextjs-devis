import Link from "next/link";

export const metadata = {
  title: "Tableau de bord",
  description: "Aperçu du tableau de bord Clérvis et de vos devis.",
};

const quotes = [
  {
    reference: "DV-2026-014",
    client: "Atelier Horizon",
    date: "04 nov. 2026",
    amount: "125 000 FCFA",
    status: "Envoyé",
    statusClass: "bg-blue-50 text-blue-800",
  },
  {
    reference: "DV-2026-013",
    client: "Maison Diallo",
    date: "02 nov. 2026",
    amount: "82 500 FCFA",
    status: "Accepté",
    statusClass: "bg-emerald-50 text-emerald-800",
  },
  {
    reference: "DV-2026-012",
    client: "Studio Nia",
    date: "30 oct. 2026",
    amount: "210 000 FCFA",
    status: "En attente",
    statusClass: "bg-amber-50 text-amber-800",
  },
];

const metrics = [
  { label: "Devis ce mois", value: "12", note: "+ 3 ce mois-ci" },
  { label: "En attente", value: "4", note: "À suivre" },
  { label: "Acceptés", value: "8", note: "Ce mois-ci" },
  { label: "Montant envoyé", value: "842 500", note: "FCFA · ce mois-ci" },
];

const navLink =
  "flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-[#6140d7] max-sm:justify-center max-sm:gap-1 max-sm:px-1 max-sm:text-[11px]";

export default function DashboardPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 bg-[#f8f9fc] md:grid-cols-[205px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="flex items-center justify-between border-b border-slate-200 bg-white p-3 md:sticky md:top-0 md:h-screen md:flex-col md:items-stretch md:justify-start md:border-b-0 md:border-r md:p-5 lg:p-7">
        <Link
          className="shrink-0 text-2xl font-extrabold tracking-[-0.08em] text-[#172348]"
          href="/"
          aria-label="Clérvis, accueil"
        >
          Clér<span className="text-[#7653ee]">vis</span>
        </Link>
        <p className="mb-3 mt-12 hidden text-[10px] font-extrabold tracking-[0.12em] text-slate-400 md:block">
          ESPACE DE TRAVAIL
        </p>
        <nav
          className="grid grid-cols-3 gap-1 md:grid-cols-1"
          aria-label="Navigation du tableau de bord"
        >
          <a
            className={`${navLink} bg-violet-50 text-[#6140d7]`}
            href="#overview"
          >
            <span aria-hidden="true">▦</span> Vue d’ensemble
          </a>
          <a className={navLink} href="#devis">
            <span aria-hidden="true">▤</span> Mes devis
          </a>
          <Link className={navLink} href="/connexion">
            <span aria-hidden="true">⚙</span> Mon compte
          </Link>
        </nav>
        <div className="mt-auto hidden items-center gap-3 border-t border-slate-200 pt-4 md:flex">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-100 font-bold text-[#6140d7]" aria-hidden="true">
            A
          </span>
          <div className="grid gap-0.5">
            <strong className="text-xs text-[#172348]">Alex Martin</strong>
            <span className="text-[10px] text-slate-500">Compte de démonstration</span>
          </div>
        </div>
      </aside>

      <div className="mx-auto w-full max-w-[1280px] p-4 sm:p-6 lg:p-12">
        <header className="mb-6 flex items-start justify-between gap-3">
          <div>
            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#6140d7] sm:text-xs">
              Mercredi 5 novembre 2026
            </p>
            <h1 className="m-0 text-2xl font-extrabold tracking-[-0.055em] text-[#172348] sm:text-4xl">
              Bonjour, Alex 👋
            </h1>
          </div>
          <Link
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1 rounded-xl border border-[#7653ee] bg-[#7653ee] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6140d7] sm:min-h-12 sm:gap-2 sm:px-5 sm:text-sm"
            href="/connexion"
          >
            <span aria-hidden="true">＋</span> Nouveau devis
          </Link>
        </header>

        <div
          className="mb-5 flex items-start gap-2 rounded-xl border border-violet-100 bg-violet-50 px-4 py-3 text-xs leading-relaxed text-[#172348] sm:items-center sm:text-sm"
          role="status"
        >
          <span className="font-extrabold text-[#6140d7]" aria-hidden="true">ⓘ</span>
          Aperçu de démonstration — ces devis et ces chiffres sont fictifs.
        </div>

        <section
          className="grid grid-cols-2 gap-3 lg:grid-cols-4"
          id="overview"
          aria-label="Résumé de l’activité"
        >
          {metrics.map((metric) => (
            <article
              className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5"
              key={metric.label}
            >
              <p className="m-0 text-xs text-slate-500 sm:text-sm">{metric.label}</p>
              <strong className="text-2xl font-extrabold tracking-tight text-[#172348] sm:text-3xl">
                {metric.value}
              </strong>
              <span className="text-[10px] text-slate-500 sm:text-xs">{metric.note}</span>
            </article>
          ))}
        </section>

        <section
          className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6"
          id="devis"
          aria-labelledby="quotes-title"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#6140d7]">
                Votre activité
              </p>
              <h2
                className="m-0 text-xl font-extrabold tracking-tight text-[#172348]"
                id="quotes-title"
              >
                Derniers devis
              </h2>
            </div>
            <Link
              className="text-xs font-bold text-[#6140d7] hover:text-[#172348]"
              href="/connexion"
            >
              Tout voir →
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-500">
                  <th className="px-2 py-3" scope="col">Référence</th>
                  <th className="px-2 py-3" scope="col">Client</th>
                  <th className="px-2 py-3" scope="col">Date</th>
                  <th className="px-2 py-3" scope="col">Montant</th>
                  <th className="px-2 py-3" scope="col">Statut</th>
                </tr>
              </thead>
              <tbody>
                {quotes.map((quote) => (
                  <tr
                    className="border-b border-slate-100 text-xs text-slate-700 last:border-0"
                    key={quote.reference}
                  >
                    <td className="px-2 py-4">{quote.reference}</td>
                    <td className="px-2 py-4">{quote.client}</td>
                    <td className="px-2 py-4">{quote.date}</td>
                    <td className="px-2 py-4">{quote.amount}</td>
                    <td className="px-2 py-4">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${quote.statusClass}`}>
                        {quote.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Les données réelles apparaîtront lorsque l’authentification et la
          gestion des devis seront connectées.
        </p>
      </div>
    </main>
  );
}
