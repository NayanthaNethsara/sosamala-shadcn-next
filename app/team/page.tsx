"use client"

import Profile from "@/components/profile"

export default function StatsPage() {
  return (
    <div className="flex flex-col w-[100%] p-2 gap-2">
      <Profile
        src="https://github.com/shadcn.png"
        name="Nayantha Nethsara"
        role="Device Developer"
        decription=" I configure and program IoT devices, making sure they collect data from sensors and transmit it to our cloud platform, like Firebase."
      />
      <Profile
        src="https://github.com/shadcn.png"
        name="Lahiru Karunasekara"
        role="Device Developer"
        decription=" I configure and program IoT devices, making sure they collect data from sensors and transmit it to our cloud platform, like Firebase."
      />
      <Profile
        src="https://github.com/shadcn.png"
        name="Dulaj Ponseka"
        role="Device Developer"
        decription=" I configure and program IoT devices, making sure they collect data from sensors and transmit it to our cloud platform, like Firebase."
      />
      <Profile
        src="https://github.com/shadcn.png"
        name="Minthaka Sandul"
        role="Device Developer"
        decription=" I configure and program IoT devices, making sure they collect data from sensors and transmit it to our cloud platform, like Firebase."
      />
    </div>
  )
}
