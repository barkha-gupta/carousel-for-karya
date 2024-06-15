import Slider from "react-slick";
import { carouselData } from "../data/data";
import Avatar from "./Avatar";

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    // customPaging: () => (
    //   <div
    //     className={`w-[8px] h-[8px] my-2 bg-[#0082D7] rounded-[50%] opacity-40 focus:opacity-100 hover:opacity-100 `}
    //   />
    // ),
  };

  return (
    <div className="text-sm tracking-wide text-[#1e293b]">
      <Slider {...setting}>
        {carouselData.map(({ testimony, author, designation }) => (
          <div key={author} className="h-[480px] w-full">
            <div className="flex flex-col gap-4 h-full justify-center p-2">
              <div>{`"${testimony}"`}</div>

              <div className="flex gap-2 flex-wrap items-center">
                <div>
                  <Avatar />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-[700] text-[#0082D7]">{author}</div>
                  <div className="text-xs">{designation}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
