import TestimonialCircle from "./TestimonialCircle";
import Testimony from "./Testimony";

const MainComp = () => {
  return (
    <div className="h-[700px] border border-black relative flex items-center justify-center overflow-hidden mt-10">
      <Testimony />

      <TestimonialCircle />
    </div>
  );
};

export default MainComp;
