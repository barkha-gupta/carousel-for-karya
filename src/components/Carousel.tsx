import Slider from "react-slick";
import { carouselData } from "../data/data";

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      {/* <Slider {...setting}> */}
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus,
          sint animi molestiae magni cumque atque minima dolores dolore
          accusamus fuga quaerat repellat veritatis vitae necessitatibus sed,
          ullam maxime aut? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Omnis vitae error tenetur similique maxime, atque id maiores
          exercitationem reiciendis ab expedita consequuntur nostrum dignissimos
          voluptatum? Iusto libero consequatur officiis aperiam!
        </div>
        <div>Barkha Gupta</div>
        <div>Full Stack developer</div>
      </div>
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;

// {carouselData.map(({ testimony, author, designation }) => (
//     <div key={author}>
//       <div>{`"${testimony}"`}</div>
//       <div>{author}</div>
//       <div>{designation}</div>
//     </div>
//   ))}
