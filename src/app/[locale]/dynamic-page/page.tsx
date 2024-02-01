import { getTranslations } from "next-intl/server";
import { AllPages } from "../all-pages";


type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const t = await getTranslations('dynamic-page');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{t('title')}</h1>
      <AllPages locale={locale} />
    </div>
  );
}