"use client"

import Image from "next/image"

import EnvCard from "@/components/custom/EnvCard"

export default function DashboardExample() {
  return (
    <main className="px-5">
      {/* Environment Variables */}
      <div className="mt-10">
        <h2>Environment Variables</h2>

        <div className="mt-5 flex flex-wrap justify-between gap-y-6">
          
          <EnvCard iconSrc="/icons/drop.svg" sensorName="Humidity Percentage" percentage={72} />

          <EnvCard iconSrc="/icons/drop.svg" sensorName="Humidity Percentage" percentage={72} />

          <EnvCard iconSrc="/icons/drop.svg" sensorName="Humidity Percentage" percentage={72} />

          <EnvCard iconSrc="/icons/drop.svg" sensorName="Humidity Percentage" percentage={72} />

        </div>
      </div>


        {/* Plant Details */}

        


    </main>
  )
}
