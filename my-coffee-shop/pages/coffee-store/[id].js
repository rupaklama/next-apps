import Link from "next/link";
import { useRouter } from "next/router";

import data from "../../mock-data/coffee-stores.json";
import Head from "next/head";

import styles from "../../styles/coffee-store.module.css";
import cls from "classnames";

import Image from "next/image";

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
  // dynamically passing params id
  const paths = data.map(item => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    // paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    paths: paths,

    // if page does not exists, false returns 404 page
    fallback: false,
  };
}

const CoffeeStore = props => {
  const { name, address, neighbourhood, imgUrl } = props;

  // param id
  const router = useRouter();

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
          {address && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/places.svg" width="24" height="24" alt="places icon" />
              <p className={styles.text}>{address}</p>
            </div>
          )}
          {neighbourhood && (
            <div className={styles.iconWrapper}>
              <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="near me icon" />
              <p className={styles.text}>{neighbourhood}</p>
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
