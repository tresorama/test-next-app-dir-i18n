'use client';

import { type getDictionary } from "@/i18n/i18n.get-dictionary";
import { AllPages } from "../all-pages";
import { Locale } from "@/i18n/i18n.config";

export const NestedClient = ({
  dictionary,
  locale,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['client_page'],
  locale: Locale,
}) => {

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{dictionary.title}</h1>
      <AllPages locale={locale} />
    </div>
  );
};