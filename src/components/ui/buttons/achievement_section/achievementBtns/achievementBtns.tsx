import { FiArrowUpRight } from "react-icons/fi";
import { Bebas_Neue } from "next/font/google";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
const AchievementBtns = () => {
  return (
    <div className=" w-full flex max-sm:flex-col gap-5 items-center">
      <button className=" h-[120px] btn_corner_cut_left_top_right_bottom w-full overflow-hidden bg-white">
        <div className=" flex items-center justify-between text-start p-8 w-full h-full">
          <p
            className={`${babas_neue.className} text-black text-[2rem] text-nowrap leading-8 `}
          >
            What We <span className=" text-blue-900">Aspire To</span>
            <br />
            Achieve
          </p>
          <div className="">
            <FiArrowUpRight className=" text-[#00AEEF]" size={50} />
          </div>
        </div>
      </button>
      {/* ---------------------------- */}
      <button className=" h-[120px] w-full btn_corner_cut_left_top_right_bottom  overflow-hidden bg-[#00AEEF] text-white">
        <div className=" flex items-center justify-between text-start p-8 w-full h-full">
          <p
            className={`${babas_neue.className} text-[2rem] text-nowrap  leading-8 `}
          >
            What We <span className=" ">Aspire To</span>
            <br />
            Achieve
          </p>
          <div className="">
            <FiArrowUpRight className="" size={50} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default AchievementBtns;
