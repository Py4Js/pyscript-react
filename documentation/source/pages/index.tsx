import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

const Home = (): JSX.Element => {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();
  return (
    <Layout title={title} description={tagline}>
      <main>123</main>
    </Layout>
  );
};

export default Home;
