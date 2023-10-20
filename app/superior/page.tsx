// @ts-nocheck
"use client"

import React, { useEffect, useState } from "react"
import { onValue, ref, set } from "firebase/database"
import { Check, Shield } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

import { db } from "../firebase"

const notifications = [
  {
    title: "This mode allows manual control, but use it with caution",
  },
  {
    title: "Remember to revert to automation when done",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function Superior({ className, ...props }: any) {
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const handleSwitchChange = (isChecked) => {
    setIsSwitchOn(isChecked)

    // Update the Firebase value based on the switch state
    const SuperiorRef = ref(db, "/Sosamala/Superior/Mist")
    set(SuperiorRef, isChecked)
    const Soil = ref(db, "/Sosamala/Superior/Soil")
    set(Soil, isChecked)
  }

  useEffect(() => {
    // Listen for changes in the Firebase value and update the switch state
    const SuperiorRef = ref(db, "/Sosamala/Superior/Mist")
    onValue(SuperiorRef, (snapshot) => {
      const value = snapshot.val()
      setIsSwitchOn(value)
    })
  }, [])

  return (
    <div className="p-4">
      <Card className={cn("w-[100%] lg:w-[400px ]", className)} {...props}>
        <CardHeader>
          <CardTitle>Command and Conquer</CardTitle>
          <CardDescription> Take control into your own hands.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <Shield />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Superior Mode</p>
            </div>
            <Switch onCheckedChange={handleSwitchChange} checked={isSwitchOn} />
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-regular leading-none ">
                    {notification.title}
                  </p>
                  {!isSwitchOn ? null : <></>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
