'use client'
 import Image from "next/image"
export default function myImageLoader({ src, width, quality }) {
  return `https://nextportfolio.com/${src}?w=${width}&q=${quality || 75}`
}