"use client";

import { CgMail } from "react-icons/cg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdWifiCalling3 } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Bebas_Neue, Roboto } from "next/font/google";
import Link from "next/link";
import Style from "./navBar.module.css";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const NavBar = () => {
  const [infoFlag, setInfoFlag] = useState(false);
  const [quota, setQuota] = useState(false);
  const [menuFlag, setMenuFlag] = useState(false);

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    if (menuFlag) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [menuFlag]);

  useEffect(() => {
    const handler = () => {
      setQuota(false);
      setInfoFlag(false);
      setMenuFlag(false);
    };
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  return (
    <nav className=" max-[1400px]:w-full max-[1400px]:mx-[8px] ">
      <div
        className={` ${Style.nav} h-[120px] max-sm:h-[72px]  max-[1400px]:bg-[#0C5DB6] flex items-center`}
      >
        {/* nav_left_start */}
        <div className=" h-full min-[1300px]:w-[944px] w-4/6 bg-[#0C5DB6] flex items-center">
          {/* logo_start */}
          <div className=" mx-[46.22px] max-[1400px]:mx-[12px]  flex items-center gap-5  ">
            <button
              className={` max-[1400px]:block hidden text-white  cursor-pointer`}
              onClick={(e) => {
                e.stopPropagation(), setMenuFlag(true);
              }}
            >
              <RxHamburgerMenu size={30} />
            </button>
            <svg
              className="w-[167.11px] h-[32px]"
              viewBox="0 0 388 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1276_267)">
                <path
                  className=" max-[1400px]:hidden"
                  d="M139.88 22.7851H122.63C119.43 22.7851 116.69 23.9451 114.4 26.2751C112.11 28.5951 110.97 31.3551 110.97 34.5551V40.8351C110.97 44.0351 112.11 46.7751 114.4 49.0651C116.69 51.3551 119.43 52.4951 122.63 52.4951H139.88V63.5751H122.63C116.38 63.5751 111.03 61.3451 106.58 56.8951C102.12 52.4351 99.9 47.0851 99.9 40.8451V34.5651C99.9 28.2451 102.13 22.8551 106.58 18.3951C111.04 13.9351 116.39 11.7051 122.63 11.7051H139.88V22.7851Z"
                  fill="white"
                />
                <path
                  className=" max-[1400px]:hidden"
                  d="M159.19 12.3851L174.04 33.9851L188.89 12.3851H202.37L167.29 63.4651H153.81L167.29 43.8151L145.69 12.3951H159.17L159.19 12.3851Z"
                  fill="white"
                />
                <path
                  className=" max-[1400px]:hidden"
                  d="M227.38 12.0451H232.52C239.6 12.0451 245.66 14.5751 250.69 19.6451C255.72 24.7151 258.23 30.7851 258.23 37.8751C258.23 44.9651 255.72 51.0151 250.69 56.0451C245.66 61.0751 239.61 63.5851 232.52 63.5851H227.38C220.3 63.5851 214.24 61.0751 209.21 56.0451C204.18 51.0151 201.67 44.9651 201.67 37.8751C201.67 30.7851 204.18 24.7151 209.21 19.6451C214.24 14.5851 220.29 12.0451 227.38 12.0451ZM232.52 24.7251H227.38C223.8 24.7251 220.73 26.0251 218.18 28.6051C215.63 31.1951 214.35 34.2851 214.35 37.8651C214.35 41.4451 215.62 44.5151 218.18 47.0651C220.73 49.6151 223.8 50.8951 227.38 50.8951H232.52C236.1 50.8951 239.17 49.6251 241.72 47.0651C244.27 44.5151 245.55 41.4451 245.55 37.8651C245.55 34.2851 244.27 31.1951 241.72 28.6051C239.17 26.0151 236.1 24.7251 232.52 24.7251Z"
                  fill="white"
                />
                <path
                  className=" max-[1400px]:hidden"
                  d="M270.54 11.2451H292.48C298.27 11.2451 302.84 13.4151 306.19 17.7551C309.16 21.4851 310.72 26.3251 310.87 32.2651V63.5751H280.82C276.48 63.5751 272.78 62.0551 269.74 59.0051C266.69 55.9551 265.17 52.2851 265.17 47.9751C265.17 43.6651 266.69 39.9951 269.74 36.9451V36.8251C272.79 33.7751 276.48 32.2551 280.82 32.2551H299.67C299.59 28.8251 298.87 26.2351 297.5 24.4851C296.36 23.1151 294.68 22.4251 292.47 22.4251H270.53V11.2251L270.54 11.2451ZM299.79 52.4951V43.3551H280.82C279.6 43.3551 278.53 43.8151 277.62 44.7251C276.7 45.6351 276.25 46.7251 276.25 47.9851C276.25 49.2451 276.71 50.2851 277.62 51.1251C278.53 52.0451 279.6 52.4951 280.82 52.4951H299.79Z"
                  fill="white"
                />
                <path
                  className=" max-[1400px]:hidden"
                  d="M344.35 13.8751C348.08 13.8751 351.4 15.0951 354.29 17.5351C357.11 15.0951 360.38 13.8751 364.12 13.8751H372.46C376.73 13.8751 380.36 15.3851 383.37 18.3851C386.38 21.3951 387.88 25.0351 387.88 29.2951V63.5751H376.8V29.2951C376.8 28.1551 376.36 27.1451 375.49 26.2651C374.61 25.3851 373.61 24.9551 372.46 24.9551H364.12C362.98 24.9551 361.97 25.3951 361.09 26.2651C360.21 27.1451 359.78 28.1451 359.78 29.2951V63.5751H348.7V29.2951C348.7 28.1551 348.28 27.1451 347.44 26.2651C346.6 25.3851 345.57 24.9551 344.35 24.9551H337.72C336.5 24.9551 335.47 25.3951 334.64 26.2651C333.8 27.1451 333.38 28.1451 333.38 29.2951L333.27 63.5751H322.19L322.3 29.2951C322.3 25.0251 323.82 21.4151 326.87 18.4451C329.84 15.3951 333.46 13.8751 337.73 13.8751H344.36H344.35Z"
                  fill="white"
                />
                <path
                  d="M65.05 43.0551L39.64 74.0651L83.54 74.1151C85.93 74.1151 87.24 71.3451 85.73 69.5051L65.05 43.0551Z"
                  fill="white"
                />
                <path
                  d="M83.57 0.705078L30.62 0.725078C29.78 0.725078 28.98 1.10508 28.44 1.75508L27.37 3.05508L0.64 35.6151C0.22 36.1251 0.01 36.7551 0 37.3851C0 38.0151 0.22 38.6351 0.64 39.1551L29.27 74.0551H29.31L59.41 37.3951L85.75 5.32508C87.26 3.47508 85.95 0.705078 83.57 0.705078Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1276_267">
                  <rect
                    width="387.89"
                    height="73.41"
                    fill="white"
                    transform="translate(0 0.705078)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* logo_end */}
          {/* ------------ */}
          {/* Mid_start */}
          <div className="  border-l max-[1400px]:hidden border-[#3f81fc] w-full ">
            <div
              className={`${roboto.className} pl-[24px]   border-b border-[#3f81fc] h-[39px] flex items-center`}
            >
              <div className=" h-full flex items-center pr-[20px]  border-r border-[#3f81fc]">
                <div className=" text-[14px] h-full flex gap-[8px] items-center ">
                  <CgMail className=" w-[16px] h-[16px] text-[#75DBFF]" />
                  <p className="  text-[#FFFFFF]">cyoam.cyoam@gmail.com</p>
                </div>
              </div>

              <div className="  h-full flex items-center px-[20px] border-r border-[#3f81fc]">
                <div className=" text-[14px] h-full flex gap-[8px] items-center">
                  <MdWifiCalling3 className=" w-[16px] h-[16px] text-[#75DBFF]" />
                  <p className="   text-[#FFFFFF]">+8801799-028445</p>
                </div>
              </div>

              <div className=" h-full flex items-center pl-[20px]">
                <div className="  text-[14px] h-full flex gap-[8px] items-center">
                  <FiClock className=" w-[16px] h-[16px] text-[#75DBFF]" />
                  <p className="   text-[#FFFFFF]">
                    Sut - Thur 9:00 - 17:00, Fri off
                  </p>
                </div>
              </div>
            </div>
            {/* top_mid_btm_start */}
            <div className=" px-[24px] h-[81px] flex items-center border-b border-[#3f81fc]">
              <ul
                onClick={(e) => e.stopPropagation()}
                className={`  text-[1rem] text-white    flex gap-[32px]`}
              >
                <Link href={"/"}>
                  <li className=" flex items-center">
                    <span className="">Home</span>
                    <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className=" flex items-center">
                    <span className=" ">About</span>
                    <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className=" flex items-center">
                    <span className=" ">Service</span>
                    <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className=" flex items-center">
                    <span className=" ">Work</span>
                    <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                  </li>
                </Link>
                <Link href={"/"}>
                  <li className=" flex items-center">
                    <span className=" ">Contact</span>
                    <MdKeyboardArrowDown className=" h-[20px] w-[20px]" />
                  </li>
                </Link>
              </ul>
            </div>
            {/* top_mid_btm_end */}
          </div>
          {/* Mid_end */}
        </div>
        {/* nav_left_end */}
        {/* --------------------------------------- */}
        {/* nav_right_start */}
        <div className=" h-full min-[1300px]:w-[308px] w-2/6  bg-[#00AEEF] max-[1400px]:bg-[#0C5DB6] ">
          <div className=" h-full max-[1400px]:hidden  ">
            <div className="flex items-center w-full  h-[39px]">
              <div className={` flex h-full w-full border-b text-white`}>
                <div className="  flex px-5 border-slate-300  items-center ">
                  <FaFacebookF className=" w-[16px]  h-[16px] " />
                </div>
                <div className="  border-x  px-5 border-slate-300 flex   items-center">
                  <FaLinkedinIn className="  w-[16px] h-[16px] " />
                </div>
                <div className="  flex border-r px-5  border-slate-300 items-center">
                  <RiTwitterXFill className=" w-[16px] h-[16px] " />
                </div>
                <div className=" flex border-r px-5  border-slate-300 items-center">
                  <FaInstagram className=" w-[16px] h-[16px] " />
                </div>
              </div>
            </div>
            {/* -------------------------- */}
            <div className=" h-[81px] px-[18.5px] py-[18.5px] gap-[12px] flex items-center w-full">
              <div className=" text-white w-[88px] h-full flex items-center gap-2">
                <div className="">
                  <FiSearch size={20} className=" cursor-pointer" />
                </div>
                <input
                  type="text"
                  name=""
                  className=" border-0 outline-none w-full h-full bg-transparent placeholder:text-white text-white"
                  placeholder="Search..."
                  id=""
                />
              </div>

              <div
                style={{
                  clipPath:
                    "polygon(0% 0%, calc(100% - 16px) 0%, 100% calc(100% - 27px), 100% 100%, 0 100% )",
                }}
                className={` cursor-pointer text-[0.875rem] overflow-hidden h-full flex items-center justify-center bg-white w-[159px]`}
              >
                <button className=" w-full h-full">Request a Quote</button>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------- */}

        <div className="min-[1400px]:hidden w-[88px] h-[20px] flex items-center mr-[12px]">
          <div className=" text-white h-full flex items-center gap-2  w-fit">
            <div className="">
              <FiSearch size={20} className=" cursor-pointer" />
            </div>
            <input
              type="text"
              name=""
              className=" border-0 outline-none bg-transparent placeholder:text-white"
              placeholder="Search..."
              id=""
            />
          </div>
        </div>
        {/* --------------------------------- */}
        {/* nav_right_end */}
      </div>
      {/* side_nav_start */}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          !menuFlag ? " -translate-x-[150%]" : "translate-x-[0%]"
        } transition-all hidden max-[1400px]:block  fixed z-50 left-0 top-0 right-0 bg-[#0C5DB6] h-[627px] ${
          Style.side_Menu
        }`}
      >
        <div className=" flex justify-end items-center p-5">
          <button
            className=" bg-white text-blue-500 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation(), setMenuFlag(false);
            }}
          >
            <IoMdClose size={30} />
          </button>
        </div>
        {/* logo_start */}
        <div className="px-5">
          <svg
            className=" h-[32px]"
            viewBox="0 0 388 74"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M139.88 22.3106H122.63C119.43 22.3106 116.69 23.4706 114.4 25.8006C112.11 28.1206 110.97 30.8806 110.97 34.0806V40.3606C110.97 43.5606 112.11 46.3006 114.4 48.5906C116.69 50.8806 119.43 52.0206 122.63 52.0206H139.88V63.1006H122.63C116.38 63.1006 111.03 60.8706 106.58 56.4206C102.12 51.9606 99.9 46.6106 99.9 40.3706V34.0906C99.9 27.7706 102.13 22.3806 106.58 17.9206C111.04 13.4606 116.39 11.2306 122.63 11.2306H139.88V22.3106Z" />
            <path d="M159.19 11.9106L174.04 33.5106L188.89 11.9106H202.37L167.29 62.9906H153.81L167.29 43.3406L145.69 11.9206H159.17L159.19 11.9106Z" />
            <path d="M227.38 11.5706H232.52C239.6 11.5706 245.66 14.1006 250.69 19.1706C255.72 24.2406 258.23 30.3106 258.23 37.4006C258.23 44.4906 255.72 50.5406 250.69 55.5706C245.66 60.6006 239.61 63.1106 232.52 63.1106H227.38C220.3 63.1106 214.24 60.6006 209.21 55.5706C204.18 50.5406 201.67 44.4906 201.67 37.4006C201.67 30.3106 204.18 24.2406 209.21 19.1706C214.24 14.1106 220.29 11.5706 227.38 11.5706ZM232.52 24.2506H227.38C223.8 24.2506 220.73 25.5506 218.18 28.1306C215.63 30.7206 214.35 33.8106 214.35 37.3906C214.35 40.9706 215.62 44.0406 218.18 46.5906C220.73 49.1406 223.8 50.4206 227.38 50.4206H232.52C236.1 50.4206 239.17 49.1506 241.72 46.5906C244.27 44.0406 245.55 40.9706 245.55 37.3906C245.55 33.8106 244.27 30.7206 241.72 28.1306C239.17 25.5406 236.1 24.2506 232.52 24.2506Z" />
            <path d="M270.54 10.7706H292.48C298.27 10.7706 302.84 12.9406 306.19 17.2806C309.16 21.0106 310.72 25.8506 310.87 31.7906V63.1006H280.82C276.48 63.1006 272.78 61.5806 269.74 58.5306C266.69 55.4806 265.17 51.8106 265.17 47.5006C265.17 43.1906 266.69 39.5206 269.74 36.4706V36.3506C272.79 33.3006 276.48 31.7806 280.82 31.7806H299.67C299.59 28.3506 298.87 25.7606 297.5 24.0106C296.36 22.6406 294.68 21.9506 292.47 21.9506H270.53V10.7506L270.54 10.7706ZM299.79 52.0206V42.8806H280.82C279.6 42.8806 278.53 43.3406 277.62 44.2506C276.7 45.1606 276.25 46.2506 276.25 47.5106C276.25 48.7706 276.71 49.8106 277.62 50.6506C278.53 51.5706 279.6 52.0206 280.82 52.0206H299.79Z" />
            <path d="M344.35 13.4006C348.08 13.4006 351.4 14.6206 354.29 17.0606C357.11 14.6206 360.38 13.4006 364.12 13.4006H372.46C376.73 13.4006 380.36 14.9106 383.37 17.9106C386.38 20.9206 387.88 24.5606 387.88 28.8206V63.1006H376.8V28.8206C376.8 27.6806 376.36 26.6706 375.49 25.7906C374.61 24.9106 373.61 24.4806 372.46 24.4806H364.12C362.98 24.4806 361.97 24.9206 361.09 25.7906C360.21 26.6706 359.78 27.6706 359.78 28.8206V63.1006H348.7V28.8206C348.7 27.6806 348.28 26.6706 347.44 25.7906C346.6 24.9106 345.57 24.4806 344.35 24.4806H337.72C336.5 24.4806 335.47 24.9206 334.64 25.7906C333.8 26.6706 333.38 27.6706 333.38 28.8206L333.27 63.1006H322.19L322.3 28.8206C322.3 24.5506 323.82 20.9406 326.87 17.9706C329.84 14.9206 333.46 13.4006 337.73 13.4006H344.36H344.35Z" />
            <path d="M65.05 42.5806L39.64 73.5906L83.54 73.6406C85.93 73.6406 87.24 70.8706 85.73 69.0306L65.05 42.5806Z" />
            <path d="M83.57 0.230591L30.62 0.250591C29.78 0.250591 28.98 0.630591 28.44 1.28059L27.37 2.58059L0.64 35.1406C0.22 35.6506 0.01 36.2806 0 36.9106C0 37.5406 0.22 38.1606 0.64 38.6806L29.27 73.5806H29.31L59.41 36.9206L85.75 4.85059C87.26 3.00059 85.95 0.230591 83.57 0.230591Z" />
          </svg>
        </div>
        {/* logo_end */}
        <div className=" mt-[52px]">
          <ul className={`${babas_neue.className} text-white text-[1.438rem]`}>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 ">
                Home
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 ">
                About
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 ">
                Service
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 ">
                Work
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 ">
                Contact
              </li>
            </Link>
            <Link href={"/"}>
              <li className=" h-[58px] flex items-center border px-5 border-l-0 border-r-0 border-t-0 border-b-0 ">
                Account
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
