import { AllPages } from "../all-pages";


type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Dynamic Page</h1>
      <AllPages locale={locale} />
    </div>
  );
}