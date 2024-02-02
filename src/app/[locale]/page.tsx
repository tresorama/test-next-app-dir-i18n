import { AllPages } from "./all-pages";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page({ params: { locale } }: PageProps) {

  return (
    <main className="space-y-6">
      <h1 className="text-3xl">Home</h1>
      <AllPages locale={locale} />
    </main>
  );
}
