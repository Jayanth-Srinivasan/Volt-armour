import Landing from "@/components/Landing";
import Header from "@/components/layouts/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volt Armour</title>
        <meta name="description" content="Volt Armour" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#000000] ">
        <Header />
        <Landing />
      </main>
    </>
  );
}
