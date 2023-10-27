import { NavItem } from "@/types/nav"
import { Separator } from "@/components/ui/separator"
import SideBarThumbnails from "@/components/SideBarThumbnails"

interface MainNavProps {
  items?: NavItem[]
}
export default function SideBar() {
  return (
    <div className="flex flex-col pt-5">
      <SideBarThumbnails
        href="/"
        src="/icons/logo.svg"
        title="Sosamala"
        textstyle="text-xl font-semibold text-neutral-200"
      />

      <div className="flex flex-col pt-10 gap-8">
        <SideBarThumbnails href="/" src="/icons/home.svg" title="Dashboard" />

        <SideBarThumbnails
          href="/superior"
          src="/icons/superior.svg"
          title="Superior"
        />
        <SideBarThumbnails
          href="/supervision"
          src="/icons/logs.svg"
          title="Super Vision"
        />

        <SideBarThumbnails href="/team" src="/icons/team.svg" title="Team" />
      </div>
    </div>
  )
}
