"use client"

import BloomsList from "@/components/custom/BloomsList"
import EnvCard from "@/components/custom/EnvCard"
import PlantDetailsChart from "@/components/custom/PlantDetailsChart"

export default function DashboardExample() {
  return (
    <main className="flex flex-col gap-y-10 px-5">
      {/* Environment Variables */}
      <div className="mt-10 flex flex-col gap-y-5">
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
        <h2 className="text-xl font-semibold">Plant Details</h2>

        <PlantDetailsChart />
      </div>

      {/* Blooms */}
      <div>
        <h2 className="text-xl font-semibold">Blooms</h2>

        <BloomsList />
      </div>
    </main>
  )
}
