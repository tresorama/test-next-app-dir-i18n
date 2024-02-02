import { getDictionary, getStaticParams } from "@/i18n/server";
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
  const t = await getDictionary(locale);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{t["static-page.title"]}</h1>
      <AllPages locale={locale} />
    </div>
  );
}