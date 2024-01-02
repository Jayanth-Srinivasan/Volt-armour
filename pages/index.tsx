import Landing from "@/components/Landing";
import Header from "@/components/layouts/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volt Armour</title>
      </Head>
      <main className="bg-[#000000] ">
        <Header />
        <Landing />
      </main>
    </>
  );
}
