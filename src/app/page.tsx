import Acheive_section from "@/components/home/acheive_section/acheive_section";
import Banner from "@/components/home/banner/banner";
import Popular_service from "@/components/home/popular_service/popular_service";
import PopularProjects from "@/components/home/projects_section/page";

const Home = () => {
  return (
    <main className="">
      <div
        className=""
        style={{
          background: `url('https://cdn.pixabay.com/photo/2022/11/15/04/54/automotive-7593064_960_720.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" max-w-[1440px] mx-auto">
          {/* banner_section_start */}
          <Banner />
          {/* banner_setion_end */}

          {/* popular_service_section_start  */}
          <Popular_service />
          {/* popular_service_section_end  */}

          {/* Popular_projects_start */}
          <PopularProjects/>
          {/* Popular_projects_end */}
          
          {/* Acheive_SECTION_START  */}

          <Acheive_section/>
          {/* Acheive Section end */}
        </div>
      </div>
    </main>
  );
};

export default Home;
