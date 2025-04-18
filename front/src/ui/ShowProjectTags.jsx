export default function ShowProjectTags({ tags, extraClasses = "" }) {
  return (
    <div className={`flex flex-wrap ${extraClasses}`}>
      {tags.map((tag) => (
        <span className="badge bg-stone-300 dark:bg-slate-500" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
