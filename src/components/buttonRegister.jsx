const ButtonRegister = ({ text }) => {
  const section = () => {
    const nameSection = document.getElementById("contact"); 
    if (nameSection) {
      nameSection.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <button onClick={section}
      type="button"
      className="p-2 w-full bg-(--brand-green-default) text-white font-semibold rounded-md 
                transition-transform duration-300 hover:scale-105 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default ButtonRegister;


