"use client"

import Link from "next/link"

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BloomsList from "@/components/BloomsList"
import EnvCard from "@/components/EnvCard"
import { Overview } from "@/components/PlantDetailsChart"

export default function DashboardExample() {
  return (
    <main className="flex flex-col gap-y-10 px-5 mb-10">
      {/* Environment Variables */}

      <div className="mt-10 flex flex-col gap-y-5">
        <div className="space-y-1">
          <CardTitle>Hello, Sosamala</CardTitle>
          <CardDescription>
            Welcome back and exlpore your plants.
          </CardDescription>
        </div>
        <div className="flex flex-wrap justify-between gap-y-6">
          <EnvCard
            iconSrc="/icons/humidity.svg"
            sensorName="Humidity"
            sensor="Humidity"
            unit="%"
          />

          <EnvCard
            iconSrc="/icons/temp.svg"
            sensorName="Temperature"
            sensor="Temperature"
            unit="C"
          />

          <EnvCard
            iconSrc="/icons/moisture.svg"
            sensorName="Moisture Level"
            sensor="Moisture"
          />

          <EnvCard
            iconSrc="/icons/water.svg"
            sensorName="Water Level"
            sensor="WaterLevel"
          />
        </div>
      </div>

      {/* Plant Details */}
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold">Plant Details</h2>

          <Link href="/">See all</Link>
        </div>

        <Overview />
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
