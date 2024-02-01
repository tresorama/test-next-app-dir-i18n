import { getI18n, getScopedI18n, getStaticParams } from "@/i18n/usage/server";
import { setStaticParamsLocale } from "next-international/server";
import { AllPages } from "../all-pages";

// enable SSG
export function generateStaticParams() {
  return getStaticParams();
}

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  // required for SSG
  setStaticParamsLocale(locale);

  const t = await getI18n();
  const scopedT = await getScopedI18n('static-page');

  return (
    <div className="space-y-6">

      {/* Both are equivalent */}
      <h1 className="text-3xl">{t('static-page.title')}</h1>
      <p>{scopedT('title')}</p>

      <AllPages locale={locale} />
    </div>
  );
}