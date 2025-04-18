export default function convertParamsToObject(searchParams) {
  let obj = {};
  for (const [key, value] of searchParams.entries()) {
    obj[key] = value;
  }
  return obj;
}
