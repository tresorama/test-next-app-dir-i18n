"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n, type Locale } from "@/i18n/i18n.config";

export function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const router = useRouter();

  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <p>{pathname}</p>
      <p>{locale}</p>
      <select
        onChange={e => {
          const locale = e.currentTarget.value as Locale;
          router.push(redirectedPathName(locale));
        }}
        className="text-black"
        value={locale}
      >
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}