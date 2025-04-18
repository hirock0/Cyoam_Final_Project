"use client";
import ProjectCard from "@/components/projectCard/projectCard";
import { FiArrowUpRight } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { Bebas_Neue } from "next/font/google";
import Explore_btn from "@/components/ui/buttons/explore_btn/explore_btn";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const projects = [
  {
    title: "Development",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image: "https://i.ibb.co.com/4R95QvZg/banner-image.jpg",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image: "https://i.ibb.co.com/4R95QvZg/banner-image.jpg",
  },
];
const projects2 = [
  {
    title: "Development",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image: "https://i.ibb.co.com/4R95QvZg/banner-image.jpg",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image: "https://i.ibb.co.com/4R95QvZg/banner-image.jpg",
  },
  {
    title: "Ui/UX Design",
    descriptions:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact.",
    image: "https://i.ibb.co.com/4R95QvZg/banner-image.jpg",
  },
];

export default function PopularProjects() {
  return (
    <section className=" bg-white">
      <div
        style={{
          background: "url(https://i.ibb.co.com/F4XSMWrS/project-imaf.png)",
        }}
        className=""
      >
        <div className="bg-[#f6f6f6ec] ">
          <div className="h-full px-[120px] max-[1400px]:px-[20px] py-[140px] max-sm:pt-[48px] max-sm:pb-[80px]  mx-auto ">
            <div className=" max-sm:hidden   ">
              <div className="  lg:flex max-[1400px]:flex-col gap-5">
                <div className=" grid grid-cols-2 max-[1400px]:hidden gap-5 ">
                  {projects.map((item, index) => (
                    <ProjectCard key={index} item={item} />
                  ))}
                </div>

                <div className="  w-3/6  max-[1400px]:w-full ">
                  <button className=" max-lg:mt-10 max-md:mt-5 cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                    <div className=" ">
                      <LuDot />
                    </div>
                    <div className=" px-5">Work</div>

                    <div className="">
                      <LuDot />
                    </div>
                  </button>
                  <h1
                    className={` mt-[58px] ${babas_neue.className} text-8xl -tracking-[2px] leading-[81px]  `}
                  >
                    <span className="text-nowrap">check our</span>
                    <br></br>
                    <span className=" text-nowrap text-[#00AEEF]">
                      popular projects
                    </span>
                    <br></br>Website
                  </h1>
                </div>
              </div>

              <div className=" gap-5 flex max-[1400px]:mt-[52px]">
                <div
                  className=" max-[1400px]:hidden  h-[314px] w-[282px]  overflow-hidden bg-[#0C5DB6] text-white flex justify-center items-center"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                >
                  <div className="">
                    <FiArrowUpRight size={100} />
                  </div>
                </div>

                {/* ------------------------------------------------------- */}
                <div className=" flex flex-col gap-5 ">
                  <div className="hidden max-[1400px]:block max-lg:hidden">
                    <div className=" flex gap-5 items-center ">
                      <div
                        className="   h-[314px] w-5/12 overflow-hidden bg-[#0C5DB6] text-white flex justify-center items-center"
                        style={{
                          clipPath:
                            "polygon(36px 0%, 100% 0%, 100% 278px, 88.53% 100%, 0% 100%, 0% 36px)",
                        }}
                      >
                        <div className="">
                          <FiArrowUpRight size={100} />
                        </div>
                      </div>

                      <div className="">
                        <div className=" grid w-full justify-items-center grid-cols-2 gap-5">
                          {projects.map((item, index) => (
                            <ProjectCard key={index} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-3 max-lg:grid-cols-2 justify-items-center max-[1400px]:w-full gap-5 ">
                    {projects2.map((item, index) => (
                      <ProjectCard key={index} item={item} />
                    ))}
                  </div>
                </div>
                {/* ---------------------------------------------------------------- */}
              </div>
            </div>

            {/* small_section_start */}
            <div className=" sm:hidden max-sm:w-full">
              <button className=" cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                <div className=" ">
                  <LuDot />
                </div>
                <div>Work</div>

                <div className="">
                  <LuDot />
                </div>
              </button>
              <h1
                className={` ${babas_neue.className} mt-[24px] text-[4rem] leading-[56px] -tracking-[1px]  `}
              >
                <span className="">check our</span>
                <br></br>
                <span className=" text-[#00AEEF]">popular projects</span>
                <br></br>Website
              </h1>

              <div className="  mt-[32px] ">
                {/* SliderImage */}
                <div className=" ">
                  <Swiper
                    slidesPerView={1}
                    pagination={true}
                    spaceBetween={30}
                    modules={[Pagination, Navigation]}
                  >
                    {projects2.map((item, index) => (
                      <SwiperSlide key={index}>
                        <ProjectCard item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* ----------------- */}

                {/* SliderImage */}
              </div>

              <div className=" w-full mt-[58px]">
                <Explore_btn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
