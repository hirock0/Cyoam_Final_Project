"use client";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { LuDot } from "react-icons/lu";
import { GoArrowLeft } from "react-icons/go";
import { FiArrowLeft } from "react-icons/fi";
import Explore_btn from "@/components/ui/buttons/explore_btn/explore_btn";
import Style from "./banner.module.css";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
import NavBar from "../../navBar/navBar";
import { useEffect, useState } from "react";

const Banner = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  const [scrollFlag, setScrolFlag] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolFlag(true);
      } else {
        setScrolFlag(false);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Run it once on mount to set the initial state correctly
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className=" min-[1400px]:h-[1018px] overflow-hidden bg-[#F2F2F2]"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/hxfxcTKD/banne-background.png')`,
      }}
    >
      <div className=" bottom_left_corner_cut relative pt-[40px] max-sm:pt-0  bg-[#f2f2f2f3]  h-full w-full">
        <div className="h-[120px]">
          <div
            className={` ${
              scrollFlag
                ? "fixed top-0 left-0 z-50 flex justify-center w-full transition-all"
                : " mx-[94px] max-[1400px]:mx-[8px] flex justify-center items-center "
            }   `}
          >
            <NavBar />
          </div>
        </div>

        {/* main_start */}
        <div className=" relative h-full px-[120px] max-[1400px]:px-[20px] ">
          <div className=" relative w-full h-full ">
            {/* banner_start */}
            <div className="  flex max-[1300px]:flex-col pt-[72px] max-md:pt-[40px] max-sm:pt-[32px] pb-[120px] max-md:pb-[100px] max-sm:pb-[80px] ">
              <div className=" w-1/2 max-[1300px]:w-full max-md:w-full">
                <div className="">
                  <button className=" flex items-center text-[1rem] border px-2">
                    <span>
                      <LuDot />
                    </span>
                    Start With Solutions
                    <span>
                      <LuDot />
                    </span>
                  </button>
                </div>
                <h1
                  className={`${babas_neue.className} text-[6rem] leading-[81px] tracking-[-2px] max-sm:text-[4rem] max-sm:leading-[56px] max-sm:tracking-[-1px] mt-[28px] max-sm:mt-[24px] `}
                >
                  Transforming Businesses{" "}
                  <span className=" text-[#00AEEF]">with Expertise</span>
                </h1>
                <p className="text-[1.125rem] leading-[28px] tracking-[0px] my-[33px] max-sm:my-[23px] w-3/4 max-md:w-full text-[#5D5D5D] ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                {/* -------------------------------- */}
                <div className=" flex justify-center">
                  <div
                    className={` overflow-hidden hidden max-sm:block  w-fit`}
                    style={{
                      clipPath:
                        "polygon(50px 0, 100% 0, 100% 87.5%, 87.5% 100%, 0% 100%, 0 50px)",
                    }}
                  >
                    <Image
                      src={"https://i.ibb.co.com/4R95QvZg/banner-image.jpg"}
                      alt="img"
                      width={500}
                      height={500}
                      priority
                      className=" max-[400px]:h-[400px] max-[400px]:w-[400px] max-[1200px]:h-[600px] max-[1200px]:w-full  object-cover grayscale"
                    />
                  </div>
                </div>
                <div className=" max-md:hidden">
                  <Explore_btn />
                </div>
                {/* ------------------------------------------- */}
                {/* divider_start */}

                <div className=" bg-gradient-to-r from-[#00AEEF] to-[#B0B0B000] h-[2px] w-full my-[33px] max-sm:mt-[44px] max-sm:mb-[32px] "></div>
                {/* divider_end */}
                <div className=" flex items-center h-[96px] max-md:hidden">
                  {/* three_person_section_start */}
                  <div className="h-full w-[148px]   relative">
                    <div className=" absolute flex gap-5 items-center top-0 left-0 ">
                      <button className=" text-[#00AEEF]">
                        <FiArrowLeft size={25} />
                      </button>
                      <button className=" text-[#0C5DB6] rotate-180">
                        <FiArrowLeft size={25} />
                      </button>
                    </div>
                    {/* ------------------ */}
                    <div className="flex items-end h-full  absolute ">
                      <div className=" p-1 bg-[#00AEEF] h-[64px] w-[64px] overflow-hidden rounded-full ">
                        <Image
                          src={
                            "https://s3-alpha-sig.figma.com/img/9bba/828c/5e97eaacb97a261a37a4a26ace6e61d0?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fTufaKri8YtBgQETEhuYR-er6fGgp5M2L6Xj~kCTOjewK7neWFcR7v5cP1gi1-W6bpiZFfMpFdFHUhu7zCJlWf8LiHMy6WvPpyA7F2XqayiWzCCyRMmh-wR3He81RhXM-EQ8iq7Of63b9gFJCUNDeFrWEoFMMN8m1nCc73mqt6hTEFsxvquBE7UgpZaJXy5EDtbhKVmvNPteXnwxC-~44jfgx88sLgmc4-fHHjehx5mN8ZuqY7iuDNPCjnm43xoaGiKN8h7pct7CXtqDtISPVgx242NyIoNg8ZQuf6LJL0Gv1hLa2I~A9UPixbztuJ7gdgFMRHLTLKtpDFv8r4jj4w__"
                          }
                          alt="img-1"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                      <div className=" p-1 relative -left-5 bg-[#00AEEF] h-[64px] w-[64px] rounded-full ">
                        <Image
                          src={
                            "https://s3-alpha-sig.figma.com/img/cbe3/46be/9b643bcdc2bda9bf5fa82b6bc8253d56?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hjGf9dBRtT7jzhgnhegCBCB8tN0TxHckhJDn8W7Spp0VuEZWwnlqdoCqdXxT6T0dxGfQgnc5VN37Kq7bQ4pH6JYkYAIrIQnSN4W8T2BEI1vBN0GkLkoZXZartCV3cvkMxNh~8D2~ErOKYEigLjN2DaCBsG5Os0QK1AekSDAC06jEJil3daxELvxL5h0BUSjGCZkdl185HChL27PUuZSQDpGK1sq18gQ6hx6SESr8jEEHFvAZf-EmtjbMTrEseE18vm~T0LmESAwc~6YbSw5plHiHG7J4nRI0eR6QVRru3NvkKE9c9ngULTucnNzjp1VXFCc9b1Ae2oBoUHFpTTdWAg__"
                          }
                          alt="img-2"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                      <div className=" relative p-1 -left-10 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                        <Image
                          src={
                            "https://i.ibb.co.com/bjSr39mt/Hasib-Vai-min.jpg"
                          }
                          alt="img-3"
                          width={500}
                          height={500}
                          priority
                          className="w-full rounded-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className=" max-md:relative w-3/4 max-md:w-full h-full flex items-center justify-center max-md:rounded-l-full"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,174,239,0.0984768907563025) 2%, rgba(176,176,176,0) 100%)",
                    }}
                  >
                    <p className="pl-[60px] pr-[30px] max-md:pl-[120px] max-md:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] tracking-[0px]">
                      It is a long established fact that a reader will be
                      distracted by the readable conten.
                    </p>
                  </div>
                </div>
                {/* three_person_section_end */}
                {/* max-[1300px]-users_status_start */}
                <div className=" md:hidden flex  items-center h-[96px]">
                  <div
                    className=" max-[1300px]:relative w-3/4 max-[1300px]:w-full h-full flex items-center justify-center max-[1300px]:rounded-l-full "
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0,174,239,0.0984768907563025) 2%, rgba(176,176,176,0) 100%)",
                    }}
                  >
                    <div className=" max-[1300px]:absolute max-[1300px]:left-0 max-[1300px]:top-0 max-[1300px]:bottom-0  p-1 bg-[#00AEEF] h-[96px] w-[96px] rounded-full ">
                      <Image
                        src={"https://i.ibb.co.com/bjSr39mt/Hasib-Vai-min.jpg"}
                        alt="img-3"
                        width={500}
                        height={500}
                        priority
                        className="w-full rounded-full h-full object-cover"
                      />
                    </div>
                    <p className="  pl-[72px] pr-[30px] max-[1300px]:pl-[100px] max-[1300px]:pr-[20px] text-[#6D6D6D] text-[1.125rem] leading-[28px] max-[1300px]:leading-[20px] tracking-[0px] ">
                      It is a long established fact that a reader will be
                      distracted by the readable conten.
                    </p>
                  </div>
                </div>
                {/* max-[1300px]-users_status_start */}
                {/* max-md:button_start */}
                <div className=" md:hidden max-md:my-[32px] ">
                  <Explore_btn />
                </div>
                {/* max-md:button_end */}
              </div>
              {/* ----------------- */}
              {/* 2nd_part */}
              <div className="  w-1/2 max-[1400px]:w-full max-[1400px]:mt-[32px] max-sm:hidden">
                <div
                  className={` overflow-hidden`}
                  style={{
                    clipPath:
                      "polygon(70px 0, 100% 0, 100% 89.49%, 88.09% 100%, 0% 100%, 0 70px)",
                  }}
                >
                  <Image
                    src={
                      "https://i.ibb.co.com/4R95QvZg/banner-image.jpg"
                    }
                    alt="img"
                    width={5000}
                    height={5000}
                    priority
                    className=" h-[666px] max-[1400px]:w-full  w-[588px] object-cover grayscale"
                  />
                </div>
              </div>
            </div>
            {/* banner_end */}

            {/* vector_start */}
            <div className=" absolute -bottom-50 -left-20 h-fit w-fit max-md:hidden">
              <svg
                width="415"
                height="667"
                viewBox="0 0 415 667"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1745_6710)">
                  <path
                    d="M149.264 218.87L-85.9005 195.498L96.8747 12.29C106.812 2.35319 123.836 8.41262 125.224 22.4251L149.264 218.87Z"
                    fill="black"
                    fill-opacity="0.03"
                  />
                  <path
                    d="M402.985 318.22L182.176 538.813C178.659 542.329 173.736 544.079 168.777 543.592L158.894 542.618L-88.2269 518.362C-92.1403 517.983 -95.6389 516.252 -98.2719 513.655C-100.869 511.022 -102.6 507.523 -102.979 503.61L-129.146 238.78L-128.984 238.618L149.3 265.939L392.85 289.87C406.844 291.241 412.922 308.283 402.985 318.22Z"
                    fill="black"
                    fill-opacity="0.03"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1745_6710">
                    <rect
                      width="509.315"
                      height="432.778"
                      fill="white"
                      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 54.639 666.566)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/* vector_end */}
          </div>
        </div>
        {/* main_end */}
        {/* vector */}
        <div className=" absolute -bottom-32">
          <svg
            width="150"
            height="212"
            viewBox="0 0 150 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M149.264 211.87L-85.9005 188.498L96.8747 5.28997C106.812 -4.64681 123.836 1.41262 125.224 15.4251L149.264 211.87Z"
              fill="black"
              fill-opacity="0.03"
            />
          </svg>

          <svg
            width="408"
            height="306"
            viewBox="0 0 408 306"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M402.985 80.2199L182.176 300.813C178.659 304.329 173.736 306.079 168.777 305.592L158.894 304.618L-88.2269 280.362C-92.1403 279.983 -95.6389 278.252 -98.2719 275.655C-100.869 273.022 -102.6 269.523 -102.979 265.61L-129.146 0.779821L-128.984 0.617524L149.3 27.9391L392.85 51.8703C406.844 53.2409 412.922 70.2831 402.985 80.2199Z"
              fill="black"
              fill-opacity="0.03"
            />
          </svg>
        </div>
        {/* vector_end */}
      </div>
    </div>
  );
};

export default Banner;
