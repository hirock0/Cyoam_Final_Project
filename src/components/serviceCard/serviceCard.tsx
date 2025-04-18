import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";
const babas_neue = Bebas_Neue({
  weight: ["400", "400"],
  subsets: ["latin"],
});
interface Item {
  title: string;
  descriptions: string;
  image: string;
}

const ServiceCard = ({ item }: { item: Item }) => {
  return (
    <div
      className="bg-[#F6F6F6]"
      style={{
        clipPath:
          "polygon(48px 0%, 100% 0%, 100% 90.71%, 87.5% 100%, 0% 100%, 0% 48px)",
      }}
    >
      <div
        className=""
        style={{
          background:
            "url(https://i.ibb.co.com/6RH1FJ5Y/back-popular.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className=" text-black p-2 ">
          <div
            className="   h-full overflow-hidden"
            style={{
              clipPath:
                "polygon(48px 0%, 100% 0%, 100% 90.71%, 87.5% 100%, 0% 100%, 0% 48px)",
            }}
          >
            <div className=" px-[40px] mt-[40px]  ">
              <h1
                className={`${babas_neue.className} text-[2rem] leading-[30px] tracking-[0px]`}
              >
                <span className=" text-[#00AEEF]">I</span> {item?.title}
              </h1>

              <p className=" mt-[26px] mb-[44px] max-sm:mt-[24px] max-sm:mb-[28px] text-[1.125rem] leading-7">
                {item?.descriptions}
              </p>
            </div>

            <div className="  flex justify-center "
            >
              <Image
                src={item?.image}
                alt="Teamwork"
                width={500}
                height={500}
                priority
                className=" h-[262px] object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
