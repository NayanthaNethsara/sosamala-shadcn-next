"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import SideBarThumbnails from "./SideBarThumbnails"

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: isOpen ? "0%" : "-100%" }}
      transition={{ duration: 1, type: "tween" }}
      className="stack-child z-[999] flex h-screen w-[70dvw] max-w-[300px] flex-col justify-between bg-[#0A0A0A] px-16 py-10"
    >
      {/* menu button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-12 bottom-0 rounded-r-full bg-black p-3"
      >
        {!isOpen ? "open" : "close"}
      </div>

      {/* logo here */}
      <div className="flex flex-row gap-3">
        <SideBarThumbnails
          src="/icons/logo.svg"
          title="Sosamala"
          textColor="text-neutral-200"
        />
      </div>

      {/* Sections here */}
      <ul className="flex flex-col gap-10 ">
        <li>
          <SideBarThumbnails
            src="/icons/home.svg"
            title="Home"
            textColor="text-[#4BFFBE]"
          />
        </li>
        <li>
          <SideBarThumbnails src="/icons/home.svg" title="Superior" />
        </li>
        <li>
          <SideBarThumbnails src="/icons/home.svg" title="Logs" />
        </li>
        <li>
          <SideBarThumbnails src="/icons/home.svg" title="About" />
        </li>
        <li>
          <SideBarThumbnails src="/icons/home.svg" title="Team" />
        </li>
      </ul>

      {/* logout button */}
      <div>
        <SideBarThumbnails src="/icons/home.svg" title="Logout" />
      </div>
    </motion.aside>
  )
}
