export default function BloomsList() {
  return (
    <div className="h-auto w-full rounded-2xl border p-3 bg-[#1E1E1E]">
      {/* Total value */}
      <ListItem
        label="Total Blooms"
        value={4}
        fontSize="text-lg"
        fontWidth="font-semibold"
        key="Total Blooms"
      />

      {/* Rest of the list */}

      <ListItem label="Bloom In 1 Day" value={2} key="Bloom In 1 Day" />
      <ListItem label="Bloom In 2 Days" value={2} key="Bloom In 2 Days" />
    </div>
  )
}

function ListItem({
  fontSize = "text-base",
  fontWidth = "font-medium",
  label,
  value,
}: {
  fontSize?: string
  fontWidth?: string
  label: string
  value: number
}) {
  return (
    <span
      className={`flex flex-row justify-between py-2   ${fontSize} ${fontWidth}`}
    >
      <h2>{label}</h2>
      <p>{value}</p>
    </span>
  )
}
