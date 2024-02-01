
import { NestedClient } from "./nested-client";

type PageProps = {
  params: {
    locale: string,
  };
};

export default async function Page(props: PageProps) {
  const { locale } = props.params;

  return (
    <div>
      <NestedClient />
    </div>
  );
}