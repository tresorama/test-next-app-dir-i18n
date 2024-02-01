'use client';

import { AllPages } from "../all-pages";
import { useLocale, useTranslations } from "next-intl";

export const NestedClient = () => {
  debugger;

  const locale = useLocale();
  const t = useTranslations('client-page');

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{t('title')}</h1>
      <AllPages locale={locale} />
    </div>
  );
};