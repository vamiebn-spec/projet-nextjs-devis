# Clérvis

Site vitrine Clérvis réalisé avec Next.js 16 et l’App Router. La page d’accueil
présente les fonctionnalités, les profils concernés, les tarifs et les réponses
aux questions fréquentes. Chaque groupe de routes possède son layout dédié.
Les styles des pages utilisent Tailwind CSS ; le fichier global ne sert qu’à
charger Tailwind. La navigation mobile et la FAQ utilisent des éléments HTML
natifs.

## Prérequis

- Node.js 20.9 ou supérieur
- pnpm (version déclarée dans `package.json`)

## Installation

```bash
pnpm install
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour afficher le site.

## Vérifications et production

```bash
pnpm lint
pnpm build
pnpm start
```

Les routes sont organisées en groupes Next.js qui ne modifient pas les URL :

- `app/(landing)/layout.js` et `app/(landing)/page.jsx` : page d’accueil `/`
- `app/(auth)/layout.js` et `app/(auth)/connexion/page.jsx` : page de connexion `/connexion`
- `app/(dashboard)/layout.js` et `app/(dashboard)/dashboard/page.js` : tableau de bord `/dashboard`

Les classes Tailwind sont appliquées directement dans les pages et layouts.
`app/globals.css` ne fait qu’importer Tailwind. Les métadonnées et la langue du
document sont définies dans `app/layout.jsx`.

La page de connexion et le tableau de bord sont des interfaces de présentation.
L’authentification, les données réelles des devis et le traitement des paiements
nécessitent des services applicatifs qui ne sont pas fournis dans ce projet.
