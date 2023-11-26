import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ResourceHighlight from "../components/ResourceHighlight";
import ResourceList from "../components/ResourceList";

// Home page
const Home = () => {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </Layout>
  );
};

export default Home;
