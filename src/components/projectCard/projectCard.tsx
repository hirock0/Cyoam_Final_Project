import Image from "next/image";
import React from "react";

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
    className=" h-[314px] w-[282px] max-sm:w-full max-sm:h-[440px] bg-[#00AEEF]">
      <div
        className="  h-full overflow-hidden bg-white"
        style={{
          clipPath:
            "polygon(36px 0%, 100% 0%, 100% 278px, 88.53% 100%, 0% 100%, 0% 36px)",
        }}
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
