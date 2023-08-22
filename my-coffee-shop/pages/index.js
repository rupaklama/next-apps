import Head from "next/head";

import styles from "../styles/Home.module.css";

import Banner from "../components/banner";

import Image from "next/image";
import Card from "../components/Card";

import data from "../mock-data/coffee-stores.json";

// getStaticProps is exporting a func from a page file
// note: getStaticProps only runs on a build time - next build
// getStaticProps func only runs on server side
// getStaticProps code won't included in client bundle for safety

// passing external api data as props
export async function getStaticProps(props) {
  // console.log("i only run in the server side", props);

  // api call can be made here
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };

  try {
    const response = await fetch(
      "https://api.foursquare.com/v3/places/search?query=coffee%20&ll=40.72356013203024%2C-74.07766358411394",
      options
    );

    const { results } = await response.json();

    return {
      // will be passed to the page component as props
      props: { results },
    };
  } catch (error) {
    console.log(error);
  }
}

// note - above external api data will be pass here as props
export default function Home(props) {
  console.log(props);

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

        {props.results.length > 0 && (
          <>
            <h2 className={styles.headingTwo}>Toronto stores</h2>

            <div className={styles.cardLayout}>
              {props.results.map(card => (
                <Card
                  key={card.fsq_id}
                  className={styles.card}
                  name={card.name}
                  imgUrl={
                    card.imgUrl ||
                    "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  }
                  alt={card.name || ""}
                  href={`/coffee-store/${card.fsq_id}`}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
