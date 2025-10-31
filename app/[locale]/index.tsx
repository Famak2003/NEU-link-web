"use client"

import Image from "next/image";
import NEULOGO from '@/assets/near-east-university-logo.png'
import HAM from '@/assets/hamburger.png'
import HAM2 from '@/assets/hamburger2.png'
import x from '@/assets/x.png'
import X1 from '@/assets/x1.png'

import { useDictionary } from "@/i18n/dictionary-provider";
import React, { useEffect, useRef, useState } from "react";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { useParams } from "next/navigation";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const Index:React.FC<{children: React.ReactNode}> = ({children}) => {
    const dict = useDictionary()
    const sidebarRef = useRef(null)
    const btnRef = useRef(null)
    const params = useParams();
    const locale = params.locale as string;
    const [scrolled, setScrolled] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const pages = [
        { label: dict.PRIVACY_POLICY, path: "privacy-policy" },
        { label: dict.TERMS_AND_CONDITIONS, path: "terms-and-conditions" },
        // { label: dict.CONTACT_US, path: "contact-us" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20); // Adjust scroll threshold
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const OpenMenu = () =>{
        setShowSideBar(!showSideBar)
    }

    const handleCloseSidebar = () => {
        setShowSideBar(false)
    }

    useOutsideClick({ref: sidebarRef, btnRef, callback: handleCloseSidebar})


    return (
        <div className=" relative w-full max-w-[2000px] overflow-hidden h-fit px-[15px] ">
            <nav className={` fixed top-10 left-[2.5%] mx-auto w-[95%] flex justify-between items-center px-[15px] lmobile:px-[30px] h-fit py-[10px] rounded-[20px] bg-primary z-[99999999] duration-200 `}>
                <Link href={"/"} className=" flex justify-center gap-2 mobile:gap-5 items-end ">
                    <Image src={NEULOGO} alt="Near East University" width={40} height={40} />
                    <h1 className={` text-2xl smobile:text-3xl font-thin text-white `}>NEU Link</h1>
                </Link>
                <ul className={` hidden xxl:flex justify-center items-center gap-5 `}>
                    {
                        pages.map((obj, idx) => {
                            return(
                                <Link key={idx} href={`/${locale}/${obj.path}`}>
                                    <li className={` text-[15px] text-white `} >
                                        {obj.label}
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <div className=" hidden lmobile:flex ">
                    <LanguageSwitcher scrolled={scrolled}/>
                </div>
                {/* <button className={` hidden tab:flex font-thin text-[18px] h-[90%] py-[15px] px-[15px] rounded-[18px] text-white bg-primary `}>
                    {dict.VISIT_NEAR_EAST_UNIVERSITY}
                </button> */}
                 <a 
                    href="https://neu.edu.tr"
                    aria-label="Near East University"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` hidden tab:flex font-thin text-[18px] h-[90%] py-[15px] px-[15px] rounded-[18px] text-white bg-[#530a21] custom_shad1 `}
                >
                    {dict.VISIT_NEAR_EAST_UNIVERSITY}
                </a>
                <button ref={btnRef} onClick={OpenMenu} className=" bg-primary p-1 rounded-lg xxl:hidden w-[35px] lmobile:w-[50px] h-[35px] lmobile:h-[50px] ">
                    <Image className=" w-full h-full " src={HAM2} alt="Menu" />
                </button>

                {/* sidebar */}
                <div ref={sidebarRef} className={` ${showSideBar ? "translate-x-0" : "translate-x-[2000%]"} fixed flex-col flex justify-between ${scrolled ? "top-0" : "top-10"} right-1 px-5 pt-16 pb-20 bg-white w-[80%] smobile:w-[60%] lmobile:w-[40%] md:w-[30vw] h-[100dvh] rounded-lg duration-500 `} >
                    <div className=" flex flex-col items-center gap-7 ">
                        <button onClick={handleCloseSidebar} className={` p-1 fixed top-[10px] bg-primary rounded-lg self-end w-[28px] h-[28px] lmobile:w-[35px] lmobile:h-[35px] duration-300 `}>
                            <Image className=" w-full h-full " src={X1} alt="close sidebar" />
                        </button>
                        <div className=" lmobile:hidden flex ">
                            <LanguageSwitcher/>
                        </div>
                        <ul className={` flex flex-col justify-center items-center gap-5 `}>
                            {
                                pages.map((obj, idx) => {
                                    return(
                                        <Link key={idx} href={`/${locale}/${obj.path}`}>
                                            <li className={` text-[15px] text-black `} >
                                                {obj.label}
                                            </li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* <button className={` font-thin text-[15px] h-fit py-[15px] px-[15px] rounded-[18px] text-white bg-primary `}>
                    </button> */}
                    <a 
                        href="https://neu.edu.tr"
                        // aria-label="Near East University"
                        target="_blank"
                        // rel="noopener noreferrer"
                        className={` font-thin text-[15px] h-fit py-[15px] px-[15px] rounded-[18px] text-white bg-primary `}
                    >
                        {dict.VISIT_NEAR_EAST_UNIVERSITY}
                    </a>
                </div>
            </nav>
            {children}
        </div>
    )
}

export default Index