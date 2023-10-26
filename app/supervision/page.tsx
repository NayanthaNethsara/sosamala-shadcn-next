// @ts-nocheck
"use client"

import React, { useEffect, useState } from "react"
import { onValue, ref, set } from "firebase/database"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ImageDisplay from "@/components/firebase-image"
import { StatusUpdate } from "@/components/firebase-update"

export default function Superior({ className, ...props }: any) {
  return (
    <div className="p-4">
      <Card className={cn("w-[100%] lg:w-[400px ]", className)} {...props}>
        <CardHeader>
          <CardTitle>Command and Conquer</CardTitle>
          <CardDescription> Take control into your own hands.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ImageDisplay />
          <StatusUpdate superuser={true} dispenser="Camera" />
        </CardContent>
      </Card>
    </div>
  )
}
