import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const BTN = ({ txt, variant = "B1", href }) => {
  const isB2 = variant === "B2";

  const className = `group relative capitalize inline-flex gap-x-2 h-10 items-center justify-center rounded-full  pl-4 pr-1  transition-all duration-300   ${isB2 ? "bg-[#FFC55C] text-[#FDF6EC]!" : "bg-[#E30713] text-[#E30713]!"
    }`;

  const content = (
    <>
      <span
        className={`z-10 h-6.5  overflow-hidden transition-all duration-300 ${isB2
          ? "text-[#E30713] "
          : " text-[#FDF6EC]"
          }`}
      >
        <div className=" group-hover:-translate-y-1/2 transition-all duration-300">
          <p>{txt}</p>
          <p >{txt}</p>
        </div>
      </span>
      <div
        className={` h-8 w-8 flex items-center justify-center rounded-full overflow-hidden duration-300 bg-[#FDF6EC] text-red`}
      >
        <div className="  flex items-center justify-center  gap-x-4 group-hover:translate-x-4 -translate-x-4  transition-all duration-300 ">
          <RiArrowRightLine  className="size-4" />
          <RiArrowRightLine className="size-4"  />
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