import Image from "next/image";
import React from "react";
import Style from "./projectCard.module.css"
interface Item {
  title: string;
  descriptions: string;
  image: string;
}

const ProjectCard = ({ item }: { item: Item }) => {
  return (
    <div
    style={{
      clipPath:
        "polygon(37px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 37px)",
    }}
    className=" h-[314px] w-[282px] max-[1400px]:w-full  max-sm:h-[440px] bg-[#00AEEF]">
      <div
        className={`${Style.projectCard} h-full overflow-hidden bg-white`}

      >
        <div className=" h-full w-full ">
          <Image
            src={item?.image}
            alt={item?.title}
            width={500}
            height={500}
            priority
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
