import { useSearchParams } from "react-router-dom";

export function SimpleNumberInput({ placeholder, name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSetParam(e) {
    searchParams.set(name, e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <input
      type="number"
      placeholder={placeholder}
      name={name}
      defaultValue={searchParams.get({ name }) || ""}
      className="py-2 px-5 mb-6 base-color rounded-lg outline-0 text-sm border-1 base-border"
      onChange={handleSetParam}
    />
  );
}
export function SimpleTextInput({ placeholder, name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSetParam(e) {
    searchParams.set(name, e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <input
      type="text"
      defaultValue={searchParams.get(name)}
      placeholder={placeholder}
      name={name}
      className="py-2 px-5 mb-6 base-color rounded-lg outline-0 text-sm border-1 base-border"
      onChange={handleSetParam}
    />
  );
}
export function SimpleSelect({ data, name }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSetParam(e) {
    searchParams.set(name, e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      className="py-1.5 px-6 mb-6 base-color rounded-lg outline-0 text-sm border-1 base-border"
      defaultValue={searchParams.get(name)}
      onChange={handleSetParam}
      name={name}
    >
      {data?.map((item) => (
        <option key={item._id} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
}
export function SimpleRadioGroup({ radios, label, name }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleSetParam(e) {
    searchParams.set(name, e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center py-2 mb-6 text-xs gap-x-1">
      <label className="text-sm ml-2 ">{label}</label>
      {radios.map((item) => (
        <div key={item.value}>
          <input
            type="radio"
            name={name}
            value={item.value}
            onClick={handleSetParam}
            defaultChecked={item.value === searchParams.get(name) || "ALL"}
          />
          <label className="mr-1">{item.label}</label>
        </div>
      ))}
    </div>
  );
}
