//@ts-nocheck
"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { SensorData, StatusUpdate } from "@/components/firebase-update"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Sosamala is a smart electronic system designed{" "}
          <br className="hidden sm:inline" />
          to monitor and care for rose plants.
        </h1>

        <br className="hidden sm:inline" />

        <SensorData sensor="Humidity" />
        <SensorData sensor="Moisture" />
        <SensorData sensor="Temperature" />
      </div>

      <div className="flex gap-4">
        <StatusUpdate dispenser="Dispenser" />
        <StatusUpdate dispenser="MistingNozzle" />
      </div>
    </section>
  )
}
