import Image from "next/image"
import Link from "next/link"

export default function SideBarThumbnails({
  src,
  alt = "",
  width = 10,
  height = 10,
  title,
  className = "w-7",
  textstyle = "text-neutral-200 text-l font-reguler",
  href,
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  title: string
  className?: string
  textstyle?: string
  href: string
}) {
  return (
    <Link href={href}>
      <span className="flex flex-row gap-3 items-center">
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className={className}
        />
        <p className={textstyle}>{title}</p>
      </span>
    </Link>
  )
}
