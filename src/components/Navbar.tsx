"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "@/assets/logo.png"
import { FaSearch } from "react-icons/fa"
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
     const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");

    const navBarList=[
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        },
        {
            title: "Csr",
            link: "/csr",
        },
        {
            title: "Emzor",
            link: "/emzor",
        },
        {
            title: "Products",
            link: "/products",
        },
        {
        
            title: "Media",
            link: "/media",
        },
        {

            title: "Carers",
            link: "/carers",
        },
        {
        
            title: "Contact",
            link: "/contact",
        },
        {
        
            title: "Studio",
            link: "/studio",
        }
    ];
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-600 sticky top-0 z-50'>
        <nav className='h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2'>
            <Link href={"/"}>
                <Image src={logo} alt='logo' className='w-20' />
            </Link>
            <div className='relative w-full hidden lg:inline-flex lg:w-[500px] h-[10] text-base text-primeColor border-[2px] border-black items-center gap-2 justify-between px-6 rounded-md'>
                 <input type="text" 
                 placeholder='Search here'
                 className='flex-1 h-full outline-none bg-transparent placeholder:text-gray-600' 
                 onChange={(e) =>setSearchQuery(e.target.value)}
                 value={searchQuery}
                  />
                  {searchQuery ? ( 
                  <IoCloseOutline 
                  onClick={()=> setSearchQuery("")} className="w-5 h-5 hover:cursor-pointer" /> 
                  ) : ( 
                  <FaSearch className="w-3 h-3 hover:cursor-pointer" /> )}
            </div>
            <div className='hidden md:inline-flex items-center gap-1'>
                {navBarList.map((item) => (
                    <Link href={item?.link} key={item?.link} className={`flex 
                    hover:font-medium w-20 h-6 justify-center items-center px-6 text-gray-700 hover:underline underline-offset-4 decoration-[2px] hover:text-gray-950 md:border-r-[2px] border-r-gray-600 duration-200 last:border-r-0 
                     ${pathname === item?.link && "text-gray-950 underline"}`}>
                        {item?.title}
                    </Link>
                ))}
            </div>
            <div className='hidden md:inline-flex items-center gap-2'>...
            </div>
            <CiMenuFries className="inline-flex md:hidden cursor-pointer w-8 h-6" />
        </nav>
    </div>
  )
}

export default Navbar