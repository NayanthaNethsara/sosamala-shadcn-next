import * as Avatar from "@radix-ui/react-avatar"

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
}: {
  name: string
  role: string
  decription: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex w-full gap-5 grid-cols-2">
          <Avatar.Root className="bg-blackA1 inline-flex h-[100px] w-12 select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              className="h-full w-full rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="Colm Tuite"
            />
            <Avatar.Fallback
              className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
              delayMs={600}
            >
              CT
            </Avatar.Fallback>
          </Avatar.Root>
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
        <div className="space-y-1">ss</div>
        <div className="space-y-1"></div>
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  )
}
