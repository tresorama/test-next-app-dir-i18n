'use client';

import { usePathname, useRouter } from "next/navigation";
import { extractLocaleDataFromPathname, } from "../i18n.utils";
import { type SupportedLocale } from "../i18n.config";

export const useLocaleData = () => {
  const pathname = usePathname();

  const { pathnameWithoutLocale, currentLocale } = extractLocaleDataFromPathname(pathname);
  if (!currentLocale) throw new Error("Missing locale in current pathname!");

  const router = useRouter();
  const changeLocale = (newLocale: SupportedLocale) => {
    const newPathname = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPathname);
  };

  return {
    pathname,
    pathnameWithoutLocale,
    currentLocale,
    locale: currentLocale,
    changeLocale,
  };
};