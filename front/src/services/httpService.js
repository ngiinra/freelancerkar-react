import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // کوکی های http-only بصورت اتوماتیک به بک اند ارسال میشوند
  // ما در سمت بک اند refresh tocken , access tocken را داریم که http-only تعریف شدن
  // این توکن ها خودکار با ریکوئست به بک اند ارسال میشوند و کوکی های اچ تی تی پی اونلی هستند
  // در تب application قابل مشاهده اند
  // http-only tokens are the safest cookies because front and js and browser cant access them.
});

// برای اعمال فیلتر بروی ریکوئست ها میشه از دستورات زیر استفاده کرد
// خطای ریکوئست مثل قطع شدن اینترنت کاربر
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// اعمال فیلتر بروی ریسپانس ها
// برای مثال سمت بک اند ما خطای 401 مرتبط با خطای تمام شدن توکن کاربر است
//در این صورت باید مجدد برای کاربر رفرش توکن انجام دهیم
// پس از اینکه توکن مجدد ایجاد شد حالا باید دوباره همان عملیاتی که کاربر ان را اجرا میکرد و خطا خورد را اجرا کنیم
// عملیات مد نظر باید یک بار اجرا شود که اگر در لوپ افتاد و واقعا مشکلی وجود داشت مدام در لوپ نباشیم
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const userResponseConfig = err.config; // تمام مشخصات درخواست کاربر است شامل کاری که کاربر میکرده
    if (err.response.status === 401 && !userResponseConfig._retry) {
      userResponseConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app.post(userResponseConfig);
      } catch (e) {
        Promise.reject(e);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
