import Logo from "./Logo";
import TestimonialCircle from "./TestimonialCircle";
import Testimony from "./Testimony";

const MainComp = () => {
  return (
    <div className="h-[800px] relative flex items-center justify-center overflow-hidden ">
      <Testimony />

      <TestimonialCircle />

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 top-[1%] right-[8%] xl:top-[10%] xl:left-[10%] `}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/39d7500f-7966-41a6-0b6c-380ed1791600/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 top-[17%] right-[2%] xl:top-[15%] xl:left-[20%] xl:right-auto`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/6ad8358d-8aeb-4afd-a706-b91a64e90800/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 top-[1%] left-[40%] xl:top-[40%] xl:left-[12%]`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/6a0ea9ad-86f6-4fbb-097b-5ca3fd7d2400/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 top-[15%] left-[1%] xl:top-[75%] xl:left-[12%]`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/652c14a0-27bf-453d-ad16-87a28c1f9c00/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 top-[5%] left-[15%]  xl:top-[60%] xl:left-[22%]`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/d61fa567-80a8-4298-8eb0-a7e41b12fb00/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 bottom-[2%] right-[30%] xl:top-[10%] xl:right-[20%] xl:bottom-auto`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/f07a4c24-d439-4ee3-9f23-ae2a350fcb00/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 bottom-[8%] right-[5%] xl:top-[22%] xl:right-[7%] xl:bottom-auto`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/665c33c0-886c-4f60-2665-ce8530972000/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 bottom-[1%] left-[25%] xl:top-[42%] xl:right-[18%] xl:bottom-auto xl:left-auto`}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/94e8b25d-7eb9-4e6d-b7b7-26970b2df900/w=96,q=75"
          alt="logo"
        />
      </div>

      <div
        className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 bottom-[5%] left-[2%] xl:top-[70%] xl:right-[14%] xl:left-auto xl:bottom-auto `}
      >
        <img
          src="https://imagedelivery.net/zZi_VLBckmtLzucvU2-pnQ/92bcc366-07f5-47da-b5b6-7ed5e4da5600/w=96,q=75"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default MainComp;
