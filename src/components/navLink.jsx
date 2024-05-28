"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavLink({link}) {
    const pathname=usePathname();
    // console.log(pathname);
  return (
    <div>
      <Link className={`rounded p-1 ${pathname === link.url && "bg-black text-white"}`} href={link.url}>{link.text}</Link>
    </div>
  )
}
