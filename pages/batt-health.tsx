import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Head from "next/head";

function BattHealth() {
  //dummy data
  const soh = 78;
  const ttl = 6;
  //get the data from the api call here
  return (
    <>
    <Head>
        <title>Battery Health | Volt Armour</title>
    </Head>
      <main className="min-h-screen bg-[url('/assets/hero-bg.png')] w-full font-mont  text-stone-200">
        <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-mont py-[50px] md:py-[80px]">
          <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Your Battery Vitals
            </h2>
            <p className="text-slate-200 md:text-lg font-mono">
              Uncover the essence of your battery&apos;s health and lifespan.
              SOH and TTL metrics provide a quick snapshot for informed
              decisions
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col gap-12 items-center">
              <Card className="md:w-[350px] w-full">
                <CardHeader>
                  <CardTitle>State of Health (SoH)</CardTitle>
                  <CardDescription>
                    Describes battery health in %
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <p
                      className={`text-5xl font-bold ${
                        soh <= 25
                          ? "text-red-500"
                          : soh > 25 && soh <= 75
                          ? "text-amber-500"
                          : "text-green-500"
                      }`}
                    >
                      {soh}%
                    </p>
                    <p className="text-xl">
                      {soh <= 25
                        ? "Poor"
                        : soh > 25 && soh <= 50
                        ? "Average"
                        : soh > 50 && soh <= 75
                        ? "Good"
                        : "Excellent"}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:w-[350px] w-full">
                <CardHeader>
                  <CardTitle>Time to Live (TTL)</CardTitle>
                  <CardDescription>
                    Estimates battery lifespan in years
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <p className="text-5xl font-bold">
                      <span
                        className={`text-5xl font-bold ${
                          ttl <= 2
                            ? "text-red-500"
                            : ttl > 2 && ttl <= 6
                            ? "text-amber-500"
                            : "text-green-500"
                        }`}
                      >
                        {ttl}
                      </span>
                    </p>
                    <p className="text-xl">years</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col mt-4 gap-8 ">
              <Card className="md:w-[750px] w-full">
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                  <CardDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, eaque!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam maiores repellat numquam, atque, voluptatem quibusdam ipsum nobis accusantium veritatis architecto nostrum nulla. Saepe possimus consectetur eveniet tempora necessitatibus atque, libero obcaecati earum error minus praesentium quos soluta facilis architecto delectus enim? Ratione inventore enim quas nemo possimus eum provident.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:w-[750px] w-full">
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>
                    Based on your battery vitals, here are some recommendations
                    for you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold">1.</p>
                      <p className="text-xl">
                        You should consider replacing your battery
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold">2.</p>
                      <p className="text-xl">
                        You should consider replacing your battery
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="text-2xl font-bold">3.</p>
                      <p className="text-xl">
                        You should consider replacing your battery
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            
                    
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default BattHealth;
