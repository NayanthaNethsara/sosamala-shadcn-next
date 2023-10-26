"use client"

import React, { useEffect, useState } from "react"
import { getDownloadURL, getStorage, ref } from "firebase/storage"

import { storage } from "@/app/firebase"

function ImageDisplay() {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    getDownloadURL(ref(storage, "images/abc.jpg")).then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      //   const xhr = new XMLHttpRequest()
      //   xhr.responseType = "blob"
      //   xhr.onload = (event) => {
      //     const blob = xhr.response
      //   }
      //   xhr.open("GET", url)
      //   xhr.send()

      setImageUrl(url)
    })
  })

  return <>{imageUrl && <img src={imageUrl} alt="" />}</>
}

export default ImageDisplay
