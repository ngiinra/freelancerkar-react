import getPersianDateOf from "../../utils/convertToDate";
import AddTagsField from "../../ui/AddTagsField";
import { useForm } from "react-hook-form";
import {
  RHFDateField,
  RHFDescriptionField,
  RHFNumberField,
  RHFSelectInput,
  RHFTextbox,
} from "../../ui/Fields";
import Loader from "../../ui/Loader";
import useProjectDataForm from "./useProjectDataForm";
import ReturnButton from "../../ui/ReturnButton";
const MODES = { EDIT: "EDIT", ADD: "ADD" };
const FIELDS_NAME = {
  TITLE: "title",
  TAGS: "tags",
  CATEGORY: "category",
  STATUS: "status",
  DESC: "description",
  DEADLINE: "deadline",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt",
  CREATOR: "owner",
  PROPOSALS: "proposals",
  FREELANCER: "freelancer",
  BUDGET: "budget",
};
export default function ProjectDataFormPage({
  project = {},
  readOnly = false,
  mode = MODES.EDIT,
}) {
  const {
    isCategoryPending,
    categoryListArray,
    projectStatuses,
    tags,
    setTags,
    addedProjectPending,
    editedProjectPending,
    onSubmit,
    defaultValues,
  } = useProjectDataForm(FIELDS_NAME, project);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });

  return (
    <form onSubmit={handleSubmit((formData) => onSubmit(formData, mode))}>
      <div className="rounded-lg base-color">
        <div className="py-5 px-7 md:grid grid-cols-2 grid-rows-2 text-right w-5/6 mx-auto">
          <div>
            <ReturnButton />
          </div>
          <div className="col-span-2 p-4 rounded-md flex items-center justify-center">
            <RHFTextbox
              name={FIELDS_NAME.TITLE}
              error={errors[FIELDS_NAME.TITLE]}
              label={false}
              readOnly={readOnly}
              register={register}
              validationSchema={{
                required: "عنوان الزامی می باشد.",
                minLength: {
                  value: 10,
                  message: "حداقل 10 کاراکتر وارد کنید.",
                },
              }}
              fieldExtraClasses="text-bold text-xl text-center border-none"
              placeHolder="عنوان پروژه*"
            />
          </div>

          {mode === MODES.EDIT ? (
            <RHFSelectInput
              label="وضعیت"
              name={FIELDS_NAME.STATUS}
              error={errors[FIELDS_NAME.STATUS]}
              register={register}
              optionsArray={projectStatuses}
              readOnly={readOnly}
            />
          ) : null}

          {isCategoryPending ? (
            <Loader color="blue" size="10px" />
          ) : (
            <RHFSelectInput
              label="دسته بندی"
              name={FIELDS_NAME.CATEGORY}
              error={errors[FIELDS_NAME.CATEGORY]}
              register={register}
              optionsArray={categoryListArray}
              readOnly={readOnly}
              validationSchema={{
                required: "فیلد دسته بندی الزامی است",
              }}
            />
          )}

          <RHFNumberField
            label="بودجه"
            name={FIELDS_NAME.BUDGET}
            validationSchema={{ required: "فیلد الزامی است" }}
            register={register}
            readOnly={readOnly}
            error={errors[FIELDS_NAME.BUDGET]}
          />

          <ShowTagsField
            label="تگ ها"
            tags={tags}
            register={register}
            setTags={setTags}
            readOnly={readOnly}
            oneRow={false}
            name={FIELDS_NAME.TAGS}
          />

          <RHFDateField
            control={control}
            validationSchema={{ required: "فیلد الزامی است" }}
            name={FIELDS_NAME.DEADLINE}
            error={errors[FIELDS_NAME.DEADLINE]}
            label="ددلاین"
            readOnly={readOnly}
            minDate={
              mode === MODES.ADD ? new Date() : new Date(project?.createdAt)
            }
          />

          {mode === MODES.EDIT ? (
            <RHFTextbox
              label="تاریخ ایجاد"
              name="createdAt"
              register={register}
              error={errors["createdAt"]}
              readOnly={true}
            />
          ) : null}

          {mode === MODES.EDIT ? (
            <RHFTextbox
              register={register}
              label="تاریخ آخرین ویرایش"
              name="updatedAt"
              error={errors["updatedAt"]}
              readOnly={true}
            />
          ) : null}

          {mode === MODES.EDIT ? (
            <RHFTextbox
              name="freelancer"
              error={errors["freelancer"]}
              label="فریلنسر"
              register={register}
            />
          ) : null}

          {mode === MODES.EDIT ? (
            <RHFTextbox
              label="ایجاد کننده"
              name="creator"
              error={errors["creator"]}
              register={register}
            />
          ) : null}

          <RHFDescriptionField
            label="توضیحات"
            register={register}
            validationSchema={{ required: "فیلد الزامی می باشد" }}
            name={FIELDS_NAME.DESC}
            error={errors[FIELDS_NAME.DESC]}
            oneRow={true}
            readOnly={readOnly}
          />

          {!readOnly ? (
            <div className="justify-end col-span-2 flex">
              <button className="btn md:w-1/4 py-3" type="submit">
                {(mode === MODES.ADD && addedProjectPending) ||
                (mode === MODES.EDIT && editedProjectPending) ? (
                  <Loader />
                ) : (
                  "ثبت"
                )}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </form>
  );
}

function ShowTagsField({
  label,
  tags = [""],
  setTags,
  readOnly = "true",
  oneRow = "false",
}) {
  return (
    <div className={`project-item-div ${oneRow ? "col-span-2" : ""}`}>
      <label className="project-label">{label}</label>
      {readOnly ? (
        <span className="text-stone-700 w-full overflow-y-auto">
          {tags.map((tag) => (
            <span key={tag} className="badge bg-stone-300">
              {tag}
            </span>
          ))}
        </span>
      ) : (
        <AddTagsField dataArray={tags} setDataArray={setTags} />
      )}
    </div>
  );
}
