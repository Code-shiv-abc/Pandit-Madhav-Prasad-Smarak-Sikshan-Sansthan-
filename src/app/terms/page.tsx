export const metadata = {
  title: 'Terms of Use | PMPSSS',
  description: 'Terms and conditions for using this website.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">
          Terms of Use
        </h1>

        <p className="text-slate-400 leading-relaxed">
          By using this website you agree to use it for lawful purposes only. Content on this site is for informational purposes and is subject to change without notice. Full terms will be published before the site&apos;s public launch.
        </p>
      </div>
    </main>
  );
}
