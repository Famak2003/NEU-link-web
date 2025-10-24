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
import NEWSIM from '@/assets/new-sim.png'
import APPLE from '@/assets/apple-3d.png'
import PLAY from '@/assets/play-store.png'
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
        { icon: <FacebookIcon className="w-8 h-8 rounded-sm flex items-center justify-center"/>, path: "https://www.facebook.com/PunicaApp" },
        { icon: <TwitterIcon className="w-8 h-8 rounded-sm flex items-center justify-center" />, path: "https://x.com/PunicaApp" },
        { icon: <InstagramIcon className="w-8 h-8 rounded-sm flex items-center justify-center" />, path: "https://www.instagram.com/punicaapp" },
        { icon: <LinkedinIcon className="w-8 h-8 rounded-sm flex items-center justify-center" />, path: "https://www.linkedin.com/company/punicaapp" },
    ]

    const year = new Date().getFullYear()

    return(
        <div className=" page ">
            <section className=" hero relative bg-white p-6 overflow-hidden rounded-3xl flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between items-start h-fit xl:h-[70dvh] ">
                <div className=" flex flex-col gap-11 w-full xl:w-[40%] h-full gap-15 pt-20 ">
                    <div className=" flex flex-col gap-1 ">
                        <h1 className=" text-[45px] font-thin ">{dict.GET_THE_APP}</h1>
                        <p className=" font-semibold text-[15px] w-[80%] ">
                            {dict.HERO_WRITE_UP}
                        </p>
                    </div>
                    <div className=" flex flex-col gap-5 ">
                        <div className=" flex items-center justify-between gap-4 bg-black w-fit py-3 px-7 rounded-2xl ">
                            <Image className=" w-[50px] h-[50px] " src={APPLE} alt="apple store" />
                            <div className=" flex flex-col ">
                                <p className=" text-[14px] font-extralight text-white ">{dict.DOWNLOAD_THE_APP}</p>
                                <h2 className=" text-[20px] font-bold text-white ">Apple Store</h2>
                            </div>
                        </div>
                        <div className=" flex items-center justify-between gap-4 bg-black w-fit py-3 px-7 rounded-2xl ">
                            <Image className=" w-[50px] h-[50px] " src={PLAY} alt="google play store" />
                            <div className=" flex flex-col ">
                                <p className=" text-[14px] font-extralight text-white ">{dict.GET_IT_ON}</p>
                                <h2 className=" text-[20px] font-bold text-white ">Google Play</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" z-[999] flex justify-center items-center h-[800px] xl:h-full w-full xl:w-[50%] bg-gradient-to-b from-[#780023] to-[#2f000d] rounded-3xl ">
                    <figure className="rounded-[45px] overflow-hidden h-[80%] w-fit " >
                        <Image className=" w-full h-full object-contain " src={NEWSIM} alt="Near East Logo" />
                    </figure>
                </div>
            </section>

            <section className=" flex flex-col gap-10 h-fit xl:h-[80dvh] w-full ">
                <h2 className=" text-[25px] font-thin ">{dict.SCREEN_SHOTS_OF_THE_APPLICATION}</h2>
                <div className=" flex flex-col xl:flex-row gap-5 w-full h-[80%] ">
                    <div className="relative flex justify-center items-center h-full w-full xl:w-[50%] rounded-3xl p-5 bg-white bg-opacity-[.9]">
                        <figure className=" w-fit h-full rounded-[55px] overflow-hidden ">
                            <Image className=" object-contain h-full w-full " src={SIM20} alt="app photo 1" />
                        </figure>
                    </div>
                    <ul className=" flex flex-col gap-5 h-full w-full xl:w-[50%] rounded-3xl ">
                        <li className=" flex justify-center items-center relative gap-5 h-[50%] w-full rounded-3xl overflow-hidden p-5 bg-primary backdrop-blur-md ">
                            <figure className=" h-fit overflow-hidden rounded-3xl w-[48%] ">
                                <Image className=" object-contain w-full h-full " src={STATS4} alt="app photo 1" />
                            </figure>
                            <figure className=" h-fit overflow-hidden rounded-3xl w-[48%] ">
                                <Image className=" object-contain w-full h-full " src={STATS5} alt="app photo 1" />
                            </figure>
                        </li>
                        <li className=" flex justify-center items-center relative h-[50%] w-full rounded-3xl overflow-hidden px-5 pt-5 bg-primary backdrop-blur-md ">
                            <figure className=" w-fit h-full overflow-hidden rounded-t-[58px] ">
                                <Image className=" object-contain w-full h-full " src={STATS7} alt="app photo 1" />
                            </figure>
                        </li>
                    </ul>
                </div>
            </section>

            <footer className=" flex flex-col lmd:flex-row gap-5 sm:gap-0 items-center justify-between h-fit xl:h-[70px] pb-3  ">
                <a
                    href="https://punica.app"
                    aria-label="punica"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image className=" h-[32px] w-[130px] " src={PUNICA} alt="punica logo" />
                </a>
                <div className=" flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 md:gap-10 ">
                    <ul className=" flex justify-center flex-wrap mobile:flex-nowrap items-center gap-4 ">
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
                        <li className=" text-[12px] text-black ">
                            {` © ${year} ${dict.ALL_RIGHTS_RESERVED}`}
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        {
                            footerSocial.map((obj, idx) => {
                                return(
                                    <a
                                        key={idx}
                                        href={obj.path}
                                        aria-label="Facebook"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-sm flex items-center justify-center"
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