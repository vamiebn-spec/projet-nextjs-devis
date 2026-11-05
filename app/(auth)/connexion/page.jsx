import Link from "next/link";

export const metadata = {
  title: "Connexion",
  description: "Accédez à votre espace Clérvis.",
};

export default function LoginPage() {
  return (
    <main className="w-full max-w-[480px] rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(23,35,72,0.09)] sm:p-12">
      <Link
        className="mb-8 inline-block text-3xl font-extrabold tracking-[-0.08em] text-[#172348]"
        href="/"
      >
        Clér<span className="text-[#7653ee]">vis</span>
      </Link>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6140d7]">
        Votre espace professionnel
      </p>
      <h1 className="m-0 text-4xl font-extrabold tracking-[-0.06em] text-[#172348]">
        Connexion
      </h1>
      <p className="my-4 leading-relaxed text-slate-500">
        Retrouvez votre espace Clérvis et le suivi de vos devis.
      </p>
      <div
        className="rounded-2xl border border-violet-100 bg-violet-50 p-4 text-[#172348]"
        role="status"
      >
        <strong className="text-sm">Connexion bientôt disponible</strong>
        <p className="mb-0 mt-2 text-sm leading-relaxed text-slate-500">
          L’authentification doit être reliée à un service sécurisé avant de
          pouvoir ouvrir un compte ou se connecter.
        </p>
      </div>
      <Link
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#7653ee] bg-[#7653ee] px-5 py-3 text-center text-sm font-bold text-white transition hover:border-[#6140d7] hover:bg-[#6140d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7653ee]"
        href="/dashboard"
      >
        Découvrir l’aperçu du tableau de bord
        <span aria-hidden="true">→</span>
      </Link>
      <Link
        className="mt-6 block text-center text-sm font-semibold text-slate-500 hover:text-[#6140d7]"
        href="/"
      >
        ← Retour à l’accueil
      </Link>
    </main>
  );
}
