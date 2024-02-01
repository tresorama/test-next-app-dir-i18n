
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from 'lodash.pick';
import { NestedClient } from "./nested-client";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;
  const messages = useMessages();
  debugger;

  return (
    <NextIntlClientProvider
      messages={pick(messages, "client-page")}
      locale={locale}
    >
      <NestedClient />
    </NextIntlClientProvider>
  );
}