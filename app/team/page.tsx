"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Profile from "@/components/profile"

export default function StatsPage() {
  return (
    <div className="w-[100%] p-2">
      <Profile
        name="Nayantha Nethsara"
        role="Device Developer"
        decription=" I configure and program IoT devices, making sure they collect data from sensors and transmit it to our cloud platform, like Firebase."
      />
    </div>
  )
}
