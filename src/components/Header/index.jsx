import React from "react";

export default function Header({ header, desc }) {
  return (
    <div>
      <h1 className="text-center font-dudka md:text-[38px] text-[24px] mb-4 font-bold">
        {header}
      </h1>
      <p className=" text-secondary-light md:text-[20px] text-[14px] text-center max-w-[750px] mx-auto">
        {desc}
      </p>
    </div>
  );
}
