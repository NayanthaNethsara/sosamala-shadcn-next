import Link from "next/link"
import * as Avatar from "@radix-ui/react-avatar"
import { Instagram, Linkedin, Mail } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Profile({
  name,
  role,
  decription,
  src,
}: {
  name?: string
  role?: string
  decription?: string
  src?: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full gap-5 grid-cols-2">
          <div className="flex w-full flex-col">
            <Avatar.Root className=" grow inline-flex min-h-[100px] min-w-[100px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={src}
                alt={name}
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                delayMs={600}
              >
                {name}
              </Avatar.Fallback>
            </Avatar.Root>
            <div className=" grow pt-3 flex w-full gap-3 grid-cols-3 justify-center">
              <div className="">
                <Link
                  href={"https://www.instagram.com/nayaa.gg/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"https://www.linkedin.com/in/nayanthanethsara/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
              <div className="">
                <Link
                  href={"nayanthanethsara@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle>
              <p className="text-xl font-bold leading-tight tracking-tighter">
                {name}
              </p>
            </CardTitle>
            <CardDescription className="text-justify text-sm">
              {decription}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="space-y-1"></div>
      </CardContent>
    </Card>
  )
}
