'use client';
import { useDictionary, useLocaleData } from "@/i18n/client";
import { AllPages } from "../all-pages";

export const NestedClient = () => {
  const t = useDictionary();
  const { locale } = useLocaleData();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{t["client-page.title"]}</h1>
      <AllPages locale={locale} />
    </div>
  );
};