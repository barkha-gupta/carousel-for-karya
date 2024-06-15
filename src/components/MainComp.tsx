import TestimonialCircle from "./TestimonialCircle";
import Testimony from "./Testimony";

const MainComp = () => {
  return (
    <div className="h-[800px] relative flex items-center justify-center overflow-hidden mt-20 ">
      <Testimony />

      <TestimonialCircle />
    </div>
  );
};

export default MainComp;
