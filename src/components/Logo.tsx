import { logoData } from "../data/data";

const Logo = ({ parallaxStyles }: any) => {
  return (
    <>
      {logoData.map((logoItem) => (
        <div
          className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-20 ${logoItem.position}`}
          style={parallaxStyles}
        >
          <img src={logoItem.imageUrl} alt="logo" />
        </div>
      ))}
    </>
  );
};

export default Logo;
