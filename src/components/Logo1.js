import Logo from "../assets/images/icons/SabtJavid.svg";

const Logo1 = ({ width, height }) => {
  return (
    <div style={{ width, height, position: "relative" }}>
      <img
        src={Logo}
        alt="Light Logo"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 top-5`}
      />
    </div>
  );
};

export default Logo1;
