import { useEffect, useState } from "react";
import Logo from "./Logo";
import TestimonialCircle from "./TestimonialCircle";
import Testimony from "./Testimony";

const MainComp = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); //we are storing the positions of x and y in state
  const [isXlScreen, setIsXlScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (isXlScreen) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isXlScreen]);

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

      <TestimonialCircle parallaxStyles={isXlScreen ? parallaxStyles : {}} />

      <Logo parallaxStyles={isXlScreen ? parallaxStyles : {}} />
    </div>
  );
};

export default MainComp;
