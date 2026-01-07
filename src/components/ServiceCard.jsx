const ServiceCard = ({ number, icon, title, text }) => {
  return (
    <div
      className="relative bg-[#f7f7f7] border border-gray-200 rounded-xl p-6 w-full max-w-sm
        transition-all duration-300 group overflow-hidden group-hover:text-red-600"
    >
      {/* TOP CURVED CORNER */}
      <div
        className="absolute top-0 left-0 w-20 h-20 bg-[#f4c20d] rounded-br-3xl
          transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:rounded-br-none "
      ></div>

      {/* ICON BOX */}
      <div className="relative z-10 mt-4 mb-4">
        <div className="bg-white shadow-md p-4 rounded-md w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* NUMBER */}
      <p className="relative z-10 text-[#f4c20d] font-semibold text-sm mb-2">
        {String(number).padStart(2, "0")}
      </p>

      {/* TITLE */}
      <h2 className="relative z-10 text-2xl font-semibold mb-3">{title}</h2>

      {/* TEXT */}
      <p className="relative z-10 text-gray-600 text-sm leading-relaxed mb-6">
        {text}
      </p>

      {/* VIEW MORE */}
      <button className="relative z-10  flex items-center  gap-3 group group-hover:text-black text-[#f4c20d]">
        <div className="text-xl bg-[#f4c20d] h-8 w-8 rounded-full flex items-center justify-center text-white">
          →{" "}
        </div>
        <p className="text-base  ">view more</p>
      </button>
      {/* <button className="relative z-10 flex items-center gap-2 text-orange-600 font-medium">
        <span className="text-3xl  "><div>→</div></span> View More
      </button> */}
    </div>
  );
};

export default ServiceCard;
