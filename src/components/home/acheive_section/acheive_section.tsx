import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import AchievementBtns from "@/components/ui/buttons/achievement_section/achievementBtns/achievementBtns";
import Left_top_cut from "@/components/ui/corner_cut/left_top_cut";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const Acheive_section = () => {
  return (
    <div className=""
      style={{
        background: "url(https://i.ibb.co.com/237nYWrd/back-acheivement.png)",
      }}
    >
      <div className="bg-[#f6f6f6f6] ">

          <div className=" h-full">
            {/* ........ */}
            <div
              style={{
                background:
                  "url(https://i.ibb.co.com/zhcqm3f4/popular-service.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

              }}
              className=" text-white h-full "
            >
              <div className=" relative bottom_right_corner  h-full px-[120px]  max-[1400px]:px-[20px]  mx-auto">
                <div className=" top_left_corner pt-[195px] max-md:pt-[48px] pb-[140px] max-md:pb-[80px] flex gap-[24px] max-[1300px]:flex-col">
                  <div className=" text-white">
                    <button className=" text-[0.938rem] cursor-pointer flex border border-slate-400 items-center px-5 max-sm:px-3 text-white">
                      <div className=" ">
                        <LuDot />
                      </div>
                      <div>Goal</div>
                      <div className="">
                        <LuDot />
                      </div>
                    </button>
                    <h1
                      className={`${babas_neue.className} mt-[28px] max-sm:hidden text-8xl max-sm:text-[4rem] max-sm:leading-14 leading-[81px] -tracking-[2px]`}
                    >
                      What We <span className=" text-[#00AEEF]">Aspire To</span>
                      <br></br>Achieve
                    </h1>
                    <h1
                      className={`${babas_neue.className} mt-[28px] sm:hidden text-8xl max-sm:text-[4rem] max-sm:leading-14 leading-[81px] -tracking-[2px]`}
                    >
                      Transforming Businesses{" "}
                      <span className=" text-blue-500 ">with Expertise</span>
                    </h1>
                    <p className="text-[1.125rem] leading-[28px] tracking-[0px] my-[33px] max-sm:my-[23px] w-3/4 max-sm:w-full ">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                    </p>
                    <div className=" mt-[82px] max-md:flex max-sm:hidden  max-md:justify-center">
                      <AchievementBtns />
                    </div>
                  </div>
                  {/* Image part */}
                  <div className=" ">
                    <div
                      className=" h-full overflow-hidden sm:bg-white"
                      style={{
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                      }}
                    >
                      <div className=" h-full max-sm:h-[400px]">
                        <Image
                          src={
                            "https://i.ibb.co.com/4R95QvZg/banner-image.jpg"
                          }
                          alt={"img"}
                          width={500}
                          height={500}
                          priority
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                    </div>
                    <div className=" mt-[32px] sm:hidden">
                      <AchievementBtns />
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

export default Acheive_section;
