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
        background: "url(https://s3-alpha-sig.figma.com/img/b142/a588/d03272cac3c5aa7d668764cf919f523d?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LiahZN8SiiW4bJjD5hnsZXxQxd5lA2~cIeA46A8Jet~vx1AD~HGDXK3QpxqxutkWKbdr6piZcngmlJQfRupD7KOCYot2d6a0fB6nAAG3ZDN3x8i3ZHAeJJilW4ggvDp-PW~bJjpFZfSNizxs8Fks4V749KXlIegjHjjtcjjfD2jpYYRXKXedN22g7kLajgnaLIKUp-cugOJ88~whPeSMOyzZdLk1C1pi4KpLcCgpZCRTt4hGGeu4DjGXvUkoLTTZDpDAf62QdEM6nUVHBRs-HbGWHV2i8wamiCPQWogzHgnMFvinfaBOtPIUGtiGKhu5Jcx5E3jnnUnAEBdsImP55Q__)",
      }}
    >
      <div className="bg-[#f6f6f6f6]">


        <div className=" relative    ">
          {/* top_left_cut_start */}
          <Left_top_cut />
          {/* top_left_cut_send */}
          <div className=" h-full">
            {/* ........ */}
            <div
              style={{
                background:
                  "url(https://s3-alpha-sig.figma.com/img/6580/8079/311c027968265125a07f026a1fd271c6?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kpYyAWvFlu~tJRg9zxavXEqmGoEumAR385UqDg0QE7eL9GkUP4wgJ6z7LxWeEbRRujoDxCQF~mEOZvKl0OK9BRWt1M2or3sIZ3bCGPFoq4ohJ-ZSAq-EjIwSOjuigl7f~osjojNwJIrFd2J9N-lY4~Ts2Zs3cdKbiKBqGX4k-fJ5qcgxdg2tC0zhAL2N7e2b-AXGvPmZ3UUrQQq6l2LjlA133Wb8PXLQBqrEfx8mDNPyEn-9CBLX3irHRfs~r9dIsz~JM1zf2JNbjNxyZAmXLhfE2f7j6Sm9exgTLFTvYgvyQ5UQWtOX0objwT4bseA-ag80eM-UIysKS8xqIrsVww__)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className=" text-white h-full section_corner_cut_bottom_right"
            >
              <div className="px-[7.52%] max-sm:px-[6.52%] mx-auto py-[120px] max-sm:py-[48px] ">
                <div className=" mt-[28px] flex gap-[24px] max-[1300px]:flex-col">
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
                            "https://s3-alpha-sig.figma.com/img/3613/3976/8eab24ab2643d4f94dff5ca18064f6c9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CUaQHRqiDs4t8r7GjYzMxhbrPP5aOr6RRLO57hz8UnichXsFuyuUSZ~f6Iwom4yhxkWop~6VjMZ55CCFu6OeQvpijrIC8~SPmUnhsFmuCeTXxTbCs5VgrUfwVX-PAg6NS5MleAOrVAF9ldzOdiaFBAwlE5muY7hoxwW2P6eeN6trjpEXQzXlHes4PA6WVQ-TvkcDhrAMttDOGcegIr5MmN0b5aUfh3uyni6lRWzzjJEs3L2FAzpKArfGXP4YCiml253-DKds6vUuz4IqwY~IRbXX6di3hMAszNm3e1o4xxgBVBjpDZGKL9~W3wTu39tfXLzxTV0wlSK7IMc0THMo2g__"
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
    </div>
  );
};

export default Acheive_section;
