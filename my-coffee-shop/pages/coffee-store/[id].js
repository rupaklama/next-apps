import Link from "next/link";
import { useRouter } from "next/router";

import data from "../../mock-data/coffee-stores.json";
import Head from "next/head";

import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";

import Image from "next/image";
import { fetchData } from "../../utils";

// `getStaticPaths` requires using `getStaticProps` to pre-render a path
export async function getStaticProps(staticProps) {
  // note - we have access to params object for queries in the server to get the 'id'
  // with the help of getStaticPaths func
  const params = staticProps.params;
  console.log("server params", params);

  // api call
  const results = await fetchData();

  return {
    // will be passed to the page component as props
    props: results.find(item => item.fsq_id.toString() === params.id),
  };
}
// getStaticPaths func is to Pre-render Dynamic Routes
export async function getStaticPaths() {
  // api call
  const results = await fetchData();

  // dynamically passing params id
  const paths = results.map(item => {
    return {
      params: {
        id: item.fsq_id.toString(),
      },
    };
  });

  return {
    // notes: paths is an array with objects that should be in below format
    // paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    paths: paths,

    // this key is required
    // if page does not exists with the id, false returns 404 page
    // fallback: false,
    fallback: true,
    // true -  tries to access the page even if page doesn't exits
    // useful to display the loading state else to display errors when no data or api fails
  };
}

const CoffeeStore = props => {
  const { name, location, neighbourhood, imgUrl } = props;

  // param id
  const router = useRouter();
  // note - router object has all the useful properties base on the env
  console.log("available in the client & server", router);

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`${name} coffee store`} />
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          {location.address && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/places.svg" width="24" height="24" alt="places icon" />
              <p className={styles.text}>{location.address}</p>
            </div>
          )}
          {location.locality && (
            <div className={styles.iconWrapper}>
              {/* <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="near me icon" /> */}
              <p className={styles.text}>{location.locality}</p>
            </div>
          )}

          <div className={styles.iconWrapper}>
            <Image src="/static/icons/star.svg" width="24" height="24" alt="star icon" />
            <p className={styles.text}>{1}</p>
          </div>

          <button className={styles.upvoteButton}>Up vote!</button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;
