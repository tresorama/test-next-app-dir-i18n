import { Locale } from "@/i18n/i18n.config";
import { AllPages } from "./all-pages";

type PageProps = {
  params: {
    locale: Locale,
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
