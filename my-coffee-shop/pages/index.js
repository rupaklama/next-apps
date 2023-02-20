import Head from "next/head";

import styles from "../styles/Home.module.css";

import Banner from "../components/banner";

import Image from "next/image";
import Card from "../components/Card";
import data from "../mock-data/coffee-stores.json";

export default function Home() {
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

        <div className={styles.cardLayout}>
          {data.map(card => (
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
      </main>
    </div>
  );
}
