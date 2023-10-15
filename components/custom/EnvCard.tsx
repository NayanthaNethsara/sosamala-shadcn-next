import Image from "next/image"

export default function EnvCard({iconSrc, percentage, sensorName}:{
    iconSrc: string,
    percentage: number,
    sensorName: string
}) {
  return (
    <div className="flex  aspect-square w-44 flex-col items-center justify-center gap-y-3 rounded-2xl border bg-white p-3 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0)_100%)]">
      <Image
        src={iconSrc}
        alt=""
        width={100}
        height={100}
        className="aspect-square w-14"
      />
      <p className="font-semibold">{percentage}%</p>

      <div className="flex flex-row items-center justify-center gap-1 text-center">
        <Image
          alt=""
          src="/icons/alert-circle.svg"
          width={20}
          height={20}
          className="aspect-square w-4"
        />
        <p className="text-xs">{sensorName}</p>
      </div>
    </div>
  )
}
