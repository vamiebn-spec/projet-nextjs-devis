import Link from "next/link";

const navigation = [
  { href: "#problemes", label: "Vos enjeux" },
  { href: "#pour-qui", label: "Pour qui ?" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

const problems = [
  {
    number: "01",
    icon: "↗",
    title: "Un devis qui tarde, c’est une opportunité qui s’éloigne.",
    description:
      "Entre la saisie des informations, les calculs et la mise en forme, préparer un devis peut prendre plus de temps que prévu.",
    answer: "Répondez vite avec des devis prêts à envoyer.",
  },
  {
    number: "02",
    icon: "＋",
    title: "Les erreurs de calcul peuvent coûter cher.",
    description:
      "Une quantité mal saisie ou un prix oublié peut transformer un devis rentable en perte d’argent.",
    answer: "Laissez les calculs automatiques faire le travail.",
  },
  {
    number: "03",
    icon: "⌖",
    title: "Votre activité ne s’arrête pas au bureau.",
    description:
      "Chez un client ou sur un chantier, votre gestion devrait pouvoir vous suivre partout.",
    answer: "Retrouvez vos devis où que vous soyez.",
  },
  {
    number: "04",
    icon: "◷",
    title: "Difficile de savoir où en sont vos devis ?",
    description:
      "Entre les devis envoyés, en attente ou acceptés, il devient facile d’oublier une relance.",
    answer: "Gardez une vue claire sur chaque devis.",
  },
];

const features = [
  {
    icon: "⚡",
    title: "Création rapide",
    description:
      "Créez des devis professionnels en quelques clics, sans étapes compliquées.",
  },
  {
    icon: "▤",
    title: "Des devis adaptés à votre métier",
    description:
      "Présentez clairement vos prestations, que vous soyez plombier, électricien ou prestataire de services.",
  },
  {
    icon: "↗",
    title: "Envoi simplifié",
    description:
      "Partagez vos devis avec vos clients, notamment directement sur WhatsApp.",
  },
  {
    icon: "◷",
    title: "Suivi plus clair",
    description:
      "Retrouvez vos devis et leur avancement sans vous disperser entre plusieurs outils.",
  },
];

const plans = [
  {
    name: "Indépendant",
    audience: "Artisans et prestataires",
    price: "2 000",
    credits: "10 crédits inclus",
    description: "Pour gérer vos devis et vous concentrer sur votre métier.",
    popular: false,
  },
  {
    name: "Entreprise",
    audience: "PME et agences",
    price: "5 000",
    credits: "30 crédits inclus",
    description: "Pour accompagner une activité qui se développe.",
    popular: true,
  },
];

const questions = [
  {
    question: "À qui s’adresse Clérvis ?",
    answer:
      "Clérvis s’adresse aux indépendants, artisans, prestataires de services et PME qui souhaitent simplifier la création et le suivi de leurs devis.",
  },
  {
    question: "Comment démarrer ?",
    answer:
      "Comparez les offres et choisissez celle qui correspond à votre activité. Un essai gratuit de trois jours est prévu dans les offres présentées.",
  },
  {
    question: "Puis-je envoyer mes devis sur WhatsApp ?",
    answer:
      "Oui. L’envoi des devis à vos clients via WhatsApp fait partie des fonctionnalités présentées par Clérvis.",
  },
  {
    question: "Quels sont les tarifs ?",
    answer:
      "L’offre Indépendant est affichée à 2 000 FCFA par mois et l’offre Entreprise à 5 000 FCFA par mois. Chaque offre comprend le nombre de crédits indiqué sur sa fiche.",
  },
  {
    question: "Est-ce accessible en déplacement ?",
    answer:
      "Clérvis est conçu pour vous permettre de retrouver votre gestion depuis un ordinateur, une tablette ou un mobile.",
  },
];

function Brand({ footer = false }) {
  return (
    <Link
      className={`text-2xl font-extrabold tracking-[-0.08em] ${
        footer ? "text-white" : "text-[#172348]"
      }`}
      href="/"
      aria-label="Clérvis, accueil"
    >
      Clér<span className="text-[#7653ee]">vis</span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, description, centered = true }) {
  return (
    <div className={`mb-10 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6140d7]">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#172348] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function NavigationLinks() {
  return (
    <>
      {navigation.map((item) => (
        <a
          className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 transition hover:text-[#6140d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7653ee]"
          key={item.href}
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

function Button({ children, href, secondary = false, className = "" }) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-5 py-3 text-center text-sm font-bold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7653ee] ${
        secondary
          ? "border-slate-200 bg-white text-[#172348] hover:border-violet-200 hover:bg-violet-50"
          : "border-[#7653ee] bg-[#7653ee] text-white hover:border-[#6140d7] hover:bg-[#6140d7]"
      } ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <a
        className="fixed left-3 top-3 z-50 -translate-y-20 rounded-lg bg-[#172348] px-4 py-3 font-bold text-white focus:translate-y-0"
        href="#contenu"
      >
        Aller au contenu
      </a>

      <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
        <p className="bg-[#172348] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
          Transformez vos devis en opportunités
        </p>
        <div className="mx-auto flex min-h-[76px] w-full max-w-[1320px] items-center gap-4 px-4">
          <Brand />
          <nav
            className="ml-auto hidden items-center justify-center gap-1 md:flex"
            aria-label="Navigation principale"
          >
            <NavigationLinks />
            <Link
              className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 transition hover:text-[#6140d7]"
              href="/connexion"
            >
              Connexion
            </Link>
          </nav>
          <details className="peer relative ml-auto md:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-lg font-bold text-[#172348] [&::-webkit-details-marker]:hidden"
              aria-label="Afficher ou masquer le menu"
            >
              <span aria-hidden="true">☰</span>
            </summary>
          </details>
          <nav
            className="absolute right-4 top-[calc(100%-0.25rem)] z-50 hidden w-72 flex-col rounded-2xl border border-slate-200 bg-white p-2 shadow-xl peer-open:flex md:right-8 md:hidden"
            aria-label="Navigation mobile et tablette"
          >
            <NavigationLinks />
            <Link
              className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 hover:bg-violet-50 hover:text-[#6140d7]"
              href="/connexion"
            >
              Connexion
            </Link>
            <Link
              className="mt-1 rounded-lg bg-[#172348] px-3 py-2.5 text-center text-sm font-bold text-white"
              href="/dashboard"
            >
              Tableau de bord
            </Link>
          </nav>
          <Button
            className="ml-auto hidden whitespace-nowrap px-4 text-xs lg:inline-flex lg:ml-0"
            href="/dashboard"
          >
            Tableau de bord <span aria-hidden="true">→</span>
          </Button>
        </div>
      </header>

      <main id="contenu">
        <section
          className="mx-auto grid min-h-[620px] w-full max-w-[1180px] items-center gap-12 px-4 py-16 md:grid-cols-2 lg:gap-20 lg:py-24"
          id="accueil"
        >
          <div>
            <p className="mb-5 inline-flex rounded-full border border-violet-100 bg-violet-50 px-3 py-2 text-xs font-bold tracking-wide text-[#6140d7]">
              La gestion des devis, simplement
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.07em] text-[#172348] sm:text-5xl lg:text-6xl">
              Créez vos devis <span className="text-[#7653ee]">professionnels</span>{" "}
              en quelques secondes.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Gagnez du temps et simplifiez votre gestion avec une solution
              pensée pour les indépendants, les artisans et les PME.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#tarifs">
                Découvrir les offres <span aria-hidden="true">→</span>
              </Button>
              <Button href="#fonctionnalites" secondary>
                Voir les fonctionnalités
              </Button>
            </div>
            <ul
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500"
              aria-label="Les atouts de Clérvis"
            >
              <li><span className="font-extrabold text-emerald-600">✓</span> Simple à utiliser</li>
              <li><span className="font-extrabold text-emerald-600">✓</span> Sur tous vos écrans</li>
              <li><span className="font-extrabold text-emerald-600">✓</span> Essai gratuit de 3 jours</li>
            </ul>
          </div>

          <div
            className="relative mx-auto w-full max-w-lg rounded-3xl border border-violet-100 bg-[radial-gradient(ellipse_at_86%_0%,rgba(118,83,238,0.12),transparent_37%),white] p-5 shadow-[0_28px_80px_rgba(28,29,77,0.11)] sm:p-8"
            aria-label="Aperçu d’un devis Clérvis"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500">Votre espace</span>
                <p className="m-0 font-bold text-[#172348]">Bonjour, Alex 👋</p>
              </div>
              <span className="grid size-11 place-items-center rounded-full bg-violet-100 font-bold text-[#6140d7]">A</span>
            </div>
            <div className="mt-5 grid grid-cols-[1fr_auto] items-center gap-x-2 rounded-2xl bg-[#172348] p-5 text-white">
              <span className="text-sm">Devis du mois</span>
              <strong className="row-span-2 text-4xl">12</strong>
              <span className="text-xs text-indigo-100">Gardez le fil de votre activité</span>
            </div>
            <div className="mt-4 rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="block text-xs text-slate-500">Dernier devis</span>
                  <strong className="text-sm text-[#172348]">#DV-2026-014</strong>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Envoyé</span>
              </div>
              <div className="flex justify-between gap-3 pt-4 text-xs text-slate-500">
                <span>Installation et fournitures</span><strong className="text-right text-[#172348]">125 000 FCFA</strong>
              </div>
              <div className="flex justify-between gap-3 pt-3 text-xs text-slate-500">
                <span>TVA</span><strong className="text-right text-[#172348]">Calcul automatique</strong>
              </div>
              <div className="mt-4 flex justify-between gap-3 border-t border-dashed border-slate-200 pt-4 text-xs font-bold text-[#172348]">
                <span>Total du devis</span><span>125 000 FCFA</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="size-2 rounded-full bg-emerald-500 ring-4 ring-emerald-50" />
              Prêt à être partagé avec votre client
            </div>
            <div className="absolute -bottom-5 right-2 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-xs font-bold text-[#172348] shadow-lg">
              <span className="grid size-6 place-items-center rounded-full bg-emerald-50 text-emerald-700">✓</span>
              Devis prêt à envoyer
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-24" id="problemes">
          <div className="mx-auto w-full max-w-[1180px] px-4">
            <SectionHeading
              eyebrow="Les problèmes rencontrés"
              title="Votre métier est votre priorité. La gestion ne devrait pas vous ralentir."
              description="Entre les demandes clients, les devis à préparer et le suivi des prestations, la gestion administrative peut prendre du temps."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {problems.map((problem) => (
                <article
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
                  key={problem.number}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-violet-50 font-extrabold text-[#6140d7]">{problem.number}</span>
                    <span className="grid size-11 place-items-center rounded-full bg-slate-100 text-lg font-bold text-[#6140d7]" aria-hidden="true">{problem.icon}</span>
                  </div>
                  <h3 className="mb-2 mt-5 text-xl font-bold leading-snug text-[#172348]">{problem.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-slate-500">{problem.description}</p>
                  <p className="mb-0 mt-5 rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-[#172348]">
                    <span className="text-[#7653ee]" aria-hidden="true">→ </span>{problem.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:py-24" id="pour-qui">
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Votre activité, votre façon de travailler."
            description="Que vous soyez indépendant ou une PME, créez des devis professionnels, gagnez du temps et inspirez confiance à vos clients."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-7 sm:p-10">
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-violet-50 text-2xl text-[#6140d7]" aria-hidden="true">◉</span>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#6140d7]">Pour les indépendants</p>
              <h3 className="mb-3 text-2xl font-bold text-[#172348]">Faites avancer votre activité.</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Artisans, électriciens, plombiers et prestataires : consacrez
                moins de temps à la paperasse et plus de temps à vos clients.
              </p>
              <a className="mt-5 inline-flex gap-2 text-sm font-bold text-[#6140d7] hover:text-[#172348]" href="#tarifs">
                Voir l’offre Indépendant <span aria-hidden="true">→</span>
              </a>
            </article>
            <article className="rounded-3xl border border-violet-200 bg-[radial-gradient(ellipse_at_100%_0%,rgba(118,83,238,0.09),transparent_47%),white] p-7 sm:p-10">
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-violet-50 text-2xl text-[#6140d7]" aria-hidden="true">▦</span>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#6140d7]">Pour les équipes</p>
              <h3 className="mb-3 text-2xl font-bold text-[#172348]">Structurez vos devis au quotidien.</h3>
              <p className="text-sm leading-relaxed text-slate-500">
                PME et agences : gardez une gestion claire de vos devis et
                accompagnez le développement de votre activité.
              </p>
              <a className="mt-5 inline-flex gap-2 text-sm font-bold text-[#6140d7] hover:text-[#172348]" href="#tarifs">
                Voir l’offre Entreprise <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </section>

        <section className="bg-[#172348] py-16 text-white sm:py-24" id="fonctionnalites">
          <div className="mx-auto w-full max-w-[1180px] px-4">
            <SectionHeading
              eyebrow="Fonctionnalités"
              title="Gagnez du temps pour mieux développer votre activité."
              description="Chaque fonctionnalité de Clérvis est pensée pour simplifier la création de vos devis et faciliter votre gestion."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <article className="min-h-56 rounded-2xl border border-white/15 bg-white/5 p-6" key={feature.title}>
                  <span className="grid size-12 place-items-center rounded-xl bg-violet-300/15 text-xl text-violet-200" aria-hidden="true">{feature.icon}</span>
                  <h3 className="mb-2 mt-5 text-lg font-bold text-white">{feature.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-indigo-100">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1180px] px-4 py-16 sm:py-24" id="tarifs">
          <SectionHeading
            eyebrow="Tarifs"
            title="Deux offres, une même ambition : simplifier vos devis."
            description="Choisissez la formule adaptée à votre activité. Les deux offres incluent un essai gratuit de trois jours."
          />
          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-lg sm:p-9 ${
                  plan.popular
                    ? "border-violet-300 shadow-violet-100"
                    : "border-slate-200"
                }`}
                key={plan.name}
              >
                {plan.popular ? (
                  <span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-violet-100 px-3 py-1 text-xs font-extrabold text-[#6140d7]">
                    La plus populaire
                  </span>
                ) : null}
                <p className="mb-2 text-xs font-extrabold uppercase tracking-widest text-[#6140d7]">{plan.audience}</p>
                <h3 className="m-0 text-2xl font-extrabold text-[#172348]">{plan.name}</h3>
                <p className="min-h-12 text-sm text-slate-500">{plan.description}</p>
                <p className="m-0 flex items-baseline gap-2">
                  <strong className="text-4xl font-extrabold tracking-tight text-[#172348]">{plan.price}</strong>
                  <span className="text-sm text-slate-500">FCFA / mois</span>
                </p>
                <ul className="my-6 grid gap-3 border-t border-slate-100 pt-5 text-sm text-slate-600">
                  <li><span className="mr-2 font-extrabold text-emerald-600">✓</span>{plan.credits}</li>
                  <li><span className="mr-2 font-extrabold text-emerald-600">✓</span>Création et suivi de vos devis</li>
                  <li><span className="mr-2 font-extrabold text-emerald-600">✓</span>Essai gratuit de 3 jours</li>
                </ul>
                <Button className="mt-auto w-full" href="/connexion" secondary={!plan.popular}>
                  En savoir plus <span aria-hidden="true">→</span>
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-24" id="faq">
          <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.12em] text-[#6140d7]">FAQ</p>
              <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] text-[#172348] sm:text-4xl">Vos questions, nos réponses.</h2>
              <p className="text-slate-500">Vous souhaitez en savoir plus sur Clérvis et ses offres ?</p>
            </div>
            <div className="border-t border-slate-200">
              {questions.map((item) => (
                <details className="group border-b border-slate-200" key={item.question}>
                  <summary className="flex min-h-[68px] cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#172348] [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-xl font-normal text-[#6140d7] transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mb-5 mr-10 text-sm leading-relaxed text-slate-500">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#131d3b] pt-12 text-white">
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Brand footer />
            <p className="mt-3 text-sm text-indigo-100">Des devis clairs. Une gestion plus simple.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="mb-1 text-sm font-bold">Découvrir</p>
            <a className="text-sm text-indigo-100 hover:text-white" href="#fonctionnalites">Fonctionnalités</a>
            <a className="text-sm text-indigo-100 hover:text-white" href="#tarifs">Tarifs</a>
            <a className="text-sm text-indigo-100 hover:text-white" href="#faq">Questions fréquentes</a>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold">Prêt à simplifier vos devis ?</p>
            <Button className=" hover:text-[#172348] hover:border-violet-100 hover:bg-violet-100" href="/connexion">
              Découvrir les offres <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto flex min-h-16 w-full max-w-[1180px] items-center justify-between gap-4 border-t border-white/15 px-4 text-xs text-indigo-100">
          <p>© Clérvis. Tous droits réservés.</p>
          <a className="hover:text-white" href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}
