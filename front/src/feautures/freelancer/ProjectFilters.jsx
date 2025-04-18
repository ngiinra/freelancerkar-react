import useCategoriesList from "../category/useCategoriesList";
import { SimpleRadioGroup, SimpleSelect } from "../../ui/SimpleFields";

function ProjectFilters() {
  const { categoriesList } = useCategoriesList();
  return (
    <div className="mb-10 border-b-1 base-border flex flex-wrap items-center md:justify-between">
      <div className="w-full sm:w-1/2 md:w-1/3">
        <label className="text-sm ml-2">دسته بندی:</label>
        <SimpleSelect
          name="category"
          data={[
            {
              _id: "ALL",
              value: "ALL",
              title: "همه",
            },
            ...categoriesList,
          ]}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3">
        <label className="text-sm ml-2">مرتب سازی: </label>
        <SimpleSelect
          name="sort"
          data={[
            { _id: 1, value: "latest", title: "جدید ترین" },
            { _id: 2, value: "earliest", title: "قدیمی ترین" },
          ]}
        />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <SimpleRadioGroup
          radios={[
            { value: "ALL", label: "همه" },
            { value: "OPEN", label: "باز" },
          ]}
          label="وضعیت پروژه"
          name="status"
          clickHandeler={() => {}}
        />
      </div>
    </div>
  );
}

export default ProjectFilters;
