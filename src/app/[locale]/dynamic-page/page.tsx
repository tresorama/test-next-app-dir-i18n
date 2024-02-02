import { Locale } from "@/i18n/i18n.config";
import { AllPages } from "../all-pages";
import { getDictionary } from "@/i18n/i18n.get-dictionary";

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
      <h1 className="text-3xl">{dictionary.dynamic_page.title}</h1>
      <AllPages locale={locale} />
    </div>
  );
}