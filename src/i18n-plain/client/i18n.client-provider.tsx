'use client';

import { createContext, useContext } from "react";
import { type DefaultDictionary } from "../server/i18n.dictionaries";

const ctx = createContext<DefaultDictionary>({} as DefaultDictionary);

export const I18nClientProvider = ({
  children,
  dictionary,
}: {
  children: React.ReactNode,
  dictionary: DefaultDictionary,
}) => {
  if (!dictionary) throw new Error("Missing dictionary in I18nClientProvider");
  return <ctx.Provider value={dictionary}>{children}</ctx.Provider>;
};

export const useDictionary = () => useContext(ctx);