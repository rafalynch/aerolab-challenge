import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (props) => {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Aerolab</title>
        <meta name="description" content="Aerolab challenge" />
      </Head>
    </div>
  );
};

export default Home;
