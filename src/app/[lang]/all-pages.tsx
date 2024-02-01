import Link from "next/link";

export const AllPages = ({ locale }: { locale: string; }) => (
  <div className="flex flex-col gap-2">
    <small>THIS LOCALE</small>
    <Link href={`/${locale}`} className="underline">Home</Link>
    <Link href={`/${locale}/static-page`} className="underline">Static Page</Link>
    <Link href={`/${locale}/dynamic-page`} className="underline">Dynamic Page</Link>
    <Link href={`/${locale}/client-page`} className="underline">Client Page</Link>
    <br />
    <small>EN</small>
    <Link href={`/en`} className="underline">Home</Link>
    <Link href={`/en/static-page`} className="underline">Static Page</Link>
    <Link href={`/en/dynamic-page`} className="underline">Dynamic Page</Link>
    <Link href={`/en/client-page`} className="underline">Client Page</Link>
    <br />
    <small>IT</small>
    <Link href={`/it`} className="underline">Home</Link>
    <Link href={`/it/static-page`} className="underline">Static Page</Link>
    <Link href={`/it/dynamic-page`} className="underline">Dynamic Page</Link>
    <Link href={`/it/client-page`} className="underline">Client Page</Link>
  </div>
);