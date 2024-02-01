'use client';

import { useCurrentLocale, useScopedI18n } from "@/i18n/usage/client";
import { AllPages } from "../all-pages";

export const NestedClient = () => {
  const scopedT = useScopedI18n('client-page');
  const locale = useCurrentLocale();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">{scopedT('title')}</h1>
      <AllPages locale={locale} />
    </div>
  );
};