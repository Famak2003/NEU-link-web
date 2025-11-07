"use client"
import Image from "next/image";
import SIM1 from '@/assets/sim1.png'
import SIM2 from '@/assets/sim2.png'
import SIM3 from '@/assets/sim3.png'
import SIM7 from '@/assets/sim7.png'
import SIM6 from '@/assets/sim6.png'
import STATS1 from '@/assets/stats1.png'
import STATS2 from '@/assets/stats2.png'
import STATS3 from '@/assets/stats3.png'
import STATS4 from '@/assets/stats4.png'
import STATS5 from '@/assets/stats5.png'
import STATS6 from '@/assets/stats6.png'
import STATS7 from '@/assets/stats7.png'
import SIM20 from '@/assets/sim20.png'
import HOME from '@/assets/home.png'
import STATS from '@/assets/stats.png'
import JOBS from '@/assets/jobs.png'
import SAVED from '@/assets/saved.png'
import PROFILE from '@/assets/profile.png'
import NEWSIM from '@/assets/new-sim.png'
import APPLE_EN from '@/assets/apple-en.svg'
import APPLE_TR from '@/assets/apple-tr.svg'
import PLAY_EN from '@/assets/google-play-badge.svg'
import PLAY_TR from '@/assets/play-tr.svg'
import PUNICA from '@/assets/punica-logo.png'
import NEULOGO from '@/assets/near-east-university-logo.png'
import { useDictionary } from "@/i18n/dictionary-provider";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import Link from "next/link";
import { i18n } from "@/i18n/config";
import { useParams } from "next/navigation";
import FacebookIcon from "@/assets/svg/FacebookIcon";
import TwitterIcon from "@/assets/svg/TwitterIcon";
import InstagramIcon from "@/assets/svg/InstagramIcon";
import LinkedinIcon from "@/assets/svg/LinkedinIcon";
import GooglePlay from "@/assets/svg/Googleplay";

