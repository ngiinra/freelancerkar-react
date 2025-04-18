import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div id="about-us" className="base-color w-full px-5 py-15">
      <h3 className="p-2 mb-6  md:max-w-5/6 mx-auto text-center">
        <span className="font-bold text-2xl border-b-2 p-2 border-sky-500">
          درباره ما
        </span>
      </h3>
      <p className="p-2 md:max-w-5/6 mx-auto text-center">
        فریلنسر کار یک سایت تستی است که برای نمونه کار زده شده تا تمرینی برای
        یادگیری React در کنار ابزارها و پکیج های مختلف باشد.
        <br />
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
        خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
        رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <Link
          className="my-2 text-sky-500 p-1 flex justify-center items-center"
          to="/auth"
        >
          مشاهده و ثبت آگهی ها
          <MdArrowBack />
        </Link>
      </p>
    </div>
  );
}

export default AboutUs;
