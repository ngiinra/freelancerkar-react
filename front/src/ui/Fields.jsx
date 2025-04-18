import DatePicker from "react-multi-date-picker";
import TooltipButton from "./TooltipButton";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import toast from "react-hot-toast";
function FieldError({ errorMessage }) {
  return (
    <span className="mr-2">
      <TooltipButton buttonText="خطا" buttonClasses="text-red-500 text-sm">
        <span className="text-red-500 rounded-md text-center text-sm">
          {errorMessage}
        </span>
      </TooltipButton>
    </span>
  );
}

export function RHFTextbox({
  label = "",
  name = "x",
  oneRow = false,
  readOnly = true,
  register,
  validationSchema = {},
  error,
  defaultValue = "",
  fieldExtraClasses = "",
  placeHolder = "",
  icon = "",
}) {
  return (
    <div className={`project-item-div ${oneRow ? "col-span-2" : ""}`}>
      {label ? (
        <label className="project-label flex items-center">
          {icon} {label}
          {validationSchema?.hasOwnProperty("required") && (
            <span className="text-red-700">*</span>
          )}
        </label>
      ) : null}
      <input
        {...register(name, validationSchema)}
        type="text"
        className={`project-input textbox ${fieldExtraClasses} ${
          error?.message ? "errored-field" : ""
        }`}
        disabled={readOnly}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeHolder}
      />
      {error && error?.message ? (
        <FieldError errorMessage={error.message} />
      ) : null}
    </div>
  );
}

export function RHFRadioGroup({
  register,
  error,
  name,
  radioClasses,
  radioIndexesConfigObj = {},
  validationSchema = {},
}) {
  return (
    <div className="flex mb-6 justify-center gap-x-8 text-stone-700 dark:text-slate-200 items-center">
      {radioIndexesConfigObj.map((radioInput) => (
        <div key={radioInput.value}>
          <label htmlFor={name} className="mr-1">
            {radioInput?.label}
          </label>
          <input
            type="radio"
            name={name}
            defaultChecked={radioInput?.defaultChecked}
            {...register(name, validationSchema)}
            value={radioInput?.value}
            className={radioClasses}
          />
        </div>
      ))}
      {error && error?.message ? (
        <FieldError errorMessage={error.message} />
      ) : null}
    </div>
  );
}

export function RHFSelectInput({
  optionsArray = [],
  selectedOption,
  register,
  validationSchema = {},
  name,
  error,
  readOnly = true,
  oneRow = false,
  label = false,
}) {
  return (
    <div className={`project-item-div ${oneRow ? "col-span-2" : ""}`}>
      {!label ? null : (
        <label className="project-label">
          {label}{" "}
          {validationSchema.hasOwnProperty("required") ? (
            <span className="text-red-600">*</span>
          ) : null}
        </label>
      )}
      <select
        className="project-input textbox"
        defaultValue={selectedOption}
        disabled={readOnly}
        {...register(name, validationSchema)}
      >
        {optionsArray.map((option) => (
          <option
            key={option?._id || option?.value || option}
            value={option._id || option?.value || option}
            className={`p-1 text-sm text-stone-700 ${
              error?.message ? "errored-field" : ""
            }`}
          >
            {option?.text || option?.value || option}
          </option>
        ))}
      </select>
      {error && error?.message ? (
        <FieldError errorMessage={error.message} />
      ) : null}
    </div>
  );
}

export function RHFDateField({
  label,
  control,
  defaultValue,
  oneRow,
  readOnly = true,
  name,
  validationSchema = {},
  error,
  minDate,
}) {
  return (
    <div className={`project-item-div ${oneRow ? "col-span-2" : ""}`}>
      {!label ? null : (
        <label className="project-label">
          {label}
          {validationSchema.hasOwnProperty("required") ? (
            <span className="text-red-600">*</span>
          ) : null}
        </label>
      )}

      <Controller
        control={control}
        name={name}
        rules={validationSchema}
        render={({ field: { onChange, name, value } }) => (
          <>
            <DatePicker
              value={value || defaultValue}
              name={name}
              calendar={persian}
              locale={persian_fa}
              format="YYYY/MM/DD"
              inputClass="project-input textbox"
              minDate={minDate}
              disabled={readOnly}
              onChange={(date) => {
                onChange(date);
              }}
            />
            {error && error?.message ? (
              <FieldError errorMessage={error.message} />
            ) : null}
          </>
        )}
      />
    </div>
  );
}

