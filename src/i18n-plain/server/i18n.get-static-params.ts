import { locales } from "../i18n.config";

export const getStaticParams = () => locales.map(locale => ({ locale }));