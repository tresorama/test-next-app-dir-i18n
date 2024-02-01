import { AllPages } from "../all-pages";
import { locales } from "@/i18n/i18n.config";

export async function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Static Page</h1>
      <AllPages locale={locale} />
    </div>
  );
}