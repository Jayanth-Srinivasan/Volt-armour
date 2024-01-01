import Header from "@/components/layouts/Header";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const BattParaForm = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    cycleIndex: "",
    dischargeTime: "",
    decrement: "",
    maxVoltageDischarge: "",
    minVoltageDischarge: "",
    timeAtFour: "",
    timeConstant: "",
    chargingTime: "",
  });

  const handleValuesChange =
    (key: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => {
        return { ...prev, [key]: e.target.value };
      });
    };


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    router.push('/batt-health');
   
  };

  

  return (
    <main className="min-h-screen bg-[url('/assets/hero-bg.png')] w-full font-mont bg-[#161616] text-stone-200">
      <section className="p-4 md:px-16 lg:max-w-4xl lg:mx-auto font-mont py-[50px] md:py-[80px]">
        <div className="mx-auto flex flex-col gap-4 text-center pb-[50px] md:pb-[80px]">
          <h2 className="text-3xl lg:text-5xl font-bold">Check Your Battery</h2>
          <p className="text-slate-200 md:text-lg font-mono">
            Maximize battery potential with ML precision. Input parameters,
            unlock performance. Your journey to superior battery life starts
            here.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 font-mont bg-[#1e1e1e] flex flex-col gap-4 rounded border border-white/10"
        >
          <h1 className="font-bold text-xl md:text-2xl">Battery Details</h1>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cycleIndex">Cycle Index</Label>
            <Input
              onChange={handleValuesChange("cycleIndex")}
              required
              type="text"
              className="h-12"
              placeholder="Cycle Index of the battery"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="dischargeTime">Discharge Time</Label>
            <Input
              onChange={handleValuesChange("dischargeTime")}
              type="text"
              className="h-12"
              placeholder="Discharge Time of the battery in seconds"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="decrement">Decrement</Label>
            <Input
              required
              onChange={handleValuesChange("decrement")}
              type="text"
              className="h-12"
              placeholder="Decrement of the battery (3-6- 3.4V)"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="maxVoltageDischarge">Max Voltage Discharge</Label>
            <Input
              required
              onChange={handleValuesChange("maxVoltageDischarge")}
              type="text"
              className="h-12"
              placeholder="Max Voltage Discharge of the battery"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="minVoltageDischarge">Min Voltage Discharge</Label>
            <Input
              required
              onChange={handleValuesChange("minVoltageDischarge")}
              type="text"
              className="h-12"
              placeholder="Min Voltage Discharge of the battery"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="timeAtFour">Time at 4.15V</Label>
            <Input
              required
              onChange={handleValuesChange("timeAtFour")}
              type="text"
              className="h-12"
              placeholder="Time at 4.15V of the battery in seconds"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="timeConstant">Time Constant Current</Label>
            <Input
              required
              onChange={handleValuesChange("timeConstant")}
              type="text"
              className="h-12"
              placeholder="Time Constant Current of the battery in seconds"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="chargingTime">Charging Time</Label>
            <Input
              required
              onChange={handleValuesChange("chargingTime")}
              type="text"
              className="h-12"
              placeholder="Charging Time of the battery in seconds"
            />
          </div>
          <Button
            type="submit"
            className="h-12 bg-amber-400 text-black font-semibold text py-5 px-16 transition-all duration-300 hover:bg-amber-400 hover:scale-105 "
          >
            Check Battery
          </Button>
        </form>
      </section>
    </main>
  );
};

export default BattParaForm;
