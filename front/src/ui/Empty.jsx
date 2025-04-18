function Empty({ resource }) {
  return (
    <div className="h-100 text-stone-600 dark:text-slate-400 flex items-center justify-center text-center">
      <p>{`هیچ ${resource} یافت نشد.`}</p>
    </div>
  );
}

export default Empty;
