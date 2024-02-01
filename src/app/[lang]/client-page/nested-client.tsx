'use client';

import { AllPages } from "../all-pages";

export const NestedClient = () => {
  const locale = "en";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Cleint Page</h1>
      <AllPages locale={locale} />
    </div>
  );
};