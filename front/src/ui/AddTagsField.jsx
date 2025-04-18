import TagInput from "./TagInput";

export default function AddTagsField({ dataArray, setDataArray, inputName }) {
  const handleInputChange = (index, value) => {
    setDataArray((prev) => {
      const newArray = [...prev];
      newArray[index] = value; // به‌روزرسانی مقدار فیلد موردنظر
      // اگر فیلد پر شد و تعداد فیلدها کمتر از ۲۰ باشد، فیلد جدید اضافه شود
      if (
        value.trim().length >= 2 &&
        index === newArray.length - 1 &&
        newArray.length < 20
      ) {
        newArray.push(""); // افزودن فیلد جدید
      }
      return newArray;
    });
  };
  function handleDeleteTag(tagIndex) {
    setDataArray((pre) => [...pre].filter((_, index) => index !== tagIndex));
  }
  return (
    <div className=" max-h-40 overflow-y-auto w-full">
      {dataArray.map((fieldValue, index) => (
        <TagInput
          name={inputName}
          key={index}
          fieldValue={fieldValue}
          handleInputChange={(e) => handleInputChange(index, e.target.value)}
          onClose={() => handleDeleteTag(index)}
        />
      ))}
    </div>
  );
}
