import { useEffect, useState } from "react"
import Image from "next/image"
import { onValue, ref, set } from "firebase/database"

import { db } from "../../app/firebase"

export default function EnvCard({
  iconSrc,
  sensorName,
  sensor,
  unit,
}: {
  iconSrc: string
  sensorName: string
  sensor: string
  unit?: string
}) {
  const [sensordata, setSensorData] = useState(null)

  useEffect(() => {
    const SensorDataRef = ref(db, `Sosamala/SensorData/${sensor}`) // Use 'sensor' in the reference
    onValue(SensorDataRef, (snapshot) => {
      const data = snapshot.val()
      setSensorData(data)
    })
  }, [sensor])

  return (
    <div className="flex  aspect-square w-40 flex-col items-center justify-center gap-y-3 rounded-2xl border">
      <Image
        src={iconSrc}
        alt=""
        width={100}
        height={100}
        className="aspect-square w-14"
      />
      <p className="font-semibold">
        {sensordata || 0} {unit}
      </p>

      <div className="flex flex-row items-center justify-center gap-1 text-center">
        <Image
          alt=""
          src="/icons/alert-circle.svg"
          width={20}
          height={20}
          className="aspect-square w-4"
        />
        <p className="text-xs">{sensorName}</p>
      </div>
    </div>
  )
}
