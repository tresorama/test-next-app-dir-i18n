import { getDictionary } from "@/i18n/i18n.get-dictionary";
import { AllPages } from "../all-pages";
import { Locale, i18n } from "@/i18n/i18n.config";

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale }));
}

type PageProps = {
  params: {
    locale: Locale,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{dictionary.static_page.title}</h1>
      <AllPages locale={locale} />
    </div>
  );
}