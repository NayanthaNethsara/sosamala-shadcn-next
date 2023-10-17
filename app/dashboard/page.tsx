"use client"

import Link from "next/link"

import BloomsList from "@/components/custom/BloomsList"
import EnvCard from "@/components/custom/EnvCard"
import PlantDetailsChart from "@/components/custom/PlantDetailsChart"

export default function DashboardExample() {
  return (
    <main className="flex flex-col gap-y-10 px-5 mb-10">
      {/* Environment Variables */}

      <div className="mt-10 flex flex-col gap-y-5">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
          <p className="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <h2 className="text-xl font-semibold">Environment Variables</h2>

        <div className="flex flex-wrap justify-between gap-y-6">
          <EnvCard
            iconSrc="/icons/drop.svg"
            sensorName="Humidity Percentage"
            percentage={72}
          />

          <EnvCard
            iconSrc="/icons/drop.svg"
            sensorName="Humidity Percentage"
            percentage={72}
          />

          <EnvCard
            iconSrc="/icons/drop.svg"
            sensorName="Humidity Percentage"
            percentage={72}
          />

          <EnvCard
            iconSrc="/icons/drop.svg"
            sensorName="Humidity Percentage"
            percentage={72}
          />
        </div>
      </div>

      {/* Plant Details */}
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold">Plant Details</h2>

          <Link href="/">See all</Link>
        </div>

        <PlantDetailsChart />
      </div>

      {/* Blooms */}
      <div className="flex flex-col gap-y-5">
        <h2 className="text-xl font-semibold">Blooms</h2>

        <BloomsList />

        {/* See more button */}

        <Link href="/">
          <div className="rounded-2xl bg-[#1E1E1E] py-3 text-center text-[#4BFFBE]">
            see all
          </div>
        </Link>
      </div>
    </main>
  )
}
