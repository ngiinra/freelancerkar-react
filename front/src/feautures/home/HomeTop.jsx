import React from "react";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

function HomeTop() {
  return (
    <div className="relative" id="top">
      <img
        src="mainpage-bg.jpg"
        className="brightness-50 bg-fixed h-screen w-full object-cover object-top  rounded-b-lg"
      />
      <div className="absolute top-[20%] w-full space-y-14">
        <h1 className="text-stone-100 text-6xl md:text-9xl text-center mx-auto w-full [text-shadow:_0_2px_1px_var(--color-sky-500)]">
          فریلنسرکار
        </h1>
        <div className="flex flex-wrap md:flex-row gap-5 justify-center items-center w-full">
          <HomeCard
            title="تعداد فریلنسر ها"
            value={`+${toPersianNumbers(200)} نفر`}
          />
          <HomeCard
            title="تعداد پروژه ها"
            value={`+${toPersianNumbers(1000)} نفر`}
          />
          <HomeCard
            title="تعداد کارفرما"
            value={`+${toPersianNumbers(200)} نفر`}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeTop;

function HomeCard({ title, value }) {
  return (
    <div className="home-card base-color hover:bg-sky-100">
      <span>{title}</span>
      <span className="text-blue-600 font-bold">{value}</span>
    </div>
  );
}
