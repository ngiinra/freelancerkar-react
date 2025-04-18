function AreYouSure({ handleClickYes, handleClickNo }) {
  // اشتباهی No نوشته بودم یسری جاها استفاده شده بعدا درست کن
  return (
    <div className="">
      <p>آیا اطمینان دارید؟</p>
      <div className="flex justify-center items-center gap-x-1 mt-1">
        <button
          type="button"
          onClick={handleClickYes || handleClickNo}
          className="bg-red-500 text-white py-1 px-2 rounded-md"
        >
          بله
        </button>
        <button type="button">خیر</button>
      </div>
    </div>
  );
}

export default AreYouSure;
