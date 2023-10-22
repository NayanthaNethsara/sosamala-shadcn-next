import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
          <Avatar size="100px">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>

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
