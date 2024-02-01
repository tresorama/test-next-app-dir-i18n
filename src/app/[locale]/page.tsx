import { AllPages } from "./all-pages";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page({ params: { locale } }: PageProps) {
  const t = await getTranslations("home");

  return (
    <main className="space-y-6">
      <h1 className="text-3xl">{t('title')}</h1>
      <AllPages locale={locale} />
    </main>
  );
}
