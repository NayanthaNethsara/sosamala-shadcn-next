"use client"

import { useEffect, useState } from "react"
import { onValue, ref, set } from "firebase/database"

import { buttonVariants } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import { db } from "../app/firebase"

const SensorData = ({ sensor }: { sensor: String }) => {
  const [sensordata, setSensorData] = useState(null)

  useEffect(() => {
    const SensorDataRef = ref(db, `Sosamala/SensorData/${sensor}`) // Use 'sensor' in the reference
    onValue(SensorDataRef, (snapshot) => {
      const data = snapshot.val()
      setSensorData(data)
    })
  }, [sensor])

  return (
    <>
      {sensordata !== null ? (
        <div className="text-xl font-regular leading-tight tracking-tighter md:text-xl">
          {sensor} : {sensordata}
        </div>
      ) : (
        "Loading..."
      )}
      <div className="w-[100%]">
        <Progress value={sensordata || 0} />
      </div>
    </>
  )
}

const StatusUpdate = ({
  superuser,
  dispenser,
}: {
  superuser?: Boolean
  dispenser?: String
}) => {
  //const [newMistingNozzle, setNewMistingNozzle] = useState("");
  const [isdispenserOn, setIsDispenserOn] = useState(false) // Track the current state

  useEffect(() => {
    const dispenserRef = ref(db, `Sosamala/Status/${dispenser}`)
    onValue(dispenserRef, (snapshot) => {
      const currentValue = snapshot.val()
      setIsDispenserOn(currentValue)
    })
  }, [])

  const handleUpdateMistingNozzle = () => {
    const dispenserRef = ref(db, `Sosamala/Status/${dispenser}`)
    const newValue = !isdispenserOn

    set(dispenserRef, newValue)
  }

  return (
    <button
      onClick={handleUpdateMistingNozzle}
      className={buttonVariants({
        variant: superuser
          ? isdispenserOn
            ? "destructive"
            : "default"
          : "secondary",
      })}
    >
      {isdispenserOn && superuser
        ? `Turn Off ${dispenser}`
        : `Turn On ${dispenser}`}
    </button>
  )
}

export { SensorData, StatusUpdate }
