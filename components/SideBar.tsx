import { NavItem } from "@/types/nav"
import SideBarThumbnails from "@/components/SideBarThumbnails"

interface MainNavProps {
  items?: NavItem[]
}
export default function SideBar() {
  return (
    <div className="flex flex-col gap-10">
      <SideBarThumbnails
        src="/icons/logo.svg"
        title="Sosamala"
        textColor="text-neutral-200"
      />
      <SideBarThumbnails
        src="/icons/home.svg"
        title="Home"
        textColor="text-[]"
      />
      <SideBarThumbnails
        src="/icons/home.svg"
        title="Home"
        textColor="text-[]"
      />
      <SideBarThumbnails
        src="/icons/home.svg"
        title="Home"
        textColor="text-[]"
      />
    </div>
  )
}
