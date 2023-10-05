"use client"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Humidity,Temperature,Moisture , MistingNozzleUpdate} from "@/components/firebase-read"
import { siteConfig } from "@/config/site"



export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">

        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Sosamala is a smart electronic system designed  <br className="hidden sm:inline" />
        to monitor and care for rose plants.  
        </h1>

        <br className="hidden sm:inline" />
        
        <Humidity></Humidity>
        <Temperature></Temperature>
        <Moisture></Moisture>

      </div>

      <div className="flex gap-4">
        <MistingNozzleUpdate></MistingNozzleUpdate>
      </div>
    </section>
  )
}