export function RHFNumberField({
  label,
  register,
  error,
  name,
  oneRow,
  readOnly = true,
  validationSchema,
  icon = "",
}) {
  return (
    <div className={`project-item-div ${oneRow ? "col-span-2" : ""}`}>
      {!label ? null : (
        <label className="flex items-center project-label">
          {icon} {label}
          {validationSchema.hasOwnProperty("required") ? (
            <span className="text-red-600">*</span>
          ) : null}
        </label>
      )}
      {readOnly ? (
        <input
          type="text"
          //defaultValue={toPersianNumbersWithComma(defaultValue) || ""}
          className={`project-input textbox`}
          disabled={readOnly}
        />
      ) : (
        <input
          type="number"
          name={name}
          //defaultValue={defaultValue}
          {...register(name, validationSchema)}
          className={`project-input textbox ${
            error?.message ? "errored-field" : ""
          }`}
          disabled={readOnly}
        />
      )}
      {error && error?.message && <FieldError errorMessage={error?.message} />}
    </div>
  );
}

export function RHFDescriptionField({
  label = false,
  register,
  error,
  validationSchema,
  name,
  defaultValue,
  oneRow,
  readOnly = true,
  placeHolder = "",
}) {
  return (
    <div className={`project-item-div ${oneRow ? "md:col-span-2" : ""}`}>
      {!label ? null : (
        <label className="project-label">
          {label}{" "}
          {validationSchema.hasOwnProperty("required") ? (
            <span className="text-red-600">*</span>
          ) : null}
        </label>
      )}
      <textarea
        name={name}
        className={`textbox inline-block w-full px-4 py-3 ${
          error?.message ? "errored-field" : ""
        }`}
        {...register(name, validationSchema)}
        disabled={readOnly}
        defaultValue={defaultValue}
        placeholder={placeHolder}
      ></textarea>
      {error && error?.message && <FieldError errorMessage={error?.message} />}
    </div>
  );
}

export function StatusButtonGroup({
  buttons,
  mutateFn,
  mutateResourceId,
  statusState,
  setStatusState,
}) {
  function updateStatus(e) {
    e.preventDefault();
    if (e.target.value !== statusState) {
      mutateFn(
        { _id: mutateResourceId, data: { status: e.target.value } },
        {
          onSuccess: (data) => {
            toast.success(data.data.message);
            setStatusState(e.target.value);
          },
        }
      );
    }
  }
  const buttonClasses = "p-1 text-center text-sm min-w-10";

  function showColor(buttonColor) {
    let returnClasses = [];
    switch (buttonColor) {
      case "red":
        returnClasses = [
          "bg-red-600 text-bold hover:bg-red-500",
          "text-red-600",
        ];
        break;
      case "green":
        returnClasses = [
          "bg-green-600 text-bold hover:bg-green-500",
          "text-green-500",
        ];
        break;
      default:
        returnClasses = [
          "bg-stone-600 text-bold hover:bg-stone-500",
          "text-stone-600 dark:text-slate-300",
        ];
    }
    return returnClasses;
  }
  return (
    <div className="custom-status-buttons-div flex items-center justify-start">
      {buttons.map((button) => (
        <button
          key={button.value}
          disabled={statusState === button.value}
          className={`${buttonClasses} ${
            statusState == button.value
              ? " text-white dark:text-slate-800 shadow-lg ".concat(
                  showColor(button.color)[0]
                )
              : "dark:bg-slate-900 bg-white ".concat(showColor(button.color)[1])
          }`}
          value={button.value}
          onClick={(e) => updateStatus(e)}
          type="button"
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
