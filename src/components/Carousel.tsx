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
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-[400px] text-sm tracking-wide text-[#1e293b] border border-red-500">
      <Slider {...setting}>
        {carouselData.map(({ testimony, author, designation }) => (
          <div className="h-[500px] w-full">
            <div
              key={author}
              className="border border-slate-200 flex flex-col gap-4 h-full justify-center p-2"
            >
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
