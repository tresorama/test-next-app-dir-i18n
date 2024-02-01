
import { I18nProviderClient } from "@/i18n/usage/client";
import { NestedClient } from "./nested-client";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  return (
    <I18nProviderClient locale={locale}>
      <div>
        <NestedClient />
      </div>
    </I18nProviderClient>
  );
}