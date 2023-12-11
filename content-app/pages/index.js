import { useEffect } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ResourceHighlight from "../components/ResourceHighlight";
import ResourceList from "../components/ResourceList";

// note: created on build time for static content
// export async function getStaticProps() {
//   try {
//     const response = await fetch("http://localhost:3000/api/resources");

//     if (response.status === 200) {
//       const data = await response.json();

//       return {
//         props: {
//           resources: data,
//         },
//       };
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// note: created on each page request for dynamic content
export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3001/api/resources");

    if (response.status === 200) {
      const data = await response.json();

      return {
        props: {
          resources: data,
        },
      };
    }
  } catch (err) {
    console.log(err.message);
  }
}

// Home page
const Home = ({ resources }) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <Newsletter />
      <ResourceList resources={resources} />

      <Footer />
    </Layout>
  );
};

export default Home;
