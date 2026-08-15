import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const BTN = ({ txt, variant = "B1", href }) => {
  const isB2 = variant === "B2";

  const className = `group relative capitalize inline-flex h-10 items-center justify-center rounded-full  pl-4 pr-10  ${isB2 ? "bg-[#FFC55C] text-[#FDF6EC]!" : "bg-[#E30713] text-[#E30713]!"
    }`;

  const content = (
    <>
      <span
        className={`z-10 pr-2 pb-05  duration-300 ${isB2
          ? "text-[#E30713] group-hover:text-[#FDF6EC]"
          : "group-hover:text-[#E30713] text-[#FDF6EC]"
          }`}
      >
        {txt}
      </span>
      <div
        className={`absolute right-1 inline-flex h-8 w-8 items-center justify-end rounded-full transition-[width] group-hover:w-[calc(100%-10px)] duration-300 ${isB2 ? "bg-[#E30713]" : "bg-[#FDF6EC]"
          }`}
      >
        <div className="mr-2 flex items-center justify-center ">
          <RiArrowRightLine size={16} />
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button className={className}>
      {content}
    </button>
  );
};

export default BTN;