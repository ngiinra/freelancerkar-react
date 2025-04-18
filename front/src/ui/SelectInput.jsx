export default function SelectInput({
  optionsArray,
  setSelectedOption,
  selectedOption,
  readOnly,
}) {
  return (
    <select
      className="project-input textbox"
      defaultValue={selectedOption}
      disabled={readOnly}
    >
      {optionsArray.map((option) => (
        <option
          key={option?.value || option}
          value={option?.value || option}
          className="p-1 text-sm text-stone-700"
          onClick={(e) => setSelectedOption(e.target.value)}
        >
          {option?.text || option}
        </option>
      ))}
    </select>
  );
}
