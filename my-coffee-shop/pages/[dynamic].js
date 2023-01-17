import Head from "next/head";
import { useRouter } from "next/router";

const Dynamic = () => {
  const { query } = useRouter();

  // dynamic is query param
  return (
    <div>
      <Head>
        <title>{query.dynamic}</title>
      </Head>

      {query.dynamic}
    </div>
  );
};
export default Dynamic;
