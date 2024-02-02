import { Locale } from "@/i18n/i18n.config";
import { getDictionary } from "@/i18n/i18n.get-dictionary";
import { NestedClient } from "./nested-client";

type PageProps = {
  params: {
    locale: Locale,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const dictionary = await getDictionary(locale);

  return (
    <div>
      <NestedClient
        dictionary={dictionary.client_page}
        locale={locale}
      />
    </div>
  );
}