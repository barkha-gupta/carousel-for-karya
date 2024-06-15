import { useEffect, useState } from "react";
import Logo from "./Logo";
import TestimonialCircle from "./TestimonialCircle";
import Testimony from "./Testimony";

const MainComp = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); //we are storing the positions of x and y in state

  useEffect(() => {
    console.log(mousePosition);
    const handleMouseMove = (event: any) => {
      console.log(event);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateParallax = (input: any, maxMove: any) => {
    const movement = (input / window.innerWidth) * maxMove - maxMove / 2;
    return movement;
  };

  const parallaxStyles = {
    transform: `translate(${calculateParallax(
      mousePosition.x,
      20
    )}px, ${calculateParallax(mousePosition.y, 20)}px)`,
    transition: "transform 0.05s ease-out",
  };

  return (
    <div className="h-[700px] relative flex items-center justify-center overflow-hidden ">
      <Testimony />

      <TestimonialCircle parallaxStyles={parallaxStyles} />

      <Logo parallaxStyles={parallaxStyles} />
    </div>
  );
};

export default MainComp;
