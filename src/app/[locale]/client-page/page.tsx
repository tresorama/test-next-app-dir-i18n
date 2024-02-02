import { getDictionary } from "@/i18n/server";
import { I18nClientProvider } from "@/i18n/client";
import { NestedClient } from "./nested-client";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const dictionary = await getDictionary(locale);

  return (
    <I18nClientProvider dictionary={dictionary}>
      <div>
        <NestedClient />
      </div>
    </I18nClientProvider>
  );
}