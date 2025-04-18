import { FiArrowUpRight } from "react-icons/fi";
import { Bebas_Neue } from "next/font/google";
import { LuDot } from "react-icons/lu";
import Style from "./ideas_section.module.css";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});

const Ideas_section = () => {
  return (
    <div className="bg-white">
      <div
        className="top_right_cut relative "
        style={{
          background: "url(https://i.ibb.co.com/F4XSMWrS/project-imaf.png)",
        }}
      >
        <div className="  bg-[#f6f6f6ec]  ">
          <div className=" h-full px-[120px]  max-[1400px]:px-[20px]  mx-auto">
            <div className=" flex justify-center items-center">
              <div
                className={`${Style.containerBox_cut} bg-[#0C5DB6] max-lg:w-full  mx-auto my-[160px] max-lg:my-[80px] overflow-hidden text-white`}
              >
                <div
                  className=""
                  style={{
                    background:
                      "url(https://i.ibb.co.com/sdjHm6sg/BACKGROUND-i-MAGE.png)",
                  }}
                >
                  <div
                    className="
                     px-[102px] bg-[#0c5eb6f3] max-sm:px-[16px] py-[80px] grid grid-cols-2 max-lg:grid-cols-1 gap-5"
                  >
                    <div className="  ">
                      <button className="  cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3">
                        <div className=" ">
                          <LuDot />
                        </div>
                        <div>Start With Solutions</div>

                        <div className="">
                          <LuDot />
                        </div>
                      </button>
                      <p
                        className={`${babas_neue.className} text-[4rem] max-lg:text-[48px] leading-[56px]  max-sm:leading-[48px] max-sm:tracking-[0px] -tracking-[1px] mt-[32px] `}
                      >
                        Showcase your ideas with a{" "}
                        <span className=" text-cyan-300">
                          professional portfolio site
                        </span>
                      </p>
                    </div>
                    {/* ---------------- */}
                    <div className="  flex max-lg:flex-col max-lg:gap-[16px] items-end">
                      <div
                        className={`${Style.whiteBox}  relative bg-white max-lg:h-[56px] lg:p-[8px]  lg:h-[72px] w-full flex items-center justify-end `}
                      >
                        <div
                          className=" max-lg:hidden h-full  flex items-center justify-center  overflow-hidden bg-[#00AEEF] text-white"
                          style={{
                            clipPath:
                              "polygon(14.72px 0%, 100% 0%, 100% 41.28px, 93% 100%, 0% 100%, 0% 14.72px)",
                          }}
                        >
                          <p className={` text-nowrap w-[200px] text-center `}>
                            Explore All Services
                          </p>
                        </div>
                      </div>
                      <div
                        className=" h-[56px] lg:hidden flex items-center justify-center  overflow-hidden bg-[#00AEEF] text-white max-lg:w-full"
                        style={{
                          clipPath:
                            "polygon(14.72px 0%, 100% 0%, 100% 41.28px, 96% 100%, 0% 100%, 0% 14.72px)",
                        }}
                      >
                        <p
                          className={` text-nowrap  max-lg:w-full text-center `}
                        >
                          Explore All Services
                        </p>
                      </div>
                    </div>
                    {/* ---------------- */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ideas_section;
