import React from "react";

export default function ContraCard({ list = [1, 2, 3, 4, 5, 6], reverse }) {
  return (
    <div className="shadow-team p-10 border border-[#E7EAEE] rounded-[24px]">
      <h1 className="font-bold text-[32px] font-dudka">{!reverse ? "Кому можно заняться" : "Кому нельзя заниматься?"} </h1>
      {/* <p className="mt-4 text-secondary text-[18px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p> */}

      <div className="mt-10 flex flex-col gap-[30px]">
        {list.map((el) => (
          <div className="flex items-center gap-4">
            <span>
              <span className="w-[44px] h-[44px] rounded-full bg-primary/[0.1] flex items-center justify-center">
                <span
                  className={`icon ${
                    !reverse
                      ? "icon-check w-8 scale-125 h-8 bg-primary "
                      : "icon-uncheck w-6 h-6 bg-[#F52929]"
                  }`}
                />
              </span>
            </span>

            <h1 className="font-medium leading-[24px]">
              {el}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
