import Link from "next/link";
import { useRouter } from "next/router";

import data from "../../mock-data/coffee-stores.json";

// `getStaticPaths` requires using `getStaticProps` to pre-render a path
export async function getStaticProps(staticProps) {
  // note - this code runs in the Server & we have access to params object for queries
  const params = staticProps.params;

  return {
    props: data.find(item => item.id.toString() === params.id),
  };
}
// Dynamic Routes uses getStaticPaths
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    // if page does not exists, false returns 404 page
    fallback: true,
  };
}

const CoffeeStore = props => {
  // param id
  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div>
      {router.query.id}

      <br />
      <Link href="/">Back to home</Link>
      <p>{props.address}</p>
    </div>
  );
};
export default CoffeeStore;