export default function Home() {
    const dict = useDictionary()
    const params = useParams();
    const locale = params.locale as string;


    // i18n.

    const pages = [
        { label: dict.PRIVACY_POLICY, path: "privacy-policy" },
        { label: dict.TERMS_AND_CONDITIONS, path: "terms-and-conditions" },
        { label: dict.CONTACT_US, path: "contact-us" }
    ]

    const footerData = [
        { label: dict.TERMS_AND_CONDITIONS, path: "terms-and-conditions" },
        { label: dict.PRIVACY_POLICY, path: "privacy-policy" },
    ]

    const footerSocial: {icon: React.ReactNode, path: string}[] = [
        { icon: <FacebookIcon className="w-7 mobile:w-8 h-6 mobile:h-8 rounded-sm flex items-center justify-center"/>, path: "https://www.facebook.com/YakinDoguUniversitesiOfficial/" },
        { icon: <TwitterIcon className="w-7 mobile:w-8 h-6 mobile:h-8 rounded-sm flex items-center justify-center" />, path: "https://twitter.com/YakinDoguUni" },
        { icon: <InstagramIcon className="w-7 mobile:w-8 h-6 mobile:h-8 rounded-sm flex items-center justify-center" />, path: "https://www.instagram.com/YakinDoguUniversitesiOfficial/" },
        { icon: <LinkedinIcon className="w-7 mobile:w-8 h-6 mobile:h-8 rounded-sm flex items-center justify-center" />, path: "https://www.linkedin.com/company/yakin-dogu-university" },
    ]

    const screenShots = [
        // HOME,
        STATS,
        SAVED,
        JOBS,
        PROFILE,
    ]

    const year = new Date().getFullYear()

    return(
        <div className=" page ">
            <section className=" relative bg-white overflow-hidden rounded-3xl flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between items-start h-fit xl:h-[70dvh] ">
                <div className=" flex flex-col gap-11 w-full xl:w-[48%] 3xl:w-[40%] h-full gap-15 pt-20 ">
                    <div className=" flex flex-col gap-1 ">
                        <h1 className=" text-[35px] mobile:text-[45px] font-medium ">{dict.GET_THE_APP}</h1>
                        <p className=" font-medium text-[13px] mobile:text-[15px] text-justify w-[88%] ">
                            {dict.HERO_WRITE_UP}
                        </p>
                    </div>
                    <div className=" flex flex-col smobile:flex-row gap-3 sm:gap-5 ">
                        <figure className=" w-[150px] smobile:w-[180px] h-[60px] mobile:py-[2px]">
                            <Image className=" h-full w-full " src={APPLE_EN} alt="apple store" />
                        </figure>  
                        <figure className=" w-[150px] smobile:w-[180px] h-[60px]">
                            {/* <GooglePlay width={180} height={"100%"}  /> */}
                            <Image className=" !h-full w-full object-cover " src={PLAY_EN} alt="play store" />
                        </figure>  
                                                  
                        {/* <div className=" flex items-center justify-between gap-2 smobile:gap-4 bg-black w-fit py-3 px-4 smobile:px-7 rounded-2xl ">
                            <Image className=" w-[50px] h-[50px] " src={APPLE} alt="apple store" />
                            <div className=" flex flex-col ">
                                <p className=" text-[14px] font-extralight text-white ">{dict.DOWNLOAD_THE_APP}</p>
                                <h2 className=" text-[16px] smobile:text-[20px] font-bold text-white ">Apple Store</h2>
                            </div>
                        </div>
                        <div className=" flex items-center justify-between gap-2 smobile:gap-4 bg-black w-fit py-3 px-4 smobile:px-7 rounded-2xl ">
                            <Image className=" w-[50px] h-[50px] " src={PLAY} alt="google play store" />
                            <div className=" flex flex-col ">
                                <p className=" text-[14px] font-extralight text-white ">{dict.GET_IT_ON}</p>
                                <h2 className=" text-[16px] smobile:text-[20px] font-bold text-white ">Google Play</h2>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className=" z-[999] flex justify-center items-center h-[800px] px-6 xl:h-full w-full xl:w-[50%] bg-gradient-to-b from-[#780023] to-[#2f000d] rounded-3xl ">
                    <figure className="rounded-[45px] overflow-hidden h-[80%] w-fit " >
                        <Image className=" w-full h-full object-contain " src={HOME} alt="Near East Logo" />
                    </figure>
                </div>
            </section>

            <section className=" flex flex-col gap-10 h-fit xl:h-[700px] xxl:h-[800px] 3xl:h-[900px] w-full ">
                {/* relative bg-white overflow-hidden rounded-3xl gap-10 h-fit */}
                <h2 className=" text-[30px] font-semibold self-center ">{dict.SCREEN_SHOTS_OF_THE_APPLICATION}</h2>
                <div className=" flex flex-row flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-6 w-full h-full  ">
                    
                    <div className=" flex justify-center items-center relative w-full xl:w-[35%] !h-full rounded-3xl overflow-hidden p-5 bg-primary ">
                        <figure 
                            className={` w-fit h-full overflow-hidden `}
                        >
                            <Image className=" object-contain h-full w-full " src={HOME} alt="app photo 1" />
                        </figure>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 h-full w-full xl:w-[65%] ">
                        {
                            screenShots.map((image, idx) => {
                                return(
                                    <li key={idx} className=" flex justify-center items-end relative w-full h-[100%] rounded-3xl overflow-hidden px-5 pt-5 bg-primary backdrop-blur-md ">
                                        <figure className="  h-fit w-full ">
                                            <Image className=" object-contain w-full h-full " src={image} alt="app photo 1" />
                                        </figure>
                                    </li>
                                )
                            })
                        }
                    </div>                    
                </div>
            </section>

            <footer className=" flex flex-col xl:flex-row gap-3 xl:gap-0 items-center justify-between h-fit xl:h-[70px] pb-3  ">
                <div className=" flex items-end gap-2 ">
                    <p className=" text-[10px] ">
                        {dict.POWERED_BY}
                    </p>
                    <a
                        href="https://punica.app"
                        aria-label="punica"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image className=" h-[18px] w-[80px] " src={PUNICA} alt="punica logo" />
                    </a>
                </div>
                <div className=" flex flex-col xl:flex-row items-center justify-center gap-3 xl:gap-10 ">
                    <ul className=" flex justify-center flex-wrap tab:flex-nowrap items-center gap-2 tab:gap-4 ">
                        <li className=" text-[12px] text-black text-center ">
                            {` © ${year} ${dict.ALL_RIGHTS_RESERVED_BY_NEAR_EAST_UNIVERSITY}`}
                        </li>
                        {
                            footerData.map((obj, idx) => {
                                return(
                                    <Link key={idx} href={`/${locale}/${obj.path}`}>
                                        <li className={` text-[12px] text-black `}>
                                            {obj.label}
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div className="flex gap-2 mobile:gap-4">
                        {
                            footerSocial.map((obj, idx) => {
                                return(
                                    <a
                                        key={idx}
                                        href={obj.path}
                                        aria-label="Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" h-fit w-fit rounded-sm flex items-center justify-center"
                                    >
                                        {obj.icon}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </footer>

        </div>
    )
}