import Head from "next/head";

import styles from "../styles/Home.module.css";

import Banner from "../components/banner";

import Image from "next/image";
import Card from "../components/Card";

import data from "../mock-data/coffee-stores.json";

// getStaticProps is exporting a func from a page file
// getStaticProps runs on a build time - next build

// passing external api data as props
export async function getStaticProps(context) {
  // api call can be made here
  return {
    // will be passed to the page component as props
    props: { data },
  };
}

// note - above external api data will be pass here as props
export default function Home(props) {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Crazy</title>
        <meta name="description" content="Your local coffee shop" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" onClick={onClick} />

        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" alt="hero image" width={700} height={400} />
        </div>

        {props.data.length > 0 && (
          <>
            <h2 className={styles.headingTwo}>Toronto stores</h2>

            <div className={styles.cardLayout}>
              {props.data.map(card => (
                <Card
                  key={card.id}
                  className={styles.card}
                  name={card.name}
                  imgUrl={card.imgUrl}
                  alt={card.name}
                  href={`/coffee-store/${card.id}`}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
