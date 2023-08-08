import Navbars from "@/components/Navbars";
import Homes from "@/components/Homes";
import Footers from "@/components/Footers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <link rel="icon" href="/assets/Logo.png" sizes="any" />
      </Head>
      <div>
        <Navbars />
        <Homes />
        <Footers />
      </div>
    </>
  );
}
