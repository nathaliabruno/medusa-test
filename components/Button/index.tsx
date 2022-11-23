import Link from "next/link";

const Button = ({ onClick, text, icon }) => {
  return (
    <>
      <button
        className="bg-black hover:bg-white text-white hover:text-black items-center transition-colors duration-300 border-2 border-solid border-black uppercase px-6 py-3 flex justify-center w-auto"
        onClick={onClick}
      >
        {text && <span>{text}</span>}
        {icon && (
          <span className="block ml-2.5 text-2xl font-extralight">{icon}</span>
        )}
      </button>
    </>
  );
};

export default Button;
