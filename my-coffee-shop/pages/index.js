import Head from "next/head";

import styles from "../styles/Home.module.css";

import Banner from "../components/banner";

import Image from "next/image";

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
      </main>
    </div>
  );
}
