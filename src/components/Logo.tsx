import { logoData } from "../data/data";

const Logo = () => {
  return (
    <>
      {logoData.map((logoItem) => (
        <div
          className={`bg-white absolute flex items-center justify-center rounded-[50%] logo-box-shadow h-24 w-24 p-2 z-50 top-${logoItem.top} left-${logoItem.left} right-${logoItem.right}`}
        >
          <img src={logoItem.imageUrl} alt="logo" />
        </div>
      ))}
    </>
  );
};

export default Logo;
