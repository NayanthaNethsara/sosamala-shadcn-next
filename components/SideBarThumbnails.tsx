import Image from "next/image"

export default function SideBarThumbnails({
  src,
  alt = "",
  width = 50,
  height = 50,
  title,
  className = "w-7",
  textColor = "text-neutral-200",
}: {
  src: string
  alt?: string
  width?: number
  height?: number
  title: string
  className?: string
  textColor?: string
}) {
  return (
    <span className="flex flex-row gap-3">
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        className={className}
      />
      <p className={`text-xl font-semibold ${textColor}`}>{title}</p>
    </span>
  )
}
