import { useState } from "react";

const CourseButtons = ({ selected, setSelected }) => {
  const options1 = ["Web Development", "Web Design", "Brand Design"];
  const options2 = ["UI/UX", "Software Development", "Decks"];
  const options3 = ["Mobile Development", "Other"];

  const baseStyle =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const renderButtons = (options) => {
    return options.map((item, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setSelected(item)}
        className={
          (selected === item
            ? "bg-black text-white border border-[#f4c20d] shadow-md shadow-[rgba(244,194,13,0.5)]"
            : "bg-[#f4c20d] border border-[#d6a60b] shadow-md shadow-[rgba(244,194,13,0.4)] hover:bg-black hover:text-white hover:border-[#f4c20d]") +
          " " +
          baseStyle
        }
      >
        {item}
      </button>
    ));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">{renderButtons(options1)}</div>
      <div className="flex gap-4 flex-wrap">{renderButtons(options2)}</div>
      <div className="flex gap-4 flex-wrap">{renderButtons(options3)}</div>
    </div>
  );
};

export default CourseButtons;
