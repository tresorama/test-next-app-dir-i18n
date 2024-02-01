import { getScopedI18n } from "@/i18n/usage/server";
import { AllPages } from "../all-pages";


type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  const scopedT = await getScopedI18n('dynamic-page');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{scopedT('title')}</h1>
      <AllPages locale={locale} />
    </div>
  );
}