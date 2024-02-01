import { AllPages } from "./all-pages";
import useTranslation from 'next-translate/useTranslation';

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page({ params: { locale } }: PageProps) {

  const { t, lang } = useTranslation('home');
  const title = t('title');
  const dynamicDate = t('dynamic-date', { day_name: 'Monday' });

  return (
    <main className="space-y-6">
      <h1 className="text-3xl">{title}</h1>
      <p>{dynamicDate}</p>
      <AllPages locale={locale} />
    </main>
  );
}
