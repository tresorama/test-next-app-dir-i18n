'use client';
import { locales } from "@/i18n/i18n.config";
import { useChangeLocale, useCurrentLocale } from "@/i18n/usage/client";

export const LocaleSwitcher = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <div className="bg-neutral-800">
      <select
        onChange={e => {
          const value = e.currentTarget.value;
          if (locales.includes(value)) changeLocale(value as any);
        }}
        className="text-black"
        defaultValue={locale}
      >
        {locales.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};