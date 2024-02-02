'use client';
import { useLocaleData } from "@/i18n/client";
import { locales } from "@/i18n/config";

export const LocaleSwitcher = () => {
  const { locale, changeLocale } = useLocaleData();

  return (
    <div className="bg-neutral-800">
      <select
        //@ts-expect-error
        onChange={e => changeLocale(e.currentTarget.value)}
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